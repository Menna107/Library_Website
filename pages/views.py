from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.decorators import login_required
from .forms import SignUpForm, LoginForm, EmailAuthenticationForm
from .models import Book, Category, Borrow

def header(request):
    return render(request, 'header.html')

def index(request):
    return render(request, 'index.html')

def addnewbook(request):
    return render(request, 'add_new_book.html')

def user_login(request):
    if request.method == 'POST':
        form = EmailAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            auth_login(request, form.get_user())
            return redirect('index')
    else:
        form = EmailAuthenticationForm()
    return render(request, 'login.html', {'form': form})

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Sign up successful. You can now log in.")
            return redirect('login')
    else:
        form = SignUpForm()
    return render(request, 'signUp.html', {'form': form})
from django.contrib.auth import logout  # add this import at top


@login_required
def user_logout(request):
    logout(request)  # properly call logout
    messages.success(request, "You have been logged out.")
    return redirect('index')  # redirect after logout


def murderbook(request):
    return render(request, 'Murder_on_the_Orient_Express.html')

def bookdetails(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    return render(request, 'book-details.html', {'book': book})

def borrowbook(request):
    context = {
        'category': Category.objects.all(),
        'books': Book.objects.all(),
    }
    return render(request, 'borrow_books.html', context)

@login_required
def borrow_book(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    already_borrowed = Borrow.objects.filter(user=request.user, book=book).exists()

    if already_borrowed:
        messages.warning(request, "You already borrowed this book.")
    else:
        Borrow.objects.create(user=request.user, book=book)
        messages.success(request, f'You borrowed "{book.title}".')

    return redirect('my_books')

@login_required
def my_books(request):
    borrowed_books = Borrow.objects.filter(user=request.user).select_related('book')
    return render(request, 'my-books.html', {'borrowed_books': borrowed_books})

@login_required
def delete_borrow(request, borrow_id):
    borrow = get_object_or_404(Borrow, id=borrow_id, user=request.user)
    borrow.delete()
    return redirect('my_books')
    return redirect('my_books') 


from django.shortcuts import render, redirect, get_object_or_404
from .models import Book  # عدل حسب اسم الموديل عندك

def search_books(request):
    query = request.GET.get('q', '').strip()
    category = request.GET.get('category', 'all')

    if query == '':
        return render(request, 'search_results.html', {'error': 'Please enter a search term.'})

    if category == 'books':
        results = Book.objects.filter(title__icontains=query)
    elif category == 'authors':
        results = Book.objects.filter(author__icontains=query)
    else:
        results = Book.objects.filter(title__icontains=query) | Book.objects.filter(author__icontains=query)

    # إذا وجدنا كتاب واحد فقط نعيد التوجيه لصفحة تفاصيله
    if results.count() == 1:
        book = results.first()
        return redirect('bookdetails', book_id=book.id)
 # تأكد من اسم الـ URL واسم الباراميتر

    # لو لا، نعرض صفحة نتائج البحث
    return render(request, 'search_results.html', {'results': results, 'query': query})

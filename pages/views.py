from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login
# Create your views here.


def header(request):
    return render(request, 'header.html')
def header(request):
    return render(request, 'header.html')

def index(request):
    return render(request, 'index.html')

def bookdetails(request):
    return render(request, 'book-details.html')

def addnewbook(request):
    return render(request, 'Add_New_Book.html')



def login(request):
    return render(request, 'login.html')    

def signup(request):
    return render(request, 'signup.html')

def murederbook(request):
    return render(request , 'Murder_on_the_Orient_Express.html')


def mybooks (request) :
    return render(request , 'My-books.html')

from django.shortcuts import render, get_object_or_404
from .models import * 

def bookdetails(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    return render(request, 'book-details.html', {'book': book})

def borrowbook(request):
    
    context={
        'category': Category.objects.all(),
        'books': Book.objects.all(),
    }
    return render(request, 'borrow books.html',context)




from django.shortcuts import render, get_object_or_404, redirect
from .models import Book, Borrow
from django.contrib.auth.decorators import login_required
from django.contrib import messages

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

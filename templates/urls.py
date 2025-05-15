# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('header/', views.header, name='header'),
    path('index/', views.index, name='index'),
    path('book-details/<int:book_id>/', views.bookdetails, name='bookdetails'),
    path('add-new-book/', views.addnewbook, name='addnewbook'),
    path('borrow-books/', views.borrowbook, name='borrowbook'),
    path('login/', views.user_login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('murder-book/', views.murderbook, name='murderbook'),
    path('my-books/', views.my_books, name='my_books'),
    path('borrow-book/<int:book_id>/', views.borrow_book, name='borrow_book'),
]

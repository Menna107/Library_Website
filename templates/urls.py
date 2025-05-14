from django.urls import path
from . import views
urlpatterns = [
    path('header', views.header, name='header'),
    path('index', views.index, name='index'),
    path('book-details', views.bookdetails, name='bookdetails'),
    path('add-new-book', views.addnewbook, name='addnewbook'),
    path('borrow-books', views.borrowbook, name='borrowbook'),
    path('login', views.login, name='login'),
    path('signup', views.signup, name='signup'),
    path('murder-book', views.murederbook, name='murderbook'),
    path('my-books', views.mybooks, name='mybooks'),
]
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
urlpatterns = [
    path('header', views.header, name='header'),
    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('book/<int:book_id>/', views.bookdetails, name='bookdetails'),
    path('add-new-book', views.addnewbook, name='addnewbook'),
    path('borrow-books/', views.borrowbook, name='borrowbook'),
    path('login', views.login, name='login'),
    path('signup', views.signup, name='signup'),
     path('borrow/<int:book_id>/', views.borrow_book, name='borrow_book'),
    path('my-books/', views.my_books, name='my_books'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    
   
    
]
urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

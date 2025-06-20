from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Remove header URL if unused, or keep if you use it as a standalone page
    # path('header/', views.header, name='header'),

    path('', views.index, name='index'),
    path('index/', views.index, name='index'),
    path('book/<int:book_id>/', views.bookdetails, name='bookdetails'),
    path('add-new-book/', views.addnewbook, name='addnewbook'),
    path('borrow-books/', views.borrowbook, name='borrowbook'),
    path('login/', views.user_login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('logout', views.user_logout, name='logout'),

    path('borrow/<int:book_id>/', views.borrow_book, name='borrow_book'),
    path('my-books/', views.my_books, name='my_books'),
    path('delete-borrow/<int:borrow_id>/', views.delete_borrow, name='delete_borrow'),
    path('search/', views.search_books, name='search_books'),
    path('delete-book/<int:book_id>/', views.delete_book, name='delete_book'),
    path('edit-book/<int:book_id>/', views.edit_book, name='edit_book'),
    path('profile/', views.user_profile, name='user_profile'),
    path('edit-profile/', views.profile_update, name='edit_profile'),
    path('delete-account/', views.delete_account, name='delete_account'),

    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

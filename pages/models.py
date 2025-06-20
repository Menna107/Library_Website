from django.db import models

class Category(models.Model):
    name= models.CharField(max_length=50)
    def __str__(self):
        return self.name
    
class Book(models.Model):
    status_book=[
        ('available', 'available'),
        ('unavailable', 'unavailable')
    ]
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    description = models.TextField()
    image = models.ImageField(upload_to='book_covers/', default='book_covers/default.jpg')
    status = models.CharField(max_length=50, choices=status_book, default='available')

    def __str__(self):
        return self.title


# Create your models here.

from django.contrib.auth.models import User

class Borrow(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    borrowed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} borrowed {self.book.title}"
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_pics/', default='default.jpg')

    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"

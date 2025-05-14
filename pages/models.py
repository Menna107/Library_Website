from django.db import models

class Category(models.Model):
    name= models.CharField(max_length=50)
    def __str__(self):
        return self.name
    
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    description = models.TextField()
    image = models.ImageField(upload_to='book_covers/', default='book_covers/default.jpg')

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


from django.contrib import admin
from .models import *

admin.site.register(Book)
admin.site.register(Category)
admin.site.register(Borrow)

# Register your models here.

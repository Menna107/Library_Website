from .models import Category

def categories_with_books(request):
    """Add categories that have books to all templates context."""
    return {
        'categories_with_books': Category.objects.filter(book__isnull=False).distinct()
    } 
from django.core.paginator import (Paginator, EmptyPage, PageNotAnInteger)
from .models import *

def pagination(request,invoice):
    # default page
    default_page = 1
    page = request.GET.get('page', default_page)
    # paginate items
    items_per_page = 5
    paginator = Paginator(invoice, items_per_page)
    try:
        items_page = paginator.page(page)
        
    except PageNotAnInteger:
        items_page = paginator.page(default_page)
    except EmptyPage:
        items_page = paginator.page(paginator.num_pages)
    
    return items_page

def get_invoice(pk):
    """get invoice fonction"""
    obj = Invoice.objects.get(pk=pk)
    articles=obj.article_set.all()
    context = {
        'obj': obj,
        'articles': articles
    }
    return context
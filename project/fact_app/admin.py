from django.contrib import admin
from .models import *
from django.utils.translation import gettext_lazy as _

class AdminCustomer(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'address', 'sex', 'age', 'city', 'zip_code')

class AdminInvoice(admin.ModelAdmin):
    list_display = ('customer', 'save_by', 'invoice_date_time', 'total', 'last_updated_date', 'paid', 'invoice_type')    

admin.site.register(Customer, AdminCustomer)
admin.site.register(Invoice, AdminInvoice)
admin.site.register(Article)

admin.site.site_title = _("Majid INVOICE SYSTEM")
admin.site.site_header = _("Majid INVOICE SYSTEM")
admin.site.index_title = _("Majid INVOICE SYSTEM")
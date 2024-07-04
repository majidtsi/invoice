# Generated by Django 4.1.5 on 2024-06-19 09:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Customer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=132)),
                ("email", models.EmailField(max_length=254)),
                ("phone", models.CharField(max_length=132)),
                ("address", models.CharField(max_length=64)),
                (
                    "sex",
                    models.CharField(
                        choices=[("M", "Male"), ("F", "Feminine")], max_length=1
                    ),
                ),
                ("age", models.CharField(max_length=12)),
                ("city", models.CharField(max_length=32)),
                ("zip_code", models.CharField(max_length=16)),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                (
                    "save_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Customer",
                "verbose_name_plural": "Customers",
            },
        ),
        migrations.CreateModel(
            name="Invoice",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("invoice_date_time", models.DateTimeField(auto_now_add=True)),
                ("total", models.DecimalField(decimal_places=2, max_digits=10000)),
                ("last_updated_date", models.DateTimeField(blank=True, null=True)),
                ("paid", models.BooleanField(default=False)),
                (
                    "invoice_type",
                    models.CharField(
                        choices=[
                            ("R", "RECEIPT"),
                            ("P", "PROFORMA INVOICE"),
                            ("I", "INVOICE"),
                        ],
                        max_length=1,
                    ),
                ),
                ("comments", models.TextField(blank=True, max_length=1000, null=True)),
                (
                    "customer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to="fact_app.customer",
                    ),
                ),
                (
                    "save_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Invoice",
                "verbose_name_plural": "Invoices",
            },
        ),
        migrations.CreateModel(
            name="Article",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=32)),
                ("quantity", models.IntegerField()),
                ("unit_price", models.DecimalField(decimal_places=2, max_digits=1000)),
                ("total", models.DecimalField(decimal_places=2, max_digits=1000)),
                (
                    "invoice",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="fact_app.invoice",
                    ),
                ),
            ],
            options={
                "verbose_name": "Article",
                "verbose_name_plural": "Articles",
            },
        ),
    ]

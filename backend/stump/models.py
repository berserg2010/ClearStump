from django.db import models


class ServiceCategory(models.Model):

    title = models.CharField(
        max_length=15,
        verbose_name='Наименование категории'
    )

    description = models.TextField(
        max_length=150,
        verbose_name='Описание категории',
        blank=True,
    )

    image = models.ImageField(
        blank=True,
    )


class ServiceCard(models.Model):

    title = models.CharField(
        max_length=15,
        verbose_name='Наименование услуги'
    )

    description = models.TextField(
        max_length=150,
        verbose_name='Описание услуги',
        blank=True,
    )

    category = models.ForeignKey(
        ServiceCategory,
        verbose_name='Категория услуги',
        on_delete=models.CASCADE,
    )

    image = models.ImageField(
        blank=True,
    )

    is_active = models.BooleanField()

class SettingsSite(models.Model):

    address = models.CharField(
        max_length=50,
        verbose_name='Адрес'
    )

    email = models.EmailField()

    phone = models.CharField(
        max_length=50,
        verbose_name='Номер телефона'
    )

    is_active = models.BooleanField()

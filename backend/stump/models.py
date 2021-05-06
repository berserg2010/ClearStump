from django.db import models


class ServiceCategory(models.Model):

    title = models.CharField(
        max_length=150,
        verbose_name='Наименование категории'
    )

    description = models.TextField(
        max_length=250,
        verbose_name='Описание категории',
        blank=True,
    )

    image = models.ImageField(
        upload_to='img/',
        verbose_name='изображение',
        blank=True,
        null=True,
    )


class ServiceCard(models.Model):

    title = models.CharField(
        max_length=150,
        verbose_name='наименование услуги',
    )

    description = models.TextField(
        max_length=250,
        verbose_name='описание услуги',
        blank=True,
    )

    category = models.ForeignKey(
        ServiceCategory,
        verbose_name='категория услуги',
        on_delete=models.CASCADE,
    )

    image = models.ImageField(
        upload_to='img/',
        verbose_name='изображение',
        blank=True,
        null=True,
    )

    is_active = models.BooleanField()


class SettingsSite(models.Model):

    address = models.CharField(
        max_length=50,
        verbose_name='адрес'
    )
    phone = models.CharField(
        max_length=50,
        verbose_name='номер телефона'
    )

    email = models.EmailField()

    is_active = models.BooleanField()

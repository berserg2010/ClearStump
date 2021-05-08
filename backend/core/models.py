import uuid

from django.db import models


class SettingsSite(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    address = models.CharField(
        max_length=50,
        verbose_name='адрес',
    )
    phone = models.CharField(
        max_length=50,
        verbose_name='номер телефона',
    )

    email = models.EmailField(
        blank=True,
        verbose_name='эл. почта',
    )

    is_active = models.BooleanField(
        default=True,
        verbose_name='активные',
    )


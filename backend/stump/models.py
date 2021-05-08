import uuid

from django.db import models


class BaseModel(models.Model):
    class Meta:
        abstract=True

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    title = models.CharField(
        max_length=150,
        verbose_name='наименование',
    )

    description = models.TextField(
        max_length=250,
        verbose_name='описание',
        blank=True,
    )

    image = models.ImageField(
        upload_to='img/',
        verbose_name='изображение',
        blank=True,
        null=True,
    )


class ServiceCategory(BaseModel):
    class Meta:
        verbose_name = 'услуга'
        verbose_name_plural = 'услуги'

    def __str__(self):
        return f'{self.title}'


class ServiceCard(BaseModel):
    category = models.ForeignKey(
        ServiceCategory,
        verbose_name='категория',
        on_delete=models.CASCADE,
    )

    is_active = models.BooleanField(
        default=True,
        verbose_name='активная',
    )

import pytest
from mixer.backend.django import mixer

from ..models import ServiceCategory, ServiceCard


pytestmark = pytest.mark.django_db


def test_model():
    instance = mixer.blend(ServiceCategory)

    assert instance
    assert ServiceCategory.objects.get(pk=instance.pk)

    instance = mixer.blend(ServiceCard)

    assert instance
    assert ServiceCard.objects.get(pk=instance.pk)

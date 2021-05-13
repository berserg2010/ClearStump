import pytest
from mixer.backend.django import mixer

from ..models import SettingsSite


pytestmark = pytest.mark.django_db


def test_model():
    instance = mixer.blend(SettingsSite)

    assert instance
    assert SettingsSite.objects.get(pk=instance.pk)


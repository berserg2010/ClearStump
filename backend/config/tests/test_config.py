import pytest
from rest_framework.status import HTTP_302_FOUND

from django.test.client import Client


pytestmark = pytest.mark.django_db


def test_get_index():
    client = Client()
    response = client.get('/admin/')

    assert response.status_code == HTTP_302_FOUND


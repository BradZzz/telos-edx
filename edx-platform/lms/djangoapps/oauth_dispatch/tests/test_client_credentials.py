""" Tests for OAuth 2.0 client credentials support. """
import json

from django.core.urlresolvers import reverse
from django.test import TestCase
from edx_oauth2_provider.tests.factories import ClientFactory
from provider.oauth2.models import AccessToken
from student.tests.factories import UserFactory


class ClientCredentialsTest(TestCase):
    """ Tests validating the client credentials grant behavior. """

    def setUp(self):
        super(ClientCredentialsTest, self).setUp()

        self.user = UserFactory()
        self.oauth_client = ClientFactory(user=self.user)

    def test_access_token(self):
        """ Verify the client credentials grant can be used to obtain an access token whose default scopes allow access
        to the user info endpoint.
        """
        data = {
            'grant_type': 'client_credentials',
            'client_id': self.oauth_client.client_id,
            'client_secret': self.oauth_client.client_secret
        }
        response = self.client.post(reverse('oauth2:access_token'), data)
        self.assertEqual(response.status_code, 200)

        access_token = json.loads(response.content)['access_token']
        expected = AccessToken.objects.filter(client=self.oauth_client, user=self.user).first().token
        self.assertEqual(access_token, expected)

        headers = {
            'HTTP_AUTHORIZATION': 'Bearer ' + access_token
        }
        response = self.client.get(reverse('oauth2:user_info'), **headers)
        self.assertEqual(response.status_code, 200)

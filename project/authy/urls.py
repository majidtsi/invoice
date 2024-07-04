from django.urls import path
from authy.api import SignupAPI, LoginAPI, UserAPI
from knox import views as knox_views

from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls

schema_view = get_schema_view(title='Blog API')


urlpatterns = [
    path('authy/signup/', SignupAPI, name='api-authy-signup'),
    path('authy/login/', LoginAPI.as_view(), name='knox_login'),
    path('authy/whoami/', UserAPI.as_view(), name='api-who-am-i'),
    path('authy/logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('authy/logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logout'),
    path('docs/', include_docs_urls(title='Auth User API')),
    path('schema/', schema_view),
]
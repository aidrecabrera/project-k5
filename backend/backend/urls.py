from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.views.generic import RedirectView

schema_view = get_schema_view(
    openapi.Info(
        title="K5",
        default_version='v0.1',
        description="API for K5 project",
        terms_of_service="k5.aidre.codes",
        contact=openapi.Contact(email="alcabrera@mcm.edu.ph"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('k5/', include('api.urls')),
    path('', RedirectView.as_view(url='swagger/', permanent=True)),
    path('swagger/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
]

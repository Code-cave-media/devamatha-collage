from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CollegeSnapshotViewSet, HomePosterViewSet, NewsEventViewSet, HeroSliderViewSet,
    ManagementQuotaApplicationViewSet, AlumniAssociationViewSet,
    GalleryImageViewSet, GalleryVideoViewSet, SyllabusViewSet, DownloadFormViewSet
)

router = DefaultRouter()
router.register(r'college-snapshots', CollegeSnapshotViewSet)
router.register(r'home-posters', HomePosterViewSet)
router.register(r'news-events', NewsEventViewSet)
router.register(r'hero-slider', HeroSliderViewSet)
router.register(r'management-quota-applications', ManagementQuotaApplicationViewSet)
router.register(r'alumni-associations', AlumniAssociationViewSet)
router.register(r'gallery-images', GalleryImageViewSet)
router.register(r'gallery-videos', GalleryVideoViewSet)
router.register(r'syllabus', SyllabusViewSet)
router.register(r'download-forms', DownloadFormViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

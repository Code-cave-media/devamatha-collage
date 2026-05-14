from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import (
    CollegeSnapshot, HomePoster, NewsEvent, HeroSlider,
    ManagementQuotaApplication, AlumniAssociation,
    GalleryImage, GalleryVideo, Syllabus, DownloadForm
)
from .serializers import (
    CollegeSnapshotSerializer, HomePosterSerializer, NewsEventSerializer, HeroSliderSerializer,
    ManagementQuotaApplicationSerializer, AlumniAssociationSerializer,
    GalleryImageSerializer, GalleryVideoSerializer, SyllabusSerializer, DownloadFormSerializer
)


class CollegeSnapshotViewSet(viewsets.ModelViewSet):
    queryset = CollegeSnapshot.objects.all()
    serializer_class = CollegeSnapshotSerializer


class HomePosterViewSet(viewsets.ModelViewSet):
    queryset = HomePoster.objects.filter(is_active=True)
    serializer_class = HomePosterSerializer


class NewsEventViewSet(viewsets.ModelViewSet):
    queryset = NewsEvent.objects.all()
    serializer_class = NewsEventSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        featured = self.request.query_params.get('featured')
        if featured == 'true':
            queryset = queryset.filter(is_featured=True)
        return queryset


class HeroSliderViewSet(viewsets.ModelViewSet):
    queryset = HeroSlider.objects.filter(is_active=True)
    serializer_class = HeroSliderSerializer


class ManagementQuotaApplicationViewSet(viewsets.ModelViewSet):
    queryset = ManagementQuotaApplication.objects.all()
    serializer_class = ManagementQuotaApplicationSerializer
    http_method_names = ['get', 'post', 'head', 'options']


class AlumniAssociationViewSet(viewsets.ModelViewSet):
    queryset = AlumniAssociation.objects.all()
    serializer_class = AlumniAssociationSerializer
    http_method_names = ['get', 'post', 'head', 'options']


class GalleryImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        year = self.request.query_params.get('year')
        if year:
            queryset = queryset.filter(year=year)
        return queryset


class GalleryVideoViewSet(viewsets.ModelViewSet):
    queryset = GalleryVideo.objects.all()
    serializer_class = GalleryVideoSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        year = self.request.query_params.get('year')
        if year:
            queryset = queryset.filter(year=year)
        return queryset


class SyllabusViewSet(viewsets.ModelViewSet):
    queryset = Syllabus.objects.filter(is_active=True)
    serializer_class = SyllabusSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        syllabus_type = self.request.query_params.get('type')
        if syllabus_type:
            queryset = queryset.filter(syllabus_type=syllabus_type)
        return queryset


class DownloadFormViewSet(viewsets.ModelViewSet):
    queryset = DownloadForm.objects.filter(is_active=True)
    serializer_class = DownloadFormSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset

from rest_framework import serializers
from .models import (
    CollegeSnapshot, HomePoster, NewsEvent, HeroSlider,
    ManagementQuotaApplication, AlumniAssociation,
    GalleryImage, GalleryVideo, Syllabus, DownloadForm
)


class CollegeSnapshotSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = CollegeSnapshot
        fields = ['id', 'title', 'image', 'image_url', 'order', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None


class HomePosterSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = HomePoster
        fields = ['id', 'title', 'image', 'image_url', 'link', 'is_active', 'order', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None


class NewsEventSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = NewsEvent
        fields = ['id', 'title', 'description', 'image', 'image_url', 'date', 'is_featured', 'link', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None


class HeroSliderSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = HeroSlider
        fields = ['id', 'title', 'subtitle', 'image', 'image_url', 'link', 'is_active', 'order', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None


class ManagementQuotaApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagementQuotaApplication
        fields = ['id', 'name', 'email', 'phone', 'course', 'percentage', 'previous_school', 
                  'address', 'parent_name', 'parent_phone', 'created_at']
        read_only_fields = ['created_at']


class AlumniAssociationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumniAssociation
        fields = ['id', 'name', 'email', 'phone', 'batch', 'course', 'current_occupation', 
                  'company', 'address', 'linkedin_profile', 'created_at']
        read_only_fields = ['created_at']


class GalleryImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = ['id', 'title', 'image', 'image_url', 'year', 'order', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None


class GalleryVideoSerializer(serializers.ModelSerializer):
    youtube_embed_url = serializers.ReadOnlyField()

    class Meta:
        model = GalleryVideo
        fields = ['id', 'title', 'youtube_url', 'youtube_embed_url', 'year', 'order', 'created_at', 'updated_at']


class SyllabusSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = Syllabus
        fields = ['id', 'title', 'description', 'file', 'file_url', 'syllabus_type', 'course', 
                  'year', 'is_active', 'created_at', 'updated_at']

    def get_file_url(self, obj):
        if obj.file:
            return obj.file.url
        return None


class DownloadFormSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = DownloadForm
        fields = ['id', 'title', 'description', 'file', 'file_url', 'category', 
                  'is_active', 'order', 'created_at', 'updated_at']

    def get_file_url(self, obj):
        if obj.file:
            return obj.file.url
        return None

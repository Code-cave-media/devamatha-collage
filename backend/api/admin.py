from django.contrib import admin
from .models import (
    CollegeSnapshot, HomePoster, NewsEvent, HeroSlider,
    ManagementQuotaApplication, AlumniAssociation,
    GalleryImage, GalleryVideo, Syllabus, DownloadForm
)


@admin.register(CollegeSnapshot)
class CollegeSnapshotAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['title']
    list_editable = ['order']


@admin.register(HomePoster)
class HomePosterAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'order', 'created_at', 'updated_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title']
    list_editable = ['is_active', 'order']


@admin.register(NewsEvent)
class NewsEventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'is_featured', 'created_at', 'updated_at']
    list_filter = ['date', 'is_featured', 'created_at']
    search_fields = ['title', 'description']
    list_editable = ['is_featured']
    date_hierarchy = 'date'


@admin.register(HeroSlider)
class HeroSliderAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'order', 'created_at', 'updated_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title', 'subtitle']
    list_editable = ['is_active', 'order']


@admin.register(ManagementQuotaApplication)
class ManagementQuotaApplicationAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'course', 'percentage', 'created_at']
    list_filter = ['course', 'created_at']
    search_fields = ['name', 'email', 'phone', 'course']
    readonly_fields = ['created_at']


@admin.register(AlumniAssociation)
class AlumniAssociationAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'batch', 'course', 'current_occupation', 'created_at']
    list_filter = ['batch', 'course', 'created_at']
    search_fields = ['name', 'email', 'phone', 'course', 'company']
    readonly_fields = ['created_at']


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['title', 'year', 'order', 'created_at', 'updated_at']
    list_filter = ['year', 'created_at']
    search_fields = ['title']
    list_editable = ['order']


@admin.register(GalleryVideo)
class GalleryVideoAdmin(admin.ModelAdmin):
    list_display = ['title', 'year', 'order', 'created_at', 'updated_at']
    list_filter = ['year', 'created_at']
    search_fields = ['title', 'youtube_url']
    list_editable = ['order']
    readonly_fields = ['youtube_embed_url']


@admin.register(Syllabus)
class SyllabusAdmin(admin.ModelAdmin):
    list_display = ['title', 'syllabus_type', 'course', 'year', 'is_active', 'created_at', 'updated_at']
    list_filter = ['syllabus_type', 'course', 'year', 'is_active', 'created_at']
    search_fields = ['title', 'description', 'course']
    list_editable = ['is_active']


@admin.register(DownloadForm)
class DownloadFormAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_active', 'order', 'created_at', 'updated_at']
    list_filter = ['category', 'is_active', 'created_at']
    search_fields = ['title', 'description', 'category']
    list_editable = ['is_active', 'order']

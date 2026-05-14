from django.db import models
from django.core.validators import URLValidator
import re


class CollegeSnapshot(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='college_snapshots/')
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title


class HomePoster(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='home_posters/')
    link = models.URLField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title


class NewsEvent(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    image = models.ImageField(upload_to='news_events/', blank=True, null=True)
    date = models.DateField()
    is_featured = models.BooleanField(default=False)
    link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date', '-created_at']

    def __str__(self):
        return self.title


class HeroSlider(models.Model):
    title = models.CharField(max_length=300)
    subtitle = models.CharField(max_length=500, blank=True)
    image = models.ImageField(upload_to='hero_slider/')
    link = models.URLField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title


class ManagementQuotaApplication(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    course = models.CharField(max_length=200)
    percentage = models.CharField(max_length=50)
    previous_school = models.CharField(max_length=300)
    address = models.TextField()
    parent_name = models.CharField(max_length=200)
    parent_phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.course}"


class AlumniAssociation(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    batch = models.CharField(max_length=50)
    course = models.CharField(max_length=200)
    current_occupation = models.CharField(max_length=200, blank=True)
    company = models.CharField(max_length=300, blank=True)
    address = models.TextField(blank=True)
    linkedin_profile = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.batch} - {self.course}"


class GalleryImage(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gallery/images/')
    year = models.IntegerField()
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-year', 'order', '-created_at']

    def __str__(self):
        return self.title


class GalleryVideo(models.Model):
    title = models.CharField(max_length=200)
    youtube_url = models.URLField()
    year = models.IntegerField()
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def youtube_embed_url(self):
        """Convert YouTube URL to embed URL"""
        if not self.youtube_url:
            return None
        
        # Handle different YouTube URL formats
        patterns = [
            r'(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]+)',
            r'(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\s]+)',
            r'(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&\s]+)',
            r'(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^&\s]+)',
        ]
        
        for pattern in patterns:
            match = re.search(pattern, self.youtube_url)
            if match:
                video_id = match.group(1)
                return f'https://www.youtube.com/embed/{video_id}'
        
        return None

    class Meta:
        ordering = ['-year', 'order', '-created_at']

    def __str__(self):
        return self.title


class Syllabus(models.Model):
    SYLLABUS_TYPE_CHOICES = [
        ('FYUG', 'FYUG Programme'),
        ('PG', 'Postgraduate'),
    ]
    
    title = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='syllabus/')
    syllabus_type = models.CharField(max_length=10, choices=SYLLABUS_TYPE_CHOICES)
    course = models.CharField(max_length=200)
    year = models.IntegerField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['syllabus_type', 'course', '-year']

    def __str__(self):
        return f"{self.title} - {self.get_syllabus_type_display()}"


class DownloadForm(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='download_forms/')
    category = models.CharField(max_length=100, blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['category', 'order', '-created_at']

    def __str__(self):
        return self.title

# Deva Matha College - Django Backend

This Django backend provides a REST API and admin panel for managing the Deva Matha College website content.

## Features

- **College Snapshots**: Add, edit, delete home gallery images
- **Home Posters**: Manage promotional posters with links
- **News & Events**: Create and manage news and events with images
- **Hero Slider**: Control hero section slider images and content
- **Management Quota Applications**: Receive and manage applications (replaces Google Sheets)
- **Alumni Association**: Receive and manage alumni registrations (replaces Google Sheets)
- **Gallery**: Manage images and videos (YouTube links auto-convert to embed format)
- **Syllabus**: Upload and manage syllabus files (FYUG and PG programmes)
- **Download Forms**: Upload and manage downloadable forms for students

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:

**On Windows:**
```bash
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create environment variables (optional):
Create a `.env` file in the backend directory:
```
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

6. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

7. Create a superuser for admin access:
```bash
python manage.py createsuperuser
```

8. Run the development server:
```bash
python manage.py runserver
```

The Django admin panel will be available at: `http://localhost:8000/admin/`

## API Endpoints

The REST API is available at `http://localhost:8000/api/`

### Available Endpoints

- `GET/POST /api/college-snapshots/` - Manage college snapshots
- `GET/POST /api/home-posters/` - Manage home posters
- `GET/POST /api/news-events/` - Manage news and events
- `GET/POST /api/hero-slider/` - Manage hero slider items
- `GET/POST /api/management-quota-applications/` - Management quota applications
- `GET/POST /api/alumni-associations/` - Alumni registrations
- `GET/POST /api/gallery-images/` - Gallery images
- `GET/POST /api/gallery-videos/` - Gallery videos
- `GET/POST /api/syllabus/` - Syllabus files
- `GET/POST /api/download-forms/` - Download forms

### Query Parameters

- **News Events**: `?featured=true` to get only featured news
- **Gallery Images**: `?year=2024` to filter by year
- **Gallery Videos**: `?year=2024` to filter by year
- **Syllabus**: `?type=FYUG` or `?type=PG` to filter by type
- **Download Forms**: `?category=admission` to filter by category

## Media Files

Uploaded images and files are stored in the `backend/media/` directory. Make sure this directory exists and is writable.

## Production Deployment

For production deployment:

1. Set `DEBUG=False` in settings
2. Set a strong `SECRET_KEY`
3. Configure `ALLOWED_HOSTS` with your domain
4. Use a production database (PostgreSQL recommended)
5. Serve static files with a web server (nginx, apache)
6. Use gunicorn or uWSGI as application server
7. Configure proper CORS settings for your frontend domain

## Admin Panel Features

The Django admin panel provides a user-friendly interface to:
- Add, edit, delete all content
- Upload images and files
- Manage form submissions
- Filter and search through data
- Reorder items with drag-and-drop (via order field)

## File Upload Limits

Default file upload size is managed by Django settings. To increase limits, add to `settings.py`:

```python
DATA_UPLOAD_MAX_MEMORY_SIZE = 10485760  # 10MB
FILE_UPLOAD_MAX_MEMORY_SIZE = 10485760  # 10MB
```

## YouTube Video Handling

YouTube URLs are automatically converted to embed format. Supported formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- `https://www.youtube.com/shorts/VIDEO_ID`

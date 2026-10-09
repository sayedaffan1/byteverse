export const DJANGO_CURRICULUM = {
  title: 'Django: Enterprise Full-Stack Python Framework (0% to 10,000,000%)',
  tagline: 'From MTV basics and the ORM to Class-Based Views, REST APIs, and production deployment.',
  overview: 'Django is a high-level Python web framework designed for rapid development and clean, pragmatic design. It comes with batteries included: built-in ORM, admin dashboard, user authentication, security protections, and templating.',
  modules: [
    {
      level: '0% Beginner',
      levelCode: 'beginner',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      topics: [
        {
          id: 'django-mtv-overview',
          title: 'The MTV Pattern & Project Anatomy',
          summary: 'Understand Django\'s MTV (Model-Template-View) architecture and how web requests flow through the framework.',
          keyPoints: [
            'Model: Represents the database schema and business logic (models.py).',
            'Template: The presentation HTML document rendered to the user (templates/).',
            'View: The Python logic that processes requests, fetches models, and renders templates (views.py).',
            'urls.py: The traffic director matching URL patterns to corresponding views.'
          ],
          code: `# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('quests/<int:id>/', views.quest_detail, name='quest_detail'),
]

# views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Welcome to ByteVerse Django Hub</h1>")`,
          type: 'python',
          quiz: {
            question: 'What is Django\'s counterpart to the traditional "Controller" in MVC architecture?',
            options: ['Model', 'Template', 'View', 'Middleware'],
            correct: 2,
            explanation: 'In Django\'s MTV pattern, the "View" acts as the controller, executing logic and rendering templates.'
          }
        },
        {
          id: 'django-models-migrations',
          title: 'Models, Migrations & Database Sync',
          summary: 'Define relational database tables as clean Python classes and let Django generate and apply SQL migrations automatically.',
          keyPoints: [
            'Each class inheriting from models.Model represents a database table.',
            'python manage.py makemigrations inspects models.py and creates migration scripts.',
            'python manage.py migrate applies the migrations to the database (creates/alters tables).'
          ],
          code: `# models.py
from django.db import models

class Quest(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    xp_reward = models.PositiveIntegerField(default=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} (+{self.xp_reward} XP)"`,
          type: 'python',
          quiz: {
            question: 'Which terminal command prepares database schema migration scripts from models.py?',
            options: ['python manage.py runmigrations', 'python manage.py makemigrations', 'python manage.py db_sync', 'python manage.py update_models'],
            correct: 1,
            explanation: 'makemigrations packages your model changes into migration files; migrate applies them to the database.'
          }
        }
      ]
    },
    {
      level: '50% Intermediate',
      levelCode: 'intermediate',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      topics: [
        {
          id: 'django-orm-queries',
          title: 'The Django ORM: Fluent QuerySets',
          summary: 'Query, filter, order, and aggregate database records in Python without writing raw SQL queries.',
          keyPoints: [
            'Model.objects.all(): Retrieves all records as a lazy QuerySet.',
            'Model.objects.filter(field=value): Returns records matching criteria.',
            'Field lookups: level__gte=10 (>= 10), title__icontains="quest" (case-insensitive search).',
            'Model.objects.get(id=pk): Retrieves a single record or raises ObjectDoesNotExist.'
          ],
          code: `# ORM Query Examples
# 1. Fetch legendary quests ordered by XP
epic_quests = Quest.objects.filter(
    xp_reward__gte=500
).order_by('-xp_reward')[:5]

# 2. Update status of specific quest
quest = Quest.objects.get(id=42)
quest.title = "Conquer the Python Peaks"
quest.save()`,
          type: 'python',
          quiz: {
            question: 'How do you query for records where score is greater than or equal to 100 in Django ORM?',
            options: ['Score.objects.filter(score >= 100)', 'Score.objects.filter(score__gte=100)', 'Score.objects.where("score >= 100")', 'Score.objects.filter(score.greater(100))'],
            correct: 1,
            explanation: 'Django uses double underscore field lookups: field__gte stands for Greater Than or Equal.'
          }
        },
        {
          id: 'django-templates-inheritance',
          title: 'Django Template Language (DTL) & Inheritance',
          summary: 'Eliminate duplicate HTML with template inheritance ({% extends "base.html" %}) and dynamic template tags and filters.',
          keyPoints: [
            '{% extends "base.html" %} inherits layout skeleton from base template.',
            '{% block content %} ... {% endblock %} defines overridable content sections.',
            '{{ variable }}: Renders data passed from the view context.',
            '{% for item in items %}: Loops through QuerySets with {{ forloop.counter }}.'
          ],
          code: `<!-- base.html -->
<!DOCTYPE html>
<html>
<head><title>{% block title %}ByteVerse{% endblock %}</title></head>
<body>
  <nav>ByteVerse Nav</nav>
  <main>{% block content %}{% endblock %}</main>
</body>
</html>

<!-- quest_detail.html -->
{% extends "base.html" %}
{% block content %}
  <h1>{{ quest.title }}</h1>
  <p>{{ quest.description }}</p>
  <span>Reward: {{ quest.xp_reward }} XP</span>
{% endblock %}`,
          type: 'html',
          quiz: {
            question: 'Which Django template tag enables child templates to extend a master base layout?',
            options: ['{% include "base.html" %}', '{% extends "base.html" %}', '{% import "base.html" %}', '{% inherit "base.html" %}'],
            correct: 1,
            explanation: '{% extends "base.html" %} establishes inheritance from a parent template.'
          }
        }
      ]
    },
    {
      level: '100% Advanced & Masterclass',
      levelCode: 'advanced',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      topics: [
        {
          id: 'django-auth-admin',
          title: 'Authentication, Security & The Admin Site',
          summary: 'Leverage Django\'s enterprise authentication system, password hashing (PBKDF2/Argon2), CSRF protection, and the auto-generated Admin dashboard.',
          keyPoints: [
            'Django Admin (@admin.register) provides an instant, production-ready CMS dashboard.',
            '@login_required decorator protects views from unauthenticated requests.',
            'Every POST form must include the {% csrf_token %} tag to block Cross-Site Request Forgery attacks.'
          ],
          code: `# admin.py
from django.contrib import admin
from .models import Quest

@admin.register(Quest)
class QuestAdmin(admin.ModelAdmin):
    list_display = ('title', 'xp_reward', 'created_at')
    search_fields = ('title', 'description')
    list_filter = ('created_at',)

# views.py
from django.contrib.auth.decorators import login_required

@login_required
def claim_reward(request, quest_id):
    # Only authenticated users can access
    pass`,
          type: 'python',
          quiz: {
            question: 'What tag is mandatory inside every Django HTML POST form to protect against CSRF attacks?',
            options: ['{% auth_token %}', '{% csrf_token %}', '{% secure_form %}', '{% prevent_hack %}'],
            correct: 1,
            explanation: '{% csrf_token %} generates a secure token preventing cross-site request forgery.'
          }
        },
        {
          id: 'django-cbv-rest-framework',
          title: 'Class-Based Views (CBVs) & Django REST Framework (DRF)',
          summary: 'Build robust REST APIs using Django REST Framework with ModelSerializers and ViewSets, and eliminate view boilerplate using Class-Based Views.',
          keyPoints: [
            'Class-Based Views (ListView, DetailView, CreateView) implement reusable OOP patterns for standard CRUD operations.',
            'Django REST Framework (DRF) serializes complex QuerySets into JSON responses.',
            'ViewSets combined with DefaultRouter automatically generate standard RESTful endpoints.'
          ],
          code: `# serializers.py (Django REST Framework)
from rest_framework import serializers
from .models import Quest

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = ['id', 'title', 'xp_reward']

# views.py (Class-Based View)
from django.views.generic import ListView

class QuestListView(ListView):
    model = Quest
    template_name = 'quest_list.html'
    context_object_name = 'quests'`,
          type: 'python',
          quiz: {
            question: 'In Django REST Framework (DRF), what handles converting Python model instances into JSON format?',
            options: ['Routers', 'Serializers', 'Middlewares', 'Validators'],
            correct: 1,
            explanation: 'Serializers translate complex data types like QuerySets into native Python datatypes that can easily be rendered into JSON.'
          }
        }
      ]
    }
  ]
};

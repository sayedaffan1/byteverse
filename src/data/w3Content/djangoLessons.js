export const DJANGO_W3_LESSONS = [
  {
    "id": "dj_home",
    "category": "Django Tutorial",
    "title": "Django HOME",
    "summary": "Django is a Python framework that makes it easier to build web applications. Django follows the MVT design pattern.",
    "eli5": {
      "story": "Imagine you want to build a giant theme park like Disneyland! You could build every roller coaster, ticket booth, snack stand, and security gate from zero scratch, or you could hire a world-famous master park team that already has pre-built roller coasters, security gates, and snack machines ready to turn on. Django is that master team for Python!",
      "analogy": "🏰 The Disneyland Master Team: Django gives you login screens, admin dashboards, and database tools right out of the box so you don't have to reinvent the wheel.",
      "rules": [
        "Model: The toy warehouse storage (database).",
        "View: The park worker who grabs toys from the warehouse.",
        "Template: The beautiful display window shown to visitors."
      ]
    },
    "body": "Django is especially suited for database-driven websites, and it comes with lots of built-in features, like an admin interface, default database (SQLite), and user authentication.\n\n### Why Django?\n- Ridiculously fast development.\n- Fully loaded (ORM, Admin, Auth, Security).\n- Reassuringly secure (CSRF, SQL Injection, XSS protections built-in).\n- Exceedingly scalable (used by Instagram, Spotify, Pinterest).",
    "tryItCode": "# Start a new Django project in terminal:\n# django-admin startproject my_website\n# cd my_website\n# python manage.py runserver\n\nprint(\"Django development server started at http://127.0.0.1:8000/\")",
    "codeType": "python",
    "notes": "Django was named after the jazz guitarist Django Reinhardt.",
    "exercise": {
      "question": "Which architectural design pattern does Django follow?",
      "options": [
        "MVC (Model-View-Controller)",
        "MVT (Model-View-Template)",
        "Flux",
        "MVVM"
      ],
      "correct": 1,
      "hint": "In Django, the Template acts as the view layer."
    },
    "referenceTable": [
      {
        "item": "django-admin",
        "description": "Django's command-line utility for administrative tasks"
      },
      {
        "item": "manage.py",
        "description": "A command-line script created in each Django project"
      },
      {
        "item": "makemigrations",
        "description": "Creates new migrations based on the changes in models.py"
      },
      {
        "item": "migrate",
        "description": "Applies migrations to the database"
      }
    ]
  },
  {
    "id": "dj_project_app",
    "category": "Django Architecture",
    "title": "Django Projects vs Apps",
    "summary": "What is the difference between a project and an app in Django? A project is a collection of configurations and apps. An app is a web application that does something.",
    "eli5": {
      "story": "Imagine a giant shopping mall called \"Mega Mall\" (the Project). Inside the mall, there is a shoe store, a candy shop, and a movie theater. Each of those individual stores is an App! You can unplug the candy shop and open another one in a different mall without breaking the building.",
      "analogy": "🏬 The Shopping Mall: The Project is the whole mall building; Apps are independent stores inside (blog, store, auth).",
      "rules": [
        "django-admin startproject my_site creates the whole mall.",
        "python manage.py startapp blog creates one specific store.",
        "Always register new apps inside INSTALLED_APPS in settings.py!"
      ]
    },
    "body": "### Project vs App:\n- **Project**: The overall web application containing global configurations, database connections, and URLs (`settings.py`, `urls.py`).\n- **App**: A self-contained module that handles a single specific feature (e.g. `accounts`, `blog`, `store`).\n\n```bash\n# Create Project\ndjango-admin startproject config .\n\n# Create App\npython manage.py startapp arcade\n```",
    "tryItCode": "# Structure of a Django App:\n# arcade/\n#   migrations/\n#   __init__.py\n#   admin.py       <- Admin dashboard models\n#   apps.py        <- App config\n#   models.py      <- Database tables\n#   tests.py       <- Unit tests\n#   views.py       <- Business logic\n\nprint(\"Django app initialized with modular MTV architecture.\")",
    "codeType": "python",
    "tips": "Keep apps small and focused on a single responsibility so they can be reused across different projects.",
    "exercise": {
      "question": "Where must newly created Django apps be registered to be recognized by the project?",
      "options": [
        "urls.py",
        "INSTALLED_APPS in settings.py",
        "manage.py",
        "admin.py"
      ],
      "correct": 1,
      "hint": "INSTALLED_APPS list in settings.py."
    }
  },
  {
    "id": "dj_urls",
    "category": "Django Routing",
    "title": "Django URLs & The Ticket Booth",
    "summary": "A clean, elegant URL scheme is an important detail in a high-quality Web application. Django lets you design URLs however you want.",
    "eli5": {
      "story": "When visitors arrive at the theme park gate, there is a helpful Ticket Booth map with signs: \"Rollercoaster this way!\", \"Ferris Wheel that way!\", \"Snack Bar over there!\". In Django, urls.py is that Ticket Booth sign! When someone types /games/, it points them directly to the games view!",
      "analogy": "🗺️ The Park Signpost: urls.py guides every visitor to the exact ride they are asking for.",
      "rules": [
        "path(\"about/\", views.about) connects the link to the view.",
        "Path converters like <int:id> catch numbers (like quest #42).",
        "urls.py is the very first file a web request visits!"
      ]
    },
    "body": "To route a view to a URL, create a file named `urls.py` in the same folder as the `views.py` file.\n\n```python\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('', views.home, name='home'),\n    path('members/', views.members, name='members'),\n    path('quest/<int:pk>/', views.quest_detail, name='quest_detail'),\n]\n```",
    "tryItCode": "from django.urls import path\n\n# Simulating urls.py routing configuration\nurlpatterns = [\n    path('quests/', lambda r: \"Quest List\", name='quest_list'),\n    path('quests/<int:id>/', lambda r, id: f\"Quest #{id}\", name='quest_detail')\n]\n\nprint(f\"Loaded {len(urlpatterns)} URL routes into Django URLConf.\")",
    "codeType": "python",
    "tips": "Giving names to your URL patterns allows you to reverse-resolve them cleanly with {% url \"name\" %} in templates.",
    "exercise": {
      "question": "Which Django function is used to define an individual URL pattern in urls.py?",
      "options": [
        "route()",
        "url()",
        "path()",
        "link()"
      ],
      "correct": 2,
      "hint": "path() was introduced in Django 2.0+."
    }
  },
  {
    "id": "dj_views",
    "category": "Django Views",
    "title": "Django Views (The Head Chef)",
    "summary": "A view function, or view for short, is a Python function that takes a Web request and returns a Web response.",
    "eli5": {
      "story": "Imagine the head chef in the restaurant! A waiter rushes into the kitchen with an order ticket: \"Table 4 wants a pizza!\" The chef grabs cheese and sauce, bakes the pizza, and sends it out on a tray. In Django, a View function receives the HTTP request, grabs data, and returns an HttpResponse or renders an HTML template!",
      "analogy": "👨‍🍳 The Restaurant Chef: views.py takes incoming requests, talks to the database, and serves fresh web pages.",
      "rules": [
        "def my_view(request): always receives the request as its 1st argument.",
        "Must always return an HttpResponse or render(request, \"template.html\").",
        "Can pass a context dictionary {\"hero\": \"Affan\"} to the template."
      ]
    },
    "body": "### Writing a View Function:\n```python\nfrom django.shortcuts import render\nfrom django.http import HttpResponse\n\ndef home(request):\n    context = {\n        'title': 'ByteVerse Academy',\n        'developer': 'Affan Sayed'\n    }\n    return render(request, 'home.html', context)\n```",
    "tryItCode": "# Simulating Django View execution\ndef arcade_hub_view(request):\n    games = [\"HTML Tag Fortress\", \"CSS Style Forge\", \"JS Bug Hunter\"]\n    context = {\"player\": request.get(\"user\", \"Affan Sayed\"), \"games\": games}\n    return f\"Rendered view for {context['player']} with {len(games)} arcade games.\"\n\nmock_request = {\"user\": \"Affan Sayed\"}\nprint(arcade_hub_view(mock_request))",
    "codeType": "python",
    "notes": "Class-Based Views (CBVs) like ListView and DetailView provide reusable object-oriented patterns for common CRUD operations.",
    "exercise": {
      "question": "What is the required first argument of any Django view function?",
      "options": [
        "response",
        "request",
        "self",
        "context"
      ],
      "correct": 1,
      "hint": "def my_view(request):"
    }
  },
  {
    "id": "dj_templates",
    "category": "Django Templates",
    "title": "Django Templates (DTL)",
    "summary": "Django template language (DTL) is Django's built-in templating system for rendering dynamic HTML.",
    "eli5": {
      "story": "Imagine a Mad Libs storybook with blank lines: \"Once upon a time, [HERO_NAME] went to [PLANET] and fought [NUMBER] dragons!\" Django Templates are that Mad Libs page: you write normal HTML, and use double curly brackets {{ hero_name }} to slip in dynamic Python variables!",
      "analogy": "📝 The Mad Libs Storybook: HTML is the story with blanks; Django fills the blanks with live database values.",
      "rules": [
        "{{ variable }} outputs a variable value on the screen.",
        "{% for game in games %} loops over lists in HTML.",
        "{% if user.is_authenticated %} shows secret content only to logged in users!"
      ]
    },
    "body": "### DTL Syntax:\n- **Variables**: `{{ player.name }}`\n- **Tags**: `{% if %}`, `{% for %}`, `{% block %}`, `{% extends %}`\n- **Filters**: `{{ name|lower }}`, `{{ date|date:\"M d, Y\" }}`, `{{ title|truncatewords:5 }}`\n\n### Template Inheritance:\nUse `{% extends \"base.html\" %}` and `{% block content %}` so you don't repeat headers and footers across every HTML file!",
    "tryItCode": "# Django Template Language Example:\ntemplate_string = \"\"\"\n{% extends 'base.html' %}\n{% block content %}\n  <h1>Welcome {{ player_name }}!</h1>\n  <ul>\n  {% for game in games %}\n    <li>{{ game|upper }}</li>\n  {% endfor %}\n  </ul>\n{% endblock %}\n\"\"\"\nprint(\"DTL Template inheritance defined successfully.\")",
    "codeType": "python",
    "tips": "Template inheritance with base.html saves hours of work: change your navbar once in base.html, and every page updates!",
    "exercise": {
      "question": "Which DTL syntax is used to print the value of a variable in an HTML template?",
      "options": [
        "{% variable %}",
        "{{ variable }}",
        "<% variable %>",
        "${variable}"
      ],
      "correct": 1,
      "hint": "Double curly braces: {{ variable }}."
    }
  },
  {
    "id": "dj_models",
    "category": "Django ORM",
    "title": "Django Models & The ORM",
    "summary": "A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you're storing.",
    "eli5": {
      "story": "Have you ever filled out an application form for a secret spy agency? The form asks for: Name (Text), Spy Rank (Number), Secret Agent Active? (Checkbox Yes/No). In Django, models.py is that application form: it describes what a spy looks like, and the Django ORM creates the SQL database table automatically without you writing raw SQL!",
      "analogy": "📋 The Spy Application Form: Python classes in models.py automatically turn into database tables.",
      "rules": [
        "class Player(models.Model): creates a database table.",
        "models.CharField(max_length=100) is for text; models.IntegerField() is for numbers.",
        "Django ORM lets you query with Player.objects.filter(level__gte=10)!"
      ]
    },
    "body": "### Defining a Model:\n```python\nfrom django.db import models\n\nclass Quest(models.Model):\n    title = models.CharField(max_length=200)\n    reward_xp = models.IntegerField(default=100)\n    is_completed = models.BooleanField(default=False)\n    created_at = models.DateTimeField(auto_now_add=True)\n\n    def __str__(self):\n        return self.title\n```\n\n### Querying with Django ORM:\n- `Quest.objects.all()`: Fetch all records.\n- `Quest.objects.filter(is_completed=True)`: Filter rows.\n- `Quest.objects.get(id=1)`: Fetch single record.",
    "tryItCode": "# Simulating Django Model definition\nclass MockQuest:\n    def __init__(self, title, xp):\n        self.title = title\n        self.xp = xp\n\nquest = MockQuest(\"Master Python & Django\", 1000)\nprint(f\"Model Instance: {quest.title} | Reward: {quest.xp} XP\")",
    "codeType": "python",
    "notes": "The __str__() method in a model tells Django what to display when representing an object in the Admin site.",
    "exercise": {
      "question": "What command generates SQL migration files from your Python models?",
      "options": [
        "python manage.py makemigrations",
        "python manage.py migrate",
        "python manage.py buildmodels",
        "django-admin make"
      ],
      "correct": 0,
      "hint": "makemigrations creates the migration files."
    }
  },
  {
    "id": "dj_migrations",
    "category": "Django ORM",
    "title": "Django Migrations",
    "summary": "Migrations are Django's way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema.",
    "eli5": {
      "story": "Imagine you built a treehouse. Later, you decide: \"I want to add a rope ladder and a lookout telescope!\" Migrations are the blueprint updates you hand to the carpenter so they know how to add the new ladder to your existing treehouse without tearing the whole tree down!",
      "analogy": "🔨 The Blueprint Update: Migrations evolve your database step-by-step as your website grows.",
      "rules": [
        "Step 1: Edit models.py (e.g. add new score field).",
        "Step 2: Run \"python manage.py makemigrations\" (prepares the blueprint).",
        "Step 3: Run \"python manage.py migrate\" (applies the changes to the live database)!"
      ]
    },
    "body": "### The 2-Step Migration Workflow:\n1. **makemigrations**: Inspects `models.py` and writes a python migration file in `app/migrations/`.\n```bash\npython manage.py makemigrations\n```\n\n2. **migrate**: Executes the generated SQL migrations against your active database.\n```bash\npython manage.py migrate\n```\n\n### Inspecting Generated SQL:\nUse `sqlmigrate` to see the raw SQL Django will run:\n```bash\npython manage.py sqlmigrate arcade 0001\n```",
    "tryItCode": "# The 2-step migration ritual:\nsteps = [\n    \"1. Edit models.py to add a new column\",\n    \"2. python manage.py makemigrations (generate blueprint)\",\n    \"3. python manage.py migrate (apply to database)\"\n]\nfor s in steps:\n    print(s)",
    "codeType": "python",
    "tips": "Always check in migration files to Git version control so your production server and team members have the exact same database schema.",
    "exercise": {
      "question": "Which command applies pending migrations to the database in Django?",
      "options": [
        "python manage.py makemigrations",
        "python manage.py migrate",
        "python manage.py run_sql",
        "django-admin db_push"
      ],
      "correct": 1,
      "hint": "python manage.py migrate"
    }
  },
  {
    "id": "dj_admin",
    "category": "Django Admin",
    "title": "Django Admin Dashboard",
    "summary": "One of the most powerful parts of Django is the automatic admin interface. It reads metadata from your models to provide a quick, model-centric interface.",
    "eli5": {
      "story": "Imagine you are the captain of a starship! You have a high-tech control room with screens where you can see all crew members, adjust shield power, ban invaders, and give medals with the push of a button. Django builds that entire Captain's Control Room for you in 30 seconds!",
      "analogy": "🛸 The Starship Control Room: Django Admin is a fully-featured, secure CRUD dashboard built automatically.",
      "rules": [
        "Run \"python manage.py createsuperuser\" to create your captain account.",
        "Register models in admin.py using admin.site.register(MyModel).",
        "Visit /admin in your browser to log in and manage your database visually!"
      ]
    },
    "body": "### Setting up Django Admin:\n1. **Create Superuser**:\n```bash\npython manage.py createsuperuser\n```\n\n2. **Register Models in `admin.py`**:\n```python\nfrom django.contrib import admin\nfrom .models import Quest\n\n@admin.register(Quest)\nclass QuestAdmin(admin.ModelAdmin):\n    list_display = ('title', 'reward_xp', 'is_completed')\n    list_filter = ('is_completed',)\n    search_fields = ('title',)\n```",
    "tryItCode": "# Simulating admin.py registration\nadmin_config = {\n    \"model\": \"Quest\",\n    \"list_display\": [\"title\", \"reward_xp\", \"is_completed\"],\n    \"search_fields\": [\"title\"]\n}\nprint(f\"Registered {admin_config['model']} with search on {admin_config['search_fields']}\")",
    "codeType": "python",
    "notes": "Django Admin is meant for staff and site administrators, not for general public visitors.",
    "exercise": {
      "question": "Which CLI command creates an administrator user for the Django admin panel?",
      "options": [
        "python manage.py add_admin",
        "python manage.py createsuperuser",
        "django-admin new_root",
        "python manage.py user --admin"
      ],
      "correct": 1,
      "hint": "createsuperuser"
    }
  },
  {
    "id": "dj_forms",
    "category": "Django Forms",
    "title": "Django Forms & CSRF Security",
    "summary": "Django handles form rendering, data validation, and CSRF protection automatically.",
    "eli5": {
      "story": "Have you ever had a secret password or handshake with your best friend? When a stranger tries to pretend to be you, your friend says: \"What's the secret handshake?\" If they don't know it, they get locked out! That secret handshake in Django is the {% csrf_token %}: it blocks evil hacker robots from submitting fake forms!",
      "analogy": "🤝 The Secret Handshake: {% csrf_token %} verifies that incoming form submissions really came from your website.",
      "rules": [
        "Always put {% csrf_token %} inside every POST form.",
        "forms.ModelForm automatically builds HTML inputs from your database models.",
        "form.is_valid() checks that emails, numbers, and required fields are clean!"
      ]
    },
    "body": "### Using ModelForm:\n```python\nfrom django import forms\nfrom .models import Player\n\nclass PlayerForm(forms.ModelForm):\n    class Meta:\n        model = Player\n        fields = ['username', 'track', 'level']\n```\n\n### In the HTML Template:\n```html\n<form method=\"POST\">\n  {% csrf_token %}\n  {{ form.as_p }}\n  <button type=\"submit\">Save Hero</button>\n</form>\n```",
    "tryItCode": "# Simulating Form Validation in Django View:\nform_data = {\"username\": \"Affan Sayed\", \"track\": \"Python\", \"level\": \"99\"}\nif form_data.get(\"username\") and form_data.get(\"level\").isdigit():\n    print(\"✅ Form is valid! Player record saved safely with CSRF protection.\")\nelse:\n    print(\"❌ Invalid form data.\")",
    "codeType": "python",
    "tips": "If you ever get a \"403 Forbidden - CSRF verification failed\" error, check that you included {% csrf_token %} inside the <form> tags!",
    "exercise": {
      "question": "Which template tag must be included inside every POST form in Django for security?",
      "options": [
        "{% secure_form %}",
        "{% csrf_token %}",
        "{% auth %}",
        "{% token %}"
      ],
      "correct": 1,
      "hint": "Cross-Site Request Forgery token: {% csrf_token %}"
    }
  },
  {
    "id": "dj_auth",
    "category": "Django Auth",
    "title": "Django Authentication & User Sessions",
    "summary": "Django comes with a full user authentication system. It handles user accounts, groups, permissions, and cookie-based user sessions.",
    "eli5": {
      "story": "Imagine walking into a superhero headquarters! The scanner at the door reads your eye retina. If you are a certified hero, the vault doors slide open and say: \"Welcome back, Captain!\" If you are a villain, alarms blare! Django Auth is that retina scanner: login, logout, password encryption, and permissions are already built for you.",
      "analogy": "🛡️ The Headquarters Scanner: Django Auth securely hashes passwords with PBKDF2 so even database admins cannot see raw passwords.",
      "rules": [
        "Use @login_required decorator to lock secret views behind login.",
        "Passwords are automatically encrypted with PBKDF2 SHA-256.",
        "request.user gives you the currently logged-in user everywhere!"
      ]
    },
    "body": "### Protecting Views with @login_required:\n```python\nfrom django.contrib.auth.decorators import login_required\nfrom django.shortcuts import render\n\n@login_required\ndef secret_vault(request):\n    return render(request, 'vault.html', {'user': request.user})\n```\n\n### Authentication Functions:\n- `authenticate(username=u, password=p)`: Verifies credentials.\n- `login(request, user)`: Starts a user session.\n- `logout(request)`: Terminates user session.",
    "tryItCode": "from datetime import datetime\n\n# Simulating Django user authentication session\nuser = {\n    \"username\": \"Affan Sayed\",\n    \"is_authenticated\": True,\n    \"is_staff\": True,\n    \"last_login\": datetime.now().strftime(\"%Y-%m-%d %H:%M:%S\")\n}\n\nif user[\"is_authenticated\"]:\n    print(f\"🔒 Access Granted to ByteVerse Secret Chamber for {user['username']}!\")\n    print(f\"Staff Permissions: {user['is_staff']} | Active Session: {user['last_login']}\")",
    "codeType": "python",
    "notes": "Django never stores raw passwords in the database; it uses salted one-way password hashes with thousands of hashing rounds.",
    "exercise": {
      "question": "Which decorator is used to restrict a Django view to authenticated users only?",
      "options": [
        "@authenticated",
        "@login_required",
        "@protect",
        "@auth_only"
      ],
      "correct": 1,
      "hint": "@login_required"
    }
  }
];

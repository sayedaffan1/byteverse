export const DJANGO_W3_LESSONS = [
  {
    id: 'dj_home',
    category: 'Django Tutorial',
    title: 'Django HOME',
    summary: 'Django is a Python framework that makes it easier to build web applications. Django follows the MVT design pattern.',
    eli5: {
      story: 'Imagine you want to build a giant theme park like Disneyland! You could build every roller coaster, ticket booth, snack stand, and security gate from zero scratch, or you could hire a world-famous master park team that already has pre-built roller coasters, security gates, and snack machines ready to turn on. Django is that master team for Python!',
      analogy: '🏰 The Disneyland Master Team: Django gives you login screens, admin dashboards, and database tools right out of the box so you don\'t have to reinvent the wheel.',
      rules: [
        'Model: The toy warehouse storage (database).',
        'View: The park worker who grabs toys from the warehouse.',
        'Template: The beautiful display window shown to visitors.'
      ]
    },
    body: `Django is especially suited for database-driven websites, and it comes with lots of built-in features, like an admin interface, default database (SQLite), and user authentication.

### Why Django?
- Ridiculously fast development.
- Fully loaded (ORM, Admin, Auth, Security).
- Reassuringly secure (CSRF, SQL Injection, XSS protections built-in).
- Exceedingly scalable (used by Instagram, Spotify, Pinterest).`,
    tryItCode: `# Start a new Django project in terminal:
# django-admin startproject my_website
# cd my_website
# python manage.py runserver

print("Django development server started at http://127.0.0.1:8000/")`,
    codeType: 'python',
    notes: 'Django was named after the jazz guitarist Django Reinhardt.',
    exercise: {
      question: 'Which architectural design pattern does Django follow?',
      options: ['MVC (Model-View-Controller)', 'MVT (Model-View-Template)', 'Flux', 'MVVM'],
      correct: 1,
      hint: 'In Django, the Template acts as the view layer.'
    },
    referenceTable: [
      { item: 'django-admin', description: 'Django\'s command-line utility for administrative tasks' },
      { item: 'manage.py', description: 'A command-line script created in each Django project' },
      { item: 'makemigrations', description: 'Creates new migrations based on the changes in models.py' },
      { item: 'migrate', description: 'Applies migrations to the database' }
    ]
  },
  {
    id: 'dj_urls',
    category: 'Django Tutorial',
    title: 'Django URLs & The Ticket Booth',
    summary: 'A clean, elegant URL scheme is an important detail in a high-quality Web application. Django lets you design URLs however you want.',
    eli5: {
      story: 'When visitors arrive at the theme park gate, there is a helpful Ticket Booth map with signs: "Rollercoaster this way!", "Ferris Wheel that way!", "Snack Bar over there!". In Django, urls.py is that Ticket Booth sign! When someone types /games/, it points them directly to the games view!',
      analogy: '🗺️ The Park Signpost: urls.py guides every visitor to the exact ride they are asking for.',
      rules: [
        'path("about/", views.about) connects the link to the view.',
        'Path converters like <int:id> catch numbers (like quest #42).',
        'urls.py is the very first file a web request visits!'
      ]
    },
    body: `To route a view to a URL, create a file named \`urls.py\` in the same folder as the \`views.py\` file.

\`\`\`python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('members/', views.members, name='members'),
]
\`\`\``,
    tryItCode: `from django.urls import path

# Simulating urls.py routing configuration
urlpatterns = [
    path('quests/', lambda r: "Quest List", name='quest_list'),
    path('quests/<int:id>/', lambda r, id: f"Quest #{id}", name='quest_detail')
]

print(f"Loaded {len(urlpatterns)} URL routes into Django URLConf.")`,
    codeType: 'python',
    tips: 'Giving names to your URL patterns allows you to reverse-resolve them cleanly with {% url "name" %} in templates.',
    exercise: {
      question: 'Which Django function is used to define an individual URL pattern in urls.py?',
      options: ['route()', 'url()', 'path()', 'link()'],
      correct: 2,
      hint: 'path() was introduced in Django 2.0+.'
    }
  }
];

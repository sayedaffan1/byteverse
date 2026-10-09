export const PYTHON_CURRICULUM = {
  title: 'Python: Modern Software Engineering (0% to 10,000,000%)',
  tagline: 'From variables and loops to OOP, decorators, generators, dunder magic, and concurrency.',
  overview: 'Python is a high-level, interpreted programming language celebrated for readable syntax and vast ecosystems across web development (Django, FastAPI), AI/Machine Learning, automation, and data science.',
  modules: [
    {
      level: '0% Beginner',
      levelCode: 'beginner',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      topics: [
        {
          id: 'py-basics-indentation',
          title: 'Syntax, Indentation & Data Types',
          summary: 'In Python, whitespace matters! Indentation replaces curly braces to define blocks of code. Variables are dynamically typed.',
          keyPoints: [
            'Primitives: int, float, str, bool, NoneType.',
            'Standard indentation is exactly 4 spaces per nesting level.',
            'f-strings (f"Hello {name}") provide high-performance, clean string formatting.'
          ],
          code: `hero_name = "ShadowByte"
level = 10
is_active = True
hp = 98.5

if level >= 10:
    print(f"Hero {hero_name} is ready for the Dungeon! (HP: {hp})")
else:
    print("Level up first before entering!")`,
          type: 'python',
          quiz: {
            question: 'How are code blocks (like the body of a loop or if statement) defined in Python?',
            options: ['With curly braces {}', 'With indentation (spaces/tabs)', 'With begin/end keywords', 'With square brackets []'],
            correct: 1,
            explanation: 'Python uses indentation to group statements into blocks.'
          }
        },
        {
          id: 'py-data-structures',
          title: 'Core Collections: Lists, Tuples, Dictionaries & Sets',
          summary: 'Master Python\'s built-in data structures: ordered mutable Lists, immutable Tuples, key-value Dicts, and unique Sets.',
          keyPoints: [
            'List: [1, 2, 3] mutable, ordered.',
            'Tuple: (1, 2, 3) immutable (cannot be modified after creation).',
            'Dict: {"key": "val"} O(1) hash table lookup.',
            'Set: {1, 2, 3} unique elements only, fast membership testing.'
          ],
          code: `# Dictionary lookup
player = {
    "username": "NeoKnight",
    "inventory": ["Health Potion", "Laser Blade"],
    "stats": {"str": 18, "dex": 14}
}

player["inventory"].append("Shield")
print(f"Player: {player['username']}")
print("Carrying:", len(player["inventory"]), "items")`,
          type: 'python',
          quiz: {
            question: 'Which Python collection type is immutable (cannot be altered after creation)?',
            options: ['List', 'Dictionary', 'Tuple', 'Set'],
            correct: 2,
            explanation: 'Tuples are immutable sequences; once created, their elements cannot be changed or added.'
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
          id: 'py-comprehensions',
          title: 'List, Dict & Set Comprehensions',
          summary: 'Write concise, idiomatic, and fast loops in a single expressive line: [expr for item in iterable if condition].',
          keyPoints: [
            'List comprehension: [x**2 for x in range(10) if x % 2 == 0].',
            'Dict comprehension: {user["id"]: user["name"] for user in users}.',
            'Much faster than manual .append() in for-loops due to C-level optimization.'
          ],
          code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers and square them in one line
even_squares = [n**2 for n in numbers if n % 2 == 0]

print("Even squares:", even_squares)`,
          type: 'python',
          quiz: {
            question: 'What is the output of `[x for x in range(5) if x > 2]`?',
            options: ['[0, 1, 2]', '[3, 4]', '[2, 3, 4, 5]', '[3, 4, 5]'],
            correct: 1,
            explanation: 'range(5) gives 0, 1, 2, 3, 4. Filtering for x > 2 yields [3, 4].'
          }
        },
        {
          id: 'py-args-kwargs-exceptions',
          title: '*args, **kwargs & Robust Exception Handling',
          summary: 'Write flexible functions accepting variable positional (*args) and keyword (**kwargs) arguments, with safe try/except/finally error handling.',
          keyPoints: [
            '*args collects extra positional arguments into a Tuple.',
            '**kwargs collects extra keyword arguments into a Dictionary.',
            'try/except/finally ensures resources (like file handles or DB connections) are safely cleaned up.'
          ],
          code: `def log_event(event_name, *tags, **metadata):
    print(f"Event: {event_name}")
    print(f"Tags: {tags}")
    print(f"Metadata: {metadata}")

log_event("USER_LOGIN", "auth", "security", user_id=42, ip="127.0.0.1")`,
          type: 'python',
          quiz: {
            question: 'What data type does **kwargs unpack into inside a function?',
            options: ['List', 'Tuple', 'Dictionary', 'Set'],
            correct: 2,
            explanation: '**kwargs unpacks keyword arguments into a standard Python dictionary.'
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
          id: 'py-oop-dunder-methods',
          title: 'OOP: Classes, Inheritance & Dunder Magic',
          summary: 'Master Object-Oriented Programming, encapsulation, inheritance, and Python special "dunder" methods (__init__, __str__, __repr__, __len__, __eq__).',
          keyPoints: [
            'self represents the instance of the class.',
            '__str__ defines human-readable string representation (used by print()).',
            '__len__ allows calling len(my_object) natively.',
            'Inheritance allows child classes to reuse and override parent behavior using super().'
          ],
          code: `class GuildMember:
    def __init__(self, username, rank="Novice"):
        self.username = username
        self.rank = rank
        self.xp = 0

    def gain_xp(self, amount):
        self.xp += amount
        return f"{self.username} now has {self.xp} XP!"

    def __str__(self):
        return f"[{self.rank}] {self.username}"

member = GuildMember("Alex", "Grandmaster")
print(str(member))
print(member.gain_xp(500))`,
          type: 'python',
          quiz: {
            question: 'Which special dunder method is executed when an object is instantiated?',
            options: ['__create__', '__init__', '__new__', '__start__'],
            correct: 1,
            explanation: '__init__ is the initializer constructor called when a new instance is created.'
          }
        },
        {
          id: 'py-decorators-generators',
          title: 'Decorators (@) & Generators (yield)',
          summary: 'Decorators wrap and enhance functions without modifying their source code. Generators produce lazy streams of values on demand with yield, saving huge memory.',
          keyPoints: [
            'A decorator is a function that takes a function and returns a wrapper function.',
            'yield pauses the generator function and produces a value, resuming on next().',
            'Generators allow iterating over millions of items with O(1) memory footprint.'
          ],
          code: `def timer_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"--- Calling {func.__name__} ---")
        result = func(*args, **kwargs)
        print("--- Execution Complete ---")
        return result
    return wrapper

@timer_decorator
def calculate_loot():
    return 15000

print("Loot:", calculate_loot())`,
          type: 'python',
          quiz: {
            question: 'What keyword turns a normal Python function into a memory-efficient Generator?',
            options: ['generate', 'yield', 'return stream', 'async produce'],
            correct: 1,
            explanation: 'The yield keyword turns a function into a generator that yields values on demand.'
          }
        }
      ]
    }
  ]
};

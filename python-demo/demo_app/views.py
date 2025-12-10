"""
Django Demo App Views
Демонстрація статичного аналізу коду з SonarQube
"""
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods


def index(request):
    """Головна сторінка."""
    return JsonResponse({
        'message': 'Welcome to Django CI/CD Demo',
        'status': 'ok'
    })


@require_http_methods(["GET"])
def health_check(request):
    """Перевірка стану сервісу."""
    return JsonResponse({
        'healthy': True,
        'service': 'django-demo'
    })


def calculate_sum(a: int, b: int) -> int:
    """
    Обчислює суму двох чисел.
    
    Args:
        a: Перше число
        b: Друге число
        
    Returns:
        Сума a та b
    """
    return a + b


def calculate_factorial(n: int) -> int:
    """
    Обчислює факторіал числа.
    
    Args:
        n: Невід'ємне ціле число
        
    Returns:
        Факторіал n
        
    Raises:
        ValueError: Якщо n < 0
    """
    if n < 0:
        raise ValueError("Факторіал не визначений для від'ємних чисел")
    if n <= 1:
        return 1
    return n * calculate_factorial(n - 1)


def find_user_by_id(user_id: int, users: list) -> dict:
    """
    Знаходить користувача за ID.
    
    Args:
        user_id: ID користувача
        users: Список користувачів
        
    Returns:
        Дані користувача або None
    """
    for user in users:
        if user.get('id') == user_id:
            return user
    return None

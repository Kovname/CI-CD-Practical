"""
Django Demo App Tests
Тести для демонстрації покриття коду
"""
from django.test import TestCase
from .views import calculate_sum, calculate_factorial, find_user_by_id


class CalculateSumTestCase(TestCase):
    """Тести для функції calculate_sum."""
    
    def test_positive_numbers(self):
        """Тест додавання позитивних чисел."""
        self.assertEqual(calculate_sum(2, 3), 5)
    
    def test_negative_numbers(self):
        """Тест додавання негативних чисел."""
        self.assertEqual(calculate_sum(-2, -3), -5)
    
    def test_zero(self):
        """Тест з нулем."""
        self.assertEqual(calculate_sum(0, 5), 5)
        self.assertEqual(calculate_sum(5, 0), 5)


class CalculateFactorialTestCase(TestCase):
    """Тести для функції calculate_factorial."""
    
    def test_factorial_of_zero(self):
        """Факторіал 0 = 1."""
        self.assertEqual(calculate_factorial(0), 1)
    
    def test_factorial_of_one(self):
        """Факторіал 1 = 1."""
        self.assertEqual(calculate_factorial(1), 1)
    
    def test_factorial_of_five(self):
        """Факторіал 5 = 120."""
        self.assertEqual(calculate_factorial(5), 120)
    
    def test_factorial_negative_raises_error(self):
        """Негативне число викликає помилку."""
        with self.assertRaises(ValueError):
            calculate_factorial(-1)


class FindUserByIdTestCase(TestCase):
    """Тести для функції find_user_by_id."""
    
    def setUp(self):
        """Підготовка тестових даних."""
        self.users = [
            {'id': 1, 'name': 'Alice'},
            {'id': 2, 'name': 'Bob'},
            {'id': 3, 'name': 'Charlie'}
        ]
    
    def test_find_existing_user(self):
        """Пошук існуючого користувача."""
        user = find_user_by_id(2, self.users)
        self.assertEqual(user['name'], 'Bob')
    
    def test_find_nonexistent_user(self):
        """Пошук неіснуючого користувача."""
        user = find_user_by_id(999, self.users)
        self.assertIsNone(user)
    
    def test_empty_list(self):
        """Пошук у порожньому списку."""
        user = find_user_by_id(1, [])
        self.assertIsNone(user)

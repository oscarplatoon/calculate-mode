import unittest
from calculate_mode import calculate_mode


class TestMode(unittest.TestCase):
    def test_case_1(self):
        self.assertEqual(calculate_mode([1, 2, 3, 3]), [3])

    def test_case_2(self):
        self.assertEqual(calculate_mode([4.5, 0, 0]), [0])

    def test_case_3(self):
        self.assertEqual(calculate_mode([1, 2, 3]), [1, 2, 3])

    def test_case_4(self):
        self.assertEqual(calculate_mode(["who", "what", "who"]), ["who"])

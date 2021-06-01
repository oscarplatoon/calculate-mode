# Write your own unit tests here!
import unittest
from calculate_mode import calculate_mode

class CalcModeTestCase(unittest.TestCase):

    def test_freq_count_one(self):
        self.assertEqual(calculate_mode([1,2,3]),[1,2,3])
    
    def test_freq_count_three(self):
        self.assertEqual(calculate_mode([1,2,3,3]),[3])
    
    def test_freq_count_zeroes(self):
        self.assertEqual(calculate_mode([4.5, 0, 0]),[0])

    def test_freq_count_one_halves(self):
        self.assertEqual(calculate_mode([1.5, -1, 1, 1.5]),[1.5])

    def test_freq_count_2(self):
        self.assertEqual(calculate_mode([1,1,2,2]),[1,2])

    def test_freq_count_words(self):
        self.assertEqual(calculate_mode(["who", "what", "where", "who"]),["who"])
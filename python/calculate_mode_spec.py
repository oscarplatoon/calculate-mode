# Write your own unit tests here!
from calculate_mode import calculate_mode
import unittest


class TestMode(unittest.TestCase):

    def test_for_mode(self):
        self.assertEqual(calculate_mode(['arf','arf','bark']), ['arf'])

    def test_for_multi_mode(self):
        self.assertEqual(calculate_mode([1,2,3]), [1,2,3])
    
    def test_for_multi_mode(self):
        self.assertEqual(calculate_mode([1,2,2,2,3,3,3]), [2,3])



if __name__ == '__main__':
    unittest.main()
import unittest
from calculate_mode import calculate_mode

class CalculateModeTest(unittest.TestCase):
    """test case for calculate mode"""

    def test_type(self):
        self.assertEqual(type(calculate_mode([1,2,3,3])),list)

    def test_1(self):
        self.assertEqual(calculate_mode([1,2,3,3]),[3])

    def test_2(self):
        self.assertEqual(calculate_mode([4.5, 0, 0]),[0])

    def test_3(self):
        self.assertEqual(calculate_mode([1.5, -1, 1, 1.5]),[1.5])

    def test_4(self):
        self.assertEqual(calculate_mode([1,1,2,2]),[1,2])

    def test_5(self):
        self.assertEqual(calculate_mode([1,2,3]),[1,2,3])

    def test_6(self):
        self.assertEqual(calculate_mode(["who", "what", "where", "who"]),["who"])


if __name__=='__main__':
    unittest.main()
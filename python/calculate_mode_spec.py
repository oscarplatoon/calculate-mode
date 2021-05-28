import unittest
from calculate_mode import calculate_mode


class TestCalculateMode(unittest.TestCase):

    """
    When you call calculate_mode you get a list back
    """

    def test_returns_a_list(self):
        self.assertTrue(type(calculate_mode([1, 2])) is list)
    """
    Test when called with lists returns the proper mode:
    calculate_mode([1,2,3,3]) => [3]
    calculate_mode([4.5, 0, 0]) => [0]
    calculate_mode([1.5, -1, 1, 1.5]) => [1.5]
    calculate_mode([1,1,2,2]) => [1,2]
    calculate_mode([1,2,3]) => [1,2,3]
    because all occur with equal frequency
    calculate_mode(["who", "what", "where", "who"]) => ["who"]
    """

    def test_outputs(self):
        self.assertTrue(calculate_mode([1, 2, 3, 3]) == [3])
        self.assertTrue(calculate_mode([4.5, 0, 0]) == [0])
        self.assertTrue(calculate_mode([1.5, -1, 1, 1.5]) == [1.5])
        self.assertTrue(calculate_mode([1, 1, 2, 2]) == [1,2])
        self.assertTrue(calculate_mode([1, 2, 3]) == [1, 2, 3])
        self.assertTrue(calculate_mode(["who", "what", "where", "who"]) == ["who"])

if __name__ == '__main__':
    unittest.main()

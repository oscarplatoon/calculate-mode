import unittest

from calculate_mode import calculate_mode

class TestCalculateMode(unittest.TestCase) :
      
    def test_calculate_0(self) :
        self.assertEqual(calculate_mode([1,2,3,3]), [3])
    
    def test_calculate_1(self) :
        self.assertEqual(calculate_mode([4.5, 0, 0]), [0])

    def test_calculate_2(self) :
        self.assertEqual(calculate_mode([1.5, -1, 1, 1.5]), [1.5])

    def test_calculate_3(self) :
        self.assertEqual(calculate_mode([1,1,2,2]), [1,2])
    
    def test_calculate_4(self) :
        self.assertEqual(calculate_mode([1,2,3]), [1,2,3])

    def test_calculate_5(self) :
        self.assertEqual(calculate_mode(["who", "what", "where", "who"]), ["who"])
    

if __name__ == '__main__':
    unittest.main()
def calculate_mode(array):
    mode_count = 0
    answer = []
    for x in array:
        if(array.count(x) > mode_count):
            answer = [x]
            mode_count = array.count(x)
        elif(array.count(x) == mode_count):
            answer.append(x)
            
    return list(set(answer))
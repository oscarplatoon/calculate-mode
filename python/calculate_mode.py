def calculate_mode(list):
    
    setOfList = set()
    

    for elem in list :
        if elem in setOfList :
            answer = []
            answer.append(elem)
            return answer
        else :
            setOfList.add(elem)
    return False


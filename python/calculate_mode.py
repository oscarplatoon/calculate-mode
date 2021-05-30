def calculate_mode():
    counter = 0
    num = arr[0]
      
    for i in arr:
        #Count method returns number of elements seen
        current_value = arr.count(i)
        #If element occurs is more than current counter, replace w/ index
        if current_value > counter:
            counter = current_value
            #Num used to reference element location with most occurence index
            num = i
  
    return num

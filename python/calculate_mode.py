def calculate_mode(input_list):
    # -Define a function which is called with INPUT_LIST
    # -Define a variable COUNTER
    # -Create a list ANSWER_LIST which will hold return values
    # -Create a list CANDIDATE_LIST which will receive all values
    # and count of occurrences. 
    # -Iterate through INPUT_LIST counting instances of unique values
    # -append the value and count to CANDIDATE_LIST
    # -Iterate through finding highest count and appending to ANSWER_LIST
    # - If multiple entries with same count, append all tie values to ANSWER_LIST


    answer_list = []
    candidate_list = []
    highest_value = 0

    for x in range(0, len(input_list)):
        occurrences = 0
        occurrences = input_list.count(input_list[x])
        push_list = []
        push_list.append(input_list[x])
        push_list.append(occurrences)
        candidate_list.append(push_list)
        if candidate_list[x][1] > highest_value:
            highest_value = candidate_list[x][1]

    # Add values that occurred the most number of times
    for x in range(0, len(candidate_list)):
        if candidate_list[x][1] == highest_value:
            if candidate_list[x][0] not in answer_list:
                answer_list.append(candidate_list[x][0])
    return answer_list

#print(calculate_mode([1,2,3,3]))

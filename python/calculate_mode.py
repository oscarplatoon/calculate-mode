def calculate_mode(array):
    #initialize dict, output list and default count variable
    mode_dict = {}
    output = []
    largest_count = 1

    #for range loop using count method to determine dict key values
    # if key count is greater than largest count
    # assign key count to leagest count
    for n in range(len(array)):
        mode_dict[array[n]] = array.count(array[n])
        if array.count(array[n]) > largest_count:
            largest_count = array.count(array[n])
    #edge case if input array highest count is 1
    # else append largest count keys to output list
    if largest_count == 1:
        return array
    else:
        for k in mode_dict:
            if mode_dict[k] == largest_count:
                output.append(k)
        return output



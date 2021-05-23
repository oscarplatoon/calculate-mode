def calculate_mode(initial_list):
    values_dict = {}
    list_to_return = []

    for element in initial_list:
        if element in values_dict:
            values_dict[element] += 1
        else:
            values_dict[element] = 1

    sorted_dict = dict(sorted(values_dict.items(),
                              key=lambda x: x[1], reverse=True))

    most_occurrences = list(sorted_dict.values())[0]
    for key, value in sorted_dict.items():
        if value == most_occurrences:
            list_to_return.append(key)

    return list_to_return

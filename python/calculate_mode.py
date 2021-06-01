# import statistics

# def calculate_mode(array):
#     (statistics.mode(array))

# calculate_mode(['arf','arf','bark'])

def calculate_mode(array):
    instance_dict = {}
    return_list = []
    for item in array:
        if item in instance_dict.keys():
            instance_dict[item] = (instance_dict[item] + 1)
        else:
            instance_dict[item] = 1
    mode_dict = (dict(sorted(instance_dict.items(), key=lambda x: x[1], reverse=True)))

    mode = list(mode_dict.values())[0]
    for key in mode_dict.items():
        if key[1] == mode:
            return_list.append(key[0])
    return return_list

calculate_mode([1,2,2,3,3])

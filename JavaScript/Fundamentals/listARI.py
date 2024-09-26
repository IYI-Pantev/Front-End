numbers = [3, 4]

# End 0(1)
numbers.append(5)
numbers.extend([6, 7])

# Beginning O(n)
numbers.insert(0, 0)


to_add = [1, 2]

for num in reversed(to_add):
    numbers.insert(1, num)
print(numbers)

print(7 in numbers)


# join
joined = ", ".join(map(str, numbers))  # Convert each number to a string and join

# testing
numbers = [1, -1, 2, 3]

# Using all() to check if every value in the list is greater than or equal to 0
all_positive = all(value >= 0 for value in numbers)

print(all_positive)  # Output: False


# filter

numbers = [1, -1, 2, 3]

# Using list comprehension to filter out numbers greater than or equal to 0
filtered = [n for n in numbers if n >= 0]

print(filtered)  # Output: [1, 2, 3]

# mapping

filtered = [1, 2, 3]

# Using list comprehension to map each number to a dictionary with key 'value'
items = [{'value': n} for n in filtered]

print(items)  # Output: [{'value': 1}, {'value': 2}, {'value': 3}]
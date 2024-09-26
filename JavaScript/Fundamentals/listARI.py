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
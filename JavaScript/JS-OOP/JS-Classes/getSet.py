class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Invalid radius")
        self._radius = value

# Example usage:
circle = Circle(5)
print(circle.radius)  # Output: 5
circle.radius = 10
print(circle.radius)  # Output: 10
# circle.radius = -1  # This will raise a ValueError
class Shape:
    def __init__(self, color):
        self.color = color

    def move(self):
        print('move shape')

class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius

    def draw(self):
        print('draw')

    # Overriding parent method
    def move(self):
        super().move()
        print('moving circle')

# Example usage:
c = Circle('black', 7)
c.move()  # Output: move shape
          #         moving circle
c.draw()  # Output: draw
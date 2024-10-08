class Circle:
    def __init__(self, radius):
        self.__radius = radius  # Private property
        self._move = lambda: print("move", self)  # Protected property

    def draw(self):
        self._move()
        print(f"drawing radius: {self.__radius}")

c = Circle(1)
c.draw()
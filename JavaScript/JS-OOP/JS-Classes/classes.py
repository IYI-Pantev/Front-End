class Circle:
    # class property 
    shape = 'oval'
    
    def __init__(self, radius):
        self.radius = radius

    def draw(self):
        print(f'drawing radius: {self.radius} ')

    @staticmethod
    def get_shape(cls):
        print(cls.shape)

c = Circle(3)

c.draw()
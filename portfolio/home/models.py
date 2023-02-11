from django.db import models

# Create your models here.
class yo(models.Model):
    name = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    age = models.IntegerField()
    education = models.CharField(max_length=100)
    aspiration = models.CharField(max_length=100) 
    
    def __str__(self):
        return f"{self.name} {self.lastname} esta interesado en contactarse contigo, su aspiracion en el trabajo es {self.aspiration} a pesar de su corta edad '{self.age}'"
    
class Tu(models.Model):
    programmer = 'Daniel'
    time = models.TimeField()
    
    def __str__(self):
        return f"Hola!, soy {self.programmer} y te contacto a las {self.time} porque me gustaria contactarme contigo el dia de mañana"
from django.db import models

class Task(models.Model):
    class Meta:
        ordering = ["id"]

    description = models.CharField(max_length=100)
    isCompleted = models.BooleanField(default=False)

    def __str__(self):
        return self.description

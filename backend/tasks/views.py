from rest_framework import generics
from .serializers import TaskSerializer
from .models import Task

class TaskView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


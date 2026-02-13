from django.http import JsonResponse

def login(request):
    return JsonResponse({'access': 'stub-token', 'user': {'id': 1}})

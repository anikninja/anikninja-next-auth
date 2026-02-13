from fastapi import APIRouter

router = APIRouter()

@router.post('/login')
async def login(data: dict):
    return {'access': 'stub-token', 'user': {'id': 1}}

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class Message(BaseModel):
    message: str

@app.get("/")
async def ping():
    return {"message": "ping pong"}


@app.get("/login")
async def login(token: str = Depends(oauth2_scheme)):
    if token != "secret-token":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return {"message": "Login successful"}


@app.get("/computer-vision")
async def root():
    return {"message": "ping pong"}


@app.get("/nlp")
async def root():
    return {"message": "ping pong"}


@app.get("/login")
async def root():
    return {"message": "ping pong"}



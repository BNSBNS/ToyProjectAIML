from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class Message(BaseModel):
    message: str


class MyData(BaseModel):
    temp: str


origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
async def computer_vision():
    return {"message": "ping pong"}


@app.get("/nlp")
async def nlp():
    return {"message": "ping pong"}


@app.post("/my-endpoint")
async def mock_endpoint(data: MyData):
    return {"message": data.temp}

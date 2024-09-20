from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson.json_util import dumps, ObjectId
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost", 
    "http://localhost:8000",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient("mongodb://db:27017/")
db = client.anime_db

class Anime(BaseModel):
    name: str
    year: int
    genre: str
    studio: str
    ongoing: bool
    seasons: list
    image:str
    autor:str
    sinopsis:str

@app.get("/animes")
async def get_animes():
    animes = db.animes.find()
    return dumps(animes)

@app.get("/animes/{anime_id}")
async def get_anime(anime_id: str):
    anime = db.animes.find_one({"_id": ObjectId(anime_id)})
    if anime is None:
        raise HTTPException(status_code=404, detail="Anime not found")
    return dumps(anime)


@app.post("/animes")
async def create_anime(anime: Anime):
    result = db.animes.insert_one(anime.dict())
    return {"_id": str(result.inserted_id)}

@app.put("/animes/{anime_id}")
async def update_anime(anime_id: str, anime: Anime):
    result = db.animes.update_one({"_id": ObjectId(anime_id)}, {"$set": anime.dict()})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Anime not found")
    return {"msg": "Anime updated"}

@app.delete("/animes/{anime_id}")
async def delete_anime(anime_id: str):
    result = db.animes.delete_one({"_id": ObjectId(anime_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Anime not found")
    return {"msg": "Anime deleted"}



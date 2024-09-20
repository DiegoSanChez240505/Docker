from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI()

# Configurar CORS
origins = [
    "http://localhost",
    "http://localhost:8080",
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

# Modelo para anime
class Anime(BaseModel):
    name: str
    description: Optional[str] = None
    episodes: Optional[int] = None
    genre: Optional[str] = None
    image: Optional[str] = None  # Campo para la imagen
    year: Optional[int] = None
    studio: Optional[str] = None
    ongoing: Optional[bool] = None
    seasons: Optional[List[dict]] = None

@app.get("/animes", response_model=List[Anime])
async def get_animes(search: Optional[str] = None):
    if search:
        animes = db.animes.find({"name": {"$regex": search, "$options": "i"}})
    else:
        animes = db.animes.find()
    return list(animes)

@app.get("/animes/{anime_name}", response_model=Anime)
async def get_anime(anime_name: str):
    anime = db.animes.find_one({"name": anime_name})
    if not anime:
        raise HTTPException(status_code=404, detail="Anime not found")
    return anime

@app.post("/animes")
async def create_anime(anime: Anime):
    # Comprobar si el anime ya existe
    if db.animes.find_one({"name": anime.name}):
        raise HTTPException(status_code=400, detail="Anime already exists")
    
    result = db.animes.insert_one(anime.dict())
    return {"_id": str(result.inserted_id)}

@app.put("/animes/{anime_name}")
async def update_anime(anime_name: str, anime: Anime):
    result = db.animes.update_one({"name": anime_name}, {"$set": anime.dict()})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Anime not found")
    return {"message": "Anime updated successfully"}

@app.delete("/animes/{anime_name}")
async def delete_anime(anime_name: str):
    result = db.animes.delete_one({"name": anime_name})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Anime not found")
    return {"message": "Anime deleted successfully"}

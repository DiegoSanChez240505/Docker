from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Flower(BaseModel):
    name: str
    count: int

# Simulamos una base de datos con una lista
inventory = []

@app.post("/flowers/", response_model=Flower)
def add_flower(flower: Flower):
    inventory.append(flower)
    return flower

@app.get("/flowers/", response_model=List[Flower])
def get_flowers():
    return inventory

@app.put("/flowers/{flower_name}", response_model=Flower)
def update_flower(flower_name: str, flower_update: Flower):
    for flower in inventory:
        if flower.name == flower_name:
            flower.count = flower_update.count
            return flower
    raise HTTPException(status_code=404, detail="Flower not found")

@app.delete("/flowers/{flower_name}", response_model=Flower)
def delete_flower(flower_name: str):
    global inventory
    for flower in inventory:
        if flower.name == flower_name:
            inventory.remove(flower)
            return flower
    raise HTTPException(status_code=404, detail="Flower not found")

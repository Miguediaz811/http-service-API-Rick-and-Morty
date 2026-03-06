import { Injectable } from '@angular/core';
import { Characters, RickAndMortyResponse } from '../interfaces/characters.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://rickandmortyapi.com/api/character";
  }

  getCharacters(): Observable<RickAndMortyResponse> {
    return this.http.get<RickAndMortyResponse>(this.url); 
  }
}

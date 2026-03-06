import { Component, OnDestroy, OnInit } from '@angular/core';
import { Characters, RickAndMortyResponse } from './interfaces/characters.interface';
import { CharactersService } from './services/characters.service';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  characters: Characters[] = [];
  private subscription: Subscription;

    constructor(private charactersService: CharactersService) {}

    ngOnInit(): void {
      this.subscription = this.charactersService
        .getCharacters()
        .pipe(
          map((character: RickAndMortyResponse) => {
            return character.results.map((character) => {
              return {
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                origin: character.origin,
                image: character.image,
              };
            });
          }),
        )
        .subscribe({
          next: (data) => {
            this.characters = data;
            console.log('Si cargó');
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log('Proceso completado');
          },
        });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}

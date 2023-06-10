import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [
  //   `
  //     h3 {
  //       color: purple;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  // pokemonList = [
  //   {
  //     name: 'Pikachu',
  //     gender: 'Female',
  //     age: 7,
  //   },
  //   {
  //     name: 'Charmander',
  //     gender: 'Male',
  //     age: 3,
  //   },
  // ];

  // trainerList = [
  //   {
  //     name: 'Ash',
  //     gender: 'Male',
  //     age: 5,
  //   },
  //   {
  //     name: 'Brock',
  //     gender: 'Male',
  //     age: 6,
  //   },
  // ];

  // onPokemonAdded(data: {name: string, gender: string, age:number}) {
  //   this.pokemonList.push({
  //     name: 'another Pokemon',
  //     gender: 'Female',
  //     age: Math.random() * 10,
  //   });
  // }

  // onTrainerAdded(data: {name: string, gender: string, age:number}) {
  //   this.trainerList.push({
  //     name: 'another Trainer',
  //     gender: 'Female',
  //     age: Math.random() * 10,
  //   });
  // }

  countArray = []
  intervalCount = 0;

  onGameStarted() {
    console.log(this.intervalCount)
    this.countArray.push(this.intervalCount);
    this.intervalCount++;
  }
}

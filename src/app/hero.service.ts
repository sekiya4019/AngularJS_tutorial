import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  getMessages(): void {
    this.messages = this.MessageService;
  }
  // getHeroes(): Observable<Hero[]> {
  //   // Todo: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

}

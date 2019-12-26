import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes'); // 取得資料後的通知訊息
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes id=${id}`); // 取得資料後的通知訊息
    return of(HEROES.find(h => h.id === id));
  }
}

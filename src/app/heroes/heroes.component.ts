import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];
  // selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //  this.selectedHero = hero;
  // }

  // 取得list清單
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // 這是同步寫法
    this.heroService.getHeroes().subscribe(h => this.heroes = h); // 這是非同步寫法，Observable.subscribe() 是關鍵的差異點
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  // 建構式注入
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(h => this.hero = h);
  }

  goBack(): void {
    this.location.back();
  }

}

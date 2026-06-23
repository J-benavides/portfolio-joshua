import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, T } from '../../shared/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent implements OnChanges {
  @Input() lang: Lang = 'en';
  t = T['en'];

  circuitNodes: [number, number][] = [
    [160, 180], [360, 80],  [560, 240], [760, 120], [960, 300],
    [1280, 190],[1080, 420],[120, 450], [280, 580], [480, 470],
    [1360, 560],[1160, 680],[1000, 540],[640, 360], [820, 500],
  ];

  ngOnChanges() {
    this.t = T[this.lang];
  }

  goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
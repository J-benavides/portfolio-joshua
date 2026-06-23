import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, T } from '../../shared/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent implements OnChanges {
  @Input() lang: Lang = 'en';
  t = T['en'];
  stats: { num: string; label: string }[] = [];
  cards: { iconType: string; color: string; glow: string; title: string; body: string }[] = [];

  ngOnChanges() {
      this.t = T[this.lang];
      this.stats = [
        { num: '1+',   label: this.t.about.stat1 },
        { num: '4',   label: this.t.about.stat2 },
        { num: '100%', label: this.t.about.stat3 },
      ];
    this.cards = [
      {
        iconType: 'target',
        color: '#00D9F5',
        glow: 'rgba(0,217,245,0.12)',
        title: this.t.about.mission.title,
        body:  this.t.about.mission.body,
      },
      {
        iconType: 'zap',
        color: '#4F8EF7',
        glow: 'rgba(79,142,247,0.12)',
        title: this.t.about.vision.title,
        body:  this.t.about.vision.body,
      },
      {
        iconType: 'heart',
        color: '#FF6B35',
        glow: 'rgba(255,107,53,0.12)',
        title: this.t.about.values.title,
        body:  this.t.about.values.body,
      },
    ];
  }
}
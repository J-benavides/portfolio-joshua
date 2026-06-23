import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, T, SKILLS } from '../../shared/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class SkillsComponent implements OnChanges {
  @Input() lang: Lang = 'en';
  t = T['en'];
  skillCards: { name: string; icon: string; color: string; techs: string[] }[] = [];

  ngOnChanges() {
    this.t = T[this.lang];
    this.skillCards = SKILLS.map((s) => ({
      name:  this.lang === 'en' ? s.name_en : s.name_es,
      icon:  s.icon,
      color: s.color,
      techs: s.techs,
    }));
  }
}
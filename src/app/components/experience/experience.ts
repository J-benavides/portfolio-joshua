import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, T, JOBS } from '../../shared/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class ExperienceComponent implements OnChanges {
  @Input() lang: Lang = 'en';
  t = T['en'];
  jobs = JOBS['en'];

  ngOnChanges() {
    this.t = T[this.lang];
    this.jobs = JOBS[this.lang];
  }
}
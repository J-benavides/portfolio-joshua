import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, T, PROJECTS } from '../../shared/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class ProjectsComponent implements OnChanges {
  @Input() lang: Lang = 'en';
  t = T['en'];
  projectList: {
    title: string;
    desc: string;
    stack: string[];
    demo: string;
    repo: string;
    image: string;
  }[] = [];

  ngOnChanges() {
    this.t = T[this.lang];
    this.projectList = PROJECTS.map((p) => ({
      title: p.title,
      desc:  this.lang === 'en' ? p.desc_en : p.desc_es,
      stack: p.stack,
      demo:  p.demo,
      repo:  p.repo,
      image: p.image,
    }));
  }
}
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lang, T } from '../../shared/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent implements OnChanges {
  @Input() lang: Lang = 'en';
  @Output() langChange = new EventEmitter<Lang>();

  menuOpen = false;
  t = T['en'];
  navLinks: { id: string; label: string }[] = [];

  ngOnChanges() {
    this.t = T[this.lang];
    this.navLinks = [
      { id: 'about',      label: this.t.nav.about },
      { id: 'skills',     label: this.t.nav.skills },
      { id: 'experience', label: this.t.nav.experience },
      { id: 'projects',   label: this.t.nav.projects },
      { id: 'contact',    label: this.t.nav.contact },
    ];
  }

  toggleLang() {
    this.langChange.emit(this.lang === 'en' ? 'es' : 'en');
  }

  goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
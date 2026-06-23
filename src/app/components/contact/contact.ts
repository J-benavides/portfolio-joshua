import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lang, T } from '../../shared/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent implements OnChanges {
  @Input() lang: Lang = 'en';
  t = T['en'];

  form = { name: '', email: '', message: '' };
  
  showAlert = false;
  alertMessage = '';

  ngOnChanges() {
    this.t = T[this.lang];
  }

  sendMessage() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      this.alertMessage = this.lang === 'es' 
        ? 'Por favor, completa todos los campos del formulario.' 
        : 'Please fill out all fields in the form.';
      
      this.triggerAlert();
      return;
    }

    const emailDestino = 'joshuabenagu@gmail.com';
    const asunto = `Portfolio Contact - ${this.form.name}`;
    
    const cuerpo = `Hola Joshua,\n\nHas recibido un nuevo mensaje desde tu portafolio web:\n\n` +
                   `Nombre: ${this.form.name}\n` +
                   `Correo de contacto: ${this.form.email}\n\n` +
                   `Mensaje:\n${this.form.message}\n\n` +
                   `Saludos.`;

    const mailtoUrl = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoUrl;

    this.form = { name: '', email: '', message: '' };
  }

  triggerAlert() {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
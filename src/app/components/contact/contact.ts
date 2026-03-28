import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { time } from 'console';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  sending = false;
  success = false;
  error = false;

  private fb = new FormBuilder();

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor() { }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      'service_mgxuexw',
      'template_vbx4plq',
      {
        name: this.form.value.name,
        email: this.form.value.email,
        time: new Date().toISOString(),
        message: this.form.value.message
      },
      'j2iE3pGH3Ar6YRB_D'
    )
      .then(() => {
        this.success = true;
        this.form.reset();
        this.sending = false;
      })
      .catch(() => {
        this.error = true;
        this.sending = false;
      });
  }
}

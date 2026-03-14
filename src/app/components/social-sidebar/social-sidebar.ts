import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-sidebar.html',
  styleUrl: './social-sidebar.css',
})
export class SocialSidebar {
  isShaking = false;

  triggerShake() {
    this.isShaking = true;

    setTimeout(() => {
      this.isShaking = false;
    }, 400);
  }

  resetShake() {
    this.isShaking = false;
  }
}

import { Component, Input } from '@angular/core';
import { SocialSidebar } from '../social-sidebar/social-sidebar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() sidebarRef!: SocialSidebar;
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { SocialSidebar } from "./components/social-sidebar/social-sidebar";
import { TechRibbon } from "./components/tech-ribbon/tech-ribbon";
import { Experience } from "./components/experience/experience";
import { About } from "./components/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Navbar,
    Hero,
    Projects,
    Footer, SocialSidebar, TechRibbon, Experience, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}

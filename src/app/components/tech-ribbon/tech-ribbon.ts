import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-ribbon',
  imports: [CommonModule],
  templateUrl: './tech-ribbon.html',
  styleUrl: './tech-ribbon.css',
})
export class TechRibbon {
  categories = [
    {
      name: 'Languages',
      items: ['java', 'py', 'php', 'ts', 'html', 'css', 'js']
    },
    {
      name: 'Frameworks',
      items: ['spring', 'angular']
    },
    {
      name: 'Databases',
      items: ['postgres', 'mysql', 'sqlite']
    },
    {
      name: 'Tools',
      items: ['git', 'maven', 'gradle']
    }
  ];

}

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
      items: ['java', 'py', 'php', 'ts', 'html', 'css', 'js', 'c', 'r']
    },
    {
      name: 'Frameworks',
      items: ['spring', 'angular', 'jquery', 'bootstrap']
    },
    {
      name: 'Databases',
      items: ['postgres', 'mysql', 'sqlite']
    },
    {
      name: 'Tools',
      items: ['git', 'maven', 'gradle', 'rabbitmq', 'docker', 'postman', 'npm']
    }
  ];

}

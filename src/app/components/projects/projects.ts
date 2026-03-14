import { Component, inject } from '@angular/core';
import { Github } from '../../core/services/github';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  private github = inject(Github);

  repos$ = this.github.getRepos();


}

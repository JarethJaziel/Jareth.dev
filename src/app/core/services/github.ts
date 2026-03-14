import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Github {

  private http = inject(HttpClient);

  private API = 'https://api.github.com/users/JarethJaziel/repos';

  getRepos() {
    return this.http.get<any[]>(this.API).pipe(
      map(repos =>
        repos
          .filter(repo => !repo.fork)
          .sort((a, b) =>
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
          )
          .slice(0, 6)
      )
    );
  }


}

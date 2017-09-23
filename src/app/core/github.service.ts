
import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import {
    Http,
    Headers,
    Response,
    XHRBackend
} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import {
    Observable,
    BehaviorSubject,
    Subject
} from 'rxjs';
import { InterceptorService } from 'ng2-interceptors';
import { FormatService } from './misc/format.service';

@Injectable()
export class GithubService {
    public githubUser: any;
    public repositoriesList: any[] = [];
    constructor(
        private http: InterceptorService,
        private formatService: FormatService
    ) {
    }
    public getUser(): Observable<any> {
        return this.http
        .get('/users/alvarosaburido')
        .map((res: Response) => {
              const user = res.json();
              this.githubUser = this.formatService.snakeToCamel(user);
              return this.githubUser;
         }).catch((error: any) => this.handleError(error));
    }
    public getRepositories(): Observable<any[]> {
        return this.http
        .get('/users/alvarosaburido/repos')
        .map((res: Response) => {
              const repositories = res.json();
              this.repositoriesList = repositories;
              repositories.forEach((repo) => {
                  this.getLastRelease(repo.name)
                  .subscribe((res2) => {
                    repo.version = res2;
                  });
              });
              return repositories;
         }).catch((error: any) => this.handleError(error));
    }
    public getLastRelease(repo: string): Observable<any> {
        return this.http
        .get(`/repos/alvarosaburido/${repo}/releases/latest`)
        .map((res: Response) => {
              const release = res.json();

              return release.tag_name;
         }).catch((error: any) => this.handleError(error));
    }
    /* public getUser(id: string): Observable<User[]> {
        return this.http
        .get('/users/' + id)
        .map((res: Response) => {
              const user = res.json();

              return user;
         }).catch((error: any) => this.handleError(error));
    }
    public createUser(user): Observable<User[]> {
        return this.http
        .post('/users/', JSON.stringify(user))
        .map((res: Response) => {
              const users = res.json();
              this.usersList = users;
              return users;
         }).catch((error: any) => this.handleError(error));
    }
    public editUser(user): Observable<User[]> {
        const userId = user._id;
        if (typeof user.avatar !== 'string') {
             user.avatar = user.avatar ? user.avatar._id : null;
        }
        delete user._id;
        delete user.password;
        return this.http
        .put('/users/' + userId, JSON.stringify(user))
        .map((res: Response) => {
            const editedUser = res.json();

            return editedUser;
         }).catch((error: any) => this.handleError(error));
    }
    public deleteUser(id: string): Observable<User[]> {
        return this.http
        .delete('/users/' + id)
        .map((res: Response) => {
              const user = res.json();

              return user;
         }).catch((error: any) => this.handleError(error));
    } */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}

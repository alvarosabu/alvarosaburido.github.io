import {
  SidebarService
} from '../core/sidebar/sidebar.service';
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  Action,
  Toolbar,
  ActionDropdown
} from 'ngx-canaima';
import { GithubService } from '../core/github.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'home.component.html',
  styleUrls: [
    './home.component.scss',
  ]
})
export class HomeComponent implements OnInit {
  public user: any;
  public repositories: any[] = [];
  public githubStats: any = [
    {
      value: 0,
      label: 'Repositories'
    },
    {
      value: 0,
      label: 'Followers'
    },
    {
      value: 0,
      label: 'Following'
    }
  ];
  public header = {
    bg: '../assets/img/arena-bg.jpg',
    customClass: 'home-header',
    parallax: true
  };
  constructor(
    public gitHubService: GithubService
  ) {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
    this.getStats();
    this.getRepositories();
  }
  /**
   * getStats
   *
   * @memberof HomeComponent
   */
  public getStats() {
    this.gitHubService.getUser()
    .subscribe((stats: any) => {
      console.log('Github', stats);
      this.user = stats;
      this.githubStats[0].value = stats.publicRepos;
      this.githubStats[1].value = stats.followers;
      this.githubStats[2].value = stats.following;
    });
  }
  /**
   * getRepositories
   *
   * @memberof HomeComponent
   */
  public getRepositories() {
    this.gitHubService.getRepositories()
    .subscribe((repositories: any) => {
      console.log('Repositories', repositories);
      this.repositories = repositories;
    });
  }
}

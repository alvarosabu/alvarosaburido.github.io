import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  AnimationTransitionEvent,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { AppState } from './app.service';
import { ToastyService, ToastyConfig } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from './core/navmenu/nav.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('pageContent', { read: ElementRef }) public elements: QueryList<any>;
  public authGuard: boolean;
  constructor(
    public appState: AppState,
    public translate: TranslateService,
    public navService: NavService,
    private router: Router,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    // Toasty Service config
    this.toastyConfig.theme = 'material';
    // Language Settings
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
    const browserLang: string = translate.getBrowserLang();
    // Init Navigation Service
    navService.init();
    // Watch for sidebar toggle

  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  public ngAfterViewInit() {
    this.router.events.subscribe((route: any) => {
      this.toolbarCheck();
      this.authGuard = !(route.url === '/login'
      || route.url === '/password-recovery' || route.url === '/');
    });
    /* if (this.router.url !== '/login' && this.router.url !== '/password-recovery') {

    } */

  }
  public toolbarCheck() {
    setTimeout(() => {
      this.elements.forEach((element) => {
        const toolbars = element.nativeElement.getElementsByClassName('toolbar');
        if (toolbars.length > 1) {
          toolbars[0].hidden = true;
        }else {
          toolbars[0].hidden = false;
        }
      });
     }, 1);
  }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

import { SortByPipe } from './misc/sortby.pipe';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { FormatService } from './misc/format.service';
import { MiscService } from './misc/misc.service';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import { HomeModule } from '../home/home.module';
import { NavbarModule } from './navbar/navbar.module';

import { NavService } from './navmenu/nav.service';
import { AuthModule } from './auth/auth.module';
import { GithubService } from './github.service';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthModule,
        NavbarModule,
        HomeModule,
        ToastyModule,
        Ng2BootstrapModule.forRoot(),
        Ng2PageScrollModule
    ],
    exports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthModule,
        NavbarModule,
        HomeModule,
        ToastyModule,
        Ng2BootstrapModule,
        Ng2PageScrollModule,
    ],
    declarations: [
    ],
    providers: [
        FormatService,
        MiscService,
        NavService,
        GithubService
    ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

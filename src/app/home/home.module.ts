import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './home.routes';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })

    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }

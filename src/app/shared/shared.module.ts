import { NgModule } from '@angular/core';
import {
    CommonModule
  } from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';
import {
  TranslateHttpLoader
} from '@ngx-translate/http-loader';
import { NgxCanaimaModule } from 'ngx-canaima';
import { DynamicFormsModule } from '../core/forms/dynamic-forms/dynamic-forms.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        NgxCanaimaModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
          }
        })
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        NgxCanaimaModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }

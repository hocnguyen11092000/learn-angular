import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PostComponent } from './components/post/post.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AboutComponent } from './components/about/about.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NgChartsModule } from 'ng2-charts';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
    AboutComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NgChartsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}

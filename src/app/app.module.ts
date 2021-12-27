import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppComponent } from './app.component';
import { ButtonComponent } from './global/components/button/button.component';
import { IconComponent } from './global/components/icon/icon.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonComponent } from './components/person/person.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component'


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconComponent,
    HeaderComponent,
    PersonComponent,
    PersonItemComponent,
    ModalFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

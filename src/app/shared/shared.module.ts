import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonLoadingComponent } from './components/button-loading/button-loading.component';
import { GeneralLoadingComponent } from './components/general-loading/general-loading.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonLoadingComponent, GeneralLoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonLoadingComponent,
    GeneralLoadingComponent
  ]
})
export class SharedModule { }

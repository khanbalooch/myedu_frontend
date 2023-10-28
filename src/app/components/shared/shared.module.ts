import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { ButtonComponent } from '../button/button.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent, FooterComponent, ButtonComponent]
})
export class SharedModule { }

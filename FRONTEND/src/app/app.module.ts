import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { TestFormComponent } from './test-form/test-form.component';
import { RecapFormComponent } from './recap-form/recap-form.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// Angular materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider'
// Angular form
import { ReactiveFormsModule } from '@angular/forms';
import { NationalPhoneNumberPipe } from './national-phone-number.pipe';
// WebService
import { HttpClientModule } from '@angular/common/http';
import { ShowProductComponent } from './show-product/show-product.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    TestFormComponent,
    RecapFormComponent,
    NationalPhoneNumberPipe,
    ShowProductComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

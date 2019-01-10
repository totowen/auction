import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [/*只能声明组件和管道*/
    AppComponent, NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent
  ],
  imports: [/*声明运行当前应用需要引入的模块*/
    BrowserModule,
    AppRoutingModule
  ],
  providers: [/*这里只能声明服务*/
  ],
  bootstrap: [AppComponent] /*声明主组件*/
})
export class AppModule { }

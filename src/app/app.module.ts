import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes:Routes=[
 {
 	path:'',
 	redirectTo:'Home',
 	pathMatch:'full'
 },
 {
	path:'Home',
 	component:HomeComponent
 },
 {
	path:'about',
 	component:AboutComponent
 },
 {
	path:'whatwedo',
 	component:WhatwedoComponent
 },
 {
	path:'career',
 	component:CareerComponent
 },
 {
	path:'contact',
 	 component:ContactComponent
 }
 ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WhatwedoComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    SlickCarouselModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

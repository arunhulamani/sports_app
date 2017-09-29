import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/Router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SportsNavbarComponent } from './sports-navbar/sports-navbar.component';
import { TeamService } from './team.service';
import { CricketeventComponent } from './cricketevent/cricketevent.component';
import { SportsTypeComponent } from './sports-type/sports-type.component';


@NgModule({
  declarations: [
    AppComponent,
    CricketeventComponent,
    SportsNavbarComponent,
    SportsTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: AppComponent},
      {path:'sports-type', component: SportsTypeComponent},
      {path:'cricket-events', component: CricketeventComponent}
    ])
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }

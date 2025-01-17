import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouteConfigModule } from '@this-dot/route-config';
import { FirstRouteComponent } from './components/first-route/first-route.component';
import { RouteTagsShowcaseComponent } from './components/route-tags-showcase/route-tags-showcase.component';
import { SecondRouteComponent } from './components/second-route/second-route.component';
import { RouteTagsShowcaseRoutingModule } from './route-tags-showcase-routing.module';

@NgModule({
  declarations: [FirstRouteComponent, SecondRouteComponent, RouteTagsShowcaseComponent],
  imports: [
    CommonModule,
    RouteConfigModule,
    RouteTagsShowcaseRoutingModule,
    MatButtonModule,
    MatButtonModule,
  ],
})
export class RouteTagsShowcaseModule {}

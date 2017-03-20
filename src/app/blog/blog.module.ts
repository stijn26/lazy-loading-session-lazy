
/**
 * Angular imports
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

/**
 * Component imports
 */
import { BlogComponent } from './blog.component';
import { LazyLoad4Component } from './lazy-loaded.components/lazy-load-4/lazy-load-4.component';
import { LazyLoad3Component } from './lazy-loaded.components/lazy-load-3/lazy-load-3.component';
import { LazyLoad2Component } from './lazy-loaded.components/lazy-load-2/lazy-load-2.component';
import { LazyLoad1Component } from './lazy-loaded.components/lazy-load-1/lazy-load-1.component';

/**
 * Module imports
 */

/**
 * Routing imports
 */
import { BlogRouting } from './blog.routing';

/**
 * Service imports
 */


@NgModule({
  declarations: [
    BlogComponent,
    LazyLoad1Component,
    LazyLoad2Component,
    LazyLoad3Component,
    LazyLoad4Component
  ],
  imports: [
    BlogRouting,
    CommonModule,
    FormsModule
  ],
  providers: []
})

export class BlogModule { }

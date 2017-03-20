import { LazyLoad4Component } from './lazy-loaded.components/lazy-load-4/lazy-load-4.component';
import { LazyLoad3Component } from './lazy-loaded.components/lazy-load-3/lazy-load-3.component';
import { LazyLoad2Component } from './lazy-loaded.components/lazy-load-2/lazy-load-2.component';
import { LazyLoad1Component } from './lazy-loaded.components/lazy-load-1/lazy-load-1.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

const BLOGROUTES: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'comp1',
    component: LazyLoad1Component
  },
  {
    path: 'comp2',
    component: LazyLoad2Component
  },
  {
    path: 'comp3',
    component: LazyLoad3Component
  },
  {
    path: 'comp4',
    component: LazyLoad4Component
  }
];

export const BlogRouting: ModuleWithProviders = RouterModule.forChild(BLOGROUTES);

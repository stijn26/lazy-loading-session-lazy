import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogModule } from './blog/blog.module';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashComponent } from './splash/splash.component';

const appRoutes: Routes  = [
  { path: '', component: SplashComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

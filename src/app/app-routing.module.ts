import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: '', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  { path: 'sign-in', loadChildren: './pages/auth/sign-in/sign-in.module#SignInPageModule' },
  { path: 'register-tourist', loadChildren: './pages/auth/register-tourist/register-tourist.module#RegisterTouristPageModule' },
  { path: 'register-guide', loadChildren: './pages/auth/register-guide/register-guide.module#RegisterGuidePageModule' },
  { path: 'dashboard', loadChildren: './pages/common/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'guide-dashboard', loadChildren: './pages/guide/guide-dashboard/guide-dashboard.module#GuideDashboardPageModule' },
  { path: 'tourist-dashboard', loadChildren: './pages/tourist/tourist-dashboard/tourist-dashboard.module#TouristDashboardPageModule' },
  { path: 'forgot-password', loadChildren: './pages/auth/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'verify-email', loadChildren: './pages/auth/verify-email/verify-email.module#VerifyEmailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

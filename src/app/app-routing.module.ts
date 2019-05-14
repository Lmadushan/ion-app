import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuideGuard } from './shared/guard/guide.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';

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

  //auth routes
  { path: '', loadChildren: './pages/auth/register/register.module#RegisterPageModule', canActivate: [SecureInnerPagesGuard] },
  { path: 'sign-in', loadChildren: './pages/auth/sign-in/sign-in.module#SignInPageModule', canActivate: [SecureInnerPagesGuard] },
  { path: 'register-tourist', loadChildren: './pages/auth/register-tourist/register-tourist.module#RegisterTouristPageModule', canActivate: [SecureInnerPagesGuard] },
  { path: 'register-guide', loadChildren: './pages/auth/register-guide/register-guide.module#RegisterGuidePageModule', canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', loadChildren: './pages/common/dashboard/dashboard.module#DashboardPageModule', canActivate: [SecureInnerPagesGuard] },
  { path: 'tourist-dashboard', loadChildren: './pages/tourist/tourist-dashboard/tourist-dashboard.module#TouristDashboardPageModule', canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', loadChildren: './pages/auth/forgot-password/forgot-password.module#ForgotPasswordPageModule', canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email', loadChildren: './pages/auth/verify-email/verify-email.module#VerifyEmailPageModule', canActivate: [SecureInnerPagesGuard] },
  
  //guide routes
  { path: 'guide-dashboard', loadChildren: './pages/guide/guide-dashboard/guide-dashboard.module#GuideDashboardPageModule', canActivate: [GuideGuard] },
  { path: 'add-location', loadChildren: './pages/guide/add-location/add-location.module#AddLocationPageModule', canActivate: [GuideGuard]},
  { path: 'add-packages', loadChildren: './pages/guide/add-packages/add-packages.module#AddPackagesPageModule', canActivate: [GuideGuard]},
  { path: 'add-rates', loadChildren: './pages/guide/add-rates/add-rates.module#AddRatesPageModule' , canActivate: [GuideGuard]},
  { path: 'manage-packages', loadChildren: './pages/guide/manage-packages/manage-packages.module#ManagePackagesPageModule', canActivate: [GuideGuard]},
  { path: 'tour-requests', loadChildren: './pages/guide/tour-requests/tour-requests.module#TourRequestsPageModule', canActivate: [GuideGuard]},
  { path: 'view-rating', loadChildren: './pages/guide/view-rating/view-rating.module#ViewRatingPageModule', canActivate: [GuideGuard]},
  { path: 'user-profile', loadChildren: './pages/guide/user-profile/user-profile.module#UserProfilePageModule', canActivate: [GuideGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

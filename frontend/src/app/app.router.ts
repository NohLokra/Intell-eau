import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomePageComponent } from './pages/home/home.component';
import { SettingsPageComponent } from './pages/settings/settings.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'settings', component: SettingsPageComponent },
    {path: "**", redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { GuardGuard } from '../../services/guard.guard';

const routes: Routes = [
  {
    component: MainPage,
    path: '',    
    children:[
      {
        path: ':id',
        loadChildren: () => import('../../folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: '',
        component : MainPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

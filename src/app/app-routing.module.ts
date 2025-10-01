import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ListEventComponent } from './layout/list-event/list-event.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'list',
    component: ListEventComponent,
    // children: [
    //   { path: 'test1', component: TestComponent },
    //   { path: 'test2', component: DataBindingComponent },
    // ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

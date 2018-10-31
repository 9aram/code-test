import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from '../Core/components/home/home.component';
import { BoardComponent } from '../Board/components/board/board.component';
import { BoardDetailComponent } from '../Board/components/board-detail/board-detail.component';
import { BoardCreateComponent } from '../Board/components/board-create/board-create.component';
import { BoardEditComponent } from '../Board/components/board-edit/board-edit.component';
import { NotFoundComponent } from '../Core/components/not-found/not-found.component';

const routes: Routes = [
  //{ path: '', component: BoardComponent },
   { path: '', redirectTo: '/boards', pathMatch: 'full' },
  { path: 'boards', component: BoardComponent },
  { path: 'board-details/:id', component: BoardDetailComponent },
  { path: 'board-create', component: BoardCreateComponent },
  { path: 'board-edit/:id', component: BoardEditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

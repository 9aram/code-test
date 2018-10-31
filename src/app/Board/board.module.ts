import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BoardComponent } from './components/board/board.component';
import { BoardDetailComponent } from './components/board-detail/board-detail.component';
import { BoardCreateComponent } from './components/board-create/board-create.component';
import { BoardEditComponent } from './components/board-edit/board-edit.component';
import { BoardService } from './services/board.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    BoardComponent,
    BoardDetailComponent,
    BoardCreateComponent,
    BoardEditComponent
  ],
  providers: [
    BoardService
  ]
})
export class BoardModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styles: []
})
export class BoardCreateComponent {

  board: any = {};

  constructor(private router: Router, private boardService: BoardService) { }

  saveBoard() {
    this.boardService.insertBoard(this.board)
      .subscribe((res: Board) => { this.router.navigate(['/boards']); }, (err) => console.log(err));
  }
}

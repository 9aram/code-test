import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: []
})
export class BoardComponent implements OnInit {

  boards: any;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getAllBoards()
      .subscribe((data: Board[]) => this.boards = data);
  }

}

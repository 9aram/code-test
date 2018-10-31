import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styles: []
})
export class BoardEditComponent implements OnInit {

  board: any;

  constructor(private router: Router, private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.getBoardDetails(this.route.snapshot.params['id']);
  }

  getBoardDetails(id: string) {
    this.boardService.getBoard(id)
      .subscribe((data: Board) => this.board = data);
  }

  updateBoard(id: string) {
    this.boardService.updateBoard(id, this.board)
      .subscribe((res: void) => this.router.navigate(['/boards']), (err) => console.log(err));
  }

}

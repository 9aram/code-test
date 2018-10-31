import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styles: []
})
export class BoardDetailComponent implements OnInit {

  board: any;

  constructor(private router: Router, private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.getBoardDetails(this.route.snapshot.params['id']);
  }

  getBoardDetails(id: string) {
    this.boardService.getBoard(id)
      .subscribe((data: Board) => this.board = data);
  }

  deleteBoard(id: string) {
    this.boardService.deleteBoard(id)
      .subscribe((res: void) => { this.router.navigate(['/boards']); }, (err) => console.log(err));
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Board } from '../models/Board';

@Injectable()
export class BoardService {

  constructor(private http: HttpClient) { }

  // GET ALL BoardS
  getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>('api/board');
  }

  // GET A Board
  getBoard(id: string): Observable<Board> {
    return this.http.get<Board>(`api/board/${id}`);
  }

  // SAVE A Board
  insertBoard(board: Board): Observable<Board> {
    return this.http.post<Board>('api/board', board);
  }

  // UPDATE A Board
  updateBoard(id: string, board: Board): Observable<void> {
    return this.http.put<void>(`api/board/${id}`, board);
  }

  // DELETE A Board
  deleteBoard(id: string): Observable<void> {
    return this.http.delete<void>(`api/board/${id}`);
  }

}

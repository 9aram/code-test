import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/Board';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {FileUploadModule} from "ng2-file-upload";


const URL = 'http://localhost:3000/api/board-file';

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styles: []
})
export class BoardCreateComponent {


  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});


  fileInfo = {
    originalname:'',
    filename:''
  }


  fileToUpload: any;
  board: any = {};

  constructor(private router: Router, private boardService: BoardService) {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem=(item, response, status, header)=> {
      this.fileInfo=JSON.parse(response);

    }


  }


  saveBoard() {
    console.log(this.fileInfo.originalname);
    console.log("saveBoard() started")
    this.boardService.insertBoard(this.board)
      .subscribe((res: Board) => { this.router.navigate(['/boards']); }, (err) => console.log(err));
    this.uploader.uploadAll()
        console.log("saveBoard() finished")
  }
}

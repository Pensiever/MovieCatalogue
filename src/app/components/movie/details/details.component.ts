import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Comment } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { CommentService } from 'src/app/services/comment.service';
import { NbDialogService } from '@nebular/theme';
import { NewCommentComponent } from '../../new-comment/new-comment.component';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userRole : string = sessionStorage.getItem("role")
  currentMovie : Movie
  commentList : Comment[] = []
  castToggled : boolean;
  commentToggled : boolean;
  currentUser : User;
  isAdmin : boolean;
  constructor(
    private _commentService : CommentService,
    private _route : ActivatedRoute,
    private _dialog : NbDialogService,
    private _authService : AuthService
      ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id']
    this.currentMovie = this._route.snapshot.data['movie']
    this._commentService.getByMovieId(Id).subscribe((datac : Comment[]) => this.commentList = datac)
    this.currentUser = this._authService.currentUser
    this.isAdmin = localStorage.getItem('role') == 'admin' ? true : false
  }

  castToggle() {
    this.castToggled = !this.castToggled
  }

  coToggle(){
    this.commentToggled = !this.commentToggled
  }

  addComment(){
    let ref = this._dialog.open(NewCommentComponent, {
      context :  {
        title : this.currentMovie.title,
        movieId : this.currentMovie.id
      },
      closeOnBackdropClick : true
    })

    ref.onClose.subscribe(() => {
      this._commentService.getByMovieId(this.currentMovie.id).subscribe((datac : Comment[]) => this.commentList = datac)
    })

  }

  deleteComment(id : number){
    this._commentService.delete(id).subscribe({ next : () =>
      this._commentService.getByMovieId(this.currentMovie.id).subscribe((datac : Comment[]) => this.commentList = datac)})
  }

}

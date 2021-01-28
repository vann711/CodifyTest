import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public comments:any;

  id: number;

  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.dataService.getComment(this.id)
    .subscribe(data=>this.comments=data);
  }

}

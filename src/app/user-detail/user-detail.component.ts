import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public userdetail: any;
  public posts: any;

  id: number;

  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.dataService.getUserDetail(this.id)
    .subscribe(data=>this.userdetail=data);

    this.dataService.getUserPost(this.id)
    .subscribe(data=>this.posts=data);
  }

  postdetail(id){
    this.router.navigateByUrl('/post/'+id);
  }

}

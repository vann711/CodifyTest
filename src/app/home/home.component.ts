import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts:any;
  public indivs=[];

  id: number;
  tag: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getPosts()
    .subscribe(data=>this.posts=data);
  }

  postdetail(id){
    this.router.navigateByUrl('/comment/'+id);
  }


}
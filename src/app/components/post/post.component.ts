import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public productList: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res
    })



  }

}

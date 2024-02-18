import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit {
  @Input() img:string = '';
  @Input() title:string = '';
  @Input() description:string = '';
  private id:null|string = '';
  

  constructor(
    private http:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http.paramMap.subscribe(value =>this.id = value.get('id'));
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id:string|null){
    const post = dataFake.filter(item => item.id == id);
    post.map(item => {
      this.img = item.photo;
      this.title = item.title;
      this.description = item.description;
    })
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-f',
  templateUrl: './search-f.component.html',
  styleUrls: ['./search-f.component.css']
})
export class SearchFComponent implements OnInit {

  searchName:string;
  @Output() searchOutput = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

}

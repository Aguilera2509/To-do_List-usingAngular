import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent implements OnInit{
  list:any[] = [];
  filteredList:string[] = [];
  copyTitles:string[] = [];

  constructor( private localStorage:LocalstorageService ){}

  ngOnInit(): void {
    this.loadData();
  };

  loadData(): void{
    const value:string[] = JSON.parse(this.localStorage.getItem("AllTitlesNotesUser")!);

    if(value === null) return;

    value.forEach(el => {
      this.list.push( JSON.parse(this.localStorage.getItem(el)!) );
    });

  };

  removeData(key:string){
    this.localStorage.removeItem(key);

    this.copyTitles = [];

    this.filteredList = this.list.filter(el => el.title !== key);
    this.filteredList.forEach((el:any) => this.copyTitles.push(el.title));

    this.list = this.filteredList;

    localStorage.setItem("AllTitlesNotesUser", JSON.stringify(this.copyTitles)!);
  };

  handleChangeToSave(dataList:any){
    this.localStorage.setItem(dataList.title, JSON.stringify(dataList) );
  };
 
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-form-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.css'
})
export class FormCardComponent implements OnInit{

  dataUser = {
    title: "",
    comment: "",
    completed: false
  };

  allTitles:any[] = [];

  constructor( private localStorage:LocalstorageService ){}

  ngOnInit(): void {
    this.loadData();
  };

  loadData(): void{
    const value:string[] = JSON.parse(this.localStorage.getItem("AllTitlesNotesUser")!);

    if(value === null) return;

    this.allTitles = value;
  };
 
  onSubmit(){
    this.allTitles.push(this.dataUser.title);

    this.localStorage.setItem("AllTitlesNotesUser", JSON.stringify(this.allTitles));
    this.localStorage.setItem(this.dataUser.title, JSON.stringify(this.dataUser));

    window.location.reload();
  };

  clearInput(){
    this.dataUser.title = "";
    this.dataUser.comment = "";
  };

  clearAllData(){
    this.localStorage.clear();
    window.location.reload();
  };
}

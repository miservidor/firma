import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent implements OnInit {

  constructor() { 
    
  }
  
  points = [];
  signatureImage;

  saveImage(){
    var objimg ={'img': this.signatureImage};
    console.log(objimg);
    var newobj = JSON.stringify(objimg);
    console.log(newobj);
    localStorage.setItem('sign', newobj);
  }

  loadImage(){
    var objtem = localStorage.getItem('sign');
    this.signatureImage = JSON.parse(objtem).img;
  }

  showImage(data) {
    this.signatureImage = data;
    this.saveImage();
  }

  ngOnInit() {
  }

}

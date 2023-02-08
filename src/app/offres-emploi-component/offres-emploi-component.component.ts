import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  title:string = "welcome";
  listeEmploi!: Emploi[];
  pip!: number;

  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference:"ab",titre:"ab",entreprise:"focus",etat:true},
      {reference:"abb",titre:"abb",entreprise:"actia",etat:false},
      {reference:"abbb",titre:"abbb",entreprise:"focus",etat:false}
    ]
  }
postuler(i:number){
  this.listeEmploi[i].etat==false;
}

bilan(){
  this.pip=this.listeEmploi.filter(e=>e.etat===false).length;
  console.log(this.pip);
}
recherche(value:string){
  let resultats = [];
  for (const emploi of this.listeEmploi){
    if(value==emploi.entreprise){
      resultats.push(emploi);
      
    }
  }
  this.listeEmploi = resultats;
  return resultats;
}
}

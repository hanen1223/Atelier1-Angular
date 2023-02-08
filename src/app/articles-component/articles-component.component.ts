import { article } from './../model/article';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  title='les articles du jour';
  listeArticles!:article[];
  numberOfArticles!: number;
  constructor() { }

  ngOnInit(): void {
    this.listeArticles=[
      {titre:"Le championnat du monde",contenu:"Le champion du monde de cette année est ",auteur:"Med Taher",date:"12/12/2005",categorie:"Sport"}, 
      {titre:"Les nouveaux parents",contenu:"Les nouveaux parents. ",auteur:"Ahmed Said",date:"11/11/2018",categorie:"Education"},
      {titre:"Comment écrire votre CV",contenu:"Pour réussir a décraucher un emploi...", auteur:"Marie Elsa",date:"02/04/2017",categorie:"Travail"}
     ]
    this.numberOfArticles = this.listeArticles.length;
  }

}

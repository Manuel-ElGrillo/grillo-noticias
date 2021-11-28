import { Component } from '@angular/core';
import { Article, RespuestaTopHeadlines } from '../interfaces/interfaces';
import { NoticiasService } from '../services/noticias.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasService.getTopHeadlines()
    .subscribe( (respuesta: RespuestaTopHeadlines) => {
      // console.log("noticias", respuesta);
      this.noticias.push(...respuesta.articles);
    });
  }

}

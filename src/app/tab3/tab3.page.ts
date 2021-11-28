import { Component } from '@angular/core';
import { Article, RespuestaTopHeadlines } from '../interfaces/interfaces';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  noticiasGlobales: Article[] = [];

  constructor(private noticiasServices: NoticiasService) {}

  ngOnInit() {
    this.noticiasServices.getGlobales().subscribe( (respuesta: RespuestaTopHeadlines) => {
      this.noticiasGlobales.push( ...respuesta.articles);
    });
  }

}

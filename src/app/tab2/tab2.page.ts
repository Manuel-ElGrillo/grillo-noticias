
import { Component } from '@angular/core';
import { Article, RespuestaTopHeadlines } from '../interfaces/interfaces';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categorias: string[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    // this.noticiasService.getCategorias( this.categorias[0] )
    //   .subscribe( (respuesta: RespuestaTopHeadlines) => {
    //     console.log(respuesta);
    //     this.noticias.push( ...respuesta.articles );
    //   })

    this.cargarNoticias(this.categorias[0]);

  }

  cambiarCategoria(event) {

    // Para reiniciar el arreglo de noticias por categorías
    this.noticias = [];

    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string) {

    // Mismo código que en el ngOnInit excepto por el argumento de getCategorias
    
    this.noticiasService.getCategorias( categoria )
      .subscribe( (respuesta: RespuestaTopHeadlines) => {
        // console.log(respuesta);
        this.noticias.push( ...respuesta.articles );
      })
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() index:number;

  constructor( public actionSheetController: ActionSheetController ) { }

  ngOnInit() {}

  abrirNoticia() {
    console.log("URL de la noticia: " + this.noticia.url);

    //Nota de desarrollo

    //Desafortunadamente el plug in de Ionic presenta fallas para abrir la URL en el navegador
  }

  async mostrarSheet() {
    const actionSheet = await this.actionSheetController.create({
      
      buttons: [{
        text: 'Compartir',
        icon: 'share-social-outline',
        handler: () => {
          // console.log('Share clicked');
        }
      }, {
        text: 'Añadir a favoritos',
        icon: 'star-outline',
        handler: () => {
          // console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
  }



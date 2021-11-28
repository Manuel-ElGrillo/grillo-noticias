# grillo-noticias
App de noticias desarrollada con Ionic/Angular

Debes usar tu propia apiKey proporcionada en https://newsapi.org para que la aplicación funcione

La apiKey y apiURL deben ser integradas en el componente services/noticias.service.ts

Reemplaza la variable apiKey por la asignada en https://newsapi.org en las URL de las funciones getTopHeadlines, getCategorias y getGlobales

La apiURL debe ser reemplazado por "https://newsapi.org/v2"

 ANTES:
 
 getTopHeadlines() {
    return this.http.get(`${apiURL}/everything?q=tesla&sortBy=publishedAt&apiKey=${apiKey}`);
  }
 
 DESPUÉS:

getTopHeadlines () {
  return this.http.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=tu-api-key-asignada`);
}

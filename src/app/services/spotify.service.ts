import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log('spoty');
  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA03LQv1SIUsC2CNL6n7ML2Zy6CSrhACv7IImdKoNy0C4zVrLC5EwMbq-8YsgdSGCN4qrzfO5rjtja-Mv8'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items ));
  }

  getArtista( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));

  }
}

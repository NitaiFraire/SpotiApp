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
      'Authorization': 'Bearer BQCsHuTl-tBt73QUNzPxzB4qM8WXU4ozON7Oyvb4zXL7GxsV6kcACNPzqi16ujhz-_yVVkje_2oPL5oSdVU'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));

  }


  getArtista( id: string ){

    return this.getQuery(`artists/${id}`);
                // .pipe( map( data => data['artists'].items ));

  }
}

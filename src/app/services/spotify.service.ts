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
      'Authorization': 'Bearer BQC9hOaitWBPcN1Bpkcq6yQP4Esd0_pv6lW_7HapUHO4KUHs2lg-5iQUrjPOASpcGdSTyvK4PDQxi8ZhSrE'
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

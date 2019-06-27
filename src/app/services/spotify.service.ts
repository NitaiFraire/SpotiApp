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

  getNewReleases() {

    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQC9hOaitWBPcN1Bpkcq6yQP4Esd0_pv6lW_7HapUHO4KUHs2lg-5iQUrjPOASpcGdSTyvK4PDQxi8ZhSrE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map( data => data['albums'].items ));
  }

  getArtista( termino: string ){

    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQC9hOaitWBPcN1Bpkcq6yQP4Esd0_pv6lW_7HapUHO4KUHs2lg-5iQUrjPOASpcGdSTyvK4PDQxi8ZhSrE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
                    .pipe( map( data => data['artists'].items ));
  }
}

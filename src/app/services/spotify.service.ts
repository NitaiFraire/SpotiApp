import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log('spoty');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCU6YnWN6ir4qtbOIGyln3B55FrM63gguRZEfiAJd6kktnmMF5BwtFOz67cBfCRo-UXSTzprmhJNxQceFs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista( termino: string ){

    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCU6YnWN6ir4qtbOIGyln3B55FrM63gguRZEfiAJd6kktnmMF5BwtFOz67cBfCRo-UXSTzprmhJNxQceFs'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}

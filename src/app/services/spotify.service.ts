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
        'Authorization': 'Bearer BQAyLoqCchSZGOKKRTbkmXSarZHwKPF9gY0vOCcsSjpXacg93NC5OMxfchXlN2NM0Fux8wmLqC1QnhsabDA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}

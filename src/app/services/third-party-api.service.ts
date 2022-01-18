import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {
  apiKey = "AIzaSyDNUj5571Y_KPRYkjhoRh8gXZur4jhISFk"
  baseUrl = "https://www.googleapis.com/youtube/v3/"
  constructor(private http: HttpClient) { }

  getVideosCategories(): Observable<any> {
    const apiUrl = `${this.baseUrl}videoCategories?part=snippet&regionCode=in&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }

  getPopularVideos(): Observable<any> {
    const apiUrl = `${this.baseUrl}videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=10&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }

  getVideosByCategory(categoryId): Observable<any> {
    const apiUrl = `${this.baseUrl}videos?part=snippet&regionCode=in&maxResults=10&videoCategoryId=${categoryId}&chart=mostPopular&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }
  searchVideos(searchKey): Observable<any> {
    const apiUrl = `${this.baseUrl}search?part=snippet&maxResults=10&q=${searchKey}&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }
}

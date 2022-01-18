import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://localhost:44385/";

  constructor(private httpClient: HttpClient) { }
  public sendPostRequest(reqBody, url) {
    return this.httpClient.post(this.REST_API_SERVER + url ,reqBody);
  }

  get(url) {
    return this.httpClient.get(this.REST_API_SERVER + url)
  }
}

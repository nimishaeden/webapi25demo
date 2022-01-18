import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = "https://localhost:44385/";

  constructor(private httpClient: HttpClient,private  router:Router) { }
  public sendPostRequest(user){
    const option ={
        headers: new HttpHeaders(),
        responseType:"text" as const
      }
    return this.httpClient.post(this.REST_API_SERVER+"api/user/login",user,option);
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem("token")
  }

  logOut(): void {
    sessionStorage.clear()
    this.router.navigate(["login"])
  }

  getUserId(): any {
    const token = sessionStorage.getItem("token");
    const decodedToken: any = jwt_decode(token)
    return Number(decodedToken.unique_name)
  }
  Deleteid(id):any{
    return this.httpClient.delete(this.REST_API_SERVER+`api/favorites/${id}`);


  }

}



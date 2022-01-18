import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  videos = []
  constructor(private loginService: LoginService, private http: DataService,routeservice:Router) { }

  ngOnInit(): void {
    this.http.get(`api/favorites/${this.loginService.getUserId()}`).subscribe((res: any[]) => {
      this.videos = res
      console.log(this.videos)
    })
  }
  logout(){
    this.loginService.logOut()
  }
// navigatetohome(){
//   this.routeservice.navigate(["home"])
// }
  remove(videoId):void{
    this.loginService.Deleteid(videoId).subscribe((res: any[]) => {
console.log(res);
      this.ngOnInit();
    })

  }
   

    
    
}


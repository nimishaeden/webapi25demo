import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { LoginService } from '../services/login.service';
import { ThirdPartyApiService } from '../services/third-party-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories = []
  videos = []
  searchKey=""
  constructor(private thirdPartyApiService: ThirdPartyApiService,private loginService:LoginService, private http: DataService,private routeservice: Router,private toast: ToastrService) { }

  ngOnInit(): void {
    // this.getCategories()
    // this.getPopularVideos()
  }

  getCategories(): void {
    this.thirdPartyApiService.getVideosCategories().subscribe(res => {
      console.log(res)
      this.categories = res.items
    })
  }

  getPopularVideos(): void {
    this.thirdPartyApiService.getPopularVideos().subscribe(res => {
      this.videos = res.items
      console.log(res)
     })
  }

  getVideosByCategory(categoryId): void {
    this.thirdPartyApiService.getVideosByCategory(categoryId).subscribe(res => {
      this.videos = res.items
      console.log(res)
    })
  }
  search(){
    console.log(this.searchKey)
    this.thirdPartyApiService.searchVideos(this.searchKey).subscribe(res => {
      this.videos = res.items
      console.log(res)


    })

  }
  logout(){
    this.loginService.logOut()
  }

  addFav(video) {
    const json = {
      userId: this.loginService.getUserId(),
      channelTittle: video.snippet.channelTitle,
      tittle: video.snippet.title,
      thumbna: video.snippet.thumbnails.high.url,
      videoId:video.id.videoId
    }
    this.http.sendPostRequest(json, "api/favorites").subscribe(res => {
      console.log(res)
      this.toast.success("Added to favourites");
    }

    ,err => {
      this.toast.error('Already Added')
    })
  }
  navigatetofav(){
    this.routeservice.navigate(["favorite"])
  }
navigatetosearch(){
  this.routeservice.navigate(["search"])
}

}



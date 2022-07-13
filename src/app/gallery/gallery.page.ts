import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public keyword:string;
  public currentPage:number=1;
  public size:number=10;
  private dataImages=[];
  private totalPages: number=0;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

    onLoadImages() {
      this.dataImages=[];
      this.currentPage=1;
      this.doSearch();
    }
    doSearch(){
      this.httpClient.get("https://pixabay.com/api/?key=12680557-4400cfb245455f4162a2159a3&q="+
          this.keyword+"&per_page="+
          this.size+"&page="+this.currentPage)
          .subscribe(data=>{
            data['hits'].forEach(image=>{
              this.dataImages.push(image);
            });
            this.totalPages=data['totalHits']/this.size;
          },error1 => {
            console.log(error1);
          });
    }

  loadData(evt) {
    if (this.currentPage<this.totalPages){
      console.log(this.currentPage+'/'+this.totalPages);
      ++this.currentPage;
      this.doSearch();
      evt.target.complete();
    }
    else {
      evt.target.disabled=true;
    }
  }
}

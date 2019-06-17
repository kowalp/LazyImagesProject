import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../shared/service/getData.service';
export interface ImageData {
  AlbumId?: number;
  Id: number;
  ThumbnailUrl: string;
  Title: string;
  Url: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data = [];
  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getContent()
    .subscribe(
      (res) => {
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            const element = {
              AlbumId: res[key].albumId,
              Id: res[key].id,
              Url: res[key].url,
              Title: res[key].title,
              ThumbnailUrl: res[key].thumbnailUrl,
            };
            this.data.push(element);
          }
        }
      }
    );
  }

}

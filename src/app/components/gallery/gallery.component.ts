import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../shared/service/backend/gallery.service';
import {GalleryModel} from '../../shared/service/models/gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos: GalleryModel[];

  constructor(private _galleryService: GalleryService) {
    this.init();
  }

  init() {
    this._galleryService.findAllPhotos().subscribe(next => {
      this.photos = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit(): void {
  }

}

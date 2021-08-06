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
  load: boolean = false;

  constructor(private _galleryService: GalleryService) {
    this.init();
  }

  init() {
    this.load = true;
    this._galleryService.findAllPhotos().subscribe(next => {
      this.photos = next;
      this.load = false;
    }, error => {
      console.error(error);
      this.load = false;
    });
  }

  ngOnInit(): void {
  }

}

import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import swiper from 'Swiper';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  swipe: swiper;
  imgList = [
    '../../assets/images/banner.jpg',
    '../../assets/images/banner.jpg',
    '../../assets/images/banner.jpg',
    '../../assets/images/banner.jpg',
    '../../assets/images/banner.jpg'
  ];
  faChevronLeft = faChevronLeft

  constructor() { }

  ngAfterViewInit() {
    this.swipe = new swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        progressbarFillClass: 'progress-fill'
      }
    })
  }

}

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
let el = document.querySelector('.pswp');

const images = [{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0075.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0299.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0304.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0374.jpg',
  w: 1024,
  h: 1536,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9644.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9680.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9826.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9927.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9963.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0304.jpg',
  w: 1024,
  h: 717,
}];

const show = () => {
 const gallery = new PhotoSwipe(el, PhotoSwipeUI_Default, images);
 gallery.init();
};

export default { show };

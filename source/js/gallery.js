import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
let el = document.querySelector('.pswp');

const images = [{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0075.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0070.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0119.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0155.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0166.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0184.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0211.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0335.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0366.jpg',
  w: 1024,
  h: 1536,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0299.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0490.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0663.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9720.jpg',
  w: 1024,
  h: 1665,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0553.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9936.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9948.jpg',
  w: 1024,
  h: 1626,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-0035.jpg',
  w: 1024,
  h: 717,
},{
  src: 'images/gallery/DeeNBrentIowaEngagement2017-9955.jpg',
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
}];

const show = () => {
 const gallery = new PhotoSwipe(el, PhotoSwipeUI_Default, images);
 gallery.init();
};

export default { show };

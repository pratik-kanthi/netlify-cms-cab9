// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import '~/assets/scss/main.scss';

import '~/assets/css/aos.css';
import DefaultLayout from '~/layouts/Default.vue';
import ImageBlock from '~/components/ImageBlock.vue';
import lottie from 'lottie-web';

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.component('ImageBlock', ImageBlock);
    if (isClient) {
        window.$ = require('jquery');
    }
    Vue.prototype.$lottie = lottie;

}

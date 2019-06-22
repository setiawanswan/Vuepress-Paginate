import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default ({ isServer }) => {
  if (!isServer) {
    // Register jQuery
    window.$ = window.jQuery = require('jquery')
    // Register your jQuery plugin
    require('owl.carousel')
    require('owl.carousel/dist/assets/owl.carousel.min.css')
    require('owl.carousel/dist/assets/owl.theme.default.min.css')
  }
}

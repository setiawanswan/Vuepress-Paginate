<template>
  <scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore"></scroll-loader>

  <!-- Replace the default loading animation with slot -->
  <scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore">
    <div>Loading...</div>
  </scroll-loader>
</template>

<script>
import Vue from 'vue'
import ScrollLoader from 'vue-scroll-loader'

Vue.use(ScrollLoader)

new Vue({
    el: '#app',
    data() {
      return {
        loadMore: true,
        page: 1,
        pageSize: 9,
        images: [],
      }
    },
    methods: {
      getImagesInfo() {
        axios.get('https://api.example.com/', {
            params: {
              page: this.page++,
              per_page: this.pageSize,
            }
          })
          .then(res => {
            this.images.concat(res.data)
            
            // Stop scroll-loader
            res.data.length < this.pageSize && (this.loadMore = false)
          })
          .catch(error => {
            console.log(error);
          })
      }
    },
    mounted() {
      this.getImagesInfo()
    }
  });
</script>

<style>
</style>

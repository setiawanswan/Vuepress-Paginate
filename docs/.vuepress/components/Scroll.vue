<template>
  <div class="container blog-two">
    <div class="row">
      <div class="col-md-10 mb-3">
        <div class="flex-container">
          <div class="hacker-news-list">
            <div class="hacker-news-header">
              <span class="title-in-content-bottom">Another Blog</span>
            </div>
            <div class="hacker-news-item card card-two" v-for="(item, key) in list">
              <span class="num text-in-content-bottom" v-text="key + 1"></span>
              <p class="href-title">
                <a target="_blank" :href="item.url" v-text="item.title"></a>
              </p>
              <p>
                <small class="comment">
                  <span v-text="item.points"></span>
                  points by
                  <a
                    target="_blank"
                    :href="'https://news.ycombinator.com/user?id=' + item.author"
                    v-text="item.author"
                  ></a>
                  |
                  <a
                    target="_blank"
                    :href="'https://news.ycombinator.com/item?id=' + item.objectID"
                    v-text="item.num_comments + ' comments'"
                  ></a>
                </small>
              </p>
            </div>
            <infinite-loading @infinite="infiniteHandler">
              <span slot="no-more">There is no more Hacker News :(</span>
            </infinite-loading>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";

const api = "http://hn.algolia.com/api/v1/search_by_date?tags=story";

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    infiniteHandler($state) {
      axios
        .get(api, {
          params: {
            page: this.list.length / 20 + 1
          }
        })
        .then(({ data }) => {
          if (data.hits.length) {
            this.list = this.list.concat(data.hits);
            $state.loaded();
            if (this.list.length / 20 === 10) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        });
    }
  },
  components: {
    InfiniteLoading
  }
};
</script>

<style>
.hacker-news-header{
  padding: 10px 10px;
  margin-top: 30px;
  float: left;
  font-family: Open Sans, sans-serif;
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(320deg, #6dcff6, #3d2e92);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.href-title {
  padding: 10px;
}

.comment {
  padding: 10px;
}
.title-in-content {
  font-size: 18px;
  text-align: center;
  padding: 10px;
  font-family: Open Sans, sans-serif;
}

.title-in-content-bottom {
  font-size: 22px;
  padding: 10px;
  font-family: Open Sans, sans-serif;
}

.card-two {
  width: 140%;
  margin-left: 20px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
}
</style>

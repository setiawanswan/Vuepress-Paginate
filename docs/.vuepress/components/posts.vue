<template>
  <div class="table-style">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5" v-for="post in posts">
          <div class="flex-container">
            <img class="image-blog" src="../public/Image1.png" alt>
            <!-- <p>{{post.title.rendered}}</p> -->
            <div>
              <p
                class="title-content"
              >8 Alasan Kenapa Bisnis Anda Harus menggunakan Chatbot yang Mampu Meningkatkan Pelanggan</p>
              <p
                class="text-content"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ...</p>
              <div class="justify">
                  <P class="date-publish">16 Juni 2019</P>
                  <p class="let-see">Selengkapnya ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination
      :pagination="pagination"
      @prev="--postsData.page; getPosts();"
      @next="postsData.page++; getPosts();"
    ></pagination>
  </div>
</template>
  
<script>
import axios from "axios";
import pagination from "./pagination.vue";

export default {
  mounted() {
    this.getPosts();
  },
  components: {
    pagination: pagination
  },
  data() {
    return {
      postsUrl: "http://demo.wp-api.org/wp-json/wp/v2/posts",
      posts: [],
      postsData: {
        per_page: 4,
        page: 1
      },
      pagination: {
        prevPage: "",
        nextPage: "",
        totalPages: "",
        from: "",
        to: "",
        total: ""
      }
    };
  },
  methods: {
    getPosts() {
      axios
        .get(this.postsUrl, { params: this.postsData })
        .then(response => {
          this.posts = response.data;
          this.configPagination(response.headers);
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
    },
    configPagination(headers) {
      this.pagination.total = +headers["x-wp-total"];
      this.pagination.totalPages = +headers["x-wp-totalpages"];
      this.pagination.from = this.pagination.total
        ? (this.postsData.page - 1) * this.postsData.per_page + 1
        : " ";
      this.pagination.to =
        this.postsData.page * this.postsData.per_page > this.pagination.total
          ? this.pagination.total
          : this.postsData.page * this.postsData.per_page;
      this.pagination.prevPage =
        this.postsData.page > 1 ? this.postsData.page : "";
      this.pagination.nextPage =
        this.postsData.page < this.pagination.totalPages
          ? this.postsData.page + 1
          : "";
    }
  }
};
</script>

<style>
.flex-container {
  display: flex;
  background-color: white;
}

.table-style {
  padding: 0px;
  padding-right: 15%;
  padding-left: 15%;
}

.image-blog {
  width: 280px;
  height: 280px;
}
.title-content {
  font-size: 22px;
  padding: 0px 20px;
  font-family: Roboto;
  color: #434343
}

.text-content {
  font-size: 14px;
  padding: 0px 20px;
  font-family: Montserrat;
  color: #959595;
}

.justify{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-top: 58px
}

.date-publish{
    font-family: Montserrat;
    font-size: 14px;
    border: 1px solid #BABABA;
    padding: 6px 12px;
    border-radius: 10px;
    color: white;
    background-color: #BABABA
}

.let-see{
    font-family: Montserrat;
    font-size: 14px;
    color: #BABABA;
    padding: 6px
}
</style>

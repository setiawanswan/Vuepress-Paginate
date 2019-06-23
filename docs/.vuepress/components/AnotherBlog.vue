<template>
  <div>
    <div class="another-blog-title">
      <p>Read Another Blog</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md box-in-content" v-for="(card, index) in content" :key="index">
          <div class="shadow p-3 mb-5 bg-white rounded">
          <div class="box-in-content">
            <a href="http://localhost:8080/guide.html">
              <img v-bind:src="card.img" alt>
            </a>
            <p class="title-in-content">{{card.text}}</p>
            <p class="text-in-content">{{card.content}}</p>
            <a class="let-see" href="http://localhost:8080/guide.html">{{card.see}}</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          see: "See more >>",
          text: "Chatbiz Lunch New Product",
          img: "https://via.placeholder.com/310x150",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Best Chatbooth Ever",
          img: "https://via.placeholder.com/310x150",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/310x150",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
  }
};
</script>

<style>
.create {
  font-size: 16px;
  font-weight: 300;
  border-left: 2px solid lightgray;
  padding: 10px;
}

.date-content {
  border-right: 2px solid lightgray;
}


.title-in-content {
  font-size: 15px;
  text-align: left;
  padding: 6px;
}

.text-in-content {
  font-size: 12px;
  font-weight: 600;
  text-align: left;
}
.box-in-content {
  width: 100% !important;
}

.another-blog-title{
  padding: 10px 120px;
  font-size: 30px;
  font-weight: 100
}
</style>


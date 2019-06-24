<template>
  <div>
    <div class="title">
      <p>Top Post</p>
    </div>
    <!-- <div class="container blog-one">
      <div class="row">
        <div class="col-md">
          <div id="demos">
            <div class="owl-carousel owl-theme">
              <div class="item" v-for="(card, index) in content" :key="index">
                <a href="http://localhost:8080/guide.html">
                  <img v-bind:src="card.img" alt>
                </a>
                <p class="title-in-content">{{card.text}}</p>
                <p class="text-in-content">{{card.content}}</p>
                <p class="let-see">
                  <a href="http://localhost:8080/guide.html">{{card.see}}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="blog-one-color">
      <div class="container blog-one">
        <div class="row">
          <div class="col-md-3 space-top" v-for="(card, index) in content" :key="index">
            <div class="shadow p-3 mb-5 bg-white rounded">
              <a href="http://localhost:8080/news/">
                <img v-bind:src="card.img" alt>
              </a>
              <p class="title-in-content">{{card.text}}</p>
              <p class="text-in-content">{{card.content}}</p>
              <a class="let-see" href="http://localhost:8080/news/">{{card.see}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container blog-two">
      <div class="row">
        <div class="col-md-10 mb-3" v-for="(card, index) in contentOne" :key="index">
          <div class="card">
            <div class="flex-container">
              <a href="http://localhost:8080/news/">
                <img v-bind:src="card.img" alt>
              </a>
              <p>
                <span>
                  <p class="title-in-content-bottom">{{card.text}}</p>
                </span>
                <span>
                  <p class="text-in-content-bottom">{{card.content}}</p>
                </span>
                <span>
                  <a class="let-see-bottom" href="http://localhost:8080/news/">{{card.see}}</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="demos">
      <div class="owl-carousel owl-theme">
        <div class="item" v-for="(otherblog, index) in pagination" :key="index">
          <div>
            <a href="http://localhost:8080/news/">
              <p class="other-blog">{{otherblog.text}}</p>
            </a>
            <p class="title-other-blog">{{otherblog.title}}</p>
            <p class="content-other-blog">{{otherblog.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flex-container {
  display: flex;
  background-color: white;
}
.title {
  margin-top: 50px;
  text-align: center;
  border-bottom: 1px solid lightgray;
  font-family: Open Sans, sans-serif;
  font-size: 50px;
  font-weight: 600;
  background-image: linear-gradient(320deg, #6dcff6, #3d2e92);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.title-in-content {
  font-size: 18px;
  text-align: center;
  padding: 6px;
  font-family: Open Sans, sans-serif;
}

.text-in-content {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  font-family: Open Sans, sans-serif;
}

.title-in-content-bottom {
  font-size: 22px;
  padding: 6px;
  font-family: Open Sans, sans-serif;
}

.text-in-content-bottom {
  font-size: 16px;
  padding: 6px;
  font-weight: 300;
  font-family: Open Sans, sans-serif;
}

.let-see-bottom {
  font-size: 15px;
  font-weight: 600;
  font-family: Open Sans, sans-serif;
  color: #696969;
  padding: 0px 20px;
  float: right;
  text-decoration: none !important;
}

.let-see-bottom:hover {
  color: #7f00ff;
  transition: 0.7s;
}

.blog-one-color{
    background-color: #5889cb;
}

.space-top{
  margin-top: 50px
}

.blog-two {
  margin-top: 50px;
}

.blog-three {
  margin-top: 50px;
}

.let-see {
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: #7f00ff;
  padding: 6px;
  text-decoration: none !important;
}

#demos .item {
  height: 14rem;
  background: lightgray;
  padding: 1rem;
  font-size: 30px;
  text-align: center;
  color: white;
}

.owl-theme {
  padding: 60px;
}

.other-blog {
  text-decoration: none !important;
  font-size: 16px;
  font-family: Open Sans, sans-serif;
}
.title-other-blog {
  font-size: 20px;
  color: black;
  font-weight: 300;
  font-family: Open Sans, sans-serif;
}

.content-other-blog {
  font-size: 16px;
  color: black;
  font-weight: 300;
  font-family: Open Sans, sans-serif;
}
</style>

<script>
export default {
  data() {
    return {
      content: [
        {
          see: "See more >>",
          text: "Chatbiz Lunch New Product",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Best Chatbooth Ever",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "See more >>",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/220",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ],
      contentOne: [
        {
          see: "Read More",
          text: "Chatbiz Lunch New Product",
          img: "https://via.placeholder.com/150x180",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "Read More",
          text: "Chatbiz Best Chatbooth Ever",
          img: "https://via.placeholder.com/150x180",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "Read More",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/150x180",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "Read More",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/150x180",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "Read More",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/150x180",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "Read More",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/150x180",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          see: "Read More",
          text: "Chatbiz Easy To Use",
          img: "https://via.placeholder.com/150x180",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ],
      pagination: [
        {
          text: "Blog 1",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 2",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 3",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 4",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 5",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 6",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 7",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 8",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 9",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          text: "Blog 10",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
  },
  mounted() {
    $(".owl-carousel").owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
  }
};
</script>

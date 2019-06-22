<template>
  <div>
    <div>
      <img class="image-content" src="https://via.placeholder.com/1367x550" alt>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <div class="content-title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est.</p>
          </div>
          <div class="sub-title">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est.
              <span
                class="create"
              >Oleh Setiawan</span>
              <span class="create date-content">20 June 2019</span>
            </p>
          </div>
          <div class="content-text" v-for="(content, index) in text" :key="index">
            <p>{{content.paragraph}}</p>
          </div>
          <div>
            <img class="image-content" src="https://via.placeholder.com/800x300" alt>
          </div>
          <div class="content-text" v-for="(ending, index) in conclusion" :key="index">
            <p>{{ending.text}}</p>
          </div>
        </div>
      </div>
    </div>
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
      text: [
        {
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est. Curabitur id lacus vitae purus aliquet maximus. Nam a ante turpis. In eu felis sapien. Nulla arcu neque, bibendum in tincidunt vel, euismod et sapien. Fusce pulvinar tincidunt bibendum. Vestibulum eu accumsan massa, sed consectetur felis. Etiam mattis, massa et lacinia luctus, arcu libero mollis ligula, sed feugiat mauris est ut urna. Quisque ornare tortor tempor felis laoreet, at venenatis orci pretium. Phasellus sem velit, dignissim sit amet nulla nec, ornare volutpat sem. Fusce sollicitudin, nunc id sollicitudin ultricies, tellus lorem faucibus risus, non finibus orci justo ut risus. In mattis venenatis ante, sed dignissim arcu vulputate vitae. Vivamus vel augue et mauris ultrices commodo nec eu erat. Nulla fringilla sem sed lorem tempor, in varius felis interdum. Maecenas commodo ipsum id dui luctus placerat. Integer vehicula massa quis suscipit dapibus."
        },
        {
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est. Curabitur id lacus vitae purus aliquet maximus. Nam a ante turpis. In eu felis sapien. Nulla arcu neque, bibendum in tincidunt vel, euismod et sapien. Fusce pulvinar tincidunt bibendum. Vestibulum eu accumsan massa, sed consectetur felis. Etiam mattis, massa et lacinia luctus, arcu libero mollis ligula, sed feugiat mauris est ut urna. Quisque ornare tortor tempor felis laoreet, at venenatis orci pretium. Phasellus sem velit, dignissim sit amet nulla nec, ornare volutpat sem. Fusce sollicitudin, nunc id sollicitudin ultricies, tellus lorem faucibus risus, non finibus orci justo ut risus. In mattis venenatis ante, sed dignissim arcu vulputate vitae. Vivamus vel augue et mauris ultrices commodo nec eu erat. Nulla fringilla sem sed lorem tempor, in varius felis interdum. Maecenas commodo ipsum id dui luctus placerat. Integer vehicula massa quis suscipit dapibus."
        },
        {
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est. Curabitur id lacus vitae purus aliquet maximus. Nam a ante turpis. In eu felis sapien. Nulla arcu neque, bibendum in tincidunt vel, euismod et sapien. Fusce pulvinar tincidunt bibendum. Vestibulum eu accumsan massa, sed consectetur felis. Etiam mattis, massa et lacinia luctus, arcu libero mollis ligula, sed feugiat mauris est ut urna. Quisque ornare tortor tempor felis laoreet, at venenatis orci pretium. Phasellus sem velit, dignissim sit amet nulla nec, ornare volutpat sem. Fusce sollicitudin, nunc id sollicitudin ultricies, tellus lorem faucibus risus, non finibus orci justo ut risus. In mattis venenatis ante, sed dignissim arcu vulputate vitae. Vivamus vel augue et mauris ultrices commodo nec eu erat. Nulla fringilla sem sed lorem tempor, in varius felis interdum. Maecenas commodo ipsum id dui luctus placerat. Integer vehicula massa quis suscipit dapibus."
        },
        {
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est. Curabitur id lacus vitae purus aliquet maximus. Nam a ante turpis. In eu felis sapien. Nulla arcu neque, bibendum in tincidunt vel, euismod et sapien. Fusce pulvinar tincidunt bibendum. Vestibulum eu accumsan massa, sed consectetur felis. Etiam mattis, massa et lacinia luctus, arcu libero mollis ligula, sed feugiat mauris est ut urna. Quisque ornare tortor tempor felis laoreet, at venenatis orci pretium. Phasellus sem velit, dignissim sit amet nulla nec, ornare volutpat sem. Fusce sollicitudin, nunc id sollicitudin ultricies, tellus lorem faucibus risus, non finibus orci justo ut risus. In mattis venenatis ante, sed dignissim arcu vulputate vitae. Vivamus vel augue et mauris ultrices commodo nec eu erat. Nulla fringilla sem sed lorem tempor, in varius felis interdum. Maecenas commodo ipsum id dui luctus placerat. Integer vehicula massa quis suscipit dapibus."
        }
      ],
      conclusion: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est. Curabitur id lacus vitae purus aliquet maximus. Nam a ante turpis. In eu felis sapien. Nulla arcu neque, bibendum in tincidunt vel, euismod et sapien. Fusce pulvinar tincidunt bibendum. Vestibulum eu accumsan massa, sed consectetur felis. Etiam mattis, massa et lacinia luctus, arcu libero mollis ligula, sed feugiat mauris est ut urna. Quisque ornare tortor tempor felis laoreet, at venenatis orci pretium. Phasellus sem velit, dignissim sit amet nulla nec, ornare volutpat sem. Fusce sollicitudin, nunc id sollicitudin ultricies, tellus lorem faucibus risus, non finibus orci justo ut risus. In mattis venenatis ante, sed dignissim arcu vulputate vitae. Vivamus vel augue et mauris ultrices commodo nec eu erat. Nulla fringilla sem sed lorem tempor, in varius felis interdum. Maecenas commodo ipsum id dui luctus placerat. Integer vehicula massa quis suscipit dapibus."
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est. Curabitur id lacus vitae purus aliquet maximus. Nam a ante turpis. In eu felis sapien. Nulla arcu neque, bibendum in tincidunt vel, euismod et sapien. Fusce pulvinar tincidunt bibendum. Vestibulum eu accumsan massa, sed consectetur felis. Etiam mattis, massa et lacinia luctus, arcu libero mollis ligula, sed feugiat mauris est ut urna. Quisque ornare tortor tempor felis laoreet, at venenatis orci pretium. Phasellus sem velit, dignissim sit amet nulla nec, ornare volutpat sem. Fusce sollicitudin, nunc id sollicitudin ultricies, tellus lorem faucibus risus, non finibus orci justo ut risus. In mattis venenatis ante, sed dignissim arcu vulputate vitae. Vivamus vel augue et mauris ultrices commodo nec eu erat. Nulla fringilla sem sed lorem tempor, in varius felis interdum. Maecenas commodo ipsum id dui luctus placerat. Integer vehicula massa quis suscipit dapibus."
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ultricies est. Curabitur id lacus vitae purus aliquet maximus. Nam a ante turpis. In eu felis sapien. Nulla arcu neque, bibendum in tincidunt vel, euismod et sapien. Fusce pulvinar tincidunt bibendum. Vestibulum eu accumsan massa, sed consectetur felis. Etiam mattis, massa et lacinia luctus, arcu libero mollis ligula, sed feugiat mauris est ut urna. Quisque ornare tortor tempor felis laoreet, at venenatis orci pretium. Phasellus sem velit, dignissim sit amet nulla nec, ornare volutpat sem. Fusce sollicitudin, nunc id sollicitudin ultricies, tellus lorem faucibus risus, non finibus orci justo ut risus. In mattis venenatis ante, sed dignissim arcu vulputate vitae. Vivamus vel augue et mauris ultrices commodo nec eu erat. Nulla fringilla sem sed lorem tempor, in varius felis interdum. Maecenas commodo ipsum id dui luctus placerat. Integer vehicula massa quis suscipit dapibus."
        }
      ],
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
.content-title {
  text-align: left;
  font-size: 50px;
  font-weight: 600;
  border-left: 2px solid lightgray;
  padding: 20px;
}

.sub-title {
  text-align: left;
  font-size: 28px;
  font-weight: 800;
  padding: 20px;
  border-bottom: 2px solid lightgray;
}

.create {
  font-size: 16px;
  font-weight: 300;
  border-left: 2px solid lightgray;
  padding: 10px;
}

.date-content {
  border-right: 2px solid lightgray;
}
.image-content {
  width: 100%;
}

.content-text {
  font-size: 14px;
  margin-top: 30px;
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


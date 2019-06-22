<template>
  <div>
    <div class="container header">
      <div class="row">
        <div class="col-md-5">
          <h1
            class="titled"
          >Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor</h1>
          <p
            class="paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button class="readmore">Read More</button>
        </div>
        <div class="col-md-7">
          <img class="image-header" src="https://via.placeholder.com/700x400" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-header {
  width: 100%;
}
.header {
  padding: 40px;
}
.titled {
  font-size: 35px;
  text-align: center;
  font-family: Lato, sans-serif;
  background-image: linear-gradient(320deg, #6dcff6, #3d2e92);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  
}

.paragraph {
  font-size: 18px;
  font-weight: 300;
  /* font-family:sans-serif; */
}

.readmore{
    background:none;
    border: 2px solid #1e3799;
    border-radius: 20px;
    padding: 6px 14px;
    color: #1e3799;
    font-weight: 600
}

.readmore:hover {
    background-color: #1e3799;
    color: white;
    transition: 0.7s
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<template>
  <div id="demos">
    <div class="owl-carousel owl-theme">
      <div class="item">
        <h4>1</h4>
      </div>
      <div class="item">
        <h4>2</h4>
      </div>
      <div class="item">
        <h4>3</h4>
      </div>
      <div class="item">
        <h4>4</h4>
      </div>
      <div class="item">
        <h4>5</h4>
      </div>
      <div class="item">
        <h4>6</h4>
      </div>
      <div class="item">
        <h4>7</h4>
      </div>
      <div class="item">
        <h4>8</h4>
      </div>
      <div class="item">
        <h4>9</h4>
      </div>
      <div class="item">
        <h4>10</h4>
      </div>
      <div class="item">
        <h4>11</h4>
      </div>
      <div class="item">
        <h4>12</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
  }
};
</script>

<style>
#demos .item {
  height: 14rem;
  background: lightgray;
  padding: 1rem;
  font-size: 30px;
  text-align: center;
  color: white;
}

.title-in-content {
  font-size: 15px;
  text-align: left;
  padding: 6px;
}

.text-in-content {
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}
</style>
<template>
  <div class="navbar">
    <div class="flex-container">
      <div>
        <p>
          <span class="arrow-to-homepage"> < </span>
          <span class="back-to-homepage">Ke halaman utama</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.flex-container {
  display: flex;
  background-color: white;
}

.navbar{
  padding: 50px 100px;
  /* border-bottom: 1px solid lightgray */
}

.back-to-homepage{
  font-size: 16px;
  font-family: Montserrat;
  color: #959595
}
.arrow-to-homepage{
  font-size: 16px;
  font-family: Montserrat;
  color: #6E6D6D
}
</style>

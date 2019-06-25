<template>
  <div class="paginate">
    <nav class="pagination"></nav>
    <div style="text-align:center; padding:100px">
      <span class="dot">
        <a v-if="pagination.prevPage" @click="$emit('prev')" class="button is-small pagination-previous">
            <
        </a>
        <a class="button is-small pagination-previous" v-else disabled><</a>
      </span>
      <span class="page-stats">{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</span>
      <span class="dot">
        <a v-if="pagination.nextPage" @click="$emit('next')" class="button is-small pagination-next">
             > 
        </a>
        <a class="button is-small pagination-next" v-else disabled>></a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pagination"]
};
</script>

<style>
.pagination-previous {
  cursor: pointer;
  font-size: 24px;
  color: white !important
}

.pagination-previous:hover{
    color: #7f00ff !important;
    transition: 0.7s !important;
}

.pagination-next {
  cursor: pointer;
  font-size: 24px;
  color: white !important
}

.pagination-next:hover{
    color: #7f00ff !important;
    transition: 0.5s !important;
}

.paginate {
  text-align: center;
}

.page-stats{
    margin-left: 20px;
    margin-right:20px;
    color: #959595;
    font-size: 20px;
}

.dot {
  height: 40px;
  width: 40px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>

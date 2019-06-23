<template>
  <div>
    <div class="navbar">
      <ul>
        <li class="menu-in-navbar">
          <a class="active" href="http://localhost:8080/"> -Chatbiz Logo-</a>
        </li>
        <li class="menu-in-navbar">
          <a class="active" href="http://localhost:8080/">Home</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  width: 100%
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
}

li a:hover {
  background-color: white;
}
.navbar {
  overflow: hidden;
  background-color: white;
  border-bottom: 2px solid lightgray;
}

.navbar a {
  float: left;
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration: none;
}

.home {
  font-family: sans-serif;
  font-weight: 600;
}
.navbar a:hover {
  color: #7f00ff;
  transition: 0.5s
}

.menu-in-navbar{
  margin-right: 30px
}
</style>

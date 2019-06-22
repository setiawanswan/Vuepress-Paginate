<template>
    <div>
        <div class="title"> 
            <p>Galery</p>
        </div>
        <div class="container galery-header">
            <div class="row">
                <div class="col-md-3" v-for="(photo, index) in galery" :key="index">
                    <div class="galery-image">
                        <img v-bind:src="photo.img" alt="">
                    </div>
                    <div class="galery-title">
                        <p>{{photo.title}}</p>
                    </div>
                    <div class="galery-content">
                        <p>{{photo.content}}</p>
                    </div>
                    <div class="galery-creator">
                        <p>{{photo.date}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container galery-header">
            <div class="row">
                <div class="col-md-3" v-for="(photo, index) in galery" :key="index">
                    <div class="galery-image">
                        <img v-bind:src="photo.img" alt="">
                    </div>
                    <div class="galery-title">
                        <p>{{photo.title}}</p>
                    </div>
                    <div class="galery-content">
                        <p>{{photo.content}}</p>
                    </div>
                    <div class="galery-creator">
                        <p>{{photo.date}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container galery-header">
            <div class="row">
                <div class="col-md-3" v-for="(photo, index) in galery" :key="index">
                    <div class="galery-image">
                        <img v-bind:src="photo.img" alt="">
                    </div>
                    <div class="galery-title">
                        <p>{{photo.title}}</p>
                    </div>
                    <div class="galery-content">
                        <p>{{photo.content}}</p>
                    </div>
                    <div class="galery-creator">
                        <p>{{photo.date}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container galery-header">
            <div class="row">
                <div class="col-md-3" v-for="(photo, index) in galery" :key="index">
                    <div class="galery-image">
                        <img v-bind:src="photo.img" alt="">
                    </div>
                    <div class="galery-title">
                        <p>{{photo.title}}</p>
                    </div>
                    <div class="galery-content">
                        <p>{{photo.content}}</p>
                    </div>
                    <div class="galery-creator">
                        <p>{{photo.date}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            galery: [
                {img:'https://via.placeholder.com/250x150' ,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', date:'Setiawan / 20 June 2019'},
                {img:'https://via.placeholder.com/250x150', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', date:'Setiawan / 20 June 2019'},
                {img:'https://via.placeholder.com/250x150', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', date:'Setiawan / 20 June 2019'},
                {img:'https://via.placeholder.com/250x150', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', date:'Setiawan / 20 June 2019'}
            ]
        }
    }
}
</script>

<style>
.galery-header{
    margin-bottom: 60px;
}

.title{
    padding: 100px 120px;
    font-size: 40px;
    font-weight: 300
}

.galery-title{
    font-size: 20px;
    font-weight: 200
}

.galery-content{
    font-size: 14px;
    font-weight: 500;
    text-align: center
}

.galery-creator{
    font-size: 13px;
    font-weight: 200;
    text-align: center
}
</style>

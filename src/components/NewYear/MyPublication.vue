<template>
    <div class="content">
        <div class="title" @click="jumpToHome">
            {{ publication.title}}
        </div>

        <div class="author" v-html="publication.author">
            
        </div>

        <div class="publisher" v-html="publication.publisher">
            
        </div>

        <div class="image">
            <img :src="publication.image">
        </div>
    </div>
</template>

<script>
export default {
    props: ['publication'],

    data(){
        return {

        }
    },

    methods: {
        getPubId(image_url){
            return image_url.split('/')[image_url.split('/').length - 1].split('.')[0];
        },

        jumpToHome(){
            let id = this.getPubId(this.publication.image);
            window.location.href="/home#" + id;
        }
    }


}
</script>


<style scoped>
.content {
    position: relative;
    width: 100%;
    height: auto;
    background: lightgray;
    opacity: 0.9;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding: 30px;
}

.title{
    font-size: 26px;
    color: black;
    font-weight: bolder;
    text-align: center;
}

.title:hover{
    cursor: pointer;
    text-decoration: underline;
}

.author {
    padding-top: 20px;
    color: black;
    font-size: 24px;
}

.publisher {
    padding-top: 10px;
    color: black;
    font-size: 20px;

}

.image {
    margin-top: 20px;
    width: 80%;
    opacity: 1;
    background: white;
    border-radius: 10px;
}

.image img{
    width: 100%;
    max-height: 50vh;
    object-fit: contain;
    height: auto;
    
}
</style>
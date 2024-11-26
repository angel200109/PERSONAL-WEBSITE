<template>
    <div class="body">
        <audio autoplay controls loop id="music" style="display: none;">
            <source :src="'./music/happy_2024.mp3'" type="audio/mpeg">
        </audio>
        <div class="sky" ref="sky">
        </div>
        
        <div class="header">
            <div class="new_year">
                Welcome to <span style='color:red; font-weight: bold;'>2024</span>!
            </div>
        </div>
        
        <div class="content">
            <div class="view_image">
                <img :src="images[counter % images.length]">
            </div>
        </div>

        <div class="firework" ref="firework">
        </div>

        <div  class="publication"  v-if="counter % publication_interval < 2">
            <MyPublication :publication="this.publications[this.show_publication_idx]"></MyPublication>
        </div>

        <div class="footer">
            The images are from <a href="https://www.pexels.com/">Pexels</a>.
        </div>

        <div class="home_btn" @click="jumpToHome">
            <img :src="home_avatar_pic" style="width: 100px; height: 100px; border-radius: 10px"> 
            <div style="color: white; text-align:center; font-size: 20px">Yongyi Su</div>
        </div>

        <div class="music_btn" @click="playMusic">
            <Music style="width: 100px; height: 100px; color: white"></Music>
        </div>
    </div>
</template>

<script>
import Music from '../components/icons/Music.vue';
import MyPublication from '../components/NewYear/MyPublication.vue'
import authorConfig from '../config/author.config';

export default{
    components:{
        Music,
        MyPublication,
        
    },
    
    data(){
        return {
            publications: [],
            show_publication_idx: 0,
            publication_interval: 6,

            home_avatar_pic: authorConfig.avatar_pic,


            counter: 3,
            images: [
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg',
                'https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg',
                'https://images.pexels.com/photos/867092/pexels-photo-867092.jpeg',
                'https://images.pexels.com/photos/2426546/pexels-photo-2426546.jpeg',
                'https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg',
                'https://images.pexels.com/photos/711193/pexels-photo-711193.jpeg',
                'https://images.pexels.com/photos/2434269/pexels-photo-2434269.jpeg',
                'https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg',
                'https://images.pexels.com/photos/326691/pexels-photo-326691.jpeg',
                'https://images.pexels.com/photos/3152128/pexels-photo-3152128.jpeg',
                'https://images.pexels.com/photos/949406/pexels-photo-949406.jpeg',
                'https://images.pexels.com/photos/4021539/pexels-photo-4021539.jpeg',
                
                'https://images.pexels.com/photos/18991341/pexels-photo-18991341/free-photo-of-skyscrapers-in-guangzhou-in-china.jpeg',
                'https://images.pexels.com/photos/9811789/pexels-photo-9811789.jpeg',
                'https://images.pexels.com/photos/5265116/pexels-photo-5265116.jpeg',
                'https://images.pexels.com/photos/7640749/pexels-photo-7640749.jpeg',
                'https://images.pexels.com/photos/17680026/pexels-photo-17680026/free-photo-of-customs-office-in-guangzhou.jpeg',
                'https://images.pexels.com/photos/9811802/pexels-photo-9811802.jpeg',
                'https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg',
                'https://images.pexels.com/photos/50868/pexels-photo-50868.jpeg',
                'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg',
                'https://images.pexels.com/photos/3529969/pexels-photo-3529969.jpeg',
                'https://images.pexels.com/photos/7995038/pexels-photo-7995038.jpeg'
            ],
            firework_num: 0,
        }
    },

    beforeMount(){
        if (this.isPC === false){
            window.location.replace("/home");
        }
        const publication_conf =  authorConfig.publications;
        let publications = [];
        Object.values(publication_conf).forEach((pubs) => {
            pubs.forEach((pub) => {
                publications.push(pub);
            })
        });
        this.publications = publications;
    },

    mounted(){
        // stars in sky
        {
            let star_num = 100;
            for (let idx=0; idx < star_num; idx ++){
                const x = Math.random() * 90 + 5;
                const y = Math.random() * 35 + 2;
                const size = Math.random() * 2 + 3;
                const shine_delay = Math.random() * 1;
                const shine_time = Math.random() * 3 + 2;
                
                let star = document.createElement('div');
                Object.defineProperty(star.dataset, Object.keys(this.$refs.sky.dataset)[0], {
                    value: '',
                });
                star.style = "top: " + y + "vh; left: " + x + "vw; width: " + size + "px; height: "+ size + "px; -webkit-animation: shine " + shine_time + "s linear "+ shine_delay +"s infinite; animation: shine " + shine_time + "s linear "+ shine_delay +"s infinite;";
                this.$refs.sky.appendChild(star);
            }
        }

        // background images
        {
            this.counter = parseInt((Math.random() * this.images.length));
            let image = new Image();
            image.src = this.images[(this.counter + 1) % this.images.length];

            setInterval(() => {
                this.counter += 1;
                if (this.counter / this.images.length == this.publication_interval){
                    this.counter = 0;
                }
                
                if (this.counter % this.publication_interval == 0){
                    this.show_publication_idx += 1;
                    this.show_publication_idx = this.show_publication_idx % this.publications.length;
                    this.publications;
                }

                let image = new Image();
                image.src = this.images[(this.counter + 1) % this.images.length];
            }, 5000);
        }

        // firework
        this.oneFirework()
    },

    computed:{
        isPC(){
            return document.documentElement.clientWidth >= 800;
        }
    },
    
    methods: {
        randomColor(){
            var color = "rgb("  
            var r = Math.random() * 50 + 205;  
            var g = Math.random() * 100;  
            var b = Math.random() * 100;  
            color = color+r+","+g+","+b+")";  
            return color; 
        },

        oneFirework(){
            for(var i=0;i<245;i++){
                var div=document.createElement("div");
                const width = document.body.offsetWidth;
                const height = document.body.offsetHeight;
                this.createSeed(div, width / 2 + "px", height + "px", this.$refs.firework);
                this.GoUp(div, height * 0.1, this.Fireworks);
            }
        },

        createSeed(Div, from_x, from_y, parent){
            Div.style.backgroundColor=this.randomColor();
            parent.appendChild(Div);
            Div.style.position="absolute";
            Div.style.width="6px";
            Div.style.height="6px";
            Div.style.borderRadius="6px";
            Div.style.boxShadow="0 0 3px lightyellow";
            Div.style.transitionDuration='0.1s';
            
            Div.style.left=from_x;
            Div.style.top=from_y;  
            this.firework_num += 1;
        },

        GoUp(Div, to_y, callback){
            var speedY = 100;
            var time1=setInterval(function(){  
                if (Div.offsetTop - to_y > 0){
                    Div.style.top=Div.offsetTop - speedY + "px";
                } else {
                    callback(Div);
                    window.clearInterval(time1);
                }
            }, 100);  
        },

        Fireworks(Div){
            var speedX = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*20 + 1); 
            var speedY = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*20 + 1);
            
            var i = 3;
            var time1=setInterval(()=>{
                i+=3;
                Div.style.left=Div.offsetLeft+speedX +"px";            
                Div.style.top=Div.offsetTop+speedY+ (i) +"px";
                if(Div.offsetLeft+Div.offsetWidth>window.innerWidth 
                    || Div.offsetLeft<2 
                    || Div.offsetTop+Div.offsetHeight>window.innerHeight
                    || Div.offsetTop<2 ){  
                    Div.remove();
                    window.clearInterval(time1);
                    this.firework_num -= 1;
                    if (this.firework_num < 2){
                        this.oneFirework();
                    }
                }
            }, 100);  
        },

        playMusic(){
            if (document.getElementById('music').paused){
                document.getElementById('music').play();
            }else{
                document.getElementById('music').pause();
            }
        },

        jumpToHome(){
            window.location.href= '/home';
        }
    }
}
</script>

<style>
.body {
    background: -webkit-linear-gradient(top, #000, #00002F);
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow-y: hidden;
}

.sky {
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40vh;
}

.sky div {
    position: absolute;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 3px lightyellow;
}

@keyframes shine {
    0% {
        opacity: 0.3;
        transform: scale(0.8);
    }

    50% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0.3;
        transform: scale(0.8);
    }
}

.header {
    z-index: 999;
    position: absolute;
    width: 100%;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.new_year {
    font-size: 5vw;
    color: white;
    font-family: fantasy;
}

.new_year span::before{
    content: '2023';
    top: -4vw;
    margin:auto;
    position: absolute;
    color: white;
    opacity: 0.5;
    text-decoration: line-through;
    text-decoration-thickness: 0.4vh;
    text-decoration-color: red;
    text-decoration-style: double;
}

.content {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
}

.view_image {
    width: 100%;
    height: 100%;
    opacity: 0.5;
}


.view_image:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow:0 0 20px 0px #00002F inset;
    border-radius: 10px;
}

.view_image img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    position: relative;
    border-radius: 10px;
    transition-duration: 2s;
}

.firework {
    position: absolute;
    width: 100%;
    height: 90vh;
    bottom: 0;
    z-index: 999999;

}

.publication {
    position: absolute;
    width: 80vw;
    max-height: 80vh;
    left: 10vw;
    top: 17vh;
    /* bottom: 5vh; */
    z-index: 9999999;
}

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    color: gray;
    z-index: 99;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.home_btn{
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 9999999;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}

.home_btn:hover {
    background: gray;
}

.home_btn:active {
    transform: scale(0.8);
}


.music_btn {
    position: absolute;
    bottom: 50px;
    right: 50px;
    z-index: 9999999;
    cursor: pointer;
}

.music_btn:active {
    transform: scale(0.8);
}

</style>
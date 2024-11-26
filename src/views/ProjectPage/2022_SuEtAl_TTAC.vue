<script>
import pageConfig from '../../config/2022_SuEtAl_TTAC.config';
import Github from '../../components/2022_SuEtAl_TTAC/Github.vue';
import Article from '../../components/2022_SuEtAl_TTAC/Article.vue';
import Home from '../../components/2022_SuEtAl_TTAC/Home.vue';
import fetchJSONP from 'fetch-jsonp'

export default{
    data(){
        return {
            screenWidth: -1,
            screenHeight: -1,
            smallFont: '16px',
            largeFont: '20px',
            
            pageConfig: pageConfig,
            
            globe_id: pageConfig.globe_id,

            visitNumbers: 0,
        }
    },

    components: {
        Github,
        Article,
        Home
    },

    watch: {
        screenWidth(new_val, old_val){
            if (new_val < 800){
                // new_val = new_val / 0.3;
                new_val = new_val / 0.6;
            } else if (new_val > 1240){
                new_val = 1240;
            }

            this.smallFont = new_val * 0.015 + 'px';
            this.largeFont = new_val * 0.02 + 'px';
        },
    },

    computed: {
        visitNumber: {
            get(){
                return this.visitNumbers;
            },
            set(list){
                for (let idx in list){
                    this.visitNumbers += list[idx]['v'];
                }
            }
        }
    },

    created() {
        window.addEventListener("resize", this.windowResize);
        let that = this;
        fetchJSONP('//clustrmaps.com/globe_call_home.js?w=180&d=' + this.globe_id)
        .then(response => response.json())
        .then( data => {
                data = data.replace('addPoints(points, flag);', 'that.updateVisitNumbers(points)');
                console.log(that.visitNumbers == 1);
                eval(data);
        });
        document.title = "Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering";
        document.querySelector('meta[property="og:title"]').setAttribute('content', "Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering");
        document.querySelector('meta[property="og:description"]').setAttribute('content', "Deploying models on target domain data subject to distribution shift requires adaptation. Test-time training (TTT) emerges as a solution to this adaptation under a realistic scenario where access to full source domain data is not available and instant inference on target domain is required. Despite many efforts into TTT, there is a confusion over the experimental settings, thus leading to unfair comparisons. In this work, we first revisit TTT assumptions and categorize TTT protocols by two key factors. Among the multiple protocols, we adopt a realistic sequential test-time training (sTTT) protocol, under which we further develop a test-time anchored clustering (TTAC) approach to enable stronger test-time feature learning. TTAC discovers clusters in both source and target domain and match the target clusters to the source ones to improve generalization. Pseudo label filtering and iterative updating are developed to improve the effectiveness and efficiency of anchored clustering. We demonstrate that under all TTT protocols TTAC consistently outperforms the state-of-the-art methods on six TTT datasets. We hope this work will provide a fair benchmarking of TTT methods and future research should be compared within respective protocols.");
        document.querySelector('meta[property="og:image"]').setAttribute('content', "https://yysu.site/imgs/2022_SuEtAl_TTAC/Overview.jpg");
    },

    beforeMount() {
        this.screenHeight = document.documentElement.clientHeight;
        this.screenWidth = document.documentElement.clientWidth;
    },

    methods: {
        windowResize(e){
            this.screenHeight = e.target.innerHeight;
            this.screenWidth = e.target.innerWidth;
        },

        updateVisitNumbers(points){
            this.visitNumber = points;
        }
    },

    mounted(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}

</script>

<template>
    <div class="Body" :style="`--smallFont:` + this.smallFont + '; --largeFont:' + this.largeFont">
        <div style="display:none;"><img :src="pageConfig.Overview" alt=""></div>
        <div class="Content">
            <!--Title-->
            <div class="Title Section">
                <div class="title animation">
                    Revisiting Realistic <span>T</span>est-<span>T</span>ime Training: Sequential Inference and Adaptation by <span>A</span>nchored <span>C</span>lustering
                </div>
                <div class="authors">
                    <div v-for="url, name, idx in pageConfig.Authors">
                        <a :href="url" v-html="name"></a>
                        <span v-if="idx < Object.keys(pageConfig.Authors).length - 1">,&nbsp&nbsp&nbsp&nbsp</span>
                    </div>
                </div>
                <div class="tag_desc">
                    <div v-for="desc in pageConfig.TagDescriptions">
                        <span v-html="desc"></span>
                    </div>
                </div>
                <div class="conference">
                    <div v-html="pageConfig.Conference"></div>
                </div>
            </div>
            

            <!--Abstract-->
            <div class="Abstract Section">
                <div class="title"><b>Abstract</b></div>
                <div class="content" v-html="pageConfig.Abstract"></div>
            </div>

            <!--Motivation-->
            <div class="Motivation Section">
                <div class="title"><b>Motivation</b></div>
                <div class="colums">
                    <div class="col1">
                        <div class="col_title">
                            1. Confused definitions of Test-Time Training:
                        </div>
                        <ul>
                            <li>
                                <a href="https://arxiv.org/abs/2006.10726" target="_blank">TENT</a> & <a href="https://arxiv.org/abs/2006.10963" target="_blank">BN</a> make predictions <red><b>instantly</b></red> during test time, while <a href="http://proceedings.mlr.press/v119/liang20a.html" target="_blank">SHOT</a> & <a href="https://openreview.net/forum?id=86NHK__yFDl" target="_blank">TTT++</a> need to <red><b>train multiple epochs</b></red> before making predictions.
                            </li>
                            <li>
                                <a href="https://arxiv.org/abs/1909.13231" target="_blank">TTT-R</a> & <a href="https://openreview.net/forum?id=86NHK__yFDl" target="_blank">TTT++</a> need to <red><b>train an additional self-supervised branch</b></red>.
                            </li>
                        </ul>
                    </div>
                    <div class="col2">
                        <div class="col_title">
                            2. Definition of a realistic TTT setting (sTTT):
                        </div>
                        <ul>
                            <li>
                                <orange><b>One-pass adaptation</b></orange>: test samples are sequentially streamed and prediction must be made instantly.
                                <div class="img">
                                    <img :src="pageConfig.Motivation.Setting">
                                </div>
                            </li>
                            <li>
                                <orange><b>No modification to training objective</b></orange>, e.g. self-supervised branch.
                                <div class="img">
                                    <img :src="pageConfig.Motivation.NoModification">
                                </div>
                            </li>
                            <li>
                                Not restricting access to a <orange><b>light-weight information</b></orange> from the source domain.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--Overview-->
            <div class="Overview Section">
                <div class="title"><b>Overview</b></div>
                <div class="img">
                    <img :src="pageConfig.Overview">
                </div>
            </div>

            <!--Experiment1-->
            <div class="Experiment1 Section">
                <div class="title"><b>Results on benchmark datasets</b></div>
                <div class="img" v-for="res in pageConfig.Exp1">
                    <img :src="res">
                </div>
            </div>

            <!--Experiment1-->
            <div class="Experiment2 Section">
                <div class="title"><b>Ablation Study & Additional Analysis</b></div>
                <div class="img" v-for="res in pageConfig.Exp2">
                    <img :src="res">
                </div>
            </div>

            <!--Bibtex-->
            <div class="BibTex Section">
                <div class="title"><b>BibTex</b></div>
                <pre style="overflow: auto; background: lightgray; border-radius: 10px; padding: 10px">{{ pageConfig.BibTex }}</pre>
            </div>

            <!--VisitNumber-->
            <div class="Visit Section">
                <!-- <span>Read Count: {{ this.visitNumber }}</span> -->
            </div>

        </div>
        <div class="Btns">
            <a :href="pageConfig.Btns.Home">
                <div>
                    <Home></Home>
                </div>
            </a>

            <a :href="pageConfig.Btns.Github" target="_blank">
                <div>
                    <Github></Github>
                </div>
            </a>
            
            <a :href="pageConfig.Btns.Arxiv" target="_blank">
                <div>
                    <Article></Article>
                </div>
            </a>
        </div>
        
        <div style="visibility: hidden; height: 0; width: 0">
            <div v-is="`script`" type="text/javascript" id="clstr_globe" :src="`//clustrmaps.com/globe.js?d=` + this.globe_id" ></div>
        </div>
    </div>
</template>

<style scoped>

.Body {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    flex-direction: column;
    background: #333333;
    height: 100vh;
    overflow-y: auto;
}

.Content{
    max-width: 1240px;
    margin: auto;
    padding: 1px;
    border-radius: 20px;
    background: white;
    box-shadow: 0px 5px 20px #181818;
    min-height: calc(100vh - 40px);
    padding-bottom: 10px;
}

.Btns {
    position: fixed;
    width: 60px;
    height: 220px;
    /* right: 20px; */
    right: max(calc((((100vw - 1240px) / 2) - 60px) / 2), 20px);
    top: calc((100vh - 200px) / 2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.Btns a {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 5px 20px #181818;
    cursor: pointer;
    padding: 5px;
}

.Btns div {
    width: 50px;
    height: 50px;
}


.Btns a:hover {
    transform: scale(1.1);
}


.Section {
    width: 80%;
    margin: auto;
    margin-top: 30px;
    font-size: var(--smallFont);
}

.BibTex {
    font-size: calc(0.8 * var(--smallFont));
}

.Section .title {
    font-size: var(--largeFont);
    text-align: center;
    font-family: DIN Condensed Bold;
    font-family: fantasy;
}

.Title {
    width: 100%;
}

.Title .title {
    font-size: calc(1.3 * var(--largeFont));
    font-family: DIN Condensed Bold;
}

.animation span {
    animation: loading 2.0s cubic-bezier(1.0, 0, 0, 1.0) 0s infinite alternate;
    top: 0px;
    position: relative;
}

@keyframes loading {
    100% {
        top: calc(-1.0 *  var(--largeFont));
        color: red;
    }
}

.Title .authors {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
}

.Title .authors div {
    font-size: var(--smallFont);
}

.Title .tag_desc {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.Title .tag_desc div {
    margin: 0 10px 0 10px;
}

.Title .conference {
    width: 100%;
    text-align: center;
}


.Section .img {
    width: 80%;
    margin: auto;
}

.Section .img img {
    width: 100%;
}

.Section .content {
    text-align:justify;
}

.Section .colums {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}


.colums .col_title {
    font-weight: bold;
    display: flex;
    align-items: baseline;

}

.Visit {
    text-align: center;
}


red {
    color: red;
}

orange {
    color: orange;
}

@media screen and (max-width: 1239px) {
    .colums ul{
        padding-left: 10px;
    }

    .Section{
        width: 90%;
    }

    .Body {
        padding: 0;
    }

    .Content {
        border-radius: 0;
        padding-bottom: 60px;
    }

    .Section .img {
        width: 100%;
        margin: auto;
    }

    .Btns {
        top: auto;
        bottom: 0;
        left: 0;
        right: auto;
        width: 100vw;
        height: 50px;
        flex-direction: row;
        background: black;
        align-items: center;
    }

    .Btns a {
        width: 30%;
        display: flex;
        justify-content: center;
        height: 40px;
        margin: 5px;
    }

    .Btns div {
        width: 30px;
        height: 30px;
    }

    .Btns a:hover {
        transform: none;
    }
}

</style>
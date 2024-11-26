export default{
    
    ICONs: {
        SCUT: '../imgs/SCUT_small.webp',
        I2R: '../imgs/ASTAR_I2R.webp',
        PC: '../imgs/pengcheng.webp'
    },

    Authors: {
        'Yongyi Su<sup>*</sup>': 'https://yysu.site/',
        'Xun Xu<sup>*</sup>': 'https://alex-xun-xu.github.io/',
        'Kui Jia': 'http://kuijia.site/'
    },

    TagDescriptions: [
        '<sup>*</sup>Equal contribution',
    ],

    Conference: "Advances in Neural Information Processing Systems (NeurIPS), 2022",

    Abstract: `Deploying models on target domain data subject to distribution shift requires adaptation. Test-time training (TTT) emerges as a solution to this adaptation under a realistic scenario where access to full source domain data is not available and instant inference on target domain is required. Despite many efforts into TTT, there is a confusion over the experimental settings, thus leading to unfair comparisons. In this work, we first revisit TTT assumptions and categorize TTT protocols by two key factors. Among the multiple protocols, we adopt a realistic sequential test-time training (sTTT) protocol, under which we further develop a test-time anchored clustering (TTAC) approach to enable stronger test-time feature learning. TTAC discovers clusters in both source and target domain and match the target clusters to the source ones to improve generalization. Pseudo label filtering and iterative updating are developed to improve the effectiveness and efficiency of anchored clustering. We demonstrate that under all TTT protocols TTAC consistently outperforms the state-of-the-art methods on six TTT datasets. We hope this work will provide a fair benchmarking of TTT methods and future research should be compared within respective protocols. A demo code is available at <a href="https://github.com/Gorilla-Lab-SCUT/TTAC" target="_blank">GitHub Repo</a>.`,

    Overview: "../imgs/2022_SuEtAl_TTAC/Overview.jpg",

    Motivation: {
        'Setting': '../imgs/2022_SuEtAl_TTAC/Setting.jpg',
        'NoModification': '../imgs/2022_SuEtAl_TTAC/NoModification.png'
    },

    Exp1: [
        '../imgs/2022_SuEtAl_TTAC/Result1.jpg',
        '../imgs/2022_SuEtAl_TTAC/Result2.png'
    ],

    Exp2: [
        '../imgs/2022_SuEtAl_TTAC/Result3.png',
        '../imgs/2022_SuEtAl_TTAC/Result4.png'
    ],

    BibTex: 
`   @inproceedings{
        su2022revisiting,
        title={Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering},
        author={Yongyi Su and Xun Xu and Kui Jia},
        booktitle={Advances in Neural Information Processing Systems},
        year={2022},
        url={https://openreview.net/forum?id=W-_4hgRkwb}
    }`,

    Btns: {
        Home: '/',
        Github: 'https://github.com/Gorilla-Lab-SCUT/TTAC',
        Arxiv: 'https://arxiv.org/abs/2206.02721'
        
    },

    globe_id: 'R9pDUaPrNqZOTj_o0p9C3C2diQeWzOvemTedSpsUHdQ'
}
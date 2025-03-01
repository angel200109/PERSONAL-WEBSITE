export default {
  name: "Lin Xin",
  avatar_pic: "./imgs/LinXin.jpeg",
  role: "Assistant Professor",
  school: {
    name: "Guangzhou University",
    url: "https://www.gzhu.edu.cn/",
  },
  email: "linxin94@gzhu.edu.cn",
  options: {
    "Google Scholar":
      "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=XpMnJ1QAAAAJ",
    GitHub: "/404",
    OpenReview: "https://openreview.net/profile?id=~Xin_Lin2",
  },

  aboutMe: `
     I am an Assistant Professor at the School of Artificial Intelligence, <a href="https://www.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">Guangzhou University</a>,
      a member of Prof. <a href="https://iaib.gzhu.edu.cn/info/1232/1021.htm" target="_blank" rel="noopener noreferrer">Jin Li</a> 
     and Prof. <a href="https://ai.gzhu.edu.cn/info/1223/1077.htm" target="_blank" rel="noopener noreferrer">Chunsheng Yang</a>'s Lab. 
     
     I received my Ph.D. degree from <a href="https://www.scut.edu.cn/en/" target="_blank" rel="noopener noreferrer">South China University of Technology</a>, advised by Prof. 
     <a href="https://dr.ntu.edu.sg/cris/rp/rp02343" target="_blank" rel="noopener noreferrer">Dacheng Tao</a> and Prof. <a href="https://www2.scut.edu.cn/ft/2021/1102/c29779a449569/page.htm" target="_blank" rel="noopener noreferrer">Changxing Ding</a>. Before that, I received my M.S. degree majoring in Information and Communication Engineering at Shenzhen University, 
     advised by Prof. <a href="https://ceie.szu.edu.cn/info/1014/1498.htm" target="_blank" rel="noopener noreferrer">Lei Huang</a>. 

     My research interests include <b style="color:#FFD700">computer vision</b>, <b style="color:#f75522">multi-modality learning</b>, 
     <b style="color:#55f722">visual relationship detection</b>, and <b style="color:#5522f7">multimodal LLMs</b>.
     <div style="height:var(--smallFont)"></div>
    `,

  academicFootprints: {
    "Education Background": [
      [
        "<b>Ph.D degree: Sep. 2018 - Oct. 2022</b>",
        "School of Electronic and Information Engineering, South China University of Technology (SCUT), Guangzhou, China",
        "Supervisor: Prof. Dacheng Tao (IEEE Fellow) and Prof. Changxing Ding",
      ],
      [
        "<b>M.S degree: Sept. 2015 -Jul. 2018</b>",
        "College of Electronic and Information Engineering, Shenzhen University (SZU), Shenzhen, China",
        "Supervisor: Prof. Lei Huang",
      ],
      [
        "<b>B.E degree: Sept. 2010 - Jul. 2014</b>",
        "School of Computer Science and Cyber Engineering, Guangzhou University (GZU), Guangzhou, China",
      ],
    ],
    "Academic Services": [
      ["<b>Journal Reviewer</b>", "TPAMI, TIP, TCSVT, TMLR"],
      [
        "<b>Conference Reviewer</b>",
        " ICML, ICLR, NeurIPS, ACM MM, CVPR, AAAI, ECCV, etc.",
      ],
    ],
  },

  publication_category: [
    "Segment Anything / Foundation Model",
    "Test-Time Adaptation / Test-Time Training",
    "Weakly Supervised Learning",
  ],

  // 改论文卡片
  publications: {
    2025: [
      {
        image: "./imgs/paper-cover/2025_DistractionIsAllYouNeed.webp",
        title:
          "Distraction is All You Need for Multimodal Large Language Model Jailbreaking",
        author:
          "Zuopeng Yang, Jiluan Fan, Anli Yan, Erdun Gao, <b>Xin Lin</b>, Tao Li, Kanghua mo, Changyu Dong",
        publisher:
          "IEEE Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2025", //检查
        keywords: [
          "Scene Graph Generation",
          "Message Passing",
          "Visual Relationship Detection",
        ], //改
        citations: "0",
        searchCitations: "",
        options: {
          PDF: "https://arxiv.org/abs/2502.10794",
          Bibtex: "/404", //还没改
          //Code: "",
        },
        paper_url: "https://arxiv.org/abs/2502.10794",
        new: true,
      },
      {
        image: "./imgs/paper-cover/2025_SGC-Net.webp",
        title:
          "SGC-Net: Stratified Granular Comparison Network for Open-Vocabulary HOI Detection",
        author:
          "<b>Xin Lin</b>, Chong Shi, Zuopeng Yang, Haojin Tang, Zhili Zhou",
        publisher:
          "IEEE Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2025", //检查
        keywords: [
          "Scene Graph Generation",
          "Message Passing",
          "Visual Relationship Detection",
        ], //改
        citations: "0",
        searchCitations: "",
        options: {
          PDF: "./pdf/SGC_Net__Stratified_Granular_Comparison_Network_for_Open_Vocabulary_HOI_Detection_CVPR_2025.pdf",
          Bibtex: "/404", //还没改
          //Code: "",
        },
        paper_url:
          "./pdf/SGC_Net__Stratified_Granular_Comparison_Network_for_Open_Vocabulary_HOI_Detection_CVPR_2025.pdf",
        new: true,
      },
      {
        image: "./imgs/paper-cover/2025_Few-Shot_Hyperspectral.webp",
        title:
          "Few-Shot Hyperspectral Image Classification With Deep Fuzzy Metric Learning",
        author:
          "Haojin Tang, Chao Zhang, Dong Tang, <b>Xin Lin</b>, Xiaofei Yang, Weixin Xie",
        publisher:
          "IEEE Geoscience and Remote Sensing Letters(<b>GRSL</b>), 2025",
        keywords: ["1", "2", "3"], //改
        citations: "0",
        searchCitations: "",
        options: {
          PDF: "https://ieeexplore.ieee.org/abstract/document/10891053",
          Bibtex: "./bibtexs/2025_Few-Shot_Hyperspectral.bib",
          //Code: "",
        },
        paper_url: "https://ieeexplore.ieee.org/abstract/document/10891053",
        new: true,
      },
      {
        image: "./imgs/paper-cover/2025_MitigatingMissingFeatureChannels.webp",
        title:
          "Mitigating Missing Feature Channels at Inference Stage: Test-Time Adaptation through Self-Training with Data Imputation",
        author: "Yan Huang, Yongyi Su, Xulei Yang, <b>Xin Lin</b>, Xun Xu",
        publisher: "IEEE Signal Processing Letters(<b>SPL</b>), 2025",
        keywords: ["1", "2", "3"], //改
        citations: "0",
        searchCitations: "",
        options: {
          PDF: "https://ieeexplore.ieee.org/abstract/document/10891023",
          Bibtex: "./bibtexs/2025_MitigatingMissingFeatureChannels.bib",
          //Code: "",
        },
        paper_url: "https://ieeexplore.ieee.org/abstract/document/10891023",
        new: true,
      },
    ],
    2024: [
      {
        image: "./imgs/paper-cover/2024_TD2.webp",
        title:
          "TD<sup>2</sup> -Net: Toward Denoising and Debiasing for Dynamic Scene Graph Generation",
        author:
          "<b>Xin Lin</b>, Chong Shi, Yibing Zhan, Zuopeng Yang, Yaqi Wu, Dacheng Tao",
        publisher:
          "Proceedings of the AAAI conference on artificial intelligence <b>(AAAI)</b>, 2024",
        keywords: [
          "Dynamic Scene Graph Generation",
          "Visual Relationship Detection",
        ],
        citations: "2",
        searchCitations:
          "https://scholar.google.com/scholar?cites=9977376004623176491&as_sdt=2005&sciodt=0,5&hl=en",
        options: {
          PDF: "https://arxiv.org/abs/2401.12479",
          Bibtex: "./bibtexs/2024_TD2.bib",
        },
        paper_url: "https://arxiv.org/abs/2401.12479",
        new: false,
      },
    ],
    2023: [
      {
        image: "./imgs/paper-cover/2023_Eliminating.webp",
        title:
          "Eliminating Contextual Prior Bias for Semantic Image Editing via Dual-Cycle Diffusion",
        author:
          "Zuopeng Yang, Tianshu Chu, <b>Xin Lin</b>, Erdun Gao, Daqing Liu, Jie Yang, and Chaoyue Wang",
        publisher:
          "IEEE Transactions on Circuits and Systems for Video Technology (<b>TCSVT</b>),2023",
        keywords: [
          "Contextual prior bias",
          "semantic image editing",
          "Dual-Cycle Diffusion",
        ],
        citations: "18",
        searchCitations:
          "https://scholar.google.com/scholar?cites=4135658823311622212&as_sdt=2005&sciodt=0,5&hl=en",
        options: {
          PDF: "https://arxiv.org/abs/2302.02394",
          Bibtex: "./bibtexs/2023_Eliminating.bib",
          Code: "https://github.com/johndreamer/dualcyclediffsion",
        },
        paper_url: "https://arxiv.org/abs/2302.02394",
        new: false,
      },
    ],
    2022: [
      {
        image: "./imgs/paper-cover/2022_RU-Net.webp",
        title:
          "RU-Net: Regularized Unrolling Network for Scene Graph Generation",
        author:
          "<b>Xin Lin</b>, Changxing Ding, Jing Zhang, Yibing Zhan, Dacheng Tao",
        publisher:
          "IEEE Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2022  ",
        keywords: [
          "Scene Graph Generation",
          "Algorithm Unrolling",
          "Visual Relationship Detection",
        ],
        citations: "49",
        searchCitations:
          "https://scholar.google.com/scholar?cites=3765664053223640870&as_sdt=2005&sciodt=0,5&hl=en",
        options: {
          PDF: "https://arxiv.org/abs/2205.01297",
          Bibtex: "./bibtexs/2022_RU-Net.bib",
          Code: "https://github.com/siml3/ru-net",
        },
        paper_url: "https://arxiv.org/abs/2205.01297",
        new: true,
      },
      {
        image: "./imgs/paper-cover/2022_HL-Net.webp",
        title:
          "HL-Net: Heterophily Learning Network for Scene Graph Generation",
        author:
          "<b>Xin Lin</b>, Changxing Ding, Yibing Zhan, Zijian Li, Dacheng Tao",
        publisher:
          "IEEE Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2022 ",
        keywords: [
          "Scene Graph Generation",
          "Heterophily Learning",
          "Visual Relationship Detection",
        ],
        citations: "59",
        searchCitations:
          "https://scholar.google.com/scholar?cites=6746926126987228342&as_sdt=2005&sciodt=0,5&hl=en",
        options: {
          PDF: "https://arxiv.org/abs/2205.01316",
          Bibtex: "./bibtexs/2022_HL-Net.bib",
          Code: "https://github.com/siml3/hl-net",
        },
        paper_url: "https://arxiv.org/abs/2205.01316",
        new: false,
      },
    ],
    2020: [
      {
        image: "./imgs/paper-cover/2020_GPS-Net.webp",
        title:
          "GPS-Net: Graph Property Sensing Network for Scene Graph Generation",
        author: "<b>Xin Lin</b>, Changxing Ding, Jinquan Zeng, Dacheng Tao ",
        publisher:
          "IEEE Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2020 (Oral presentation)",
        keywords: [
          "Scene Graph Generation",
          "Message Passing",
          "Visual Relationship Detection",
        ],
        citations: "294",
        searchCitations:
          "https://scholar.google.com/scholar?cites=6322890861074553647&as_sdt=2005&sciodt=0,5&hl=en",
        options: {
          PDF: "https://arxiv.org/abs/2003.12962",
          Bibtex: "./bibtexs/2020_GPS-Net.bib",
          Code: "https://github.com/siml3/GPS-Net",
        },
        paper_url: "https://arxiv.org/abs/2003.12962",
        new: false,
      },
    ],

    // 2022: [
    //   {
    //     image: "./imgs/2022_SuEtAl_TTAC.webp",
    //     title:
    //       "Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering",
    //     author:
    //       "<b>Yongyi Su<equal></equal></b>, Xun Xu<equal></equal> and Kui Jia",
    //     publisher:
    //       "Advances in Neural Information Processing Systems (<b>NeurIPS</b>), 2022",
    //     keywords: [
    //       "Test-Time Training",
    //       "Anchored Clustering",
    //       "Feature Alignment",
    //     ],
    //     options: {
    //       PDF: "https://arxiv.org/abs/2206.02721",
    //       Bibtex: "./bibtexs/2022_SuEtAl_TTAC.bib",
    //       "Project Page": "./ProjectPage/2022_SuEtAl_TTAC",
    //       Code: "https://github.com/Gorilla-Lab-SCUT/TTAC",
    //       Poster: "./posters/2022_SuEtAl_TTAC.pdf",
    //     },
    //     paper_url: "https://arxiv.org/pdf/2206.02721",
    //   },
    // ],
  },

  co_authors: {
    "Dacheng Tao": {
      image: "./imgs/co-authors/DachengTao.png",
      institute: "Nanyang Technological University",
      position: "Professor",
      url: "https://dr.ntu.edu.sg/cris/rp/rp02343",
      // relationship: "Teacher",
    },
    "Changxing Ding": {
      image: "./imgs/co-authors/ChangxingDing.png",
      institute: "South China University of Technology",
      position: "Professor",
      url: "https://www2.scut.edu.cn/ft/2021/1102/c29779a449569/page.htm",
      // relationship: "Teacher",
    },
    "Yibing Zhan": {
      image: "./imgs/co-authors/YibingZhan.jpg",
      institute: "JD Explore Academy",
      position: "Researcher",
      url: "https://scholar.google.com/citations?user=rjd977cAAAAJ&hl=en",
    },
    "Zuopeng Yang": {
      image: "./imgs/co-authors/ZuopengYang.jpg",
      institute: "Guangzhou University",
      position: "Assistant Professor",
      url: "https://ai.gzhu.edu.cn/info/1223/1095.htm",
    },
    "Jing Zhang": {
      image: "./imgs/co-authors/jingZhang.png",
      institute: "The University of Sydney",
      position: "Research Fellow",
      url: "https://scholar.google.com/citations?user=9jH5v74AAAAJ&hl=en",
    },
  },

  analysis_globe_id: "ZDtaUoW728eYUFp5JX7le2e2P1sZJLUg9RrVZQf7j5g",
};

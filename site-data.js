(function () {
  const englishPublications = [
    "Mingze Li, Huan Zhang*, Weiyou Guo, Kailing Li. Distributionally Robust Energy Replenishment Scheduling for Line-Haul Electric Heavy-Duty Trucks under the Battery Leasing-Swapping Mode. Computers & Industrial Engineering, 2026.",
    "Xingchun Li, Mingze Li*, Zhicheng Chen, Qingcheng Zeng. Distributionally robust battery investment and replacement for AGV battery swapping stations with demand uncertainty in automated container terminals. Frontiers in Marine Science, 2026, 12: 1754484.",
    "Mingze Li, Qingcheng Zeng*, Kang Chen, Haobin Li. Integrated AGV Positioning and Scheduling Using Simulation-Based Reinforcement Learning and Combinatorial Optimization in Automated Container Terminals. IEEE Transactions on Intelligent Transportation Systems, 2025.",
    "Bo Ren, Mingze Li*, Huan Zhang, Ping He. After-Sales Repair Center Location and Scheduling Problem with Drone Transportation: Exact and Heuristic Methods. Computers & Industrial Engineering, 2025, 211: 111627.",
    "Xingchun Li, Mingze Li, Qingcheng Zeng*, Ang Yang. Data-driven bilevel optimization model for quay crane and AGV scheduling in automated container terminals. Frontiers of Engineering Management Science and Technology, 2024, 43(06): 25-32.",
    "Mingze Li, Qingcheng Zeng*, Xingchun Li. Data-driven distributionally robust optimization method for AGV scheduling in automated container terminals. Systems Engineering - Theory & Practice, 2024, 45(04): 1375-1388.",
    "Qingcheng Zeng*, Mingze Li, Xiao Yun. AGV task assignment model for automated container terminals considering charging operations. Operations Research and Management Science, 2024, 33(03): 56-62.",
    "Peng Wu, Chunze Liu, Mingze Li, Chengyan Gao, Qingcheng Zeng*. Capacity analysis of existing and expanded ship locks at Changzhou Hub. Port & Waterway Engineering, 2023.",
    "Qingcheng Zeng*, Mingze Li, Guangshun Xue. Conflict-free dynamic path planning model for multiple AGVs in automated terminals considering congestion. Journal of Dalian Maritime University, 2019, 45(04): 35-44."
  ];

  const chinesePublications = [
    "Mingze Li, Huan Zhang*, Weiyou Guo, Kailing Li. Distributionally Robust Energy Replenishment Scheduling for Line-Haul Electric Heavy-Duty Trucks under the Battery Leasing-Swapping Mode. Computers & Industrial Engineering, 2026.",
    "Xingchun Li, Mingze Li*, Zhicheng Chen, Qingcheng Zeng. Distributionally robust battery investment and replacement for AGV battery swapping stations with demand uncertainty in automated container terminals. Frontiers in Marine Science, 2026, 12: 1754484.",
    "Mingze Li, Qingcheng Zeng*, Kang Chen, Haobin Li. Integrated AGV Positioning and Scheduling Using Simulation-Based Reinforcement Learning and Combinatorial Optimization in Automated Container Terminals. IEEE Transactions on Intelligent Transportation Systems, 2025.",
    "Bo Ren, Mingze Li*, Huan Zhang, Ping He. After-Sales Repair Center Location and Scheduling Problem with Drone Transportation: Exact and Heuristic Methods. Computers & Industrial Engineering, 2025, 211: 111627.",
    "李兴春, 李明泽, 曾庆成*, 杨昂. 数据驱动的自动化码头岸桥与 AGV 双层优化调度模型. 工程管理科技前沿, 2024, 43(06): 25-32.",
    "李明泽, 曾庆成*, 李兴春. 数据驱动的自动化码头 AGV 分布鲁棒优化调度方法. 系统工程理论与实践, 2024, 45(04): 1375-1388.",
    "曾庆成*, 李明泽, 云霄. 考虑充电因素的自动化集装箱码头 AGV 任务分配模型. 运筹与管理, 2024, 33(03): 56-62.",
    "吴澎, 刘春泽, 李明泽, 高成岩, 曾庆成*. 长洲枢纽既有船闸和扩建船闸的通过能力分析. 水运工程, 2023(8): 56-62.",
    "曾庆成*, 李明泽, 薛广顺. 考虑拥堵因素的自动化码头多 AGV 无冲突动态路径规划模型. 大连海事大学学报, 2019, 45(04): 35-44."
  ];

  const englishPublicationHighlights = [
    "Mingze Li",
    "Computers & Industrial Engineering",
    "Frontiers in Marine Science",
    "IEEE Transactions on Intelligent Transportation Systems",
    "Frontiers of Engineering Management Science and Technology",
    "Systems Engineering - Theory & Practice",
    "Operations Research and Management Science",
    "Port & Waterway Engineering",
    "Journal of Dalian Maritime University"
  ];

  const chinesePublicationHighlights = [
    "Mingze Li",
    "李明泽",
    "Computers & Industrial Engineering",
    "Frontiers in Marine Science",
    "IEEE Transactions on Intelligent Transportation Systems",
    "工程管理科技前沿",
    "系统工程理论与实践",
    "运筹与管理",
    "水运工程",
    "大连海事大学学报"
  ];

  window.SITE_DATA = {
    en: {
      name: "Mingze Li",
      title: "Assistant Professor, Shanghai Maritime University",
      affiliation: "Shanghai Maritime University",
      location: "Shanghai, China",
      email: "mzli@shmtu.edu.cn;",
      pageTitle: "Academic Homepage",
      cvUrl: "",
      scholarUrl: "",
      personalUrl: "",

      education: [
        {
          date: "2022.9 ~ 2026.6",
          organization: "Dalian Maritime University",
          highlight: "Ph.D. in Management Science and Engineering",
          location: "Dalian, China"
        },
        {
          date: "2024.12 ~ 2025.12",
          organization: "National University of Singapore",
          highlight: "Joint-training Ph.D. Researcher in Industrial Systems Engineering",
          location: "Singapore"
        },
        {
          date: "2017.9 ~ 2020.6",
          organization: "Dalian Maritime University",
          highlight: "Master's Degree in Traffic and Transportation Planning and Management",
          location: "Dalian, China"
        },
        {
          date: "2013.9 ~ 2017.6",
          organization: "Dalian Maritime University",
          highlight: "Bachelor's Degree in Shipping Management",
          location: "Dalian, China"
        }
      ],

      experience: [
        {
          date: "2020.7 ~ 2022.8",
          organization: "China Communications Construction Group",
          highlight: "Intermediate Engineer in Transportation Planning",
          location: "Beijing, China"
        },
        {
          date: "2026.7 ~ Present",
          organization: "Shanghai Maritime University",
          highlight: "Assistant Professor",
          location: "Shanghai, China"
        }
      ],

      research: [
        { title: "Port and logistics systems optimization" },
        { title: "Data-driven operations research and optimization" },
        { title: "Reinforcement learning and simulation optimization" },
        { title: "Green transportation" }
      ],

      publications: englishPublications,
      publicationHighlights: englishPublicationHighlights
    },

    zh: {
      name: "李明泽",
      title: "上海海事大学助理教授",
      affiliation: "上海海事大学",
      location: "中国上海",
      email: "mzli@shmtu.edu.cn;",
      pageTitle: "学术主页",
      cvUrl: "",
      scholarUrl: "",
      personalUrl: "",

      education: [
        {
          date: "2022.9 ~ 2026.6",
          organization: "大连海事大学",
          highlight: "管理科学与工程博士",
          location: "中国大连"
        },
        {
          date: "2024.12 ~ 2025.12",
          organization: "新加坡国立大学",
          highlight: "工业系统工程联合培养博士研究生",
          location: "新加坡"
        },
        {
          date: "2017.9 ~ 2020.6",
          organization: "大连海事大学",
          highlight: "交通运输规划与管理硕士",
          location: "中国大连"
        },
        {
          date: "2013.9 ~ 2017.6",
          organization: "大连海事大学",
          highlight: "航运管理学士",
          location: "中国大连"
        }
      ],

      experience: [
        {
          date: "2020.7 ~ 2022.8",
          organization: "中国交通建设集团",
          highlight: "交通规划中级工程师",
          location: "中国北京"
        },
        {
          date: "2026.7 ~ 至今",
          organization: "上海海事大学",
          highlight: "助理教授",
          location: "中国上海"
        }
      ],

      research: [
        { title: "港口与物流系统优化" },
        { title: "数据驱动的运筹优化" },
        { title: "强化学习与仿真优化" },
        { title: "绿色交通" }
      ],

      publications: chinesePublications,
      publicationHighlights: chinesePublicationHighlights
    }
  };
})();

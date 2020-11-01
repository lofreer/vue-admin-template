<template>
  <div class="sidebar-wrap">
    <div class="logo">
      <p>LOGO</p>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="menu-wrap">
      <el-menu
        :default-active="onRoutes"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#404040"
        text-color="#d2d2d2"
        active-text-color="#fff"
        unique-opened
        router
      >
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template v-slot:title>
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
                >
                  <template v-slot:title>{{ subItem.title }}</template>
                  <el-menu-item
                    v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                    >{{ threeItem.title }}</el-menu-item
                  >
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
                  >{{ subItem.title }}</el-menu-item
                >
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
const menus = [
  {
    icon: "icon icon-home",
    index: "/dashboard",
    title: "总览",
  },
  {
    icon: "icon icon-base",
    index: "/base",
    title: "基础数据",
    subs: [
      {
        index: "/college/list",
        title: "院校管理",
      },
      {
        index: "/major/list",
        title: "专业管理",
      },
      {
        index: "/subject/list",
        title: "科目管理",
      },
      {
        index: "/teacher/list",
        title: "教师管理",
      },
    ],
  },
  {
    icon: "icon icon-content",
    index: "/content",
    title: "内容管理",
    subs: [
      {
        index: "/article/list",
        title: "经验干货",
      },
      {
        index: "/exam/list",
        title: "在线题库",
      },
      {
        index: "/referenceExam/list",
        title: "参考书题库",
      },
      {
        index: "/read/list",
        title: "阅读资料",
      },
      {
        index: "/course/list",
        title: "在线课程",
      },
      {
        index: "/material/list",
        title: "实体资料",
      },
      {
        index: "/plan/list",
        title: "即日计划",
      },
      {
        index: "/res",
        title: "资源管理",
        subs: [
          {
            index: "/resource/paper",
            title: "试卷管理",
          },
          {
            index: "/resource/trash",
            title: "内容回收站",
          },
        ],
      },
    ],
  },
  {
    icon: 'icon icon-member',
    index: '/application',
    title: '应用管理',
    subs: [
      {
        index: '/ad',
        title: '广告管理',
        subs: [
          {
            index: '/ad/list',
            title: '广告列表',
          },
          {
            index: '/ad/position',
            title: '广告位置',
          }
        ]
      },
      {
        index: '/client',
        title: '客户端管理'
      },
      {
        index: '/configure',
        title: '系统配置'
      },
    ]
  },
  {
    icon: 'icon icon-operation',
    index: '/operation',
    title: '运营管理',
    subs: [
      {
        index: '/vipProduct/list',
        title: 'VIP产品管理',
      },
      {
        index: '/coupon',
        title: '优惠券管理',
      },
      {
        index: '/agent',
        title: '分销代理管理',
        subs: [
          {
            index: '/agent/list',
            title: '代理成员',
          },
          {
            index: '/agent/product',
            title: '代理产品',
          },
          {
            index: '/agent/order',
            title: '代理订单',
          },
        ]
      },
      {
        index: '/channel',
        title: '分销渠道商管理',
        subs: [
          {
            index: '/channel/list',
            title: '渠道商成员',
          },
          {
            index: '/channel/product',
            title: '渠道商产品',
          },
          {
            index: '/channel/order',
            title: '渠道商订单',
          },
        ]
      },
    ]
  },
];

export default {
  data() {
    return {
      items: [],
    };
  },
  computed: {
    onRoutes() {
      let path = this.$route.path
      return this.computeRoute(this.items, path)
    },

  },
  created() {
    this.items = menus;
  },
  methods: {
    computeRoute(routes, path, list = []) {
      list = list || []
      routes.forEach(item => {
        if (path.includes(item.index)) {
          list.push(item.index)
        }
        // 兼容性匹配
        if (item.index.includes('/list')) {
          const tempIndex = item.index.replace('/list', '')
          if (path.includes(tempIndex)) {
            list.push(item.index)
          }
        }
        if (item.subs) {
          this.computeRoute(item.subs, path, list)
        }
      })
      list.sort((a, b) => b.length - a.length)
      return list[0] || ''
    },
  },
};
</script>

<style lang="less" scoped>
.sidebar-wrap {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background: #2c2c2c;
  }
  .menu-wrap {
    flex: 1;
    width: 215px;
    border: none;
    padding-right: 14px;
    padding-bottom: 100px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .el-menu {
    flex: 1;
    border: none;

    /deep/ .el-menu {
      background: #333;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.45);
    }

    .el-menu-item {
      background-color: transparent !important;
      border-left: 3px solid transparent;

      &:hover {
        color: #fff !important;
        background-color: #303030 !important;
      }
    }
    .el-menu-item.is-active {
      background-color: #1a1a1a !important;
      border-left: 3px solid #f1002d;
    }
  }
}
</style>

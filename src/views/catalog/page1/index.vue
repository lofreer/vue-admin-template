<template>
  <div class="page-wrap">
    <div class="page-header">
      <span class="title">列表页</span>
      <div class="action-wrap">
        <el-button type="primary">操作按钮</el-button>
      </div>
    </div>
    <div class="page-main">
      <div class="filters">
        <el-form class="search-wrap" ref="searchForm" :inline="true" :model="query">
          <el-form-item label="字段一" prop="keyword1">
            <el-input v-model="query.keyword1"   placeholder="输入字段一"></el-input>
          </el-form-item>
          <el-form-item label="字段二" prop="keyword2">
            <el-input v-model="query.keyword2"   placeholder="输入字段二"></el-input>
          </el-form-item>
          <el-form-item label="字段三" prop="keyword3">
            <el-input v-model="query.keyword3"   placeholder="输入字段三"></el-input>
          </el-form-item>
          <el-form-item label="筛选一" prop="filter1">
            <el-select v-model="query.filter1" placeholder="请选择">
              <el-option
                v-for="item in filter.provinces"
                :key="item.code"
                :label="item.name"
                :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="筛选二" prop="filter2">
            <el-select v-model="query.filter2" placeholder="请选择">
              <el-option
                v-for="item in categorys"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="筛选三" prop="filter3">
            <el-select v-model="query.filter2" placeholder="请选择">
              <el-option
                v-for="item in filter.status"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="action-wrap">
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button @click="handleFormReset('searchForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="results">
        <el-table :data="results" border style="width: 100%" v-loading="loading">
          <el-table-column prop="date" label="日期" width="150" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" min-width="120" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" width="300" align="center">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120" align="center">
            <template v-slot="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="footer">
          <div class="action-wrap">
            <el-button type="primary">批量按钮一</el-button>
            <el-button type="primary">批量按钮二</el-button>
            <el-button type="primary">批量按钮三</el-button>
          </div>
          <el-pagination
            background
            layout="total, prev, pager, next, sizes"
            :current-page="Number(query.pageIndex)"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="Number(query.pageSize)"
            :total="Number(pageTotal)"
            @size-change="handleSizeChange"
            @current-change="handlePageChange"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query:  {
        keyword1: '',
        keyword2: '',
        keyword3: '',
        filter1: '',
        filter2: '',
        filter3: '',
        pageIndex: 1,
        pageSize: localStorage.getItem('pageSize') ? Number(localStorage.getItem('pageSize')) : 10,
        isPaging: 1
      },
      pageTotal: 100,
      loading: false,
      filter: {
        status: [
          {label: '全部', value: ''},
          {label: '正常', value: '1'},
          {label: '关闭', value: '0'}
        ],
        provinces: []
      },
      categorys: [],
      results: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  created() {
    this.parseQuery()
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    fetchXxxList() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
      this.syncQuery()
    },
    // 触发搜索按钮
    handleSearch() {
      this.$set(this.query, 'pageIndex', 1)
      this.fetchXxxList()
    },
    // 重置搜索条件
    handleFormReset(formName) {
      this.$refs[formName].resetFields()
      this.fetchXxxList()
    },
    // 分页条数变化
    handleSizeChange(val) {
      this.$set(this.query, 'pageSize', val)
      localStorage.setItem('pageSize', val)
      this.fetchXxxList()
    },
    // 分页导航
    handlePageChange(val) {
      this.$set(this.query, 'pageIndex', val)
      this.fetchXxxList()
    },
    // 解析URL请求参数
    parseQuery() {
      Object.keys(this.$route.query).forEach(key => {
        this.query[key] = this.$route.query[key]
      })
    },
    // 同步URL请求参数
    syncQuery() {
      let isSync = Object.keys(this.query).some(key => this.$route.query[key] != this.query[key])
      isSync && this.$router.replace({
        query: Object.assign({}, this.$route.query, this.query)
      })
    },
  },
};
</script>

<style lang="less" scoped>
.page-wrap {
  min-height: 100%;
  background: #fff;
  padding: 20px 20px 20px;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    line-height: 1;
    font-size: 18px;
    padding-left: 10px;
    color: #333333;
    border-left: 3px solid #333333;
  }
}
.page-main {
  margin-top: 20px;

  .filters {
    background: rgba(250, 250, 250, 1);
    padding: 20px 10px 0;
    // margin-top: 10px;

    .search-wrap {
      display: flex;
      flex-wrap: wrap;
      margin-right: -10px;

      .datetime {
        width: 380px;
      }
    }
    .action-wrap {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }
  }
  .results {
    margin-top: 20px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    .el-pagination {
      padding-right: 0;
    }
    /deep/ .el-pagination__sizes {
      margin-right: 0;

      .el-input {
        margin-right: 0;
      }
    }
  }
}
</style>

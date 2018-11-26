<template>
  <div class="app-container">
    <div style="margin-bottom: 20px">
      <el-input style="width: 500px" size="medium" @keyup.enter.native="SelectButton" placeholder="请输入关键词" v-model="input1" type="text">
        <el-select style="width: 110px;color: deepskyblue;" v-model="select1" slot="prepend" placeholder="请选择">
          <el-option label="标题" value="title"></el-option>
          <el-option label="内容" value="content"></el-option>
        </el-select>
      </el-input>
      <el-button style="margin-left: 10px;font-size: 14px" type="primary" size="medium" @click="SelectButton">搜索</el-button>

    </div>
    <div id="table-class">
    <el-table
       v-loading="listLoading" :data="showlist" element-loading-text="Loading"
      stripe fit highlight-current-row @current-change="handleCurrentChange">
      <el-table-column align="center" label="ID"  >
        <template slot-scope="scope" >
          {{ changeIndex(scope.$index) }}
        </template>
      </el-table-column>
      <el-table-column label="标题" align="center" >
        <template slot-scope="scope" >
          <div v-html="changetag(scope.$index)"></div>
          <!--{{ changetag(scope.$index)  }}-->

        </template>
      </el-table-column>

      <el-table-column label="原文链接"  align="center">
        <template slot-scope="scope">
          <img  :src=imgurl @click="changeURL(scope.row)" style="width: 25px;height: 25px;">
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="文章类型" width="180" align="center">
        <template slot-scope="scope">
          {{changeType(scope.row)}}
        </template>
      </el-table-column>
    </el-table>

      <div class="block">
        <el-pagination :current-page="pagenumber"   layout="prev,pager,next" @current-change="currentPaper" :total="maxtitle"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import {chooseType} from "@/api/chooseType";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      imgurl:'./static/svg/link-svg1.svg',
      list: null,   //列表
      listLoading: true,
      currentRow:null,  //选中行
      input1:'hiv',     //搜索内容
      select1:'title',    //搜索项
      maxtitle:300,
      pagenumber:1,
      showlist:null,
      listtitle:null,
      indexN:1
    }
  },
  created() {
    // this.fetchData()
    this.SelectButton()
  },
  methods: {
    fetchData() {
      this.listLoading = true
    },
    handleCurrentChange(val){   //选中行
      this.currentRow=val;
    },
    changeIndex(num){
      return 10*(this.pagenumber-1)+num+1
    },
    SelectButton(){   //查询按钮
      getList(this.input1,this.select1,0).then(response => {
        if(response.data===null){
          this.$message.error('请输入搜索关键词');
        }else {
          this.showlist = response.data.solrDataDTOList
          this.maxtitle = response.data.totailCounts;
          this.listLoading = false
          this.pagenumber=1
        }
      })
    },
    SelectQuery(){   //翻页查询
      getList(this.input1,this.select1,this.pagenumber).then(response => {
        if(response.data===null){
          this.$message.error('请输入搜索关键词');
        }else {
          this.showlist = response.data.solrDataDTOList
          this.maxtitle = response.data.totailCounts;
          this.listLoading = false
        }
      })

    },
    currentPaper(num){   //翻页
      this.pagenumber=num;  //当前页页码
      // this.indexNum=(num-1)*10
      this.SelectQuery()
    },
    changeURL(data){
      var type=data.type
      if(type==="ARTICLE_TYPE"||type==="WECHAT_TYPE"){
        chooseType(data.type,data.id).then(response=>{

          var reg=new RegExp("data-src",'g');
          var str=response.data.sourceCode.replace(reg,"src")
          sessionStorage.setItem('tableData',str)
          const ss=this.$router.resolve({    //传进vue
            name:'Newpage',
          })
          window.open(ss.href,'_blank')
        })
      }else{
        window.open(data.url)
      }

    },


    changetag(num){         //整理标签
      var str=this.showlist[num].title;
      return str
    },


    changeType(data){
      var str=data.url;
      if(str.search("weixin.qq")!==-1){
        str="微信文章"
      }
      else if(str.search("weibo.cn")!==-1){
        str="微博文章"
      }else if(str.search("dxy.cn")!==-1){
        str="丁香园文章"
      }
        return str
    }
  }
}
</script>
<style>
  code{
    background-color: yellow;
  }
  #table-class{
    border-style: solid;
    border-color: #DFDFDF;
    border-width: thin;
    /*float: left;*/

  }
  thead .is-center{
    background-color: #FAFAFA;
  }
  thead .gutter{
    background-color: #FAFAFA;
  }
  .block{
    margin-top: 25px;
    float: right;
    /*height: 50px;*/
    /*position: fixed;*/
    /*right: 10px;*/
    /*top: 680px;*/
  }
  .el-input__inner{
    color: #409EFF;
  }
</style>

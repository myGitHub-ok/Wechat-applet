<template>
  <div>
    <view>
      <Swiper :images="images" />
    </view>
    <div class="container">
      <div class="enrolment">
        <ul>
          <li>
            <p>{{datalist.enroll}}</p>
            <span>已报名</span>
          </li>
          <li>
            <p>{{datalist.sumVote}}</p>
            <span>总投票</span>
          </li>
          <li>
            <p>{{datalist.browse}}</p>
            <span>浏览量</span>
          </li>
        </ul>
      </div>
      <div class="dv_bnt">
        <button @click="goenroll()">我要报名</button>
      </div>
      <div class="dv_end" >
       
       <p>{{timemags}}</p>
      </div>
      <div class="dv_inp">
        <input type="text" placeholder="姓名">
        <button>搜索</button>
      </div>
      <div class="dv_pic">
        <picker class="pickers"  mode="selector" @change="PickerChange" :value="index" :range="array">
          <view class="picker">
              {{array[index]}}
          </view>
        </picker>
      </div>
      <div class="dv_board">
        <ul>
          <li @click="goplayer()" v-for="(item,index) in dataplay" :key="index">
             <img :src="item.coverImg" alt="">
             <span>{{item.name}}</span>
             <p class="p_poll">25票</p>
             <button>投票</button>
             <p class="p_number">编号:1</p>
          </li>
          <!-- <li>
             <img src="http://hbimg.b0.upaiyun.com/ff7bc4d9138a57c547c85974f3d4070003e19868122d3-kVQrfx_fw658" alt="">
             <span>花满楼</span>
             <p class="p_poll">25票</p>
             <button>投票</button>
             <p class="p_number">编号:1</p>
          </li>
          <li>
             <img src="http://hbimg.b0.upaiyun.com/ff7bc4d9138a57c547c85974f3d4070003e19868122d3-kVQrfx_fw658" alt="">
             <span>花满楼</span>
             <p class="p_poll">25票</p>
             <button>投票</button>
             <p class="p_number">编号:1</p>
          </li>
          <li>
             <img src="http://hbimg.b0.upaiyun.com/ff7bc4d9138a57c547c85974f3d4070003e19868122d3-kVQrfx_fw658" alt="">
             <span>花满楼</span>
             <p class="p_poll">25票</p>
             <button>投票</button>
             <p class="p_number">编号:1</p>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/swiper";
import Flys from "../../App"
export default {
  components: { Swiper },
  data() {
    return {
      //轮播图
      images: [
        {
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=610995674,4038011874&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572589183236&di=f630dd096031e7df8d6dff9201430fa4&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533136988-jKqSGVuJgt.jpg"
        }
      ],

      //底部滚动选择器
      array: ['选择分组', '分组一', '分组二'],
      objectArray: [
        {
          id: 0,
          name: '选择分组'
        },
        {
          id: 1,
          name: '分组一'
        },
        {
          id: 2,
          name: '分组二'
        }
      ],
      index: 0,

      //倒计时
      d:"12",
      h:"11",
      m:"20",
      s:"50",
      timemags:"",
      datalist:"",
      dataplay:""
    };
  },

onLoad:function(){
 this.countDown()
 this.getlist()
 this.getplay()
 this.getgroup()
 this.getplayerList()
},



  methods: {
    //底部滚动选择器
    PickerChange: function (e) {
      this.index = e.mp.detail.value
    },

    //倒计时
    countDown(){
      let date = new Date();//获取当前时间
      let now = date.getTime();//当前时间毫秒数
      let endDate = new Date("2019-11-25 00:00:00");//设置截止时间
      let end = endDate.getTime();//截止时间毫秒数
      let leftTime = end - now;//时间差
      if(leftTime >= 0){
        this.d = Math.floor(leftTime/1000/60/60/24);
        this.h = Math.floor(leftTime/1000/60/60%24);
        this.m = Math.floor(leftTime/1000/60%60);
        this.s = Math.floor(leftTime/1000%60);
        this.d = this.d < 10 ? "0" + this.d + "天" : this.d + "天";
        this.h = this.h < 10 ? "0" + this.h + "时" : this.h + "时";
        this.m = this.m < 10 ? "0" + this.m + "分" : this.m + "分";
        this.s = this.s < 10 ? "0" + this.s + "秒" : this.s + "秒";
        this.timemags="距离活动结束："+this.d+this.h+this.m+this.s
        setInterval(this.countDown,1000);
      }else{
          this.timemags="活动已结束"
      }
    },
    
    // 跳转 到我要报名页面
    goenroll() {
      wx.reLaunch({
        url: '/pages/enroll/main',
      });
    },

    //跳转到选手详情页
    goplayer() {
      wx.reLaunch({
        url: '/pages/player/main',
      });
    },

    getlist(){
      this.$fly.post(Flys.list,{activityId:1}).then(res=>{
        this.datalist = res.data.data.hdActivity;
      })
    },
     getplay(){
      this.$fly.post(Flys.getActiviplay,{activityId:1}).then(res=>{
        // console.log(res)
        this.dataplay = res.data.rows;
      })
    },
    getgroup(){
      this.$fly.post(Flys.groupLists).then(res=>{
        // console.log(res)
        // this.dataplay = res.data.rows;
      })
    },
    getplayerList(){
      this.$fly.post(Flys.playerList,{id:1}).then(res=>{
        // console.log(res)
        // this.dataplay = res.data.rows;
      })
    }
  }
}

</script>

<style>
page{
  background-color: #eeeeee;
}
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
.container{
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 40rpx auto;
  align-items: center;
}
.enrolment{
  width: 100%;
  background: linear-gradient(to top, blue, 20%, pink);
}
.enrolment>ul{
  display: flex;
  justify-content: space-between;
}
.enrolment>ul li{
  padding: 30rpx 50rpx;
  color: white;
  text-align: center;
}
.enrolment>ul li p{
  padding-bottom: 12rpx;
}
.dv_bnt{
  width: 80%;
  height: 60rpx;
  margin: 40rpx 0;
}
.dv_bnt button{
  background: linear-gradient(to bottom right,blue, pink,yellow,green);
  color: white;
}
.dv_end{
  width: 100%;
  background-color: white;
  margin-top: 26rpx;
}
.dv_end p{
  font-size: 28rpx;
  padding: 16rpx 0;
  text-align: center;
  color: #999;
}
.dv_inp{
  width: 100%;
  height: 60rpx;
  margin-top: 40rpx;
  display: flex;
}
.dv_inp input{
  width: 70%;
  height: 60rpx;
  background-color: white;
  padding-left: 20rpx;
  color:#eeeeee;
  font-size: 28rpx;
}
.dv_inp button{
  width: 30%;
  height: 60rpx;
  line-height: 60rpx;
  background-color: #CC00FF;
  color: white;
  font-size: 28rpx;
  border-radius: 0;
}
.dv_pic{
  width: 100%;
  margin-top: 16rpx;
}
.dv_pic .pickers{
  width: 50%;
  height: 50rpx;
  line-height: 50rpx;
  background-color: #CC00FF;
  color: white;
  font-size: 28rpx;
  text-align: center;
}
.dv_board{
  width: 100%;
  margin-top: 20rpx;
}
.dv_board ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dv_board ul li{
  width: 49%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30rpx;
  background-color: white;
  position: relative;
}
.dv_board ul li img{
  width: 100%;
}
.dv_board ul li span{
  color: #999;
  font-size: 28rpx;
  margin-top: 10rpx;
  padding-left: 10rpx;
}
.dv_board ul li .p_poll{
  color: aquamarine;
  font-size: 28rpx;
  margin: 15rpx 0;
  padding-left: 10rpx;
}
.dv_board ul li button{
  width: 92%;
  height: 60rpx;
  line-height: 60rpx;
  background-color: aqua;
  color: white;
  font-size: 32rpx;
  margin-bottom: 10rpx;
  border-radius: 0;
}
.dv_board ul li .p_number{
  width: 100rpx;
  height: 50rpx;
  line-height: 50rpx;
  font-size: 28rpx;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  color: white;
}
</style>
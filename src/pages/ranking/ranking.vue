<template>
    <div>
        <div class="time">
            <p>{{nowdate}}</p>
            <p>{{timemags}}</p>
        </div>
        <div class="charts">
            <p>票数排行榜</p>
            <div class="rank">
                <ul>
                    <li @click="goplayer()" class="li_top">
                        <p class="no_p">NO.2</p>
                        <img src="http://pic1.win4000.com/mobile/c/53b3aeb51c0a8.jpg" alt="">
                        <p class="name_p">扶苏</p>
                        <span>5121票</span>
                    </li>
                    <li class="li_cont">
                        <img class="img_one" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572925121713&di=f2627189f403617bbc0435b2a725ce08&imgtype=0&src=http%3A%2F%2Fimg01.taopic.com%2F180809%2F318768-1PP921502688.jpg" alt="">
                        <img class="img_two" src="http://www.agri35.com/UploadFiles/img_1_2722047005_1210543362_26.jpg" alt="">
                        <p>扶苏</p>
                        <span>5121票</span>
                    </li>
                    <li class="li_top">
                        <p class="no_p">NO.3</p>
                        <img src="http://pic1.win4000.com/mobile/c/53b3aeb51c0a8.jpg" alt="">
                        <p class="name_p">扶苏</p>
                        <span>5121票</span>
                    </li>
                </ul>
            </div>
            <div class="rank_two">
                <ul>
                    <li>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378805470,4259868381&fm=26&gp=0.jpg" alt="">
                        <div>
                            <p>李鲁姆</p>
                            <span>38票</span>
                        </div>
                        <p>4</p>
                    </li>
                    <li>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378805470,4259868381&fm=26&gp=0.jpg" alt="">
                        <div>
                            <p>李鲁姆</p>
                            <span>38票</span>
                        </div>
                        <p>4</p>
                    </li>
                    <li>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378805470,4259868381&fm=26&gp=0.jpg" alt="">
                        <div>
                            <p>李鲁姆</p>
                            <span>38票</span>
                        </div>
                        <p>4</p>
                    </li>
                    <li>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378805470,4259868381&fm=26&gp=0.jpg" alt="">
                        <div>
                            <p>李鲁姆</p>
                            <span>38票</span>
                        </div>
                        <p>4</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            //倒计时
            d:"12",
            h:"11",
            m:"20",
            s:"50",
            timemags:"",
            nowdate:"2019-11-25 00:00:00 结束"
        }
    },
    onLoad:function(){
        this.countDown()
    },
    methods:{
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
        
        //跳转到选手详情页
        goplayer(){
            wx.reLaunch({
                url: '/pages/player/main',
            });
        }
    }
}
</script>



<style scoped>
.time{
    margin-top: 40rpx;
    text-align: center;
    color: #999;
    font-size: 28rpx;
}
.charts{
    width: 95%;
    margin: 40rpx auto;
}
.charts>p{
    width: 100%;
    height: 60rpx;
    text-align: center;
    font-size: 28rpx;
    color: white;
    line-height: 60rpx;
    background-color: rgb(43, 130, 230);
}
.charts>.rank>ul{
    display: flex;
    justify-content: space-around;
}
.charts>.rank>ul .li_top>img{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
}
.charts>.rank>ul .li_top>.no_p{
    color: rgb(223, 223, 18);
    font-size: 28rpx;
    padding-bottom: 10rpx;
}
.charts>.rank>ul .li_top>.name_p{
    color: #999;
    font-size: 28rpx;
    padding-top: 20rpx;
}
.charts>.rank>ul .li_top>span{
    font-size: 28rpx;
    color: aquamarine;
    padding-top: 20rpx;
}
.charts>.rank>ul .li_top{
    margin-top: 80rpx;
    text-align: center;
}
.charts>.rank>ul .li_cont>.img_two{
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
}
.charts>.rank>ul .li_cont>.img_one{
    width: 120rpx;
    height: 60rpx;
    margin-top: 30rpx;
}
.charts>.rank>ul .li_cont{
    text-align: center;
}
.charts>.rank>ul .li_cont>p{
    color: #999;
    font-size: 32rpx;
    padding-top: 20rpx;
}
.charts>.rank>ul .li_cont>span{
    color: rgb(94, 240, 191);
    font-size: 32rpx;
    padding-top: 30rpx;
}
.rank_two>ul{
    display: flex;
    flex-direction: column;
    margin-top: 40rpx;
}
.rank_two>ul li img{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    margin-left: 40rpx;
}
.rank_two>ul li{
    display: flex;
    width: 100%;
    /* height: 80rpx; */
    padding: 40rpx 0;
    border-top: 1rpx solid #eeeeee;
    position: relative;
}
.rank_two>ul>li>p{
    color: #999;
    position: absolute;
    right: 40rpx;
    top: 60rpx;
}
.rank_two>ul li>div{
    padding-left: 16rpx;
    color: #999;
}
.rank_two>ul li>div p{
    font-size: 28rpx;
}
.rank_two>ul li>div span{
    font-size: 24rpx;
}
</style>
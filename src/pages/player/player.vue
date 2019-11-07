<template>
    <div class="cont">
        <div class="navbar">
            <ul>
                <li @click="goindex()">
                    <img src="http://img.besoo.com/file/201809/11/asnvxep0mhm.jpg" alt="">
                    <span>首页</span>
                </li>
                <li>
                    <div>
                        <img src="http://img.besoo.com/file/201809/11/asnvxep0mhm.jpg" alt="">
                        <p>投票</p>
                    </div>
                </li>
                <li @click="gopresents()">
                    <img src="http://img.besoo.com/file/201809/11/asnvxep0mhm.jpg" alt="">
                    <span>送礼</span>
                </li>
            </ul>
        </div>
        <div class="cont_text">
            <div class="icon">
                <img src="http://pic1.win4000.com/wallpaper/0/539026fa33b49.jpg" alt="">
                <p>花满楼</p>
            </div>
            <div class="top_ul">
                <ul>
                    <li>
                        <span>5</span>
                        <p>排名</p>
                    </li>
                    <li>
                        <span>34</span>
                        <p>票数</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>礼物</p>
                    </li>
                    <li>
                        <span>2222</span>
                        <p>浏览量</p>
                    </li>
                </ul>
            </div>
            <div class="description">
                <p>选手描述</p>
                <span>我太难了</span>
            </div>
            <div class="photos">
                <p>选手照片</p>
                <img src="http://pic1.win4000.com/wallpaper/2018-01-19/5a615c05d6065.jpg" alt="">
            </div>
            <div class="list">
                <p>票数贡献榜</p>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="poll">
                <p>投票记录</p>
                <ul>
                    <li>
                        <div>
                            <p>好烦</p>
                            <p>2019-11-04 15:10:08</p>
                        </div>
                        <div>
                            <span>+1</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>好烦</p>
                            <p>2019-11-04 15:10:08</p>
                        </div>
                        <div>
                            <span>+1</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>好烦</p>
                            <p>2019-11-04 15:10:08</p>
                        </div>
                        <div>
                            <span>+1</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>好烦</p>
                            <p>2019-11-04 15:10:08</p>
                        </div>
                        <div>
                            <span>+1</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="more">
                <button>查看更多</button>
            </div>
        </div>
    </div>
</template>

<script>
import Flys from "../../App"
export default {
    data() {
        return {
            playerId:null
        }
    },
    onLoad:function(options){
        this.getlist()
        this.getTickets()
        this.getvoteList()
    },
    methods:{
        // 跳转 到首页
        goindex() {
            wx.switchTab({
                url: '/pages/index/main',
            });
        },

        //跳转到 送礼页面
        gopresents() {
            wx.reLaunch({
                url: '/pages/presents/main',
            });
        },

        getlist(){
            this.$fly.post(Flys.playRank,{activityId:1}).then(res=>{
                // console.log(res)
            })
        },
        getTickets(){
            this.$fly.post(Flys.playerTickets,{id:1}).then(res=>{
                // console.log(res)
            })
        },
        getvoteList(){
            this.$fly.post(Flys.voteList,{extend3:1,playerId:1,extend1:"gIGeAUthObIuYjBhQk3g"}).then(res=>{
                console.log(res)
                // this.dataplay = res.data.rows;
            })
        }
    }    
}
</script>

<style scoped>
/* page{
    position: relative;
} */
.navbar{
    width: 100%;
    height: 120rpx;
    background-color: violet;
    position: fixed;
    left: 0;
    bottom: 0;
}
.navbar ul{
    display: flex;
    justify-content: space-around;
}
.navbar ul li{
    width: 30%;
    height: 120rpx;
    font-size: 28rpx;
    text-align: center;
    position: relative;
}
.navbar ul li span{
    position: absolute;
    top: 40rpx;
    left: 130rpx;
}
.navbar ul li>img{
    width: 80rpx;
    height: 80rpx;
    position: absolute;
    left: 40rpx;
    top: 20rpx;
}
.navbar ul li div>img{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    position: absolute;
    left: 65rpx;
    top: -40rpx;
}
.navbar ul li div>p{
    text-align: center;
    position: absolute;
    left: 85rpx;
    bottom: 15rpx;
}
.navbar ul li div{
    /* width: 30%; */
    height: 120rpx;
    border-right: 5rpx solid rgb(236, 248, 248);
    border-left: 5rpx solid rgb(236, 248, 248);
}
.cont_text{
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.icon{
    width: 100%;
    text-align: center;
    padding-top: 40rpx;
}
.icon img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
}
.icon p{
    color: #999;
    font-size: 28rx;
}
.top_ul{
    width: 100%;
    background-color: deepskyblue;
    color: white;
    margin: 20rpx 0;
}
.top_ul ul{
    display: flex;
    justify-content: space-around;
}
.top_ul ul li{
    text-align: center;
    padding: 20rpx 0;
}
.description{
    width: 100%;
    height: 300rpx;
    background-color: #eeeeee;
}
.description p{
    height: 60rpx;
    line-height: 60rpx;
    color: #999;
    font-size: 28rpx;
    text-align: center;
}
.description>span{
    display: block;
    padding-left: 10rpx;
    padding-top: 40rpx;
    color: #999;
    font-size: 28rpx;
    border-top: 1rpx solid rgb(238, 161, 161);
}
.photos{
    width: 100%;
    background-color: #eeeeee;
    margin-top: 40rpx;
}
.photos p{
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    color: #999;
    font-size: 28rpx;
    border-bottom: 1rpx solid white;
}
.photos img{
    width: 100%;
}
.list{
    width: 100%;
    margin-top: 40rpx;
}
.list p{
    height: 60rpx;
    line-height: 60rpx;
    background-color: aqua;
    color: #999;
    font-size: 28rpx;
    text-align: center;
}
.list ul{
    width: 100%;
    height: 300rpx;
    background-color: #eeeeee;
}
.poll{
    width: 100%;
    background-color: #eeeeee;
    margin-top: 30rpx;
}
.poll>p{
    font-size: 28rpx;
    color: #999;
    text-align: center;
    height: 60rpx;
    line-height: 60rpx;
    border-bottom: 1rpx solid white;
}
.poll>ul{
    display: flex;
    flex-direction: column;
}
.poll>ul li{
    width: 100%;
    height: 120rpx;
    display: flex;
    padding-top: 30rpx;
    justify-content: space-between;
    border-bottom: 1rpx solid white;
}
.poll>ul li div>p{
    color: #999;
    font-size: 28rpx;
    padding-left: 30rpx;
    padding-bottom: 20rpx;
}
.poll>ul li div span{
    color: aqua;
    padding-right: 40rpx;
    height: 120rpx;
    line-height: 100rpx;
}
.more{
    width: 100%;
    margin-top: 40rpx;
    margin-bottom: 200rpx;
    text-align: center;
}
.more button{
    width: 90%;
    height: 80rpx;
    background-color: aqua;
    color: white;
    font-size: 28rpx;
    font-weight: 700;
    line-height: 80rpx;
    z-index: -111;
}
</style>
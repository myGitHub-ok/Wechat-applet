<template>
    <div>
        <div class="cont">
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
            <div class="gift">
                <p>送礼物加票数</p>
                <ul>
                    <li>
                        <p>棒棒糖</p>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572934010489&di=19f56a4f2c16a23747b9b3e9268f2143&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Few%2Fwk%2FQJ6939014042.jpg" alt="">
                        <span>+20票</span>
                    </li>
                    <li>
                        <p>棒棒糖</p>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572934010489&di=19f56a4f2c16a23747b9b3e9268f2143&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Few%2Fwk%2FQJ6939014042.jpg" alt="">
                        <span>+20票</span>
                    </li>
                    <li>
                        <p>棒棒糖</p>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572934010489&di=19f56a4f2c16a23747b9b3e9268f2143&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Few%2Fwk%2FQJ6939014042.jpg" alt="">
                        <span>+20票</span>
                    </li>
                    <li>
                        <p>棒棒糖</p>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572934010489&di=19f56a4f2c16a23747b9b3e9268f2143&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Few%2Fwk%2FQJ6939014042.jpg" alt="">
                        <span>+20票</span>
                    </li>
                    <li>
                        <p>棒棒糖</p>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572934010489&di=19f56a4f2c16a23747b9b3e9268f2143&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Few%2Fwk%2FQJ6939014042.jpg" alt="">
                        <span>+20票</span>
                    </li>
                    <li>
                        <p>棒棒糖</p>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572934010489&di=19f56a4f2c16a23747b9b3e9268f2143&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Few%2Fwk%2FQJ6939014042.jpg" alt="">
                        <span>+20票</span>
                    </li>
                </ul>
                <div class="amount">
                    <div>
                        <span>￥6</span>
                        <p>+20票</p>
                    </div>
                    <div>
                        <button>-</button>
                        <input type="text" placeholder="1">
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bot_bnt">
            <button>立即送出</button>
        </div>
    </div>
</template>

<script>
import Flys from "../../App"
export default {
    data() {
        return {

        }
    },
    onLoad:function(){
        this.getlist()
    },
    methods:{
        getlist(){
            this.$fly.post(Flys.giftLists,{id:71}).then(res=>{
                // this.datalist = res.data.data.hdActivity;
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>
.cont{
    width: 95%;
    margin: 0 auto;
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
    margin: 30rpx 0;
}
.top_ul ul{
    display: flex;
    justify-content: space-around;
}
.top_ul ul li{
    text-align: center;
    padding: 20rpx 0;
}
.gift{
    width: 100%;
    margin-top: 40rpx;
}
.gift>p{
    height: 60rpx;
    line-height: 60rpx;
    font-size: 28rpx;
    background-color: #f0adad;
    color: white;
    padding-left: 16rpx;
}
.gift >ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #eeeeee;
}
.gift >ul>li{
    width: 30%;
    text-align: center;
    border: 1rpx solid blue;
    box-sizing: border-box;
    margin-top: 30rpx;
}
.gift >ul>li>img{
    width: 100%;
    height: 140rpx;
    box-sizing: border-box;
}
.gift >ul>li>p{
    color: #999;
    font-size: 28rpx;
}
.gift >ul>li>span{
    display: inline-block;
    width: 100%;
    height: 40rpx;
    line-height: 40rpx;
    font-size: 28rpx;
    color: #999;
    background-color: aquamarine;
    box-sizing: border-box;
}
.amount{
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between; 
    padding-bottom: 140rpx;
}
.amount>div{
    display: flex;
    padding-bottom: 12rpx;
    margin-top: 40rpx;
}
.amount>div>span{
    color: #999;
    font-size: 28rpx;
    padding-top: 40rpx;
    padding-left: 10rpx;
}
.amount>div>p{
    color: #999;
    font-size: 24rpx;
    padding-top: 40rpx;
    padding-left: 14rpx;
}
.amount>div>button{
    width: 40rpx;
    height: 44rpx;
    line-height: 44rpx;
    text-align: center;
    color: #999;
    border-radius: 0;
    box-sizing: border-box;
    margin-top: 30rpx;
    border: 1rpx solid #999;
    font-size: 28rpx;
    padding-right: 42rpx;
}
.amount>div>input{
    width: 120rpx;
    height: 40rpx;
    color: rgb(235, 119, 119);
    font-size: 24rpx;
    border: 1rpx solid #999;
    box-sizing: border-box;
    margin-top: 30rpx;
    padding-left: 10rpx;
}
.bot_bnt{
    width: 100%;
}
.bot_bnt button{
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    background: linear-gradient(to left, lime 28px, red 77%, cyan);
    border-radius: 0;
}
</style>
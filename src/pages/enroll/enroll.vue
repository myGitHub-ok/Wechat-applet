<template>
    <div class="cont">
        <div class="head">
            <p>在线报名</p>
        </div>
        <div class="dv_form">
            <form>
                <div class="dv_inp">
                    <label>选手名称</label>
                    <input type="text" placeholder="请输入选手名称" v-model="name">
                </div>
                <div class="dv_inp">
                    <label>手机号</label>
                    <input type="password" placeholder="请输入手机号" v-model="phone">
                </div>
                <div class="dv_picker">
                    <label>分组</label>
                    <picker class="pickers"  mode="selector" @change="PickerChange" :value="index" :range="array">
                        <view class="picker">
                            {{array[index]}}
                        </view>
                    </picker>
                </div>
                <div class="dv_textarea">
                    <label>选手描述</label>
                    <textarea placeholder="请输入选手描述"></textarea>
                </div>
            </form>
        </div>
        <div class="dv_player">
            <p>上传选手图片(1-3张)</p>
            <div @click.stop="upload(index)">+</div>
            <!-- <icon type="cancel" size="20" class="th-icon-cancel" @click.stop="upload(index)"/> -->
            <image :src="item" mode="aspectFill" />
        </div>
        <div class="dv_bnt">
            <button @click="addition()">提交</button>
        </div>
    </div>
</template>

<script>
import Flys from "../../App"
export default {
    data() {
        return {
            //底部滚动选择器
            array: ['全部', '分组一', '分组二'],
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
            name:"",
            phone:"",
            files: [],
            filesOnline: []
        }
    },
    onLoad:function(){
        // this.countaddList()
    },
    methods: {
        //底部滚动选择器
        PickerChange: function (e) {
        this.index = e.mp.detail.value
        },

        //点击提交新增用户
        addition() {
            //判断名称 手机号 图片是否 空
            // console.log(this.name)

            if(this.name==""){//判断用户名是否为空

                // console.log("不能为空")
                wx.showToast({
                    title: '用户名不能为空',
                    icon: 'none',
                    duration: 2000
                })
            }else if(this.phone==""){//判断手机号是否为空
                wx.showToast({
                    title: '手机号不可为空',
                    icon: 'none',
                    duration: 2000
                })
            }else{//将数据提交到后台
                // countaddList({

                // })
            }
        },

        //图片上传
        upload() {
            wx.chooseImage({
                count: 3,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success (res) {
                    console.log(res)
                    // tempFilePath可以作为img标签的src属性显示图片
                    // const tempFilePaths = res.tempFilePaths
                    // wx.uploadFile({
                    //     url: 'http://192.168.50.197:8080/hp-hd/',
                    //     filePath: tempFilePaths[0],
                    //     name: 'file',
                    //     formData: {
                    //         'user': 'test'
                    //     },
                    //     success (res){
                    //         const data = res.data
                    //         //do something
                    //     }
                    // })
                }
            })
        },
        // predivImage(index) {
        //     // console.log(e);
        //     wx.previewImage({
        //         current: index.currentTarget.id, // 当前显示图片的http链接
        //         urls: this.files // 需要预览的图片http链接列表
        //     })
        // },
        // deletImg(index){
        //     this.files.splice(index,1)
        //     this.filesOnline.splice(index,1)
        // }
    }
}
</script>

<style scoped>
.cont{
    width: 95%;
    margin: 0 auto;
}
.head{
    font-size: 32rpx;
    font-weight: 700;
    color: aquamarine;
    padding: 30rpx 0;
    text-align: center;
    border-bottom: 1rpx solid #eeeeee;
}
.dv_form{
    width: 100%;
    margin-top: 40rpx;
}
.dv_form form{
    display: flex;
    flex-direction: column;
}
.dv_form form div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40rpx;
}
.dv_form form .dv_inp label{
    height: 60rpx;
    line-height: 60rpx;
    color: hotpink;
    width: 30%;
    font-size: 32rpx;
}
.dv_form form .dv_inp input{
    width: 70%;
    height: 60rpx;
    padding-left: 10rpx;
    font-size: 24rpx;
    color: black;
    border: 1rpx solid rgb(224, 221, 221);
    background-color: #f7f4f4;
    margin-right: 55rpx;
}
.dv_form form .dv_picker{
    width: 100%;
    height: 80rpx;
}
.dv_form form .dv_picker label{
    width: 30%;
    height: 80rpx;
    line-height: 60rpx;
    color: hotpink;
    font-size: 32rpx;
}
.dv_form form .dv_picker picker{
    width: 70%;
    width: 70%;
    height: 60rpx;
    line-height: 60rpx;
    padding-left: 10rpx;
    font-size: 24rpx;
    color: #999;
    border: 1rpx solid rgb(224, 221, 221);
    background-color: #f7f4f4;
    margin-right: 55rpx;
}
.dv_form form .dv_textarea{
    width: 100%;
}
.dv_form form .dv_textarea label{
    width: 30%;
    color: hotpink;
    font-size: 32rpx;
}
.dv_form form .dv_textarea textarea{
    width: 70%;
    height: 200rpx;
    padding-left: 18rpx;
    padding-top: 18rpx;
    font-size: 24rpx;
    color: black;
    border: 1rpx solid rgb(224, 221, 221);
    background-color: #f7f4f4;
    margin-right: 55rpx;
}
.dv_player{
    margin-top: 40rpx;
}
.dv_player p{
    color: #999;
}
.dv_player>div{
    width: 160rpx;
    height: 160rpx;
    text-align: center;
    line-height: 160rpx;
    border: 1rpx dashed #999;
    margin-top: 20rpx;
    color: #999;
    font-size: 54rpx;
    font-weight: 700;
}
.dv_bnt{
    width: 95%;
    height: 80rpx;
    position: fixed;
    left: 20rpx;
    bottom: 10rpx;
}
.dv_bnt button{
    width: 100%;
    height: 80rpx;
    font-size: 32rpx;
    background-color: aquamarine;
    color: white;
    font-weight: 600;
}
</style>
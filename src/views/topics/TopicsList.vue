<template>
    <div class="page-container">
        <ul class="topic-list">
            <lazy-component>
                <li class="topic-item" v-for="(item, index) in topicItems" :key="index">
                    <TopicItem />
                    <div class="topic-item-bottom">
                        <div class="button-box">
                            <van-button type="primary">修改学科</van-button>
                            <van-button type="info">添加标签</van-button>
                        </div> 
                        <div class="button-box">
                            <van-button type="warning">删除答案</van-button>
                            <van-button type="danger">删除此题</van-button>
                        </div>
                    </div>
                </li>
            </lazy-component>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
import TopicItem from "@/components/TopicItem";
Vue.use(Lazyload, {
  lazyComponent: true,
});
export default {
    name: 'TopicsList',
    components: {
        TopicItem
    },
    data() {
        return {
            topicItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
}
</script>

<style lang="scss" scoped>
$borderColor: #e9e9e9;
.topic-list {
    margin: 0 15px;
    padding: 20px 0;
    .topic-item {
        margin-bottom: 20px;
        border: 1px solid $borderColor;
        .topic-item-bottom {
            padding: 10px 0;
            .button-box {
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 8px 20px;
                .van-button {
                    height: 40px !important;
                    font-size: 13px !important;
                }
            }
        }
        
    }
}
</style>
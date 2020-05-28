<template>
    <div>
        <div class="topic-item-head">
            <div class="item-head-info-box order-box">题码：<span>12</span></div>
            <div class="item-head-info-box subject-box">学科：<span>数学</span></div>
            <div class="item-head-info-box date-box">收录时间：<span>2020.05.10</span></div>
        </div>
        <div class="topic-item-middle">
            <div class="topic-content-box">
                <div class="topic-label-text">错题</div>
                <div class="topic-content"></div>
            </div>
            <div class="topic-content-box">
                <div class="topic-label-text">答案</div>
                <div class="topic-content"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopicItem'
}
</script>

<style lang="scss" scoped>
$borderColor: #e9e9e9;
.topic-item-head {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $borderColor;
    .item-head-info-box {
        padding: 6px 0 6px 8px;
        font-size: 13px;
    }
    .order-box {
        width: 25%;
        border-right: 1px solid $borderColor;
    }
    .subject-box {
        width: 30%;
        border-right: 1px solid $borderColor;
    }
    .date-box {
        width: 45%;
    }
}
.topic-content-box {
    display: flex;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid $borderColor;
    .topic-label-text {
        width: 10%;
        height: 100px;
        font-size: 13px;
        line-height: 100px;
        text-align: center;
        border-right: 1px solid $borderColor;
    }
}
</style>
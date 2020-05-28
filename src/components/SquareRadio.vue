<template>
    <div class="radio-box">
        <span 
            v-for="(item, index) in items"
            class="radio-item" 
            :style="index == currentIndex ? {'background-color': activeBackgroundColor, 'color': activeColor, 'border-color': activeBackgroundColor} : null" 
            :key="index" 
            @click="selectLevel(index)"
        >
            {{item.name}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'SquareRadio',
    data() {
        return {
            currentIndex: -1
        }
    },
    props: ['items', 'activeBackgroundColor', 'activeColor'],
    methods: {
        selectLevel(index) {
            if(this.currentIndex == index) return;
            this.currentIndex = index;
            this.$emit('getCurrentIndex', index);
        }
    }
}
</script>

<style lang="scss" scoped>
.radio-box {
    display: inline-block;
    .radio-item {
        display: inline-block;
        padding: 4px 10px;
        margin-right: 10px;
        font-size: 16px;
        border: 1px solid #999;
        border-radius: 4px;
    }
}
</style>
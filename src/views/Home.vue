<template>
  <div class="home">
    <div class="level-wrapper">
      <span class="level-title">学段：</span>
      <SquareRadio
        :items="levelItems"
        :activeBackgroundColor="'#1989fa'"
        :activeColor="'#ffffff'"
        @getCurrentIndex="getCurrentIndex"
      />
    </div>
    <div class="subject-wrapper">
      <div v-for="(item, index) in subjectItems" :key="index" class="subject-box" @click="toTopics(index)">
        <span class="subject-name">{{item.subject_name}}</span>
        <span class="subject-num">{{item.subject_num}}题</span>
      </div>
    </div>
  </div>
</template>

<script>
import SquareRadio from '@/components/SquareRadio'

export default {
  name: "Home",
  components: {
    SquareRadio
  },
  data() {
    return {
      levelItems: [
        {
          name: '小学'
        },
        {
          name: '初中'
        },
        {
          name: '高中'
        }
      ],
      subjectItems: [
        {
          subject_name: '语文',
          subject_num: 3
        },
        {
          subject_name: '数学',
          subject_num: 3
        },
        {
          subject_name: '英语',
          subject_num: 3
        },
        {
          subject_name: '语文',
          subject_num: 3
        },
        {
          subject_name: '语文',
          subject_num: 3
        },
        {
          subject_name: '未分科',
          subject_num: 3
        }
      ]
    }
  },
  created() {

  },
  methods: {
    getCurrentIndex(index) {
      console.log(index)
    },
    toTopics() {
      this.$router.push('/topicsList')
    }
  }
};
</script>

<style lang="scss" scoped>
.level-wrapper {
  display: flex;
  align-items: center;
  padding: 20px 15px;
  .level-title {
    display: inline-block;
    margin-right: 10px;
    font-size: 16px;
    line-height: 1;
  }
}
.subject-wrapper {
  // display: flex;
  // align-items: center;
  padding: 10px 15px;
  .subject-box {
    display: inline-block;
    padding: 6px 10px;
    margin: 6px 10px 6px 0;
    border: 1px solid #999;
    border-radius: 4px;
    .subject-name {
      margin-right: 6px;
      font-size: 14px;
    }
    .subject-num {
      font-size: 12px;
    }
  }
}
</style>
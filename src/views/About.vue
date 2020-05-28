<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

  import { Button } from 'vant';
  export default {
    name: 'About',
    components: {
      VanButton: Button
    },
    data() {
      return {
        firstData: 1
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$request.get('/').then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    width: 350px;
    height: 70px;
    margin: 20px auto;
    background-color: red;
  }
  h1 {
    font-size: 18px;
  }
</style>

<template>
  <div class="nav">
    <div class="logo">Mingooo</div>
    <!-- <transition
      enter-active-class="fadeInLeftBig"
      :duration="2000"
      class="animated"
    > -->
    <div class="sentence" :class="{ opacity: isOpacity === false }">
      {{ info }}
    </div>
    <!-- </transition> -->
    <transition
      enter-active-class="fadeInRight"
      leave-active-class="fadeOutRight"
      :duration="1000"
    >
      <ul v-show="isShow === false" class="animated">
        <li>首页</li>
        <li>项目</li>
        <li>资源</li>
        <li>联系</li>
        <li>关于</li>
      </ul>
    </transition>

    <div>
      <div class="container">
        <div
          class="bt-close icon"
          :class="{ open: index == true }"
          @click="btn"
        >
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      index: false,
      isShow: true,
      isOpacity: true,
      info: "社会乱象,根源在我",
    };
  },
  computed: {},
  watch: {},
  async created() {
    console.log("页面加载完成");

    var that = this;
    let {
      data: { hitokoto },
    } = await this.$get("http://v1.hitokoto.cn?c=d&c=e&c=k&c=h", {
      encode: "json",
      charset: "utf-8",
    });
    // console.log(listInfo);
    that.info = hitokoto;
  },
  mounted() {},
  methods: {
    btn() {
      this.index = !this.index;
      this.isShow = !this.isShow;
      this.isOpacity = !this.isOpacity;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  position: relative;
}
.logo {
  text-align: center;
  font-family: "Chancery", cursive, LiSu, sans-serif;
  font-size: xx-large;
  font-weight: bold;
  padding-left: 80px;
}
.sentence {
  width: 60%;
  height: 50px;
  line-height: 50px;
  border: 1px solid black;
  text-align: center;
  position: absolute;
  left: 20%;
  opacity: 1;
  transition: opacity 1s;
  -webkit-transition: opacity 1s; /* Safari */
}
.sentence.opacity {
  opacity: 0;
}
ul {
  width: 50%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  border: 1px solid black;
}
ul li {
  margin: 6px 50px;
  border: 1px solid black;
}
/* 组件容器 */
.container {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 通用属性 */
.bt-close {
  position: relative;
  width: 30px;
  height: 20px;
  background-color: #bdc581;
  /* 鼠标 */
  cursor: pointer;
}

.bt-close.icon {
  display: flex;
  justify-content: center;
  /* 纵向 */
  flex-direction: column;
  background-color: transparent;
}

.bt-close.icon span {
  position: absolute;
  display: block;
  height: 4px;
  width: 100%;
  left: 0;
  border-radius: 4px;
  background-color: #333;
  opacity: 1;
  transition: all 0.31s ease-in-out;
}

/* 初始位置 */
.bt-close.icon .one {
  transform: translateY(-9px);
}

.bt-close.icon .two {
  transform: translateY(0px);
}

.bt-close.icon .three {
  transform: translateY(9px);
}

/* 打开后的样式 这里要还原y轴位移*/

.bt-close.icon.open .one {
  transform: translateY(0px) rotate(45deg);
}

.bt-close.icon.open .two {
  opacity: 0;
  width: 0%;
}

.bt-close.icon.open .three {
  transform: translateY(0px) rotate(-45deg);
}
</style>

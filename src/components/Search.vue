<template>
  <div>
    <div class="input_group">
      <div class="input_group_header">全能搜</div>
      <form
        id="searchForm"
        action="http://www.baidu.com/baidu"
        method="get"
        target="_blank"
      >
        <input
          id="search"
          v-model="keyword"
          type="text"
          name="word"
          placeholder="先输入关键词"
          baiduSug="2"
        />
      </form>
      <div class="botton_group">
        <button type="submit" value="百度" class="btn baidu" @click="baidu">
          百度
        </button>
        <button type="submit" value="搜狗" class="btn sougou" @click="sougou">
          搜狗
        </button>
        <button type="submit" value="微信" class="btn weixin" @click="weixin">
          微信
        </button>
        <button type="submit" value="知乎" class="btn zhihu" @click="zhihu">
          知乎
        </button>
        <button type="submit" value="微博" class="btn weibo" @click="weibo">
          微博
        </button>
        <button type="submit" value="豆瓣" class="btn douban" @click="douban">
          豆瓣
        </button>
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
      keyword: "",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    //百度搜索
    baidu() {
      var keyWord = this.keyword;
      if (keyWord) {
        window.open(
          "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=" +
            keyWord,
          "_blank"
        );
        return false;
      }
    },
    //搜狗搜索
    sougou() {
      var keyWord = this.keyword;
      if (keyWord) {
        window.open("https://www.sogou.com/web?query=" + keyWord, "_blank");
        return false;
      }
    },
    //微信搜索
    weixin() {
      var keyWord = this.keyword;
      if (keyWord) {
        window.open(
          "http://weixin.sogou.com/weixin?type=2&query=" + keyWord,
          "_blank"
        );
        return false;
      }
    },
    //知乎搜索
    zhihu() {
      var keyWord = this.keyword;
      if (keyWord) {
        window.open(
          "https://www.zhihu.com/search?type=content&q=" + keyWord,
          "_blank"
        );
        return false;
      }
    },
    //微博搜索
    weibo() {
      var keyWord = this.keyword;
      if (keyWord) {
        window.open("http://s.weibo.com/weibo/" + keyWord, "_blank");
        return false;
      }
    },
    //豆瓣搜索
    douban() {
      var keyWord = this.keyword;
      if (keyWord) {
        window.open(
          "https://www.douban.com/search?source=suggest&q=" + keyWord,
          "_blank"
        );
        return false;
      }
    },
  },
};
</script>

<style scoped>
.input_group {
  width: 100%;
}
.input_group_header {
  margin-top: 5%;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #36292f;
}
#searchForm {
  display: flex;
  justify-content: center;
  padding: 2% 0 1.4% 0;
}
#search {
  width: 50%;
  height: 36px;
  font-size: 18px;
  color: rgb(58, 58, 58);
  border-radius: 5px;
  border: whitesmoke 3px solid;
}
.botton_group {
  display: block;
  text-align: center;
}
.btn {
  width: 5%;
  margin-left: 1%;
}
.baidu,
.sougou,
.weixin,
.zhihu,
.weibo,
.douban {
  border-radius: 5px;
}
.baidu {
  color: #2b32d8;
  border-color: #2b32d8;
}
.sougou {
  color: #eb632c;
  border-color: #eb632c;
}
.weixin {
  color: #51aa38;
  border-color: #51aa38;
}
.zhihu {
  color: #2a64f6;
  border-color: #2a64f6;
}
.weibo {
  color: #d33437;
  border-color: #d33437;
}
.douban {
  color: #4e9448;
  border-color: #4e9448;
}
</style>

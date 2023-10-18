const template = `
<header>
<div class="navbar navbar-default">
  <div class="navbar-header">
    <h1 v-text="sitename"></h1>
  </div>
  <div class="nav navbar-nav navbar-right cart">
    <button type="button" class="btn btn-default btn-lg" v-on:click="showCheckout">
      <span class="glyphicon glyphicon-shopping-cart">{{headObj.cartItemCount}}</span>
      체크아웃
    </button>
  </div>
</div>
</header>
`;

export default {
  template,
  props: ['headObj'],
  data: function () {
    return {
      sitename: "Vue.js 애완용품샵",
    }
  },
  methods: {
    showCheckout() {
      this.$emit('show-checkout')
    }
  }
}
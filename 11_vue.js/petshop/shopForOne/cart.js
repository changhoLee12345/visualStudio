var webstore = new Vue({
  el: '#app',
  data: {
    sitename: "Vue.js 애완용품샵",
    product: {
      id: 1001,
      title: "고양이 사료, 25파운드",
      description: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
      price: 2000,
      image: "assets/images/product-fullsize.png",
      availableInventory: 5
    },
    cart: [],
    showProduct: true,
    states: {
      AL: '알라바마',
      AK: '알래스카',
      AR: '애리조나',
      CA: '캘리포니아',
      NV: '네바다'
    },
    order: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      state: '',
      method: '자택 주소',
      business: '직장 주소',
      home: '자택 주소',
      gift: '선물로 보내기',
      sendGift: '선물로 보내기',
      dontSendGift: '선물로 보내기 않기'
    },
  },
  filters: {
    formatPrice(price) { //#B
      if (!parseInt(price)) {
        return "";
      } //#C
      if (price > 99999) { //#D
        var priceString = (price / 100).toFixed(2); //#E
        var priceArray = priceString.split("").reverse(); //#F
        var index = 3; //#F
        while (priceArray.length > index + 3) { //#F
          priceArray.splice(index + 3, 0, ","); //#F
          index += 4; //#F
        } //#F
        return "$" + priceArray.reverse().join(""); //#G
      } else {
        return "$" + (price / 100).toFixed(2); //#H
      }
    }
  },
  methods: {
    addToCart: function () {
      this.cart.push(this.product.id);
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
    submitForm() {
      alert('제출 완료');
    }
  },
  computed: {
    cartItemCount: function () {
      return this.cart.length || '';
    },
    canAddToCart: function () {
      return this.product.availableInventory > this.cartItemCount;
    },

  }
});
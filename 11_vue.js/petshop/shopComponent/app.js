import headerComponent from './components/header.js';
import mainComponent from './components/main.js';
import formComponent from './components/form.js';

const template = `
<div>
  <header-component v-bind:cartItemCount="cartItemCount" 
                    v-on:show-checkout="showCheckout" v-on:submit-form="submitForm">
  </header-component>
  <main-component v-bind:showProduct="showProduct == true" v-on:add-cart="addToCart" v-bind:canAddToCart="canAddToCart"></main-component>
  <form-component v-bind:showProduct="showProduct == false"></form-component>
</div>
`;

var webstore = new Vue({
  el: '#app',
  template,
  components: {
    headerComponent,
    mainComponent,
    formComponent
  },
  data: {
    showProduct: true,
    cart: [],
  },
  methods: {
    addToCart: function (productId) {
      this.cart.push(productId);
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
  },
  computed: {
    cartItemCount: function () {
      return this.cart.length || '';
    },
    canAddToCart: function (availableInventory) {
      if (availableInventory)
        return availableInventory > this.cartItemCount;
      else
        return true;
    },

  }
});
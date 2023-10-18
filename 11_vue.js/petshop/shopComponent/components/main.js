const template = `
<div>
  <div v-show="showProduct">
    <div class="col-md-2 col-md-offset-1">
    <figure>
      <img v-bind:src="product.image">
    </figure>
    </div>
    <div class="col-md-6 col-md-offset-2 description">
      <h1 v-text="product.title"></h1>
      <p v-html="product.description"></p>
      <p class="price">
        {{product.price | formatPrice}}
      </p>
      <button class="btn btn-primary btn-lg" v-on:click="addToCart" v-if="canAddToCart">장바구니 담기</button>
      <button class="btn btn-primary btn-lg" disabled='true' v-else>장바구니 담기</button>
    </div>
  </div>
</div>
`;

export default {
    template,
    props: {
        showProduct: {
            type: Boolean
        },
        canAddToCart: {
            type: Boolean,
            default: true
        }
    },
    data: function () {
        return {
            product: {
                id: 1001,
                title: "고양이 사료, 25파운드",
                description: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
                price: 2000,
                image: "assets/images/product-fullsize.png",
                availableInventory: 5
            },

        }
    },
    methods: {
        addToCart: function () {
            this.$emit('add-cart', this.product.id);
        }
    },
    // computed: {
    //     canAddToCart: function () {
    //         this.$emit('can-cart', this.availableInventory)
    //     }
    // },
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

}
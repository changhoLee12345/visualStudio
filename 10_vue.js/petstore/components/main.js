// main.js
import MyHeader from './header.js'

export default {
    template: `
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <main>
        <div v-for="product in sortedProducts">
            <div class="row">
            <div class="col-md-5 col-md-offset-0">
                <figure>
                <img class="product" v-bind:src="product.image">
                </figure>
            </div>
            <div class="col-md-6 col-md-offset-0 description">
                <!-- <h1 v-text="product.title"></h1> -->
                <router-link tag="h1"
                    :to="{name: 'Id', params: {id: product.id}}">
                {{product.title}}
                </router-link>
                <p v-html="product.description"></p>
                <p class="price">
                {{product.price | formatPrice}}
                </p>
                <button class="btn btn-primary btn-lg"
                v-on:click="addToCart(product)"
                v-if="canAddToCart(product)">장바구니 담기</button>
                <button disabled="true" class="btn btn-primary btn-lg"
                v-else>장바구니 담기</button>
                <span class="inventory-message"
                    v-if="product.availableInventory - cartCount(product.id) === 0">
                    품절!
                </span>
                <span class="inventory-message"
                    v-else-if="product.availableInventory - cartCount(product.id) < 5">
                    {{product.availableInventory - cartCount(product.id)}} 남았습니다!
                </span>
                <span class="inventory-message"
                    v-else>지금 구매하세요!
                </span>
                <div class="rating">
                <span v-bind:class="{'rating-active': checkRating(n, product)}"
                    v-for="n in 5">☆
                </span>
                </div>
            </div>
            </div><!-- end of row -->
            <hr />
        </div><!-- end of v-for -->
        </main>
    </div>
    `,
    name: 'imain',
    data() {
        return {
            products: [],
            cart: []
        }
    },
    components: {
        MyHeader
    },
    methods: {
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0;
        },
        addToCart(aProduct) {
            this.cart.push(aProduct.id);
        },
        canAddToCart(aProduct) {
            return aProduct.availableInventory > this.cartCount(aProduct.id);
        },
        cartCount(id) {
            let count = 0;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        }
    },
    computed: {
        cartItemCount() {
            return this.cart.length || '';
        },
        sortedProducts() {
            if (this.products.length > 0) {
                let productsArray = this.products.slice(0);

                function compare(a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase())
                        return -1;
                    if (a.title.toLowerCase() > b.title.toLowerCase())
                        return 1;
                    return 0;
                }
                return productsArray.sort(compare);
            }
        }
    },
    filters: {
        formatPrice(price) {
            if (!parseInt(price)) {
                return '';
            }
            if (price > 99999) {
                var priceString = (price / 100).toFixed(2);
                var priceArray = priceString.split("").reverse();
                var index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ',');
                    index += 4;
                }
                return '$' + priceArray.reverse().join('');
            } else {
                return '$' + (price / 100).toFixed(2);
            }
        }
    },
    created: function () {
        axios.get('petstore/static/products.json').then(response => {
            this.products = response.data.products;
            console.log(this.products);
        });
    }

}
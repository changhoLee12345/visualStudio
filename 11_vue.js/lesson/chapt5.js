var APP_LOG_LIFECYCLE_EVENTS = true;
var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "Vue.js 애완용품샵",
        showProduct: true,
        a: false,
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
        products: [],
        cart: []
    },
    methods: {
        addToCart(aProduct) {
            this.cart.push(aProduct.id);
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('제출 완료');
        },
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0;
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
                return "";
            }
            if (price > 99999) {
                var priceString = (price / 100).toFixed(2);
                var priceArray = priceString.split("").reverse();
                var index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ",");
                    index += 4;
                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        }
    },
    beforeCreate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeCreate");
        }
    },
    created: function () {
        axios.get('./products.json')
            .then((response) => {
                this.products = response.data.products;
                console.log(this.products);
            });
    },
    beforeMount: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeMount");
        }
    },
    mounted: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("mounted");
        }
    },
    beforeUpdate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeUpdate");
        }
    },
    updated: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("updated");
        }
    },
    beforeDestroyed: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeDestroyed ");
        }
    },
    destroyed: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("destroyed");
        }
    }
});
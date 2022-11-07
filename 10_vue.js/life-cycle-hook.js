var APP_LOG_LIFECYCLE_EVENTS = true;

console.log(['kildong', 'Hong'].join())

var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "Vue.js 애완용품샵",
        product: {
            id: 1001,
            title: '고양이 사료, 25파운드',
            description: '당신의 고양이를 이한 <em>거부할 수 없는 </em>, 유기농 25파운드 사료',
            price: 200000,
            image: 'assets/images/product-fullsize.png'
        },
        cart: []
    },
    methods: {
        addToCart: function () {
            this.cart.push(this.product.id);
            console.log(this.cart);
        }
    },
    filters: {
        formatPrice: function (price) {
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
                return "$" + (price / 100).toFixed(2)
            }
        }
    },
    beforeCreate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeCreate")
        }
    },
    created: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("created")
        }
    },
    beforeMount: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeMount")
        }
    },
    mounted: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("mounted")
        }
    },
    beforeUpdate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeUpdate")
        }
    },
    updated: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("updated")
        }
    },
    beforeDestroyed: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeMount")
        }
    },
    destroyed: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeMount")
        }
    }
});
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
        product: {
            id: 1001,
            title: "고양이 사료, 25파운드",
            description: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
            price: 2000,
            image: "assets/images/product-fullsize.png",
            availableInventory: 5
        },
        cart: []
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
        cartItemCount() {
            return this.cart.length || '';
        },
        canAddToCart() {
            return this.product.availableInventory > this.cartItemCount;
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
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("created");
        }
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
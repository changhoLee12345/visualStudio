// module

let module = (function () {
    let _str = 'module vlau';
    return {
        myfunc: function () {
            return _str;
        }
    }
})();
console.log(module.myfunc());
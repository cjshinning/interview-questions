(function(window){
    
    var zepto = {}

    function Z(dom, selector){
        var i, len = dom ? dom.length : 0
        for(i = 0;i < len;i++){
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    zepto.Z = function(dom, selector){
        console.log(new Z(dom, selector))
        return new Z(dom, selector)
    }

    zepto.init = function(selector){
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        console.log(dom)
        return zepto.Z(dom, selector)
    }

    var $ = function(selector) {
        console.log(selector)
        return zepto.init(selector)
    }
    
    window.$ = $

    $.fn = {
        css: function(key, value){
            alert('css')
        },
        html: function(value){
            return '这是一个模拟的 html'
        }
    }

    Z.prototype = $.fn

})(window)
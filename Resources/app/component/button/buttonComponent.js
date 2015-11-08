/**
 * Bootstrap class
 * @param {object} namespace
 * @param {object} app
 * @param {window} globals
 * @returns {object}
 */
(function(namespace, app, globals) {


    namespace.buttonComponent = app.newClass({
        extend: function () {
            return app.core.component.abstractComponent;
        }
    });
    
    

    /**
     * 
     * @returns {$}
     */
    namespace.buttonComponent.prototype.getTemplate = function() {

        var tmplString = app.utils.getString(function() {
            //@formatter:off
            /**<string>
                    <a href="#" target="_blank" class="btn"></a>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };


    /**
     * 
     * @returns {object}
     */
    namespace.buttonComponent.prototype.getDefaultParams = function() {
        return {
            url : "about:blank",
            text : "",
            disable : false,
            stopPropagation : true,
            tip : ""
        };
    };

    /**
     * 
     * @returns {undefined}
     */
    namespace.buttonComponent.prototype.init = function() {
        this.setText(this.params.text);
        this.disable(this.params.disable);
        this.setUrl(this.params.url);
        this.setTip(this.params.tip);
        this.stopPropagation(this.params.stopPropagation);
        this.initEvents();
    };
    


    namespace.buttonComponent.prototype.disable = function(disable) {
        this.$element[disable ? 'addClass' : 'removeClass']("disabled");
        this.trigger(disable ? 'onDisable' : 'onEnable');
        return this;
    };

    namespace.buttonComponent.prototype.isDisabled = function(disable) {
        return this.$element.is(".disabled");
    };


    namespace.buttonComponent.prototype.initEvents = function () {
        var self = this;
        this.$element.on("click", function () {
            self.trigger("onClick");

            if (!self._stopPropagation) {
                return self.executeJavaScriptProtocol();
            }

            return false;
        });

        return this;
    };

    
    
    namespace.buttonComponent.prototype.executeJavaScriptProtocol = function() {
        var url = this.$element.attr("href");
        var protocol = "javascript:";

        if(!url.startsWith(protocol)){
            return true;
        }

        var js = url.substr(protocol.length);
        eval(js);
        return false;
    };

    namespace.buttonComponent.prototype.setTip = function(tip) {
        this.$element[tip ? 'addClass' : 'removeClass']("xv-tip-hover");
        this.$element.attr("xv-tip", tip);
        return true;
    };


    namespace.buttonComponent.prototype.stopPropagation = function(val) {
        this._stopPropagation = !!val;
        return this;
    };
    
    
/**
     * 
     * @param {String} text
     * @returns {_L8.namespace.buttonController.prototype}
     */
    namespace.buttonComponent.prototype.setText = function(text) {
        this.$element.html(text);
        return this;
    };
    
    /**
     * 
     * @param {String} url
     * @returns {_L8.namespace.buttonController.prototype}
     */
    namespace.buttonComponent.prototype.setUrl = function(url) {
        this.$element.attr("href", url);
        return this;
    };
    
    
 
    return namespace.buttonComponent;
})(__ARGUMENT_LIST__);
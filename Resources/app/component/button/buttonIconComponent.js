/**
 * Bootstrap class
 * @param {object} namespace
 * @param {object} app
 * @param {window} globals
 * @returns {object}
 */
(function(namespace, app, globals) {


    namespace.buttonIconComponent = app.newClass({
        extend: function () {
            return namespace.buttonComponent;
        }
    });
    
    

    /**
     * 
     * @returns {$}
     */
    namespace.buttonIconComponent.prototype.getTemplate = function() {
        var tmplString = app.utils.getString(function() {
            //@formatter:off
            /**<string>
                    <a href="#" target="_blank" class="btn-icon xv-tip-hover">

                    </a>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };


    /**
     * 
     * @returns {object}
     */
    namespace.buttonIconComponent.prototype.getDefaultParams = function() {
        var params = this._super(arguments.callee)();
        params.icon = "";
        params.tip = "";
        params.active = false;

        return params;
    };

    /**
     * 
     * @returns {undefined}
     */
    namespace.buttonIconComponent.prototype.init = function() {
        this._super(arguments.callee)();
        this.setIcon(this.params.icon);
        this.setTip(this.params.tip);
        this.setActive(this.params.active);

    };


    /**
     *
     * @param icon
     * @returns {namespace.buttonIconComponent}
     */
    namespace.buttonIconComponent.prototype.setIcon = function(icon) {
        var $i = $("<i>");
        $i.addClass("icon");
        $i.addClass(icon);
        this.$element.html($i);
        return this;
    };


    /**
     *
     * @param text
     * @returns {namespace.buttonIconComponent}
     */
    namespace.buttonIconComponent.prototype.setTip = function(text) {
        this.$element.attr("xv-tip", text);
        return this;
    };

    /**
     *
     * @param text
     * @returns {namespace.buttonIconComponent}
     */
    namespace.buttonIconComponent.prototype.setActive = function(value) {
        value = typeof value === "undefined" ? false : !!value;
        this.$element[value ? 'addClass' : 'removeClass']("active");
        return this;
    };

    /**
     *
     * @returns {boolean}
     */
    namespace.buttonIconComponent.prototype.isActive = function() {
      return this.$element.is(".active")|0;
    };

    /**
     *
     * @returns {namespace.buttonIconComponent}
     */
    namespace.buttonIconComponent.prototype.toggleActive = function() {
        this.setActive(!this.isActive());
        return this;
    };

 
    return namespace.buttonIconComponent;
})(__ARGUMENT_LIST__);
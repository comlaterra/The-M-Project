(function() {
    /**
     * Defines the general namespace
     * @type {Object}
     */
    M = {};

    /**
     * Version number of current release
     * @type {String}
     */
    M.Version = M.version = '2.0';

    /**
     * Empty function to be used when
     * no functionality is needed
     *
     * @type {Function}
     */
    M.f = function() {};

    M.create = function(x,y) {
        return new this(x,y);
    };

    M.isCollection = function (collection) {
        return Backbone.Collection.prototype.isPrototypeOf(collection);
    };

    M.isModel = function (model) {
        return Backbone.Model.prototype.isPrototypeOf(model);
    };


//    M.create = function() {
//        return this.apply(this, arguments);
//    };

    /**
     * Readable alias for true
     *
     * @type {Boolean}
     */
    YES = true;

    /**
     * Readable alias for false
     *
     * @type {Boolean}
     */
    NO = false;

    return M;

})();
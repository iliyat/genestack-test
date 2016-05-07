(function(name, definition) {
    if (typeof module != 'undefined') module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else this[name] = definition();
}('PaginationHelper', function() {
    return function (collection, itemsPerPage) {
        var collection = collection || [];
        var itemsPerPage = itemsPerPage || 1;

        return {
            itemCount: function () {
                return collection.length
            },

            pageCount: function () {
                return Math.round(collection.length / itemsPerPage)
            },

            pageItemCount: function (pageIndex) {
                var pageIndex = pageIndex || 0;
                return collection.slice(pageIndex * itemsPerPage, (pageIndex * itemsPerPage) + itemsPerPage).length || -1
            },

            pageIndex: function (itemIndex) {
                var itemIndex = itemIndex || 0;
                itemIndex++; //for calc with 1-based

                if (itemIndex > collection.length || itemIndex < 0) return -1;

                if (!(itemIndex % itemsPerPage)) {
                    return (itemIndex / itemsPerPage) - 1;  // for zero-based page index
                } else {
                    return Math.floor(itemIndex / itemsPerPage)
                }
            }
        }
    }
}));
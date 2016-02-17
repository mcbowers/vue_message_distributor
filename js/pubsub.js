var pubsub = (function(){
    var topics = {};
    return {
        subscribe: function(topic, listener) {
            console.log( 'Subscription request received for %s', topic );
            if ( topics.hasOwnProperty( topic ) == false ) {
                topics[topic] = [];
            }
            var index = topics[topic].push(listener) -1;

            return {
                remove: function() {
                    delete topics[topic][index];
                }
            };
        },
        publish: function(topic, info) {
            if ( topics.hasOwnProperty( topic ) == false ) {
                return;
            } else {
                topics[topic].forEach(function(item) {
                    item(info != undefined ? info : {});
                });
            }
        }
    };
})();
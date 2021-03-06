new Vue({

    el: '#dateVue',

    data: {
        time: ""
    },

    ready: function () {
        self = this;
        pubsub.subscribe( 'time', self.displayTime );
    },

    methods: {

        displayTime: function( data ) {
            this.time = data.time;
        }

    }

});
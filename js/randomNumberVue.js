new Vue({

    el: '#randomNumber',

    data: {
        randomInteger: "",
        randomFloat: "",
        count: ""
    },

    ready: function () {
        self = this;
        pubsub.subscribe( 'randomInteger', self.displayRandomInteger );
        pubsub.subscribe( 'randomFloat', self.displayRandomFloat );
        pubsub.subscribe( 'countup', self.displayCountup );
    },

    methods: {

        displayRandomInteger: function( data ) {
            this.randomInteger = data.number;
        },

        displayRandomFloat: function( data ) {
            this.randomFloat = data.number;
        },

        displayCountup: function( data ) {
            this.count = data.number;
        }

    }

});
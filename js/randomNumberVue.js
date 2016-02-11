new Vue({

    el: '#randomNumber',

    data: {
        randomInteger: "",
        randomFloat: "",
        count: ""
    },

    ready: function () {
        self = this;
        events.subscribe( 'randomInteger', self.displayRandomInteger );
        events.subscribe( 'randomFloat', self.displayRandomFloat );
        events.subscribe( 'countup', self.displayCountup );
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
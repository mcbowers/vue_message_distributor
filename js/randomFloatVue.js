new Vue({

    el: '#randomFloat',

    data: {
        randomNumber: ""
    },

    ready: function () {
        self = this;
        pubsub.subscribe( 'randomFloat', self.displayRandomNumber );
    },

    methods: {

        displayRandomNumber: function( data ) {
            this.randomNumber = data.number;
        }
    }

});
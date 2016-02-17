new Vue({

    el: '#randomInteger',

    data: {
        randomNumber: ""
    },

    ready: function () {
        self = this;
        pubsub.subscribe( 'randomInteger', self.displayRandomNumber );
    },

    methods: {

        displayRandomNumber: function( data ) {
            this.randomNumber = data.number;
        }
    }

});
var app = new Vue({
    el: '#app',
    data: {
        titleTip: 'You loaded this page on ' + new Date().toLocaleString(),
        body: "Hello friends and neighbors!",
        message: 'Hello Vue.js!',
        messageClass: "btn btn-info",
        stuff: "Now you ",
        seen: true,
        unseen: false,
        inputMessage: "Hello Moto",
        todos: [
            { text: 'Uno' },
            { text: 'Dos' },
            { text: 'Tres' }
        ]
    },
    methods: {
        swapMessage: function () {
            this.seen = !this.seen;
            this.unseen = !this.unseen;
        },
        reverseMessageOnce: function () {
            this.message = this.message.split('').reverse().join('')
        },
        reverseMessage: function () {
            var self = this;
            if (!this.interval) {
                this.interval = setInterval(() => {
                    self.message = self.reversedMessage;
                }, 1000);
            } else {
                clearInterval(this.interval);
                this.interval = 0;
            }
        },
        stopReverse: function () {
            clearInterval(this.interval);
            this.interval = 0;
        }
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
})
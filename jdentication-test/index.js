new Vue({
    el: "#app",
    data: {
        inputText: ''
    },
    computed: {
        identicon: function() {
            return jdenticon.toSvg(this.inputText, 200);
        }
    },
    methods: {
        onInput: function(event) {
            this.inputText = event.target.value;
        }
    },
    template: `
        <div>
            <h3>Identicon Generator</h3>

            <div>
                Input
                <input v-on:input="onInput" />
            </div>
            
            <div>
                Output:
                <div v-html="identicon"></div>
            </div>
        </div>
    `
});
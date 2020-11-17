const sliderApp = new Vue({
    el: "#root",
    data: {
        imgSources: data.map(e => e.src),
        currentSrcIndex: 0
    },
    methods: {
        movePrev: function() {
            (this.currentSrcIndex == 0) ? this.currentSrcIndex = this.imgSources.length - 1: this.currentSrcIndex--;
        },

        moveNext: function() {
            (this.currentSrcIndex == this.imgSources.length - 1) ? this.currentSrcIndex = 0: this.currentSrcIndex++;
        }
    }
})
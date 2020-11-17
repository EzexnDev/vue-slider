const sliderApp = new Vue({
    el: "#root",
    data: {
        imgSources: data.map(e => e.src),
        currentSrcIndex: 0
    },
    methods: {
        movePrev: function() {
            // IF -> True Torno all'inizio
            // IF -> False Torno indietro di 1
            (this.currentSrcIndex == 0) ? this.currentSrcIndex = this.imgSources.length - 1: this.currentSrcIndex--;
        },
        // IF -> True Torno all'inizio
        // IF -> False vado avanti di 1
        moveNext: function() {
            (this.currentSrcIndex == this.imgSources.length - 1) ? this.currentSrcIndex = 0: this.currentSrcIndex++;
        }
    }
})
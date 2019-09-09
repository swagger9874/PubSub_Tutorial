class BlueToGreen {
    constructor() {
        this.toColor = "green"
    }
    notify(ps,eo) {
        console.log(ps);
        ps.publish(this.toColor,eo);

    }
}
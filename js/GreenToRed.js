class GreenToRed {
    constructor() {
        this.toColor = "red"
    }
    notify(ps,eo) {
        console.log(ps);
        ps.publish(this.toColor,eo);

    }
}
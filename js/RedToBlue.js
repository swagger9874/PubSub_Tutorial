
class RedToBlue {
    constructor() {
        this.toColor = "blue"
    }
    notify(ps,eo) {
        console.log(ps);
        ps.publish(this.toColor,eo);

    }
}
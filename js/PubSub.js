
class PubSub{
    constructor(){
        this.rtb = ["elementObserver1", "elementObserver2"]
        this.btg = ["elementObserver3"]
        this.gtr = ["elementObserver4"]
    }

    publish(color,eo){
        var list =[];
        if(color == "blue"){
            list = this.rtb;
        }else if(color == "green"){
            list = this.btg
        }else{
            list = this.gtr
        }
         for(let element of list){
             eo.update(color , element)
         }
         
         this.subscribe(list, color)
    }
    subscribe(list, color){
        if(color == "blue"){
            for(let o of list){
                this.btg.push(o);
            }
        }else if(color == "green"){
            for(let o of list){
                this.gtr.push(o);
            }
        }else{
            for(let o of list){
                this.rtb.push(o);
            }
        }
        console.log(this.btg)
        this.unSubscribe(color)
    }
    unSubscribe(color){
        const list = [];
        if(color == "blue"){
            this.rtb = list;
        }else if(color == "green"){
            this.btg = list;
        }else{
            this.gtr = list;
        }

    }

}

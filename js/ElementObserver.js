class ElementObserver{
        constructor(){
            this.element = {}
        }

        update(color ,elementId){
            this.element = document.getElementById(elementId)
            console.log(this.element)
            this.element.style.backgroundColor = color;
        }
    }
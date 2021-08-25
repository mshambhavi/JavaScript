class Bottle {
    constructor(
        colour,
        shape,
        lidOpen,
        isEmpty,
        h,
        d,
    ) {
        this.colour = colour,
        this.shape = shape,
        this.lidOpen = lidOpen,
        this.isEmpty = isEmpty,
        this.size = {
            height: h,
            diameter: d,
        }
    };

    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    toggleEmpty(isEmpty){
        this.isEmpty = isEmpty;
    }
    changeColour(change){
        this.colour = change;
    }
    toggleSize(newHeight, newDiameter){
        this.size.height = newHeight;
        this.size.diameter = newDiameter;
    }

}

export default Bottle; 
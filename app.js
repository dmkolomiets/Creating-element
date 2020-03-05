class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        elem.classList.add('block');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; 
        fontSize:${this.fontSize}px; textAlign:${this.textAlign}`;
        elem.style.cssText = param;
    }
}

const item = new Options(300, 500, "red", 12, 'center');

item.createDiv();
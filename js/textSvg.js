class TextSVG {
    // text: text to display in svg
    // textColor: color for the text, example: "#FFF"
    // textCenter: object { x, y}, example: {x: 200, y: 200}
    // containerRadius: radius (integer) that contains the text, example 100
    constructor(text, textColor, textCenter, containerRadius) {
        this._text = text;
        this._textColor = textColor;
        this._textCenter = textCenter;
        this._containerRadius = containerRadius;
        this._textSVG = null;
        this._externalVertexCoords = [];
        this._createSVG();
    }

    _createSVG() {
        let words = this._text.split(' ');
        let arrayMiddle = Math.ceil(words.length / 2);
        let fontSize = this._containerRadius * 0.15;
        let firstLine = words.slice(0, arrayMiddle).join(' ');
        let secondLine = words.slice(arrayMiddle).join(' ');

        this._textSVG = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this._textSVG.setAttribute("x", this._textCenter.x);
        this._textSVG.setAttribute("y", this._textCenter.y);
        this._textSVG.setAttribute("text-anchor", "middle");
        this._textSVG.setAttribute("dominant-baseline", "middle");
        this._textSVG.setAttribute("font-size", fontSize);
        this._textSVG.setAttribute("font-weight", 'bold');
        this._textSVG.setAttribute("font-family", 'Segoe UI, Calibri, Open Sans, Roboto, Arial, sans-serif');
        this._textSVG.setAttribute("fill", this._textColor);

        let tspan1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan1.textContent = firstLine;
        this._textSVG.appendChild(tspan1);

        let tspan2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan2.textContent = secondLine;
        tspan2.setAttribute('x', this._textCenter.x);
        tspan2.setAttribute('dy', '1.2em');
        this._textSVG.appendChild(tspan2);
    }

    Get() {
        return this._textSVG;
    }
}

export default TextSVG;
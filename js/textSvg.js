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
        let lines = this._preparedLines(this._text);
        let fontSize = this._containerRadius * 0.15;

        this._textSVG = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this._textSVG.setAttribute("x", this._textCenter.x);
        this._textSVG.setAttribute("y", this._textCenter.y);
        this._textSVG.setAttribute("text-anchor", "middle");
        this._textSVG.setAttribute("dominant-baseline", "middle");
        this._textSVG.setAttribute("font-size", fontSize);
        this._textSVG.setAttribute("font-weight", 'bold');
        this._textSVG.setAttribute("font-family", 'Segoe UI, Calibri, Open Sans, Roboto, Arial, sans-serif');
        this._textSVG.setAttribute("fill", this._textColor);

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.textContent = line;
            tspan.setAttribute('x', this._textCenter.x);
            tspan.setAttribute('dy', '1.2em');
            this._textSVG.appendChild(tspan);
        }        
    }

    _toNameStr(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    _preparedLines(mainStr) {
        let words = mainStr.split(" ").map(this._toNameStr);
        let wordPairs = [];

        for (let i = 0; i < words.length; i += 2) {
            let pair = words[i];
            if (i + 1 < words.length) {
                pair += " " + words[i + 1];
            }
            wordPairs.push(pair);
        }
        return wordPairs;
    }


    Get() {
        return this._textSVG;
    }
}

export default TextSVG;
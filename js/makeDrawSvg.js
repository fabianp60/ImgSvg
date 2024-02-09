import HexagonSVG from './hexagon.js';

class MakeDrawSVG {
    constructor(studentsArray) {
        this._studentsArray = studentsArray;
        this._buildDraw();
    }

    _buildDraw() {
        this._drawSVG = document.createElementNS("http://www.w3.org/2000/svg", "g");

        let rubyHex = new HexagonSVG("#E50C21", { x: 500, y: 140 }, 100);
        this._drawSVG.appendChild(rubyHex.Get());

        // 90 a la izquierda o derecha, 160 mas hacia abajo
        // Zafiro
        let sapphire1Hex = new HexagonSVG("#3282F6", { x: 410, y: 300 }, 100, 10);
        this._drawSVG.appendChild(sapphire1Hex.Get());

        let sapphire2Hex = new HexagonSVG("#3282F6", { x: 590, y: 300 }, 100, 10);
        this._drawSVG.appendChild(sapphire2Hex.Get());

        // Oro
        let gold1Hex = new HexagonSVG("#C39B00", { x: 320, y: 460 }, 100, 30);
        this._drawSVG.appendChild(gold1Hex.Get());

        let gold2Hex = new HexagonSVG("#C39B00", { x: 500, y: 460 }, 100, 30);
        this._drawSVG.appendChild(gold2Hex.Get());

        let gold3Hex = new HexagonSVG("#C39B00", { x: 680, y: 460 }, 100, 30);
        this._drawSVG.appendChild(gold3Hex.Get());

        // Plata
        let silver1Hex = new HexagonSVG("#989898", { x: 230, y: 620 }, 100);
        this._drawSVG.appendChild(silver1Hex.Get());

        let silver2Hex = new HexagonSVG("#989898", { x: 410, y: 620 }, 100);
        this._drawSVG.appendChild(silver2Hex.Get());

        let silver3Hex = new HexagonSVG("#989898", { x: 590, y: 620 }, 100);
        this._drawSVG.appendChild(silver3Hex.Get());

        let silver4Hex = new HexagonSVG("#989898", { x: 770, y: 620 }, 100);
        this._drawSVG.appendChild(silver4Hex.Get());
    }

    Get() {
        return this._drawSVG;
    }
}

export default MakeDrawSVG;
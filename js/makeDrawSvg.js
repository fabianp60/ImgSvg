import HexagonSVG from './hexagonSvg.js';
import TextSVG from './textSvg.js';

class MakeDrawSVG {
    constructor(studentsArray) {
        this._studentsArray = studentsArray;
        this._drawSVG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this._buildDraw();
    }

    _buildDraw() {
        this._drawBadges();
    }

    _drawBadges() {
        this._drawBadge(this._studentsArray[0], "#E50C21", { x: 500, y: 140 }, 100);
        // 90 a la izquierda o derecha, 160 mas hacia abajo
        // Zafiro
        this._drawBadge(this._studentsArray[1], "#3282F6", { x: 410, y: 300 }, 100, 10);
        
        this._drawBadge(this._studentsArray[2], "#3282F6", { x: 590, y: 300 }, 100, 10);
        
        // Oro
        this._drawBadge(this._studentsArray[3], "#C39B00", { x: 320, y: 460 }, 100, 30);

        this._drawBadge(this._studentsArray[4], "#C39B00", { x: 500, y: 460 }, 100, 30);

        this._drawBadge(this._studentsArray[5], "#C39B00", { x: 680, y: 460 }, 100, 30);

        // Plata
        this._drawBadge(this._studentsArray[6], "#989898", { x: 230, y: 620 }, 100);

        this._drawBadge(this._studentsArray[7], "#989898", { x: 410, y: 620 }, 100);

        this._drawBadge(this._studentsArray[8], "#989898", { x: 590, y: 620 }, 100);

        this._drawBadge(this._studentsArray[9], "#989898", { x: 770, y: 620 }, 100);
    }

    _drawBadge(studentData, hexagonColor, center, radius, amt = 20) {
        let hexagon = new HexagonSVG(hexagonColor, center, radius, amt);
        this._drawSVG.appendChild(hexagon.Get());

        let scoreText = new TextSVG(studentData.puntaje.toString(),"#fff", { x: center.x, y: center.y - 30 }, radius);
        this._drawSVG.appendChild(scoreText.Get());

        let nameText = new TextSVG(studentData.nombre,"#000", center, radius);
        this._drawSVG.appendChild(nameText.Get());
    }

    Get() {
        return this._drawSVG;
    }
}

export default MakeDrawSVG;
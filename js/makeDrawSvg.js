import HexagonSVG from './hexagonSvg.js';
import TextSVG from './textSvg.js';

class MakeDrawSVG {
    constructor(studentsArray, options = {}) {
        this._studentsArray = studentsArray;
        this._options = Object.assign({
            showTitles: true,
            titleLine1: "INSTITUCIÓN EDUCATIVA CAUCA",
            titleLine2: "MEJORES DIEZ PUNTAJES GLOBALES",
            titleLine3: "DE LAS PRUEBAS SABER 11 2026",
            showShields: true,
            shieldPosition: "both",
            escudoUrl: "img/escudo.jpg"
        }, options);

        this._drawSVG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this._buildDraw();
    }

    _buildDraw() {
        if (this._options.showTitles) {
            this._drawTitles();
        }
        if (this._options.showShields) {
            this._drawShields();
        }
        this._drawBadges();
    }

    _drawTitles() {
        const titlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

        if (this._options.titleLine1) {
            const line1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
            line1.setAttribute("x", "500");
            line1.setAttribute("y", "55");
            line1.setAttribute("text-anchor", "middle");
            line1.setAttribute("font-size", "34");
            line1.setAttribute("font-weight", "900");
            line1.setAttribute("font-family", "Segoe UI, Calibri, Open Sans, Roboto, Arial, sans-serif");
            line1.setAttribute("fill", "#0513D6");
            line1.textContent = this._options.titleLine1;
            titlesGroup.appendChild(line1);
        }

        if (this._options.titleLine2) {
            const line2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
            line2.setAttribute("x", "500");
            line2.setAttribute("y", "100");
            line2.setAttribute("text-anchor", "middle");
            line2.setAttribute("font-size", "28");
            line2.setAttribute("font-weight", "800");
            line2.setAttribute("font-family", "Segoe UI, Calibri, Open Sans, Roboto, Arial, sans-serif");
            line2.setAttribute("fill", "#966D03");
            line2.textContent = this._options.titleLine2;
            titlesGroup.appendChild(line2);
        }

        if (this._options.titleLine3) {
            const line3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
            line3.setAttribute("x", "500");
            line3.setAttribute("y", "145");
            line3.setAttribute("text-anchor", "middle");
            line3.setAttribute("font-size", "28");
            line3.setAttribute("font-weight", "800");
            line3.setAttribute("font-family", "Segoe UI, Calibri, Open Sans, Roboto, Arial, sans-serif");
            line3.setAttribute("fill", "#000000");
            line3.textContent = this._options.titleLine3;
            titlesGroup.appendChild(line3);
        }

        this._drawSVG.appendChild(titlesGroup);
    }

    _drawShields() {
        if (!this._options.escudoUrl) return;

        const shieldWidth = 170;
        const shieldHeight = 200;
        const shieldY = 160;

        if (this._options.shieldPosition === "both" || this._options.shieldPosition === "left") {
            const leftShield = document.createElementNS("http://www.w3.org/2000/svg", "image");
            leftShield.setAttributeNS("http://www.w3.org/1999/xlink", "href", this._options.escudoUrl);
            leftShield.setAttribute("href", this._options.escudoUrl);
            leftShield.setAttribute("x", "35");
            leftShield.setAttribute("y", shieldY.toString());
            leftShield.setAttribute("width", shieldWidth.toString());
            leftShield.setAttribute("height", shieldHeight.toString());
            this._drawSVG.appendChild(leftShield);
        }

        if (this._options.shieldPosition === "both" || this._options.shieldPosition === "right") {
            const rightShield = document.createElementNS("http://www.w3.org/2000/svg", "image");
            rightShield.setAttributeNS("http://www.w3.org/1999/xlink", "href", this._options.escudoUrl);
            rightShield.setAttribute("href", this._options.escudoUrl);
            rightShield.setAttribute("x", "795");
            rightShield.setAttribute("y", shieldY.toString());
            rightShield.setAttribute("width", shieldWidth.toString());
            rightShield.setAttribute("height", shieldHeight.toString());
            this._drawSVG.appendChild(rightShield);
        }
    }

    _drawBadges() {
        const offsetY = (this._options.showTitles || this._options.showShields) ? 220 : 0;

        // 1st place
        if (this._studentsArray[0]) {
            this._drawBadge(this._studentsArray[0], "#E50C21", { x: 500, y: 140 + offsetY }, 100);
        }

        // Zafiro (2nd & 3rd place)
        if (this._studentsArray[1]) {
            this._drawBadge(this._studentsArray[1], "#3282F6", { x: 410, y: 300 + offsetY }, 100, 10);
        }
        if (this._studentsArray[2]) {
            this._drawBadge(this._studentsArray[2], "#3282F6", { x: 590, y: 300 + offsetY }, 100, 10);
        }

        // Oro (4th, 5th, 6th place)
        if (this._studentsArray[3]) {
            this._drawBadge(this._studentsArray[3], "#C39B00", { x: 320, y: 460 + offsetY }, 100, 30);
        }
        if (this._studentsArray[4]) {
            this._drawBadge(this._studentsArray[4], "#C39B00", { x: 500, y: 460 + offsetY }, 100, 30);
        }
        if (this._studentsArray[5]) {
            this._drawBadge(this._studentsArray[5], "#C39B00", { x: 680, y: 460 + offsetY }, 100, 30);
        }

        // Plata (7th, 8th, 9th, 10th place)
        if (this._studentsArray[6]) {
            this._drawBadge(this._studentsArray[6], "#989898", { x: 230, y: 620 + offsetY }, 100);
        }
        if (this._studentsArray[7]) {
            this._drawBadge(this._studentsArray[7], "#989898", { x: 410, y: 620 + offsetY }, 100);
        }
        if (this._studentsArray[8]) {
            this._drawBadge(this._studentsArray[8], "#989898", { x: 590, y: 620 + offsetY }, 100);
        }
        if (this._studentsArray[9]) {
            this._drawBadge(this._studentsArray[9], "#989898", { x: 770, y: 620 + offsetY }, 100);
        }
    }

    _drawBadge(studentData, hexagonColor, center, radius, amt = 20) {
        let hexagon = new HexagonSVG(hexagonColor, center, radius, amt);
        this._drawSVG.appendChild(hexagon.Get());

        let scoreText = new TextSVG(studentData.puntaje !== undefined ? studentData.puntaje.toString() : "", "#fff", { x: center.x, y: center.y - 60 }, radius);
        this._drawSVG.appendChild(scoreText.Get());

        let nameText = new TextSVG(studentData.nombre || "", "#000", { x: center.x, y: center.y - 25 }, radius);
        this._drawSVG.appendChild(nameText.Get());
    }

    Get() {
        return this._drawSVG;
    }
}

export default MakeDrawSVG;
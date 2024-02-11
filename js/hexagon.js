import ColorUtils from './colorUtils.js';

class HexagonSVG {
    // baseColor: hexadecimal base color, example: "#DA0F3C"
    // hexagonCenter: object { x, y}, example: {x: 200, y: 200}
    // hexagonRadius: radius (integer) for sizing the hexagon, example 100
    constructor(baseColor, hexagonCenter, hexagonRadius, amt = 20) {
        this._baseColor = baseColor;
        this._hexagonCenter = hexagonCenter;
        this._hexagonRadius = hexagonRadius;
        this._hexaSVG = null;
        this._externalVertexCoords = [];
        this._internalVertexCoords = [];
        this._colorPalette = this._createColorPalette(amt);
        this._createSVG();
    }

    _createColorPalette(amt) {
        let colorUtils = new ColorUtils(this._baseColor);
        let darkColors = [];
        let lightColors = [];
        for (let i = 1; i <= 3; i++) {
            darkColors.push(colorUtils.GetLightenDarkenColor(-amt * i));
            lightColors.push(colorUtils.GetLightenDarkenColor(amt * i));
        }
        return [].concat(lightColors.slice(1, 3), darkColors, lightColors[0]);
    }

    _createSVG() {
        this._calculateVertexCoordinates();
        
        this._hexaSVG = document.createElementNS("http://www.w3.org/2000/svg", "g");

        for (let index = 0; index < 6; index++) {
            let nextIndex = (index + 1) % 6;
            let trapeze = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            // Create points
            let polygonPoints = "" + this._externalVertexCoords[index].x + "," + this._externalVertexCoords[index].y + " ";
            polygonPoints += this._externalVertexCoords[nextIndex].x + "," + this._externalVertexCoords[nextIndex].y + " ";
            polygonPoints += this._internalVertexCoords[nextIndex].x + "," + this._internalVertexCoords[nextIndex].y + " ";
            polygonPoints += this._internalVertexCoords[index].x + "," + this._internalVertexCoords[index].y + " ";
            
            // Asing attributes
            trapeze.setAttribute("points", polygonPoints);
            trapeze.setAttribute("fill", this._colorPalette[index]);
            trapeze.setAttribute("stroke", this._colorPalette[index]);
            // Add trapeze to the group
            this._hexaSVG.appendChild(trapeze);
        }
        // crea poligono interno
        let polygonPoints = ""
        for (let index = 0; index < 6; index++) {
            polygonPoints += this._internalVertexCoords[index].x + "," + this._internalVertexCoords[index].y + " ";
        }
        let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        // Asing attributes
        polygon.setAttribute("points", polygonPoints);
        polygon.setAttribute("fill", this._baseColor);
        polygon.setAttribute("stroke", this._baseColor);
        // Añadir el trapecio al array
        this._hexaSVG.appendChild(polygon);
    }

    _calculateVertexCoordinates() {
        let angle = -Math.PI / 2;
        let shortRadius = this._hexagonRadius * 5 / 7;
        
        for (let index = 0; index < 6; index++) {
            let vex = this._hexagonCenter.x + this._hexagonRadius * Math.cos(angle);
            let vey = this._hexagonCenter.y + this._hexagonRadius * Math.sin(angle);
            this._externalVertexCoords.push({ x: vex, y: vey});

            let vix = this._hexagonCenter.x + shortRadius * Math.cos(angle);
            let viy = this._hexagonCenter.y + shortRadius * Math.sin(angle);
            this._internalVertexCoords.push({ x: vix, y: viy});
            
            angle += Math.PI / 3;
        }
    }

    Get() {
        return this._hexaSVG;
    }
}

export default HexagonSVG;
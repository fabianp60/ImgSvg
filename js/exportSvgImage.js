class ExportSvgImage {
    constructor(svgDomObj) {
        this._svgDomObj = svgDomObj;
    }

    ExportPngFile(fileName) {
        if (!fileName.endsWith('.png')) { // Si fileName no termina en '.png'
            fileName += '.png'; // Agrega '.png' al final de fileName
        }
        // Serializa el SVG a una cadena XML
        let xml = new XMLSerializer().serializeToString(this._svgDomObj);
    
        let img = new Image();
        img.onload = function () {
            // Crea un canvas del mismo tamaño que el SVG
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
    
            let context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, img.width, img.height); // Dibuja el SVG en el canvas
    
            let png = canvas.toDataURL('image/png'); // Crea una imagen PNG
    
            let link = document.createElement('a'); // Crea un enlace
            link.download = fileName; // Nombre del archivo descargado
            link.href = png;
            link.click(); // Descarga la imagen
        };
        // Establece la fuente de la imagen como el SVG
        img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(xml);
    }

    ExportSvgFile(fileName) {
        if (!fileName.endsWith('.svg')) { // Si fileName no termina en '.svg'
            fileName += '.svg'; // Agrega '.svg' al final de fileName
        }
        let serializer = new XMLSerializer();
        let source = serializer.serializeToString(this._svgDomObj); // Serializa el SVG a una cadena XML

        let blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' }); // Crea un blob con la cadena XML
        let url = URL.createObjectURL(blob); // Crea una URL para el blob

        let link = document.createElement('a'); // Crea un enlace
        link.href = url;
        link.download = fileName; // Nombre del archivo descargado
        link.click(); // Descarga el archivo SVG

    }
}

export default ExportSvgImage;
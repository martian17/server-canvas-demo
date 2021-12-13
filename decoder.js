const { createCanvas, loadImage } = require("canvas");


let urlToData = function(url){
    return new Promise((res,rej)=>{
        loadImage(url).then((img) => {
            const w = img.width;
            const h = img.height;
            const canvas = createCanvas(w,h);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0,0,w,h);
            res(ctx.getImageData(0,0,w,h));
        });
    });
};

module.exports = urlToData;
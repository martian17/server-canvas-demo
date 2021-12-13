const decoder = require("./decoder.js");

const getPixel = function(imgdata, x, y){
    const idx = (x+y*imgdata.width)*4;
    const data = imgdata.data;
    return [//rgba
        data[idx+0],
        data[idx+1],
        data[idx+2],
        data[idx+3]
    ];
}

const main = async function(){
    const imgdata = await decoder("https://hackster.imgix.net/uploads/attachments/1317693/_Ek101jDIJo.blob?auto=compress%2Cformat&w=900&h=675&fit=min");
    console.log(imgdata);
    console.log(getPixel(imgdata,100,100));
};

main();
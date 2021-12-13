const decoder = require("./decoder.js");

const main = async function(){
    const imgdata = await decoder("https://hackster.imgix.net/uploads/attachments/1317693/_Ek101jDIJo.blob?auto=compress%2Cformat&w=900&h=675&fit=min");
    console.log(imgdata);
};

main();
const PdfExtractor = require('pdf-extractor').PdfExtractor
const Canvas= require('pdf-extractor').CanvasRenderer
const fs = require('fs')
 fs.readFileSync('../uploads/Como Aprender Inglês Sozinho.pdf').then(res=>{
    console.log(res)
 })
let outputDir = './process/'
/*
pdfExtractor = new PdfExtractor(outputDir, {
    viewportScale: (width, height) => {
        //dynamic zoom based on rendering a page to a fixed page size 
        if (width > height) {
            //landscape: 1100px wide
            return 1100 / width;
        }
        //portrait: 800px wide
        return 800 / width;
    },
    pageRange: [1,5],
});

pdfExtractor.parse('../uploads/Como Aprender Inglês Sozinho.pdf').then(function () {
	console.log('# End of Document');
}).catch(function (err) {
	console.error('Error: ' + err);
});*/
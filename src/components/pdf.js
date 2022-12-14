import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import download from 'downloadjs';

async function createPdf(data) {

    const existingPdfBytes = await fetch(require("../assets/pdf/main.pdf")).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    const signatureIMG = await fetch(data[7]).then((res) => res.arrayBuffer());
    const signature = await pdfDoc.embedPng(signatureIMG);

    /***************************************************************/
    /*************** Id ***************/
    firstPage.drawText(data[2], {
        x: 5,
        y: height-35,
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    });
    /*************** Name ***************/
    firstPage.drawText("Docteur "+data[3]+" "+data[4], {
        x: 5,
        y: height-55,
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    });
    /*************** Coordonate ***************/
    firstPage.drawText("tel : "+data[5], {
        x: 5,
        y: height-75,
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    });
    /*************** Date ***************/
    firstPage.drawText("le : "+data[1], {
        x: width - 200,
        y: height-180,
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    });
    /*************** Patient name ***************/
    firstPage.drawText(data[0], {
        x: width - 200,
        y: height-200,
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    });
    firstPage.drawImage(signature, {
        x: width-300,
        y: 200
    })
    /****************************************************************/
    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, "ordonnance_"+data[6]+"_"+data[1]+".pdf", "application/pdf");
}

export default createPdf;
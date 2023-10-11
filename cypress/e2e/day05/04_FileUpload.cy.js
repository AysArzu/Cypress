/// <reference types="cypress" />

describe('File Upload',()=>{
    it.skip('Single File Upload',()=>{
   /*
https://www.npmjs.com/package/cypress-file-upload
npm install --save-dev cypress-file-upload
resimleri fixtures file a yükledik orada arar. Başka yere koysan yolunu belirtsen bile hata veriyor
   */
   cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
   
   const path1="description.png"
   cy.get('#filesToUpload').attachFile(path1)
   cy.get('#fileList > li').should('include.text','description.png')
    })
   
    it.skip('Multiple File Upload 1',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
   
        const path1="description.png"
        const path2="KOZMETIK.png"
        const path3="meet.png"
        cy.get('#filesToUpload').attachFile(path1).wait(3000)
                                .attachFile(path2).wait(3000)
                                .attachFile(path3).wait(3000)
   
       
    })
   
    it.skip('Multiple File Upload 2',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
   
        const path1="description.png"
        const path2="KOZMETIK.png"
        const path3="meet.png"
        cy.get('#filesToUpload').attachFile([path1,path2,path3])
                                
        cy.get('#fileList > :nth-child(1)').should('have.text','description.png')//bire bir aynı olmak zorunda
        cy.get('#fileList > :nth-child(2)').should('contain.text','KOZMETIK.png')
        cy.get('#fileList > :nth-child(3)').should('include.text','meet.png')
       
    })
    it('OverWrite File Name',()=>{
        const path1="description.png"
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile({filePath: path1, fileName:'image.png'})
        // sitedeki dosyanın adını değiştirdik. vs dekinin adını değil
    })
   
   
   })
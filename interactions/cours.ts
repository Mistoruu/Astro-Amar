"use strict";

const headerTags = document.getElementsByTagName('header') as HTMLCollectionOf<HTMLElement>;
for(let i=0;i<headerTags.length;i++){
    const header = headerTags[i];
}
/*
// Change content
headerTag.innerText = "Exemple";
headerTag.innerHTML = "<p>Exemple</p>";
// Change style
headerTag.style.color = "blue";
headerTag.style.background = "black";
headerTag.style.border = "1px solid black"
headerTag.style.margin = "10px";
headerTag.style.padding = "50vh";

// Change classes
headerTag.classList.add('dark-mode');
headerTag.classList.add('gaming-background gaming-border')
headerTag.classList.remove('gaming-border');
headerTag.classList.toggle('dark-mode');
*/

// Tests
const pTags = document.getElementsByTagName('p') as HTMLCollectionOf<HTMLElement>;

for(let i=0;i<pTags.length;i++){
    const p = pTags[i];
    p.innerText = "Bonjour";

}

class ParagraphChanger {
    // Properties
    paragraph: HTMLParagraphElement | null;

    constructor(){
        this.paragraph = document.querySelector('p');
        
    }

    CheckParagraph () {
        console.log(this.paragraph);
        // console.warn(this.paragraph);
        // console.error(this.paragraph):
    }

    ClassOperations(){
        if(this.paragraph){
        this.paragraph?.classList.add("first-class", "second-class");
        }
    }
    ChangeStyle (){
        if (this.paragraph) {
            this.paragraph.style.background = "black";
            this.paragraph.style.border = "2px solid blue";
            this.paragraph.style.borderRadius = "30px";
            this.paragraph.style.color = "White";

        }
    }
}

const ParaChangerInstance = new ParagraphChanger()
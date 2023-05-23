declare global {
    var myDebug:any;
    var myCache:any;
}

import { Debug } from './components/debug/debug';
import { DataCache } from './components/datacache/datacache';

var myDebug = new Debug();
var myCache = new DataCache();

myDebug.initLog(false);

import { SetContent } from "./components/setContent/setContent";
import { SetContentId } from "./components/setContentId/setContentId";
import { NavListener } from "./components/navListener/navListener";
import { ASpot } from "./views/aSpot";
import { BSpot } from "./views/bSpot";
import { Logoff } from "./views/logoff";
import { CLayer } from "./views/cLayer";
import { PAS } from "./views/pas";
import { GenerateHtml } from "./components/generateHtml/generateHtml";

export class UiBuilder {
    buildButton:HTMLElement;
    createButton:HTMLElement;
    requiredFields:any;
    fieldFilled:Boolean;
    setContent: SetContent;
    setContentId: SetContentId;
    generateHtml: GenerateHtml;
    navListener:NavListener;
    debug:any;
    cache:any;
    allFields:any;
    currenttOffer:any;

    constructor() {
        this.debug = myDebug;
        this.cache = myCache;
        this.setContent = new SetContent(myCache, myDebug);
        this.setContentId = new SetContentId();
        this.generateHtml = new GenerateHtml();
        this.buildButton = document.querySelector('.build-offer');
        this.createButton = document.querySelector('.create-offer');
        this.requiredFields = document.querySelectorAll('*[required]');
        this.navListener = new NavListener(myDebug, myCache);
        this.currenttOffer = new ASpot(false, myCache, myDebug);
        this.allFields = this.currenttOffer.allFields;
        this.eventListener();
        this.copyThis();
    }

    /**
     * Reload XMP element everytime you build or switch tabs
     */
    reloadXmp() {
        switch(this.navListener.activeTab) {
            case 'ASpot' : 
                this.currenttOffer = new ASpot(true, myCache, myDebug); 
                break;
            case 'BSpot' : 
                this.currenttOffer = new BSpot(true, myCache, myDebug);
                break;
            case 'CLayer' :
                this.currenttOffer = new CLayer(true, myCache, myDebug);
                break;
            case 'Logoff' :
                this.currenttOffer = new Logoff(true, myCache, myDebug);
                break;
            case 'PAS' : 
                this.currenttOffer = new PAS(true, myCache, myDebug);
                break;
        }
    }

    eventListener() {
        if( !this.buildButton ) {
            return;
        }

        this.buildButton.addEventListener('click', () => {
            let isValid:boolean = this.checkRequired();

            if( isValid ) {
                this.reloadXmp();
                this.setContent.init(this.currenttOffer);
                this.handleBuild();
                window.scrollTo(0,0);
            }
        });

        this.createButton.addEventListener('click', () => {
            this.generateHtml.createHtmlOutput();            
            window.scrollTo(0,0);
        });
    }

    checkRequired():boolean {
        this.requiredFields = document.querySelectorAll('*[required]');
        let valid:any = new Map();

        for(let i = 0; i < this.requiredFields.length; i++ ) {
            let field:any = this.requiredFields[i];

            if( field && (!field.value || field.value == '') ) {
                valid.set(false, field);
                this.handleInvalid(field);
            }
        }

        return !valid.has(false);
    }

    handleInvalid(field:any) {
        if( !field.getAttributeNode('id') ) {
            return;
        }
        
        let 
            label:any = document.querySelector(`label[for="${field.getAttributeNode('id').value}"]`), 
            isRequired:any = document.querySelector(`label[for="${field.getAttributeNode('id').value}"] > .isrequired`),
            fieldClassList = field.classList,
            labelClassList = label.classList,
            requiredClassList = isRequired.classList;

        fieldClassList.add('required');
        requiredClassList.add('show');
        labelClassList.add('required');
    }

    handleBuild() {
        this.allFields = this.currenttOffer.allFields;
        
        for(let i = 0; i < this.allFields.length; i++ ) {
            let field:any = this.allFields[i];
            this.cache.addMember(this.currenttOffer.offerType, {id:field.getAttributeNode('id').value, value:field.value});
            this.debug.log('Field value:', field.value);
            this.debug.log('Caching Members:', this.cache.getMember());
        }
    }

    copyThis() {
        let 
            copyButton:any = document.querySelector('#copy-this'), 
            copySuccess = document.getElementById('copy-success'),
            htmlOutput:any = document.querySelector('.html-output xmp');

        if( !copyButton ) {
            return;
        }
        
        copyButton.addEventListener('click', async () => {
            try {
                copySuccess.innerHTML = 'Offer Code copied to clipboard';
                await navigator.clipboard.writeText(htmlOutput.innerHTML);
                copySuccess.classList.remove('error', 'hide');
                copySuccess.classList.add('success');
                
                let timer = setTimeout(() => {
                    copySuccess.classList.add('hide');
                    copySuccess.classList.remove('success');
                    clearTimeout(timer);
                }, 1000);
            } catch( err ) {
                copySuccess.classList.add('error');
                copySuccess.classList.remove('success', 'hide');
                copySuccess.innerHTML = 'Oops there was an error copying offer code!';
            }
        });
    }
}

new UiBuilder();

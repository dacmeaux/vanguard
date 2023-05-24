// Listens to nav clicks to change which offer to build
import { ASpot } from "../../views/aSpot";
import { BSpot } from "../../views/bSpot";
import { Logoff } from "../../views/logoff";
import { CLayer } from "../../views/cLayer";
import { PAS } from "../../views/pas";

export class NavListener {
    navTabs: any;
    offerType: string;
    activeTab:string;
    cache:any;
    debug:any;
    inputZone:HTMLElement;

    constructor(debug:any = false, cache:any = false) {
        this.navTabs = document.querySelectorAll('.c11n-navigation nav a');
        this.activeTab = 'ASpot';
        this.cache = cache||{addMember:()=>{}, getMember:()=>{}};
        this.debug = debug||{initLog:()=>{}, log:()=>{}};
        this.inputZone = document.querySelector('.offer-zone .input');
        this.listener();
    }

    listener() {
        for(let i = 0; i < this.navTabs.length; i++) {
            this.navTabs[i].addEventListener('click', () => {
                this.removeActiveTab();
                this.clearXmp();
                let index = i;
                this.navTabs[index].classList.add('active');

                switch(index) {
                    case 0 : 
                        this.activeTab = 'ASpot';
                        new ASpot(false, this.cache, this.debug); 
                        this.inputZone.classList.add('ASpot');
                        this.inputZone.classList.remove('BSpot', 'CLayer', 'Logoff', 'PAS');
                        break;
                    case 1 : 
                        this.activeTab = 'BSpot';
                        new BSpot(false, this.cache, this.debug);
                        this.inputZone.classList.add('BSpot');
                        this.inputZone.classList.remove('ASpot', 'CLayer', 'Logoff', 'PAS');
                        break;
                    case 2 :
                        this.activeTab = 'CLayer';
                        new CLayer(false, this.cache, this.debug);
                        this.inputZone.classList.add('CLayer');
                        this.inputZone.classList.remove('ASpot', 'BSpot', 'Logoff', 'PAS');
                        break;
                    case 3 :
                        this.activeTab = 'Logoff';
                        new Logoff(false, this.cache, this.debug);
                        this.inputZone.classList.add('Logoff');
                        this.inputZone.classList.remove('ASpot', 'BSpot', 'CLayer', 'PAS');
                        break;
                    case 4 : 
                        this.activeTab = 'PAS';
                        new PAS(false, this.cache, this.debug);
                        this.inputZone.classList.add('PAS');
                        this.inputZone.classList.remove('ASpot', 'BSpot', 'CLayer', 'Logoff');
                        break;
                }
            });
        }
    }

    removeActiveTab() {
        for(let i = 0; i < this.navTabs.length; i++ ) {
            this.navTabs[i].classList.remove('active');
        }
    }

    clearXmp() {
        let htmlOutput = document.querySelector('.html-output'),
            htmlOutputArea = htmlOutput.querySelector('.html-output xmp');

            htmlOutput.classList.add('is-hidden');
            htmlOutputArea.innerHTML = '';
    }
}
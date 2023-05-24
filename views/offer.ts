import { GetInputForm } from "../components/getInputForm/getInputForm";

/**
 * Base Offer Class
 */
export abstract class Offer {
    offerType: string;
    inputForm: any;
    allFields:any;
    cache:any;
    debug:any;
    reset:boolean;

    constructor(reset:boolean, cache:any = false, debug:any = false) {
        this.cache = cache||{addMember:()=>{}, getMember:()=>{}};
        this.debug = debug||{initLog:()=>{}, log:()=>{}};
        this.debug.initLog(false);
        this.offerType = 'Offer';
        this.reset = reset;
    }

    init() {
        this.setOffer();
        this.inputForm = new GetInputForm(this.cache, this.debug);
        this.inputForm.setData(this.offerType);

        if( !this.reset ) {
            this.setOfferOptions();
        }

        this.allFields = document.querySelectorAll('*[name=info]');
        this.debug.log('Offer Type', this.offerType);
        this.debug.log('All Fields:', this.allFields);
        this.inputForm.handleFocusIn(this.allFields);
        this.inputForm.handleFocusOut(this.allFields, this.offerType);
        this.inputForm.handleExcludes(this.allFields, this.offerType);
        this.inputForm.handleIncludes(this.allFields, this.offerType);
    }

    protected setOffer() {
        let offerContainer = document.querySelector('.offer-display');

        offerContainer.innerHTML = `If you are seeing this then something is wrong. Please override method setOffer() in your subclass`;
    }

    protected setOfferOptions() {
        let offerZone = document.querySelector('.offer-zone .container');
        this.inputForm.setData(this.offerType);

        if( offerZone ) {
            offerZone.innerHTML = this.inputForm.getForm(this.offerType);
        }
    }

    getSpecial(type:string):any {
        return false;
    }
}
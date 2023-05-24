// Sets the content of the offer
export class SetContent {
    [index: string]: any;
    currentOffer:any;
    tokenRegEx:RegExp;
    offerContainer:HTMLElement;
    debug:any; 
    cache:any;
    allFields:any;

    constructor(cache:any = false, debug:any = false) {
        this.cache = cache||{addMember:()=>{}, getMember:()=>{}};
        this.debug = debug||{initLog:()=>{}, log:()=>{}}; 
        this.debug.initLog(true);
    }

    init(currentOffer:any) {
        this.currentOffer = currentOffer;
        this.debug.initLog(true);
        this.offerContainer = document.querySelector('.offer-display');
        this.setOfferContent();
    }

    setOfferContent() {
        this.allFields = document.querySelectorAll('*[name=info]');

        for(let i = 0; i < this.allFields.length; i++ ) {
            this.setOutput(this.allFields[i]);
        }

        this.clearTokenOrphans();
    }

    setOutput(field:any) {
        if( !field ) {
            return false;
        }
        
        let 
            fieldID = field.getAttributeNode('id').value, 
            callableName = `set${fieldID.split('-').map((str:string) => str.charAt(0).toUpperCase() + str.slice(1)).join('')}`;

        this[callableName](fieldID);
    }

    getTokenRegEx(token: string = ''): RegExp{
        let pattern;
        
        if( token == '' ) {
            pattern = '\{{2}[^\}]+\}{2}';
        } else {
            pattern = '\{{2}'+ token +'\}{2}';
        }

        this.debug.log(pattern);
        return new RegExp(pattern, 'g');
    }

    clearTokenOrphans() {
        if( !this.offerContainer ) {
            return;
        }
        
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx(), '');
    }

    setOfferTitle(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('offerTitle'), myValue);
        this.debug.log('TrackerTitle');
    }

    setOfferId(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('offerID'), myValue);
        this.debug.log('OfferID');
    }

    setImpressionLimit(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('maxImpressions'), myValue);
        this.debug.log('MaxImpressionInput');
    }

    setSuppressionDays(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('suppressionDays'), myValue);
        this.debug.log('SuppressionDays');
    }

    setDelayShowTime(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('delayShowTime'), myValue);
        this.debug.log('DelayShowTime');
    }


    setOfferHeader(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('headerText'), myValue);
        this.debug.log('HeaderText');
    }

    setOfferSubtext(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('subText'), myValue);
        this.debug.log('SubText');
    }

    setOfferBodyCopy1(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('bodyCopy1'), `<p>${myValue}</p>`);
        this.debug.log('bodyCopy1');
    }

    setOfferBodyCopy2(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('bodyCopy2'), `<p>${myValue}</p>`);
        this.debug.log('bodyCopy2');
    }

    setTrackingVersion(fieldID:string) {
        this.debug.log('Current Offer:', this.currentOffer.offerType);

        let special = this.currentOffer.getSpecial('impTrackVersionFilename');
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('impTrackVersion'), myValue);
        this.debug.log('trackVersionSelect');

        if( myValue == '' ) {
            myValue = 'v1/';
        }

        if( special ) {
            this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('impTrackVersionFilename'), special[myValue]);
            this.debug.log('impTrackVersionFilename');
        }
    }

    setOfferEyebrow(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('eyeBrow'), myValue);
        this.debug.log('EyeBrow');
    }

    setOfferBanner(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;

        this.debug.log('Image SRC: ', myValue);

        let background_image_default = 'https://multivariate.web.vanguard.com/target/mvt-4451/assets/secure-banner-bg.jpg';

        if( myValue == '') {
            myValue = background_image_default;
        }

        this.debug.log('Token Replacement', this.getTokenRegEx('backgroundImage'));

        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('backgroundImage'), myValue);
        this.debug.log('BackgroundImage');
    }

    setCtaLabel(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('ctaLabel'), myValue);
        this.debug.log('ctaLabel');
    }    

    setCtaUrl(fieldID:string) {
        let myValue = (<HTMLInputElement>document.querySelector(`#${fieldID}`))?.value;
        this.offerContainer.innerHTML = this.offerContainer.innerHTML.replace(this.getTokenRegEx('ctaUrl'), myValue);
        this.debug.log('ctaUrl');
    }
}
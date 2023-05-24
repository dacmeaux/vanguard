import { Offer } from "./offer";
export class Logoff extends Offer {
    constructor(reset:boolean, cache:any = false, debug:any = false) {
        super(reset, cache, debug);
        this.offerType = 'Logoff';
        this.init();
    }

    setOffer() {
        let offerContainer = document.querySelector('.offer-display');
        
        if( offerContainer ) {
        
            offerContainer.innerHTML =
            `<link rel="stylesheet" href="https://multivariate.web.vanguard.com/target/offer_templates/logoff/logoff-offer-template.css">
            <div id="logoff-offer">
                <div id="{{offerID}}" class="logoff-offer-zone banner" data-mvt-max-impression="{{maxImpressions}}" data-mvt-impression-tracking="{{offerID}} Banner|{{offerTitle}} Log Off Offer|Impression">  
                    <div class="content">
                    <div class="content-container">
                            <p class="eyebrow">{{eyeBrow}}</p>
                            <p class="heading c11n-text-xl-headline">{{headerText}}</p>
                            <c11n-button size="medium" variant="primary" class="cta"><a role="button" href="{{ctaUrl}}" target="_self" class="c11n-button c11n-button--medium c11n-button--primary" data-mvt-cta-click-tracking="{{offerID}}|{{offerTitle}} Log Off Offer|Button"><span class="c11n-button__box"><span class="c11n-button__label">{{ctaLabel}}</span></span></a></c11n-button>
                    </div>
                        </div>
                        <div class="photography banner" style="background: url({{backgroundImage}}) no-repeat center right;"></div>
                <button type="button" class="mvt-offer-banner__close-icon" aria-label="Close banner" data-mvt-cta-click-tracking="{{offerID}} Close Icon|{{offerTitle}} Log Off Offer|Button"></button>
                    </div>
                </div>
            <script src="https://multivariate.web.vanguard.com/common/libraries/target-library.js"></script>
            <script src="https://multivariate.web.vanguard.com/target/offer_templates/logoff/{{impTrackVersion}}{{impTrackVersionFilename}}.js"></script>`;
        }
    }

    getSpecial(type:string):any {
        const special = new Map();

        special.set('impTrackVersionFilename', {'v1/':'logoff-offer-rules', 'v2/':'logoff-offer-rules'});

        if( !special.has(type) ) {
            return false;
        }

        return special.get(type);
    }
}
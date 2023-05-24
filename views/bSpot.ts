import { Offer } from "./offer";
export class BSpot extends Offer {
    constructor(reset:boolean, cache:any = false, debug:any = false) {
        super(reset, cache, debug);
        this.offerType = 'BSpot';
        this.init();
    }

    setOffer() {
        let offerContainer = document.querySelector('.offer-display');
        
        if( offerContainer ) {
        
            offerContainer.innerHTML = `<link rel="stylesheet" href="https://multivariate.web.vanguard.com/target/offer_templates/b-spot/bspotOfferTemplate.css" />
            <div id="bspot-offer">
                <div id="{{offerID}}" class="b-spot-offer-zone photo" data-mvt-max-impression="{{maxImpressions}}" data-mvt-impression-tracking="{{offerID}}|{{offerTitle}} Page Offer|Impression">
                    <div class="bspot-image banner" style="background: url({{backgroundImage}}) no-repeat 100%; background-position-x: 100%;"></div>
                    <div class="bspot-container">
                        <div class="content">
                            <p class="heading">{{headerText}}</p>
                            <p class="subheader">{{subText}}</p>
                        </div>
                        <div class="cta-section">
                            <div class="cta">
                                <c11n-button size="medium" variant="primary" class="desktop">
                                    <a role="button" href="{{ctaUrl}}" data-mvt-cta-click-tracking="{{offerID}}|{{offerTitle}} Page Offer|Button" data-mvt-cta-suppression-days="{{suppressionDays}}" target="_self" class="c11n-button c11n-button--medium c11n-button--primary desktop">
                                        <span class="c11n-button__box"><span class="c11n-button__label">{{ctaLabel}}</span></span>
                                    </a>
                                </c11n-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://multivariate.web.vanguard.com/common/libraries/target-library.js"></script>
            <script src="https://multivariate.web.vanguard.com/target/offer_templates/b-spot/{{impTrackVersion}}{{impTrackVersionFilename}}.js"></script>`;
        }
    }

    getSpecial(type:string) {
        const special = new Map();

        special.set('impTrackVersionFilename', {'v1/':'bSpot-offer-template', 'v2/':'bspot-offer-rules'});

        if( !special.has(type) ) {
            return false;
        }

        return special.get(type);
    }
}


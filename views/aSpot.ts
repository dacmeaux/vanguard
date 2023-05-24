import { Offer } from "./offer";

export class ASpot extends Offer {
    constructor(reset:boolean, cache:any = false, debug:any = false) {
        super(reset, cache, debug);
        this.offerType = 'ASpot';
        this.init();
    }

    setOffer() {
        let offerContainer = document.querySelector('.offer-display');

        if( offerContainer ) {
        
            offerContainer.innerHTML = `
            <div class="a-spot-offer-display">
                <link rel="stylesheet" href="https://multivariate.web.vanguard.com/target/offer_templates/a-spot-banner/a-spot-stylesheet.css" />
                <div id="aspot-offer">
                    <div id="{{offerID}}" class="a-spot-offer-zone banner" data-mvt-max-impression="{{maxImpressions}}" data-mvt-impression-tracking="{{offerID}}|{{offerTitle}} Page Offer|Impression" style="background: url({{backgroundImage}}) no-repeat 100%; background-position-x: 100%;">
                        <div class="content">
                            <p class="heading c11n-text-lg-headline">{{headerText}}</p>
                            <p class="subheader c11n-text-sm">{{subText}}</p>
                        </div>
                        <div class="cta-section">
                            <div class="cta">
                                <c11n-button size="medium" variant="primary" class="desktop">
                                    <a role="button" href="{{ctaUrl}}" data-mvt-cta-click-tracking="{{offerID}}|{{offerTitle}} Page Offer|Button" target="_self" class="c11n-button c11n-button--medium c11n-button--primary desktop"><span class="c11n-button__box"><span class="c11n-button__label">{{ctaLabel}}</span></span></a>
                                </c11n-button>
                                <button type="button" aria-label="Button label" title="Button label" class="c11n-button c11n-button--medium c11n-button--icon-primary mobile">
                                    <a href="{{ctaUrl}}" data-mvt-cta-click-tracking="{{offerID}}|{{offerTitle}} Page Offer|Button" target="_self">
                                        <span class="c11n-button__box">
                                            <c11n-icon class="c11n-button__icon-only">
                                                <svg aria-hidden="true" focusable="false" class="c11n-link-right-small c11n-icon--normal"><use _ngcontent-yrt-c51="" xlink:href="#link-right-small"></use></svg>
                                            </c11n-icon>
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <button type="button" class="mvt-offer-banner__close-icon" aria-label="Close banner" data-mvt-cta-click-tracking="{{offerID}} Close Icon|{{offerTitle}} Page Offer|Button"></button>
                    </div>
                </div>
                <script src="https://multivariate.web.vanguard.com/target/offer_templates/a-spot-banner/{{impTrackVersion}}{{impTrackVersionFilename}}.js"></script>
            </div>`;
        }

    }

    getSpecial(type:string) {
        const special = new Map();

        special.set('impTrackVersionFilename', {'v1/':'aSpot-offer-template', 'v2/':'aSpot-offer-template'});

        if( !special.has(type) ) {
            return false;
        }

        return special.get(type);
    }
}
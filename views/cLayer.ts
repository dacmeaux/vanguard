import { Offer } from "./offer";
export class CLayer extends Offer {
    constructor(reset:boolean, cache:any = false, debug:any = false) {
        super(reset, cache, debug);
        this.offerType = 'CLayer';
        this.init();
    }

    setOffer() {
        let offerContainer = document.querySelector('.offer-display');
        
        if( offerContainer ) {
        
            offerContainer.innerHTML = 
            `<link rel="stylesheet" href="https://multivariate.web.vanguard.com/target/offer_templates/c-layer/c-layer.css" />
            <style>
            .c-layer-offer {
                display: none; 
            }
            .c-layer-offer span.c11n-button__label,
            .c-layer-offer span.c11n-button__box {
                margin-bottom: 0; 
            }
            </style>
            <div class="scrim"></div>
            <div id="{{offerID}}" class="c-layer-offer" data-mvt-max-impression="{{maxImpressions}}" data-mvt-delay-show-time="{{delayShowTime}}">
                <div class="layer-close" tabindex="0" data-mvt-cta-click-tracking="{{offerID}} Close Icon|{{offerTitle}} Page Offer|Button">&#215;</div>
                <div class="layer-container">
                    <img src="{{backgroundImage}}">
                    <div class="layer-content">         
                        <h2>{{headerText}}</h2>
                        {{bodyCopy1}}
                        {{bodyCopy2}}
                        <div class="cta">
                            <c11n-button size="medium" variant="primary" class="desktop"><a role="button" href="{{ctaUrl}}" data-mvt-cta-click-tracking="{{offerID}}|{{offerTitle}} Page Offer|Button" target="_self" class="c11n-button c11n-button--medium c11n-button--primary desktop"><span class="c11n-button__box"><span class="c11n-button__label">{{ctaLabel}}</span></span></a></c11n-button>    
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://multivariate.web.vanguard.com/common/libraries/target-library.js?v=2022.2.18.1331"></script>
            <script src="https://multivariate.web.vanguard.com/target/offer_templates/c-layer/{{impTrackVersion}}{{impTrackVersionFilename}}.js"></script>`;
        }
    }

    getSpecial(type:string) {
        const special = new Map();

        special.set('impTrackVersionFilename', {'v1/':'cLayer-offer-rules', 'v2/':'cLayer-offer-rules'});

        if( !special.has(type) ) {
            return false;
        }

        return special.get(type);
    }
}
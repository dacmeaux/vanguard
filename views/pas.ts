import { Offer } from "./offer";
export class PAS extends Offer {
    constructor(reset:boolean, cache:any = false, debug:any = false) {
        super(reset, cache, debug);
        this.offerType = 'PAS';
        this.init();
    }

    setOffer() {
        let offerContainer = document.querySelector('.offer-display');
		
        if( offerContainer ) {
        
			offerContainer.innerHTML = 
			`<link rel="stylesheet" href="https://multivariate.web.vanguard.com/target/offer_templates/pas/pas-offer-template.css" />
			<div id="{{offerID}}" class="pas-offer-zone" data-mvt-max-impression="{{maxImpressions}}" data-mvt-impression-tracking="{{offerID}}|{{offerTitle}} Overview Offer|Impression">
				<card>
				<div class="card">
					<card-title class="ng-star-inserted">
						<div class="card-title content">
							<div class="card-title__eyebrow ng-star-inserted"><span class="card-title__eyebrow-text eyebrow">{{eyeBrow}}</span></div>
							<div class="card-title__container">
								<h2 role="presentation" class="card-title__title ng-star-inserted"><span class="heading">{{headerText}}</span></h2>
							</div>
						</div>
					</card-title>
					<div class="card__body-content-centered ng-star-inserted">
						<card-item>
							<div class="card-item card-item__hide-border">
								<card-image>
									<div class="card-image content">
										<figure>
											<figcaption class="card-image__caption">{{eyeBrow}}</figcaption>
											<img aria-hidden="true" class="card-image__image" src="{{backgroundImage}}">
										</figure>
										<div class="card-image__title-container"><card-text class="subtitle ng-star-inserted subheader">{{subText}}</card-text></div>
									</div>
								</card-image>
							</div>
						</card-item>
					</div>
					<card-cta class="ng-star-inserted">
						<a class="card-cta2 card-cta2__line card-cta2_blue ng-star-inserted" href="{{ctaUrl}}" data-mvt-cta-click-tracking="{{offerID}} CTA|{{offerTitle}} Overview|Button"><div class="card-cta2__text ng-star-inserted">{{ctaLabel}}</div><img alt="{{ctaLabel}}" aria-hidden="true" src="https://aemdam.assets.vgdynamic.info/assets/retail/target/en/Greater%20than%20icon.svg" class="ng-star-inserted"></a>
					</card-cta>
				</div>
				</card>
			</div>
			<script src="https://multivariate.web.vanguard.com/target/offer_templates/pas/{{impTrackVersion}}{{impTrackVersionFilename}}.js"></script>`;
		}
    }

	getSpecial(type:string) {
        const special = new Map();

        special.set('impTrackVersionFilename', {'v1/':'pas-offer-rules', 'v2/':'pas-offer-rules'});

        if( !special.has(type) ) {
            return false;
        }

        return special.get(type);
    }
}
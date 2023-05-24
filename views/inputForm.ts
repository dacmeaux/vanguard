export const InputForm = () => {
    return `
    <div class="title-input" data-from="getInputForm"> 
        <label c11n-label for="offer-title" [size]="size" class="isRequired">Page/Offer Title <span class="isrequired hide">is Required</span></label> 
        <c11n-input [size]="size" [hasError]="hasError"> 
            <input value="{{offer-title}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-title" name="info" aria-describedby="Sets the title of the offer" placeholder="ex. Dashboard, Balances, etc." required> 
        </c11n-input>
    </div>
    
    <div class="offerid-input" data-from="getInputForm"> 
        <label c11n-label for="offer-id" [size]="size" class="isRequired">Content ID <span class="isrequired hide">is Required</span></label> 
        <c11n-input [size]="size" [hasError]="hasError"> 
            <input value="{{offer-id}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-id" name="info" aria-describedby="Sets the content id of the offer" placeholder="Enter offer ID" required> 
        </c11n-input> 
    </div> 
    
    <div class="background-input"> 
        <label c11n-label for="offer-banner" [size]="size">Set Banner Image</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{offer-banner}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-banner" name="info" aria-describedby="Sets the banner image of the offer" placeholder="Enter the banner image url for your offer"> 
        </c11n-input> 
    </div> 
    
    <div class="eyebrow-input hide" data-include="PAS"> 
        <label c11n-label for="offer-eyebrow" [size]="size">Offer Eyebrow Text</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{offer-eyebrow}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-eyebrow" name="info" aria-describedby="Sets the eyebrow text of the offer" placeholder="Enter the eyebrow text for your offer" disabled> 
        </c11n-input> 
    </div> 
    
    <div class="header-input"> 
        <label c11n-label for="offer-header" [size]="size" class="isRequired">Offer Header <span class="isrequired hide">is Required</span></label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{offer-header}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-header" name="info" aria-describedby="Sets the header of the offer" placeholder="Enter the header text for your offer" required> 
        </c11n-input> 
    </div> 
    
    <div class="subtext-input" data-exclude="CLayer|Logoff"> 
        <label c11n-label for="offer-subtext" [size]="size">Offer Subtext</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{offer-subtext}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-subtext" name="info" aria-describedby="Sets the subtext of the offer" placeholder="Enter the subtext for your offer"> 
        </c11n-input> 
    </div>

    <div class="body-copy1-input hide" data-include="CLayer"> 
        <label c11n-label for="offer-body-copy1" [size]="size">Offer Body Copy First Paragraph</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{offer-body-copy1}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-body-copy1" name="info" aria-describedby="Sets the body copy the offer" placeholder="Enter body copy first paragraph" disabled > 
        </c11n-input> 
    </div>

    <div class="body-copy2-input hide" data-include="CLayer"> 
        <label c11n-label for="offer-body-copy2" [size]="size">Offer Body Copy Second Paragraph</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{offer-body-copy2}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="offer-body-copy2" name="info" aria-describedby="Sets the body copy the offer" placeholder="Enter body copy second paragraph" disabled > 
        </c11n-input> 
    </div>
    
    <div class="cta-input"> 
        <label c11n-label for="cta-label" [size]="size">CTA Label</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{cta-label}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="cta-label" name="info" aria-describedby="Sets the label of the CTA" placeholder="Enter the CTA label for your offer"> 
        </c11n-input> 
    </div> 
    
    <div class="cta-url"> 
        <label c11n-label for="cta-url" [size]="size">CTA URL</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{cta-url}}" class="c11n-input__input" c11nInput type="text" inputmode="text" id="cta-url" name="info" aria-describedby="Sets the URL of the CTA" placeholder="Enter the CTA URL for your offer"> 
        </c11n-input> 
    </div> 
    
    <div class="impression-limit"> 
        <label c11n-label for="impression-limit" [size]="size">Set impression limit</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{impression-limit}}" class="c11n-input__input" c11nInput type="number" inputmode="text" id="impression-limit" name="info" aria-describedby="Sets the impression limit for the offer" placeholder="Enter number"> 
        </c11n-input> 
    </div>

    <div class="suppression-days hide" data-include="Aspot|BSpot|PAS"> 
        <label c11n-label for="suppression-days" [size]="size">Set Supression Days</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{suppression-days}}" class="c11n-input__input" c11nInput type="number" inputmode="text" id="suppression-days" name="info" aria-describedby="Sets the suppression days for the offer" placeholder="Enter days" disabled > 
        </c11n-input> 
    </div>

    <div class="delay-show-time hide" data-include="CLayer"> 
        <label c11n-label for="delay-show-time" [size]="size">Set Delay Show Time</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <input value="{{delay-show-time}}" class="c11n-input__input" c11nInput type="number" inputmode="text" id="delay-show-time" name="info" aria-describedby="Sets the delay show time (ms) for the offer" placeholder="Enter delay time in milliseconds" disabled> 
        </c11n-input> 
    </div>
    
    <div class="tracking-version"> 
        <label c11n-label for="tracking-version" [size]="size">Select impression tracking version</label> 
        <c11n-input [size]="size" [hasError]="hasError" > 
            <select class="c11n-input__input" c11nInput inputmode="select" id="tracking-version" name="info" aria-describedby="Sets the impression tracking script version">
                <option value="">Select impression tracking version</option>
                <option value="" {{v1}}>Original Tracking (v1)</option>
                <option value="v2/" {{v2}}>Target Impression Tracking (v2)</option>
            </select>
        </c11n-input> 
    </div>`;
}
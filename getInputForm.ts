import { InputForm } from '../../views/inputForm';
export class GetInputForm {
    debug:any; 
    cache:any;
    formHTML:string;

    constructor(cache:any = false, debug:any = false){
        this.cache = cache||{addMember:()=>{}, getMember:()=>{}};
        this.debug = debug||{initLog:()=>{}, log:()=>{}};   
        this.debug.initLog(false);
        this.formHTML = InputForm();
    }

    /**
     * Regex for finding tokens in templates
     * 
     * @param token string
     * @returns Regexp
     */
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

    /**
     * Removes any orphaned tokens in the form template
     */
    clearTokenOrphans() {
        this.formHTML = this.formHTML.replace(this.getTokenRegEx(), '');
    }

    /**
     * Retirieves Cached data and loads appropriate input values
     * @param offerType string
     */
    setData(offerType: string) {
        if( this.cache.getMember(offerType) != undefined ) {
            this.debug.log('Cached Data:', this.cache.getMember(offerType));

            for( const entry of this.cache.getMember(offerType).entries() ) {
                this.formHTML = this.formHTML.replace(this.getTokenRegEx(entry[0]), entry[1]);
              }
        }
    }
    
    /**
     * Gets the HTML form including any dynamic fields
     * 
     * @param offerType string (May not be need anymore)
     * @returns formHTML
     */
    getForm(offerType: string = 'all') {
        if( offerType != 'all' ) {
            this.debug.log(`Getting ${offerType} Form`);
        }

        this.clearTokenOrphans();

        return this.formHTML;
    }

    /**
     * Remove any error states when focusing in on an input
     * 
     * @param allFields NodeList
     */
    handleFocusIn(allFields:NodeList) {
        for(let i = 0; i < allFields.length; i++ ) {
            allFields[i].addEventListener('focusin', (e:any) => {
                let field:any = allFields[i];

                if( !field.getAttributeNode('required') ) {
                    return;
                }

                let
                    label:any = document.querySelector(`label[for="${field.getAttributeNode('id').value}"]`), 
                    isRequired:any = document.querySelector(`label[for="${field.getAttributeNode('id').value}"] > .isrequired`),
                    fieldClassList = field.classList,
                    labelClassList = label.classList,
                    requiredClassList = isRequired.classList;

                fieldClassList.remove('required');
                requiredClassList.remove('show');
                requiredClassList.add('hide');
                labelClassList.remove('required');
            });
        }
    }

    /**
     * Save input entries when focusing out of an input
     * 
     * @param allFields NoteList
     * @param offerType string
     */
    handleFocusOut(allFields:NodeList, offerType:string) {
        for(let i = 0; i < allFields.length; i++ ) {
            allFields[i].addEventListener('focusout', (e:any) => {
                this.cache.addMember(offerType, {id:e.target.getAttributeNode('id').value, value:e.target.value});
                this.debug.log('Target value:', e.target.value);
                this.debug.log('Caching Members:', this.cache.getMember());
            });
        }
    }

    handleExcludes(allFields:any, offerType:string) {
        for(let i = 0; i < allFields.length; i++ ) {
            let parent:any, excludes:any;

            parent = allFields[i].parentElement.parentElement, 
            excludes = parent.dataset.exclude;

            this.debug.log('Parent Element:', parent);
            this.debug.log('Excluded Values:', excludes);

            if( excludes && excludes.indexOf(offerType) > -1 ) {
                parent.classList.add('hide');
                allFields[i].setAttribute('disabled', true);
            }
        }
    }

    handleIncludes(allFields:any, offerType:string) {
        for(let i = 0; i < allFields.length; i++ ) {
            let parent:any, includes:any;

            parent = allFields[i].parentElement.parentElement, 
            includes = parent.dataset.include;

            this.debug.log('Parent Element:', parent);
            this.debug.log('Included Values:', includes);

            if( includes && includes.indexOf(offerType) > -1 ) {
                parent.classList.remove('hide');
                allFields[i].removeAttribute('disabled');
            }
        }
    }

    /**
     * Add any dynamic fields to default input fields
     * 
     * @param fields string
     * @returns null
     */
    // addDynamicFields(fields:string){
    //     this.formHTML = this.formHTML.replace(this.getTokenRegEx('DYNAMIC_FIELDS'), fields);
    // }
    
}
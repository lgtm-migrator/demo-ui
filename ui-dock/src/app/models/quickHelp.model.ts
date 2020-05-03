/** *****************************************************************************
Licensed Materials - Property of IBM 6949-XXX ã Copyright IBM Corp. 2019
All Rights Reserved US Government Users Restricted Rights - Use, duplication 
or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
***************************************************************************** */

export class QuickHelpModel {
    code: string;
    html: string;

    constructor(code: string = "", html: string = "") {
        this.code = code;
        this.html = html;
    }
}
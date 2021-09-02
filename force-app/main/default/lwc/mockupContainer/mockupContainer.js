import { LightningElement, api } from 'lwc';
import { classSet } from 'c/utils';
import { isNarrow, isBase } from './utils';
import MOCKUP_IMG1 from '@salesforce/resourceUrl/Mockup1';
import MOCKUP_IMG2 from '@salesforce/resourceUrl/Mockup2';
import MOCKUP_IMG3 from '@salesforce/resourceUrl/Mockup3';

export default class MockupContainer extends LightningElement {
    mockimage1 = MOCKUP_IMG1;
    mockimage2 = MOCKUP_IMG2;
    mockimage3 = MOCKUP_IMG3;
    @api uniqueid;

}
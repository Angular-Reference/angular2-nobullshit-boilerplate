import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  selector: "about",
  directives: [],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class About {

    constructor() {
    }

    onInit() {
        console.log('[Component] home running');
    }
}

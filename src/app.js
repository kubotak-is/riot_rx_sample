/**
 * @fileoverview - app.js - sampleTag mount
 */

import domready from 'domready';
import Rx       from 'rx-lite';
import 'riot';

import 'components/sample-tag.tag';

const sampleTagOpts = {
  input$: () => {
    const input = document.getElementById('_input');
    const input$ = Rx.Observable.fromEvent(input, 'input');
    return input$;
  }
}

domready(() => riot.mount('sample-tag', sampleTagOpts));

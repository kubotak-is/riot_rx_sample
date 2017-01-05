/**
 * @fileoverview - app.js - sampleTag mount
 */

import domready from 'domready';
import Rx       from 'rx-lite';
import action   from 'action';
import 'riot';

import 'components/sample-tag.tag';
import 'components/count-up.tag';

const Riobs = riot.observable();
const sampleTagOpts = {
    obs$: Riobs,
    input$: () => {
      const input  = document.getElementById('_input');
      const input$ = Rx.Observable.fromEvent(input, 'input');
      input$.subscribe((val) => {
        Riobs.trigger(action.sampleTag.update, val.target.value);
      });
    }
};

const countUpOpts = {
  obs$: Riobs,
  click$: () => {
    const up    = document.getElementById('_countUp');
    const down  = document.getElementById('_countDown');
    const up$   = Rx.Observable.fromEvent(up, 'click');
    const down$ = Rx.Observable.fromEvent(down, 'click');
    let count   = 0;
    up$.subscribe((val) => {
      count++;
      Riobs.trigger(action.countUp.update, count);
    });
    down$.subscribe((val) => {
      if (count > 0) {
        count--;
      }
      Riobs.trigger(action.countUp.update, count);
    });
  }
};

domready(() => {
  riot.mount('sample-tag', sampleTagOpts);
  riot.mount('count-up', countUpOpts);
});
/**
 * @fileoverview - count-up tag
 */
import action from '../action';

<count-up>
  
  <button id="_countUp">Up</button>
  <button id="_countDown">Down</button>
  <p>count: { count }</p>

  <script type="javascript">
    const _this = this;
    _this.count = 0;
    
    _this.on('mount', () => {
      const { click$, obs$ } = opts;
      click$();
      obs$.on(action.countUp.update, (count) => {
        _this.count = count;
        _this.update();
      });
    });
  </script>

</count-up>

/**
 * @fileoverview - sample tag
 */
 import action from '../action';

<sample-tag>
  
  <input type="text" id="_input" value={ txt }>
  <p>{ txt }</p>

  <script type="javascript">
    const _this = this;
    _this.txt = "sample";

    _this.on('mount', () => {
      const { input$, obs$ } = opts;
      input$();
      obs$.on(action.sampleTag.update, (txt) => {
        _this.txt = txt;
        _this.update();
      });
    });
  </script>

</sample-tag>

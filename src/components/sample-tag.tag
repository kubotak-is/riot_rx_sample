/**
 * @fileoverview - sample tag
 */
<sample-tag>
  
  <input type="text" id="_input" value={ txt }>
  <p>{ txt }</p>

  <script type="javascript">
    const _this = this;
    _this.txt = "sample";

    _this.on('mount', () => {
      const { input$ } = opts;
      input$().subscribe((val) => {
        _this.txt = val.target.value;
        _this.update();
      });
    });
  </script>

</sample-tag>

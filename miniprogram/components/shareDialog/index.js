Component({
  properties: {

  },

  data: {
    visible: false,
    wrapAnimate: 'wrapAnimate',
    bgOpacity: 0,
    frameAnimate: 'frameAnimate',
  },

  properties: {
    frameTitle: {
      type: String,
      value: '标题',
    }
  },

  methods: {
    showFrame() {
      this.setData({ visible: true, wrapAnimate: 'wrapAnimate', frameAnimate: 'frameAnimate' });
    },

    hideFrame(e) {
      const that = this;
      that.setData({ wrapAnimate: 'wrapAnimateOut', frameAnimate: 'frameAnimateOut' });
      setTimeout(() => {
        that.setData({ visible: false })
      }, 400);
    },

    onClose(e) {
      this.hideFrame(e);
      this.triggerEvent('close');
    },

    catchNone() {
      //阻止冒泡
    },

    _showEvent() {
      this.triggerEvent("showEvent");
    },

    _hideEvent() {
      this.triggerEvent("hideEvent");
    }
  }
})
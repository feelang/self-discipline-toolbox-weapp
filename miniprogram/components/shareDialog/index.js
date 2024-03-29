Component({
  properties: {

  },

  data: {
    visible: false,
    wrapAnimate: 'wrapAnimate',
    frameAnimate: 'frameAnimate',
  },

  properties: {
    // frameTitle: {
    //   type: String,
    //   value: '标题',
    // }
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
      }, 200);
    },

    onShareToMoments(e) {
      this.hideFrame()
      this.triggerEvent('sharetomoments')
    },

    // onShareToFriends(e) {
    //   this.hideFrame()
    //   wx.showShareMenu({ withShareTicket: true })
    // },

    catchNone() {
      //阻止冒泡
    },
  }
})
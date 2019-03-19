import avatars from '../../__mock__/index';

Page({
	data: {
		current: 'A',
    to: 0,
    avatars,
	},

  onReady() {
    this.claculateTop();
  },

	claculateTop() {
    const page = this;
		avatars.forEach((item) => {
      if (!item.enabled) return;
      (function(_item) {
        const query = wx.createSelectorQuery();
        const id = _item.id === '#' ? 'all' : item.id;
        query.select('#' + id).boundingClientRect((res) => {
          if (res) _item.top = res.top;
          page.avatars = avatars;
        }).exec();
      })(item);
    });
	},

	switchLetter(e) {
    const { avatars } = this;
    const id = e.currentTarget.dataset.id;
		let avatar = avatars.find((o) => o.id === id);
    if (!avatar || !avatar.top === undefined) return;
    let tmp = {
      current: id
    };
    if (avatar.top !== undefined) {
      tmp.to = avatar.top;
    }
    this.setData(tmp);
	},

	whenScroll(e) {
		let cur = 'A';
    const { avatars, data } = this;
    const { current } = data;
    let len = avatars.length;
    while(len >= 0) {
      len--;
      let avatar = avatars[len];
			if (avatar.top !== undefined && avatar.top <= e.detail.scrollTop) {
				cur = avatar.id;
				break;
			}
    }
		if (current === cur) return;
    this.setData({
      current: cur
    });
	}
});

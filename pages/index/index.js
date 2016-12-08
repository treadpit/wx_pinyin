Page({
  data:{
    selected: 'A',
    scrollIntoView: 'A',
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 'Z'],
    groups: [{
        groupName: 'A',
        users: [
          {
            name: 'Aa',
            avatar: '../../images/avatar.png'
          },
          {
            name: 'Aaa',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'B',
        users: [
          {
            name: 'Bb',
            avatar: '../../images/avatar.png'
          },
          {
            name: 'Bbb',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'C',
        users: [
          {
            name: 'Cc',
            avatar: '../../images/avatar.png'
          },
          {
            name: 'Ccc',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'D',
        users: [
          {
            name: 'Dd',
            avatar: '../../images/avatar.png'
          },
          {
            name: 'Ddd',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'E',
        users: [
          {
            name: 'Ee',
            avatar: '../../images/avatar.png'
          },
          {
            name: 'Eee',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'F',
        users: [
          {
            name: 'Ff',
            avatar: '../../images/avatar.png'
          },
          {
            name: 'Fff',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'G',
        users: [
          {
            name: 'Gg',
            avatar: '../../images/avatar.png'
          },
          {
            name: 'Ggg',
            avatar: '../../images/avatar.png'
          }
        ]
      }
    ]
  },
  onReady() {
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // const self = this;
    // wx.getSystemInfo({
    //   success: function(res) {
    //     self.setData({
    //         windowHeight: res.windowHeight
    //     })
    //   }
    // })
  },
  getLetterIndex(letter) {
    const letters = this.data.letters;
    for(let i = 0, len = letters.length; i < len; i++) {
      if(letter === letters[i]) {
        return i;
      }
    }
  },
  tabLetter(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      selected: index,
      scrollIntoView: index
    })
  },
  touchstart(e) {
    console.log('---------touchstart--------------');
    console.log(e);
  },
  touchmove(e) {
    console.log('---------touchmove--------------');
    console.log(e);
  },
  touchcancel(e) {
    console.log('---------touchcancel--------------');
    console.log(e);
  }
})

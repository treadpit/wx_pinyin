Page({
  data:{
    // 当前选择的导航字母
    selected: 'A',
    // 选择字母视图滚动的位置id
    scrollIntoView: 'A',
    // 导航字母
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 'Z'],
    groups: [{
        groupName: 'A',
        users: [
          {
            name: '阿码',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'B',
        users: [
          {
            name: '白娘子',
            avatar: '../../images/avatar.png'
          },
          {
            name: '包天齐',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'C',
        users: [
          {
            name: '陈大年',
            avatar: '../../images/avatar.png'
          },
          {
            name: '丛云山',
            avatar: '../../images/avatar.png'
          },
          {
            name: '崔鸣贵',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'D',
        users: [
          {
            name: '邓牛牛',
            avatar: '../../images/avatar.png'
          },
          {
            name: '刁仁衣',
            avatar: '../../images/avatar.png'
          },
          {
            name: '杜长城',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'F',
        users: [
          {
            name: '范长龙',
            avatar: '../../images/avatar.png'
          },
          {
            name: '冯肖晓',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'G',
        users: [
          {
            name: '甘地',
            avatar: '../../images/avatar.png'
          },
          {
            name: '高墙',
            avatar: '../../images/avatar.png'
          },
          {
            name: '宫都举',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'H',
        users: [
          {
            name: '何芸',
            avatar: '../../images/avatar.png'
          },
          {
            name: '胡坨坨',
            avatar: '../../images/avatar.png'
          },
          {
            name: '黄坨坨',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'T',
        users: [
          {
            name: '谭老头儿',
            avatar: '../../images/avatar.png'
          },
          {
            name: '汤云西',
            avatar: '../../images/avatar.png'
          },
          {
            name: '图图',
            avatar: '../../images/avatar.png'
          }
        ]
      },
      {
        groupName: 'X',
        users: [
          {
            name: '夏一天',
            avatar: '../../images/avatar.png'
          },
          {
            name: '鲜轰轰',
            avatar: '../../images/avatar.png'
          },
          {
            name: '谢大佩',
            avatar: '../../images/avatar.png'
          }
        ]
      }
    ]
  },
  onReady() {
    
  },
  onLoad:function(options){
    const res = wx.getSystemInfoSync(),
          letters = this.data.letters;
    // 设备信息
    this.setData({
      windowHeight: res.windowHeight,
      windowWidth: res.windowWidth,
      pixelRatio: res.pixelRatio
    });
    const comTop = (this.data.windowHeight - this.data.windowHeight * 0.94) / 2,
          temp = [];
    // 各字母距离设备左上角所处位置
    for(let i = 0, len = letters.length; i < len; i++) {
      temp.push([this.data.windowWidth - (10 + 50) / this.data.pixelRatio, comTop + (i * 50 / this.data.pixelRatio)]);
    }
    this.setData({
      lettersPosition: temp
    })
  },
  tabLetter(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      selected: index,
      scrollIntoView: index
    })
  },
  touchstart(e) {
    
  },
  touchmove(e) {
    const x = e.touches[0].clientX,
          y = e.touches[0].clientY,
          lettersPosition = this.data.lettersPosition;
    // 判断触摸点是否在字母导航栏上
    if(x >= lettersPosition[0][0]) {
      for(let i = 0, len = lettersPosition.length; i < len; i++) {
        // 判断落在哪个字母区域，取出对应字母所在数组的索引，根据索引更新selected及scroll-into-view的值
        if(y >= lettersPosition[i][1] && y <= lettersPosition[i][1] + (50 / this.data.pixelRatio)) {
           this.setData({
            selected: this.data.letters[i],
            scrollIntoView: this.data.letters[i]
          });
          break;
        }
      }
    }
  },
  touchcancel(e) {
    
  }
})

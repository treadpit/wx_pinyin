Page({
  data:{
    // 当前选择的导航字母
    selected: 0,
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
  onLoad:function(options){
    const res = wx.getSystemInfoSync(),
          letters = this.data.letters;
    // 设备信息
    this.setData({
      windowHeight: res.windowHeight,
      windowWidth: res.windowWidth,
      pixelRatio: res.pixelRatio
    });
    // 第一个字母距离顶部高度，css中定义nav高度为94%，所以 *0.94
    const navHeight = this.data.windowHeight * 0.94, // 
          eachLetterHeight = navHeight / 26,
          comTop = (this.data.windowHeight - navHeight) / 2, 
          temp = [];

    this.setData({
      eachLetterHeight: eachLetterHeight
    });

    // 求各字母距离设备左上角所处位置

    for(let i = 0, len = letters.length; i < len; i++) {
      const x = this.data.windowWidth - (10 + 50) / this.data.pixelRatio,
            y = comTop + (i * eachLetterHeight);
      temp.push([x, y]);
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
    
    this.cleanAcitvedStatus();
  },
  // 清除字母选中状态
  cleanAcitvedStatus() {
    setTimeout(() => {
      this.setData({
          selected: 0
      })
    }, 500);
  },
  touchmove(e) {
    const x = e.touches[0].clientX,
          y = e.touches[0].clientY,
          lettersPosition = this.data.lettersPosition,
          eachLetterHeight = this.data.eachLetterHeight,
          letters = this.data.letters;
    console.log(y);
    // 判断触摸点是否在字母导航栏上
    if(x >= lettersPosition[0][0]) {
      for(let i = 0, len = lettersPosition.length; i < len; i++) {
        // 判断落在哪个字母区域，取出对应字母所在数组的索引，根据索引更新selected及scroll-into-view的值
        const _y = lettersPosition[i][1], // 单个字母所处高度
              __y = _y + eachLetterHeight; // 单个字母最大高度取值范围
        if(y >= _y && y <= __y) {
           this.setData({
            selected: letters[i],
            scrollIntoView: letters[i]
          });
          break;
        }
      }
    }
  },
  touchend(e) {
    this.cleanAcitvedStatus();
  }
})

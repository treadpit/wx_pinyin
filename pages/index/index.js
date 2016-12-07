Page({
  data:{
    selected: 0,
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  
  },
  tabLetter(e) {
    this.setData({
      selected: Number(e.currentTarget.dataset.index)
    })
  }
})
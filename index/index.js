const urls = [
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
  'http://xywout.oss-cn-hangzhou.aliyuncs.com/2019720094656-arxau3.m3u8',
]

const videoList = urls.map((url, index) => ({ id: index + 1, url, approve: index % 2 == 0 }))
Page({
  data: {
    videoList,
    current_index: 2, // 这个参数可以控制从第几个视频开始播放（可以从onLoad动态修改这个参数）
    show: false
  },
  onLoad(e) {
    this.onUpdataVideo()
    this.setData({
      current_index: 5,
      // videoList: [...this.data.videoList],
      show: true
    })
  },
  onPlay(e) { },

  onPause(e) {
    //  console.log('pause', e.detail.activeId)
  },

  onEnded(e) { },

  onError(e) { },

  onWaiting(e) { },

  onTimeUpdate(e) { },

  onProgress(e) { },
  aaa(e) {
    console.log("approveChanged:::::::::", e.detail.item)
    let item = e.detail.item
    let currIndex = item.index

    this.data.videoList[currIndex].approve = !item.approve
    // this.setData({
    //   ['videoList['+currIndex+'].approve']:!item.approve
    // })

  },
  onUpdataVideo(e) {
    console.log("onUpdataVideo---------------------------")
    let videoList = this.data.videoList;
    if (videoList.length >= 30) {
      console.log('已经加到顶了');
      return;
    }
    // 模拟数据请求
    setTimeout(() => {
      let url = 'https://apicard.itop123.com/files/file/20210402/20210402113456425713822.mp4';
      for (let i = 0; i < 10; i++) {
        let time = new Date();
        videoList.push({ id: time.getTime(), url });
      }
      this.setData({ videoList });
    }, 1000)
  },

  onLoadedMetaData(e) {
    // console.log('LoadedMetaData', e)
  }
})

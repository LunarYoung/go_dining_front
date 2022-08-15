const url = 'localhost:8089/base/ws'

class WebSocketClass {
  constructor() {
    this.instance = null
    this.connect()
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new WebSocketClass()
    }
    return this.instance
  }
  // 创建连接
  connect() {
    this.ws = new WebSocket(url)
    this.ws.onopen = e => {
      this.heartCheck()
      this.getMessage()
    }
  }
  // 心跳
  heartCheck() {
    const _this = this
    // 心跳状态
    this.state = setInterval(() => {
      if (_this.ws.readyState === 1) {
        _this.ws.send('/Heart')
      } else {
        this.closeHandle() // 重新连接
        console.log('状态未连接')
      }
    }, 60000)
  }
  closeHandle() {
    if (this.state) {
      console.log(`断开，重连websocket`)
      // 清除定时器;
      clearInterval(this.state)
      this.connect() // 重连
    } else {
      console.log(`websocket手动关闭,或者正在连接`)
    }
  }
  // 收/发信息
  getMessage() {
    this.ws.onmessage = e => {
      if (e.data) {
        const newsData = JSON.parse(e.data)
        // 接收到消息
        console.log(newsData)
      }
    }
  }
  // 关闭
  close() {
    this.ws.close()
    console.log('关闭连接')
  }
}

export default WebSocketClass


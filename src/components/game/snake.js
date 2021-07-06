class Snake {
  constructor(contextId) {
    this.contextId = contextId;
    this.context = document.getElementById(contextId);
    this.cw = this.context.width;
    this.ch = this.context.height;
    console.log(this.context);
    // 当前得分
    this.score = 0;
    // 方格宽度
    this.snakeWidth = 10;
    // 运动的方向 1,2,4,8
    this.d = snakeConstant.south;
    // 速度
    this.speed = 10;
    this.interval = 200;
    // 循环事件
    this.intervalEvent = null;
    // 身体
    this.snakeSelf = [];
    // 食物
    this.food = {
      x: this.getRandom(this.cw), y: this.getRandom(this.ch), w: this.snakeWidth,
    };
    // 游戏状态 start suspend stop
    this.status = snakeConstant.suspend;
  }

  // 初始化
  init() {
    console.log(`init GAME：${this.contextId}`);
    if (this.intervalEvent) {
      clearInterval(this.intervalEvent);// 清除循环事件
    }
    this.snakeSelf = [{
      x: 10, y: 10, w: this.snakeWidth, d: this.d,
    }];
    this.paint();
    this.setListen(this);
    this.initInterval(this);
  }

  paint() {
    const c = this.context;
    const ctx = c.getContext('2d');
    // 清空画布
    ctx.clearRect(0, 0, this.cw, this.ch);
    // 绘制食物
    ctx.fillStyle = '#333';
    ctx.fillRect(this.food.x, this.food.y, this.food.w, this.food.w);
    // 绘制小蛇
    ctx.fillStyle = '#ccc';
    for (const s of this.snakeSelf) {
      ctx.fillRect(s.x, s.y, s.w, s.w);
    }
  }

  stop() {
    this.status = snakeConstant.stop & snakeConstant.suspend;
    console.log(`stop GAME：${this.contextId}`);
  }

  suspend() {
    this.status = snakeConstant.suspend;
    console.log(`suspend GAME：${this.contextId}`);
  }

  restart() {
    this.init();
    this.status = snakeConstant.start;
    console.log(`restart GAME：${this.contextId}`);
  }

  start() {
    this.status = snakeConstant.start;
    console.log(`start GAME：${this.contextId}`);
  }

  // 循环事件
  // eslint-disable-next-line class-methods-use-this
  initInterval(snake) {
    snake.intervalEvent = setInterval(() => {
      if (snake.status & snakeConstant.start) {
        snake.getNewPosition();
        snake.paint();
      }
    }, snake.interval);
  }

  // 监听按键
  // eslint-disable-next-line class-methods-use-this
  setListen(snake) {
    // 空格键=>开始/暂停
    document.onkeydown = function onClickSpace(e) {
      const keyCode = e.keyCode || e.which || e.charCode;
      switch (keyCode) {
        case 32:// 空格
          if (snake.status & snakeConstant.suspend) {
            snake.status = snakeConstant.start;
          } else {
            snake.status = snakeConstant.suspend;
          }
          break;
        case 37:// 左
          snake.snakeSelf[0].d = snakeConstant.west;
          break;
        case 38:// 上
          snake.snakeSelf[0].d = snakeConstant.north;
          break;
        case 39:// 右
          snake.snakeSelf[0].d = snakeConstant.east;
          break;
        case 40:// 下
          snake.snakeSelf[0].d = snakeConstant.south;
          break;
        default:
          console.log('无效的指令');
      }
      // e.preventDefault();
      // return false;
    };
  }

  // 获取一个随机数
  getRandom(max) {
    return Math.random() * (max - this.snakeWidth);
  }

  // 获取新的位置
  getNewPosition() {
    for (let i = this.snakeSelf.length - 1; i >= 0; i--) {
      const item = this.snakeSelf[i];
      if (item.d & snakeConstant.north) {
        item.y -= this.speed;
      } else if (item.d & snakeConstant.south) {
        item.y += this.speed;
      } else if (item.d & snakeConstant.west) {
        item.x -= this.speed;
      } else if (item.d & snakeConstant.east) {
        item.x += this.speed;
      }
      if (i !== 0) {
        item.d = this.snakeSelf[i - 1].d;
      }
    }
    this.checkCollision();
    // console.log(this.snakeSelf);
  }

  /**
   * 碰撞检测
   */
  checkCollision() {
    let head = this.snakeSelf[0];
    // 头部是否与边缘碰撞
    if (snakeHelper.isCollisionWall(head, this)) {
      this.restart();
    }
    // 头部是否与食物碰撞
    if (snakeHelper.isCollision(head, this.food)) {
      this.food = {
        x: this.getRandom(this.cw), y: this.getRandom(this.ch), w: this.snakeWidth,
      };
      const node = snakeHelper.getNewNode(head, head.w);
      this.snakeSelf.unshift(node);
      head = node;
    }
    // 头部是否与自己的身体碰撞
    for (let i = 1; i < this.snakeSelf.length; i++) {
      if (snakeHelper.isCollision(head, this.snakeSelf[i])) {
        this.restart();
        break;
      }
    }
  }
}

/**
 * 常量集合对象
 */
const snakeConstant = {
  // 2d方向
  north: 1,
  east: 2,
  south: 4,
  west: 8,
  // 游戏状态
  start: 1,
  suspend: 4,
  stop: 8,
};
/**
 * 辅助函数对象
 */
const snakeHelper = {
  getLength(pos1, pos2) {
    const num1 = Math.abs(pos1.x - pos2.x);
    const num2 = Math.abs(pos1.y - pos2.y);
    return Math.sqrt(Math.abs(num1 * num1 - num2 * num2));
  },
  isCollision(pos1, pos2) {
    const { w } = pos1;
    const num1 = Math.abs(pos1.x - pos2.x);
    const num2 = Math.abs(pos1.y - pos2.y);
    return Math.sqrt(Math.abs(num1 * num1 + num2 * num2)) < 0.8 * w;
  },
  isCollisionWall(pos1, ctx) {
    const w = ctx.cw;
    const h = ctx.ch;
    return pos1.x < 0 || (pos1.x + pos1.w) > w || pos1.y < 0 || (pos1.y + pos1.w) > h;
  },
  getNewNode(head, len) {
    const node = { ...head };
    if (head.d & snakeConstant.north) {
      node.y -= len;
    }
    if (head.d & snakeConstant.south) {
      node.y += len;
    }
    if (head.d & snakeConstant.west) {
      node.x -= len;
    }
    if (head.d & snakeConstant.east) {
      node.x += len;
    }
    return node;
  },
};
export default Snake;

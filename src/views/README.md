# 使用步骤

### 安装绘图引擎
> yarn add @topology/core

### 安装Topology图形库 - 流程图
> yarn add @topology/flow-diagram

### 创建基础画布

// 1. 导入绘画引擎

import { Topology } from '@topology/core';

// 图形库

import { register as registerFlow } from '@topology/flow-diagram';

// 注册图形库

registerFlow();

// 2. 创建画布

// 其中，第一个参数'topo-canvas'表示canvas所在的父dom元素id，通常为`<div class="canvas" id="topo-canvas"></div>`

// 第二个参数{}表示画布选项，这里表示全部使用默认值。具体选项请参考后面的api文档。

`var canvas = new Topology('topo-canvas', {})`

// 3. 渲染图形

// 画布图形数据，可以来自于官网下载的json
```
const json = {pens:[xxxx]};
canvas.open(json);
```

// 4. 如果json发送变化，重绘

`canvas.render()`

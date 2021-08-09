---
title: HTTP进阶
date: 2021/07/19
updated: 2021/07/20
categories: 
- HTTP
tags:
  - HTTP
top_img: ./img/bg_1.png
---
### HTTP的实体数据

#### 数据类型与编码（MIME type）

MIME 是一个很大的标准规范，但HTTP只使用了其中一部分，用来标记 body 的数据类型及MIME type。（ HTTP 协议诞生之前，MIME 用在电子邮件系统，让电子邮件可以发送 ASCII 码以外的任意数据）

HTTP 常用类别：

- text： text/html（超文本）、text/plain（纯文本）、text/css（样式表）
- image：image/gif、image/jpeg、image/png（图像文件）
- audio/video：audio/mpeg、video/mp4 （音频和视频数据）
- application：application/json、application/javascript、application/pdf（数据格式不固定，可能是文本也可能是二进制，必须由上层应用程序来解释）application/octet-stream，即不透明的二进制数据。 

Encoding type（节约带宽，压缩数据）：

- gzip：GNU zip 压缩格式，也是互联网上最流行的压缩格式
- deflate：zlib（deflate）压缩格式，流行程度仅次于 gzip
- br：一种专门为 HTTP 优化的新压缩算法（Brotli）

#### 数据类型使用的头字段

内容协商：

```
Accept——Content-Type；Accept-Encoding——Content-Encoding
```

![](https://static001.geekbang.org/resource/image/51/b9/5191bce1329efa157a6cc37ab9e789b9.png)

#### 语言类型与编码

UTF-8把世界上所有的语言都容纳在一种编码方案里，UTF-8 为互联网上的标准字符集。

#### 语言类型使用的头字段

```
Accept-Language: zh-CN, zh, en
```

```
Content-Language: zh-CN
```

在 HTTP 里使用的请求头字段是**Accept-Charset**，响应头在**Content-Type**字段的数据类型后面用“charset=xxx”来表示

```
Accept-Charset: gbk, utf-8
Content-Type: text/html; charset=utf-8
```

#### 内容协商的质量值

“q”参数表示权重来设定优先级

```
Accept: text/html,application/xml;q=0.9,*/*;q=0.8
```

#### 内容协商的结果

**Vary**字段，记录服务器在内容协商时参考的请求头字段

```
Vary: Accept-Encoding,User-Agent,Accept
```

### HTTP传输大文件的方法

#### 数据压缩

Encoding, gzip对文本文件压缩比较好。图片，音视频失效。

#### 分块传输

响应头：Transfer-Encoding: chunked。表示body分成了许多的块（chunk）逐个发送。（无法使用Content-length**互斥**）

每个分块包含长度头和数据块两部分，均以回车换行结尾（\r\n），长度用16进制数字表示，最后一个长度为0的块表示结束。

浏览器会将接收的分块按照规则组装出的内容，无法看到原始报文形态。

![](https://static001.geekbang.org/resource/image/25/10/25e7b09cf8cb4eaebba42b4598192410.png)

#### 范围请求

允许客户端在请求头里使用专用字段来表示只获取文件的一部分。**客户端的“化整为零”**

服务器响应：**Accept-Ranges: bytes** （支持范围请求）HTTP/1.1 206 Partial Content

请求头：**Range**：**bytes=x-y**（ x 和 y 是以字节为单位的数据范围）

**服务器收到 Range 字段后，需要做四件事。**

1. 检查范围是否合法（越界）
2. 范围正确，跟书Range计算偏移量
3. 添加响应头字段Content-Range：bytes x-y/length，范围/总长
4. 发送数据

视频拖拽进度、多段下载、断点续传基于范围请求实现，要点：

1. 先发HEAD，看是都支持范围请求及资源大小
2. 开N个线程，格局Range字段划分自己负责的任务，发送请求传输数据
3. 下载意外中断，根据上次纪录用Range请求剩余资源

#### 多段数据

多个范围请求，Range请求头加多个x-y，逗号分隔

```
Range: bytes=0-9, 20-29
```

响应头需使用特殊MIME类型：**multipart/byteranges**，还需**boundary=xxx**参数给出分段间的标记

```
Content-Type: multipart/byteranges; boundary=00000000001
```

### HTTP的连接管理

#### 短链接（HTTP早期0.9/1.0）

客户端与服务器端连接很短暂，不会与服务器保持长时间的连接状态。（建立和关闭TCP连接，成本昂贵）

![](https://static001.geekbang.org/resource/image/54/0c/54315ed9ac37fbc6547258040f00a80c.png)

#### 长连接

将TCP 的连接和关闭的时间由原来的一个“请求 - 应答”均摊到多个“请求 - 应答”上

![](https://static001.geekbang.org/resource/image/57/b4/57b3d80234a1f1b8c538a376aa01d3b4.png)

#### 连接相关的头字段

**Connection: keep-alive**  服务器响应字段说明支持长连接

Connection: close 长连接即将关闭

#### 队头阻塞

TTP 规定报文必须是“一发一收”，形成了先进先出的“串行”队列。队列里的请求没有轻重缓急的优先级，只有入队的先后顺序，排在最前面的请求被最优先处理。若队首的处理太慢，后续的请求也许一起等待。

通过“**并发连接**”（concurrent connections）缓解，也就是同时对一个域名发起多个长连接，用数量来解决质量的问题。

![](https://static001.geekbang.org/resource/image/6a/72/6a6d30a89fb085d5f1773a887aaf5572.png)

### HTTP的重定向和跳转

#### 重定向的过程

浏览器的使用者主动发起的，可以称为“**主动跳转**”

由服务器来发起的，浏览器使用者无法控制，相对地就可以称为“**被动跳转**”

响应3XX状态码，响应字段Location：/index.html，Location为重定向URI可相对可绝对。如果跳转到站外必须绝对路径，还需要写http://（协议名和固定分隔符）

#### 重定向状态码

301：永久重定向

302：临时重定向

#### 重定向的相关问题

性能损耗：重定向的机制决定了一个跳转会有两次请求 - 应答，比正常的访问多了一次。站内重定向还好说，可以长连接复用，站外重定向就要开两个连接，如果网络连接质量差，那成本可就高多了，会严重影响用户的体验。

循环跳转：A=>B=>C=>A，HTTP 协议特别规定，浏览器必须具有检测“循环跳转”的能力

### HTTP的cookie机制

#### Cookie 的工作过程

服务器响应字段：Set-Cookie:key=value（每个字段对应一个键值对），浏览器收到响应报文拿到cookie值，再请求就是在请求头字段添加：Cookie：key=value；key=value（可发送多个键值对“；”隔开）

![](https://static001.geekbang.org/resource/image/9f/a4/9f6cca61802d65d063e24aa9ca7c38a4.png)

#### Cookie 的属性

![](https://static001.geekbang.org/resource/image/9d/5d/9dbb8b490714360475911ca04134df5d.png)

设置 Cookie 的作用域

- **Expires** 过期时间为绝对时间点（截止时间）

- **Max-Age** 相对时间（秒）更加优先

Cookie 的作用域（仅发送给特定的服务器和 URI）

- **Domain** Cookie所属域名

- **Path** 路径

Cookie 的安全性

- **HttpOnly**：只能通过浏览器 HTTP 协议传输（ 禁用document.cookie ）

- **SameSite**：可以防范“跨站请求伪造”（XSRF）攻击（SameSite=Strict，SameSite=Lax允许 GET/HEAD ）

### HTTP的缓存控制

#### 服务器的缓存控制

![](https://static001.geekbang.org/resource/image/a1/5b/a1968821f214df4a3ae16c9b30f99a5b.png)

响应头字段 Cache-Control

- max-age （秒）时间的计算起点是响应报文的创建时刻
- no_store：**不允许缓存**
- no_cache：**可以缓存**，但在使用之前必须要去服务器验证是否过期，是否有最新的版本；
- must-revalidate：如果缓存不过期就可以继续使用，但过期了如果还想用就必须去服务器验证。

#### 客户端的缓存控制

“刷新”按钮的时候浏览器会在请求头里加一个“**Cache-Control: max-age=0**”

Ctrl+F5 的“强制刷新”是一个“**Cache-Control: no-cache**”的请求

#### 条件请求

验证资源是否失效需要使用“条件请求”，常用的是“if-Modified-Since”和“If-None-Match”，收到 304 就可以复用缓存里的资源；

验证资源是否被修改的条件有两个：“Last-modified”和“ETag”，需要服务器预先在响应报文里设置，搭配条件请求使用；

**if-Modified-Since**：

**Last-modified**：最后修改时间

![](https://static001.geekbang.org/resource/image/b2/37/b239d0804be630ce182e24ea9e4ab237.png)

**If-None-Match**：

**ETag**：“实体标签”（Entity Tag）的缩写，**是资源的一个唯一标识**，主要是用来解决修改时间无法准确区分文件变化的问题。

If-Unmodified-Since

If-Match

If-Range

### HTTP的代理服务

#### 代理服务

HTTP 代理就是客户端和服务器通信链路中的一个中间环节，为两端提供“代理服务”，服务本身不生产内容，而是处于中间位置转发上下游的请求和响应，具有双重身份。

#### 代理的作用

对上屏蔽了真实客户端，对下屏蔽了真实服务器，简单的说就是“**欺上瞒下**”。

代理最基本的一个功能是**负载均衡**。负载均衡算法比如轮询、一致性哈希等等，这些算法的目标都是尽量把外部的流量合理地分散到多台源服务器，提高系统的整体资源利用率和性能。

- **健康检查**：使用“心跳”等机制监控后端服务器，发现有故障就及时“踢出”集群，保证服务高可用；
- **安全防护**：保护被代理的后端服务器，限制 IP 地址或流量，抵御网络攻击和过载；
- **加密卸载**：对外网使用 SSL/TLS 加密通信认证，而在安全的内网不加密，消除加解密成本；
- **数据过滤**：拦截上下行的数据，任意指定策略修改请求或者响应；
- **内容缓存**：暂存、复用服务器响应

#### 代理相关头字段

Via （通用字段）：标明代理的身份。

![](https://static001.geekbang.org/resource/image/52/d7/52a3bd760584972011f6be1a5258e2d7.png)

**X-Forwarded-For**（为谁而转发）：经过一个代理节点就会在字段里追加一个信息（代理主机名）

**X-Real-IP**：记录客户端 IP 地址，没有中间的代理信息

代理与客户端、源服务器的通信过程：

1. 客户端 55061 先用三次握手连接到代理的 80 端口，然后发送 GET 请求；
2. 代理不直接生产内容，所以就代表客户端，用 55063 端口连接到源服务器，也是三次握手；
3. 代理成功连接源服务器后，发出了一个 HTTP/1.0 的 GET 请求；
4. 因为 HTTP/1.0 默认是短连接，所以源服务器发送响应报文后立即用四次挥手关闭连接；
5. 代理拿到响应报文后再发回给客户端，完成了一次代理服务。

![](https://static001.geekbang.org/resource/image/5a/54/5a247e9e5bf66f5ac3316fddf4e2b254.png)

### HTTP的缓存代理

#### 缓存代理服务

![](https://static001.geekbang.org/resource/image/5e/c2/5e8d10b5758685850aeed2a473a6cdc2.png)

#### 源服务器的缓存控制（ Cache-Control）

服务器端 Cache-Control：max-age、no_store、no_cache 和 must-revalidate 可以约束客户端，也可以约束代理。

“**private**”表示缓存只能在客户端保存，是用户“私有”的，不能放在代理上与别人共享。

“**public**”的意思就是缓存完全开放。

缓存失效后的重新验证区分开（即使用条件请求“Last-modified”和“ETag”），“**must-revalidate**”是只要过期就必须回源服务器验证，而新的“**proxy-revalidate**”只要求代理的缓存过期后必须验证，客户端不必回源，只验证到代理这个环节就行了。

缓存的生存时间“**s-maxage**”，只限定在代理上能够存多久。

代理专用的属性**no-transform** 不能对转换响应资源的格式

#### 客户端的缓存控制（ Cache-Control）

缓存的生存时间，多了两个新属性“**max-stale**”和“**min-fresh**”。max-stale”的意思是如果代理上的缓存过期了也可以接受，但不能过期太多，超过 x 秒也会不要。“min-fresh”的意思是缓存必须有效，而且必须在 x 秒后依然有效

请求字段**only-if-cached**：只接受代理缓存的数据，不接受源服务器的响应
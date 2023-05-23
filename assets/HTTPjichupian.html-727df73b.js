import{_ as i,p as e,q as a,Z as t}from"./framework-eb6cfbb5.js";const l={},r=t(`<h1 id="http-的前世今生" tabindex="-1"><a class="header-anchor" href="#http-的前世今生" aria-hidden="true">#</a> HTTP 的前世今生</h1><ul><li>HTTP 协议始于三十年前蒂姆·伯纳斯·李的一篇文章</li><li>HTTP/0.9 是个简单的文本协议，只能获取文本资源</li><li>HTTP/1.0 确定了现在大部分使用的技术，但它并不是标准</li><li>HTTP/1.1 是目前互联网上使用最广泛的协议，功能也非常完善</li><li>HTTP/2 基于 Chrome 的 SPDY 协议，更注重性能改善，但还没普及</li><li>HTTP/3 基于 Chrome 的 QUIC 协议，是未来的发展方向</li></ul><h1 id="http-是什么" tabindex="-1"><a class="header-anchor" href="#http-是什么" aria-hidden="true">#</a> HTTP 是什么</h1><ul><li>HTTP 是一个用在计算机世界里的协议，它确立了一种计算机之间通信的规范，以及相关的各种控制何错误处理方式。</li><li>HTTP 专门用来两点间的数据传输，不能用于广播，寻址或路由</li><li>HTTP 传输的是文本、图片、音频、视频等超文本数据</li><li>HTTP 是构建互联网的重要基础技术，它没有实体，依赖于许多其他的技术实现，但同时很多技术也依赖于它</li></ul><h1 id="与-http-相关的应用技术" tabindex="-1"><a class="header-anchor" href="#与-http-相关的应用技术" aria-hidden="true">#</a> 与 HTTP 相关的应用技术</h1><p><img src="https://static001.geekbang.org/resource/image/51/64/5102fc33d04b59b36971a5e487779864.png" alt=""></p><ul><li>互联网上绝大部分资源都是用 HTTP 协议传输</li><li>浏览器是 HTTP 协议里的请求方，即 User Agent</li><li>服务器是 HTTP 协议里的应答方，常用的有 Apache 和 Nginx</li><li>CDN 位于浏览器和服务其之间，主要起到缓存加速的作用。（它应用了 HTTP 协议里的缓存和代理技术，代替源站响应客户端的请求。简单来说，它可以缓存源站的数据，让浏览器的请求不用“千里迢迢”地到达源站服务器，直接在“半路”就可以获取响应。）</li><li>爬虫是另一类 User Agent，是自动访问网络资源的程序</li></ul><h1 id="与-http-相关的协议" tabindex="-1"><a class="header-anchor" href="#与-http-相关的协议" aria-hidden="true">#</a> 与 HTTP 相关的协议</h1><h2 id="tcp-ip" tabindex="-1"><a class="header-anchor" href="#tcp-ip" aria-hidden="true">#</a> TCP/IP</h2><p>TCP/IP 协议实际上是一系列网络通信协议的统称，其中最核心的两个协议是<strong>TCP</strong>和<strong>IP</strong>，其他的还有 UDP、ICMP、ARP 等等，共同构成了一个复杂但有层次的协议栈。这个协议栈有四层，最上层是“应用层”，最下层是“链接层”，TCP 和 IP 则在中间：<strong>TCP 属于“传输层”，IP 属于“网际层”</strong>。</p><ul><li>TCP/IP 是网络世界里最常用的协议，HTTP 通常运行待 TCP/IP 提供的可靠传输基础上</li><li>DNS 是 IP 地址的等价代替，需要域名解析实现到 IP 地址的映射</li><li>URI 是用来标记网络资源的一个名字，由“协议名+主机名+路径名”构成，俗称“URL”</li><li>HTTPS 相当于“HTTP+SSL/TLS+TCP/IP”，为 HTTP 套了一个安全的外壳</li><li>代理是 HTTP 传输过程中的&quot;中转站&quot;，可以实现缓存加速和负载均衡等功能</li><li>UDP 是一个非连接的协议，传输数据之前源端和终端不建立连接， 当它想传送时就简单地去抓取来自应用程序的数据，并尽可能快地把它扔到网络上。 在发送端，UDP 传送数据的速度仅仅是受应用程序生成数据的速度、 计算机的能力和传输带宽的限制； 在接收端，UDP 把每个消息段放在队列中，应用程序每次从队列中读一个消息段。</li><li>经常使用“ping”命令来测试两台主机之间 TCP/IP 通信是否正常， 其实“ping”命令的原理就是向对方主机发送 UDP 数据包，然后对方主机确认收到数据包， 如果数据包是否到达的消息及时反馈回来，那么网络就是通的</li></ul><h2 id="小结-tcp-与-udp-的区别" tabindex="-1"><a class="header-anchor" href="#小结-tcp-与-udp-的区别" aria-hidden="true">#</a> <strong>小结 TCP 与 UDP 的区别：</strong></h2><ul><li>基于连接与无连接；</li><li>对系统资源的要求（TCP 较多，UDP 少）；</li><li>UDP 程序结构较简单；</li><li>流模式与数据报模式 ；</li><li>TCP 保证数据正确性，UDP 可能丢包；</li><li>TCP 保证数据顺序，UDP 不保证。</li></ul><h1 id="http-所在网络分层模型" tabindex="-1"><a class="header-anchor" href="#http-所在网络分层模型" aria-hidden="true">#</a> HTTP 所在网络分层模型</h1><h2 id="osi-网络分层模型与-tcp-ip-网络分层模型" tabindex="-1"><a class="header-anchor" href="#osi-网络分层模型与-tcp-ip-网络分层模型" aria-hidden="true">#</a> OSI 网络分层模型与 TCP/IP 网络分层模型</h2><p><img src="https://static001.geekbang.org/resource/image/9d/94/9d9b3c9274465c94e223676b6d434194.png" alt=""></p><ul><li><p>TCP/IP 网络分层模型</p><ul><li>第一层叫“<strong>链接层</strong>”，负责在以太网、WiFi 这样的底层网络上发送原始数据包，使用 MAC 地址来标记网络上的设备</li><li>第二层叫“<strong>网际层</strong>”，IP 协议就处在这一层。</li><li>第三层叫“<strong>传输层</strong>”，保证数据在 IP 地址标记的两点之间“可靠”地传输，是 TCP 协议工作的层次（以及 UDP）。</li><li>第四层叫“<strong>应用层</strong>”，Telnet、SSH、FTP、SMTP 以及 HTTP</li></ul><p>MAC 层的传输单位是帧（frame），IP 层的传输单位是包（packet），TCP 层的传输单位是段（segment），HTTP 的传输单位则是消息或报文（message），可以统称为数据包。</p></li><li><p>OSI 网络分层模型</p><ul><li>第一层：物理层，网络的物理形式，例如电缆、光纤、网卡、集线器等等；</li><li>第二层：数据链路层，它基本相当于 TCP/IP 的链接层；</li><li>第三层：网络层，相当于 TCP/IP 里的网际层；</li><li>第四层：传输层，相当于 TCP/IP 里的传输层；</li><li>第五层：会话层，维护网络中的连接状态，即保持会话和同步；</li><li>第六层：表示层，把数据转换为合适、可理解的语法和语义；</li><li>第七层：应用层，面向具体的应用传输数据。</li></ul></li></ul><h2 id="tcp-ip-协议栈的工作方式" tabindex="-1"><a class="header-anchor" href="#tcp-ip-协议栈的工作方式" aria-hidden="true">#</a> TCP/IP 协议栈的工作方式</h2><p><img src="https://static001.geekbang.org/resource/image/70/6f/70bc19acacf2245fa841349f15cb7a6f.png" alt=""></p><p>发快递的过程</p><ul><li>HTTP 协议的传输过程就是这样通过协议栈逐层向下，每一层都添加本层的专有数据，层层打包，然后通过下层发送出去。</li><li>接收数据是则是相反的操作，从下往上穿过协议栈，逐层拆包，每层去掉本层的专有头，上层就会拿到自己的数据。</li></ul><h1 id="域名和-dns" tabindex="-1"><a class="header-anchor" href="#域名和-dns" aria-hidden="true">#</a> 域名和 DNS</h1><h2 id="域名的形式" tabindex="-1"><a class="header-anchor" href="#域名的形式" aria-hidden="true">#</a> 域名的形式</h2><p>域名是一个有层次的结构，是一串用“.”分隔的多个单词，最右边的被称为“顶级域名”，然后是“二级域名”，层级关系向左依次降低。例如 time.geekbang.org</p><p>最左边的是主机名，通常用来表明主机的用途，比如“www”表示提供万维网服务、“mail”表示提供邮件服务，不过这也不是绝对的，名字的关键是要让我们容易记忆。</p><h1 id="键入网址再按下回车-后面究竟发生了什么" tabindex="-1"><a class="header-anchor" href="#键入网址再按下回车-后面究竟发生了什么" aria-hidden="true">#</a> 键入网址再按下回车，后面究竟发生了什么</h1><h2 id="使用-ip-地址访问-web-服务器" tabindex="-1"><a class="header-anchor" href="#使用-ip-地址访问-web-服务器" aria-hidden="true">#</a> 使用 IP 地址访问 Web 服务器</h2><p>最简单的浏览器 HTTP 请求过程：</p><ol><li>浏览器从地址栏的输入中获得服务器的 IP 地址和端口号；</li><li>浏览器用 TCP 的三次握手与服务器建立连接；</li><li>浏览器向服务器发送拼好的报文；</li><li>服务器收到报文后处理请求，同样拼好报文再发给浏览器；</li><li>浏览器解析报文，渲染输出页面。</li></ol><h2 id="使用域名访问-web-服务器" tabindex="-1"><a class="header-anchor" href="#使用域名访问-web-服务器" aria-hidden="true">#</a> 使用域名访问 Web 服务器</h2><p>由于使用域名访问需要进行 DNS 解析，优先读取缓存的映射关系，整个过程是：浏览器缓存 — 系统缓存 — 本机 hosts 文件。如果还是没有请求 DNS 服务器获取 IP 解析，获取到 IP 就会走“使用 IP 地址访问 Web 服务器”一样的过程</p><p><img src="https://static001.geekbang.org/resource/image/8a/19/8a5bddd3d8046daf7032c7d60a3d1a19.png" alt=""></p><h1 id="http-报文结构" tabindex="-1"><a class="header-anchor" href="#http-报文结构" aria-hidden="true">#</a> HTTP 报文结构</h1><h2 id="http-协议的请求报文和响应报文的结构" tabindex="-1"><a class="header-anchor" href="#http-协议的请求报文和响应报文的结构" aria-hidden="true">#</a> HTTP 协议的请求报文和响应报文的结构</h2><ol><li>起始行（start line）：描述请求或响应的基本信息；</li><li>头部字段集合（header）：使用 key-value 形式更详细地说明报文；</li><li>消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。</li></ol><p>由“起始行 + 头部 + 空行 + 实体”组成</p><p>HTTP 报文可以没有 body，但必须要有 header，而且 header 后也必须要有空行。（HEAD 请求方式）</p><p><img src="https://static001.geekbang.org/resource/image/62/3c/62e061618977565c22c2cf09930e1d3c.png" alt=""></p><h2 id="起始行" tabindex="-1"><a class="header-anchor" href="#起始行" aria-hidden="true">#</a> 起始行</h2><p>请求行</p><p><img src="https://static001.geekbang.org/resource/image/36/b9/36108959084392065f36dff3e12967b9.png" alt=""></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>状态行</p><p><img src="https://static001.geekbang.org/resource/image/a1/00/a1477b903cd4d5a69686683c0dbc3300.png" alt=""></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">404</span> <span class="token reason-phrase string">Not Found</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="头字段" tabindex="-1"><a class="header-anchor" href="#头字段" aria-hidden="true">#</a> 头字段</h2><p>头部字段是 key-value 的形式</p><p>注意：</p><ol><li>字段名不区分大小写</li><li>字段名里不允许出现空格，可以使用连字符“-”，但不能使用下划线“_”</li><li>字段名后面必须紧接着“:”，不能有空格，而“:”后的字段值前可以有多个空格</li><li>HTTP/1.1 里唯一要求必须提供的头字段是 Host，它必须出现在请求头里，标记虚拟主机名。</li></ol><h3 id="常用头字段" tabindex="-1"><a class="header-anchor" href="#常用头字段" aria-hidden="true">#</a> 常用头字段</h3><ol><li>通用字段：在请求头和响应头里都可以出现；Date（报文创建时间）</li><li>请求字段：仅能出现在请求头里，进一步说明请求信息或者额外的附加条件；User-Agent</li><li>响应字段：仅能出现在响应头里，补充说明响应报文的信息；Server（提供 Web 服务的软件名称和版本号）</li><li>实体字段：它实际上属于通用字段，但专门描述 body 的额外信息。Content-Length</li></ol><h1 id="http-请求方法" tabindex="-1"><a class="header-anchor" href="#http-请求方法" aria-hidden="true">#</a> HTTP 请求方法</h1><h2 id="标准请求方法" tabindex="-1"><a class="header-anchor" href="#标准请求方法" aria-hidden="true">#</a> 标准请求方法</h2><p>请求方法是对服务器的“指示”，真正应如何处理由服务器来决定</p><p>目前 HTTP/1.1 规定了八种方法，单词<strong>都必须是大写的形式</strong></p><ol><li>GET：获取资源，可以理解为读取或者下载数据；</li><li>HEAD：获取资源的元信息；（只返回响应头）</li><li>POST：向资源提交数据，相当于写入或上传数据；</li><li>PUT：类似 POST；</li><li>DELETE：删除资源；</li><li>CONNECT：建立特殊的连接隧道；（服务器为客户端和另一台远程服务器建立一条特殊的连接隧道）</li><li>OPTIONS：列出可对资源实行的方法；</li><li>TRACE：追踪请求 - 响应的传输路径。（对 HTTP 链路的测试或诊断，但存在漏洞，会泄漏网站的信息）</li></ol><p><img src="https://static001.geekbang.org/resource/image/3c/6d/3cdc8ac71b80929f4a94dfeb9ffe4b6d.jpg" alt=""></p><h2 id="安全与幂等" tabindex="-1"><a class="header-anchor" href="#安全与幂等" aria-hidden="true">#</a> 安全与幂等</h2><p>在 HTTP 协议里，所谓的“<strong>安全</strong>”是指请求方法不会“破坏”服务器上的资源，即不会对服务器上的资源造成实质的修改。（GET 和 HEAD 都安全 )</p><p>所谓的“<strong>幂等</strong>”实际上是一个数学用语，被借用到了 HTTP 协议里，意思是多次执行相同的操作，结果也都是相同的，即多次“幂”后结果“相等”。（GET 和 HEAD 都幂等，POST 修改更新为幂等，添加不是)</p><h1 id="分析-http-地址" tabindex="-1"><a class="header-anchor" href="#分析-http-地址" aria-hidden="true">#</a> 分析 HTTP 地址</h1><h2 id="uri-的格式" tabindex="-1"><a class="header-anchor" href="#uri-的格式" aria-hidden="true">#</a> URI 的格式</h2><p>URI——<strong>统一资源标识符</strong>。URI 不完全等同于网址，它包含有 URL 和 URN 两个部分。URI 本质上是一个字符串，这个字符串的作用是<strong>唯一地标记资源的位置或者名字</strong>。</p><p>协议名 + 主机名 + 路径 + 查询参数</p><p><img src="https://static001.geekbang.org/resource/image/46/2a/46581d7e1058558d8e12c1bf37d30d2a.png" alt=""></p><ul><li>在 scheme 之后，必须是<strong>三个特定的字符</strong>“<strong>😕/</strong>”</li><li>在“😕/”之后，是被称为“<strong>authority</strong>”的部分，表示<strong>资源所在的主机名</strong>，通常的形式是“host:port”，即主机名加端口号。</li><li><strong>标记资源所在位置</strong>的<strong>path</strong>，URI 的 path 部分必须以“/”开始，不要把“/”误认为属于前面 authority。</li><li><strong>query</strong>，path 之后，用一个“?”开始，但不包含“?”。格式为多个“<strong>key=value</strong>”的字符串，这些 KV 值用字符“<strong>&amp;</strong>”连接。</li></ul><p>dns 只解析 ip 地址，端口号是浏览器添加的。如果不提供端口号，浏览器就会添加默认端口号，比如 80/443。</p><p>在 URI 里对“@&amp;/”等特殊字符和汉字必须要做编码，否则服务器收到 HTTP 报文后会无法正确处理。（非 ASCII 码或特殊字符转换成十六进制字节值，然后前面再加上一个“%”）</p><p>URL——<strong>统一资源定位符</strong></p><h2 id="uri-的完整格式" tabindex="-1"><a class="header-anchor" href="#uri-的完整格式" aria-hidden="true">#</a> URI 的完整格式</h2><p><img src="https://static001.geekbang.org/resource/image/ff/38/ff41d020c7a27d1e8191057f0e658b38.png" alt=""></p><ul><li>协议名之后、主机名之前的<strong>身份信息</strong>“user:passwd@”，表示登录主机时的用户名和密码。敏感信息以明文形式暴露出来，存在严重的安全隐患。</li><li>查询参数后的<strong>片段标识符</strong>“#fragment”， URI 所定位的资源内部的一个“锚点”。（仅能由浏览器这样的客户端使用，服务器是看不到的。浏览器永远不会把带“#fragment”的 URI 发送给服务器。）</li></ul><h1 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> HTTP 状态码</h1><p>RFC 标准把状态码分成了五类，用数字的第一位表示分类，而 0~99 不用，这样状态码的实际可用范围就大大缩小了，由 000~999 变成了 100~599。</p><p>五类的具体含义是：</p><ul><li>1××：提示信息，表示目前是协议处理的中间状态，还需要后续的操作；</li><li>2××：成功，报文已经收到并被正确处理；</li><li>3××：重定向，资源位置发生变动，需要客户端重新发送请求；</li><li>4××：客户端错误，请求报文有误，服务器无法处理；</li><li>5××：服务器错误，服务器在处理请求时内部发生了错误。</li></ul><p>常用状态码分析：</p><ul><li><strong>101 Switching Protocols</strong>：客户端使用 Upgrade 头字段，要求在 HTTP 协议的基础上改成其他的协议继续通信（ WebSocket）</li><li><strong>200 OK</strong>：一切正常，非 HEAD 请求，通常在响应头后都会有 body 数据</li><li><strong>204 No Content</strong>：与“200 OK”基本相同，但响应头后没有 body 数据</li><li><strong>206 Partial Content</strong>：是 HTTP 分块下载或断点续传的基础，在客户端发送“范围请求”、要求获取资源的部分数据时出现。通常还会伴随着头字段“<strong>Content-Range</strong>”，表示响应报文里 body 数据的具体范围，供客户端确认。如“Content-Range: bytes 0-99/2000”，意思是此次获取的是总计 2000 个字节的前 100 个字节。</li><li><strong>301 Moved Permanently</strong>：俗称“永久重定向”，此次请求的资源已经不存在，需要改用新的 URI 访问</li><li><strong>302 Found</strong>：俗称“临时重定向”，请求的资源还在，但需要暂时用另一个 URI 来访问</li><li><strong>304 Not Modified</strong>：用于 If-Modified-Since 等条件请求，表示资源未修改，用于缓存控制。可以理解成“重定向已到缓存的文件”（即“缓存重定向”）。</li><li><strong>400 Bad Request</strong>：请求报文有错误</li><li><strong>403 Forbidden</strong>：表示服务器禁止访问资源（实际上不是客户端的请求出错）</li><li><strong>404 Not Found</strong>：资源在本服务器上未找到</li><li>405 Method Not Allowed：不允许使用某些方法操作资源</li><li>406 Not Acceptable：资源无法满足客户端请求的条件，例如请求中文但只有英文；</li><li>408 Request Timeout：请求超时，服务器等待了过长的时间；</li><li>409 Conflict：多个请求发生了冲突，可以理解为多线程并发时的竞态；</li><li>413 Request Entity Too Large：请求报文里的 body 太大；</li><li>414 Request-URI Too Long：请求行里的 URI 太大；</li><li>429 Too Many Requests：客户端发送了太多的请求，通常是由于服务器的限连策略；</li><li>431 Request Header Fields Too Large：请求头某个字段或总体太大；</li><li><strong>500 Internal Server Error</strong>：通用的错误码</li><li><strong>501 Not Implemented</strong>：表示客户端请求的功能还不支持</li><li><strong>502 Bad Gateway</strong>：通常是服务器作为网关或者代理时返回的错误码，表示服务器自身工作正常，访问后端服务器时发生了错误</li><li><strong>503 Service Unavailable</strong>：表示服务器当前很忙，暂时无法响应服务</li></ul><h1 id="http-优缺点" tabindex="-1"><a class="header-anchor" href="#http-优缺点" aria-hidden="true">#</a> HTTP 优缺点</h1><ul><li>HTTP 最大的优点是简单、灵活和易于扩展；</li><li>HTTP 拥有成熟的软硬件环境，应用的非常广泛，是互联网的基础设施；</li><li>HTTP 是无状态的，可以轻松实现集群化，扩展性能，但有时也需要用 Cookie 技术来实现“有状态”；</li><li>HTTP 是明文传输，数据完全肉眼可见，能够方便地研究分析，但也容易被窃听；</li><li>HTTP 是不安全的，无法验证通信双方的身份，也不能判断报文是否被窜改；</li><li>HTTP 的性能不算差，但不完全适应现在的互联网，还有很大的提升空间。</li></ul>`,80),n=[r];function s(o,h){return e(),a("div",null,n)}const p=i(l,[["render",s],["__file","HTTPjichupian.html.vue"]]);export{p as default};

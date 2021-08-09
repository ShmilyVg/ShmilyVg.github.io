---
title: HTTP安全
date: 2021/07/19
updated: 2021/07/20
categories: 
- HTTP
tags:
  - HTTP
top_img: ./img/bg_1.png
---
###  TLS是什么

#### 什么是安全

通信过程具备了四个特性，就可以认为是“安全”的，这四个特性是：机密性、完整性，身份认证和不可否认。

**机密性**：是指对数据的“保密”，只能由可信的人访问

**完整性**：是指数据在传输过程中没有被窜改，不多也不少

**身份认证**：是指确认对方的真实身份

**不可否认**：也叫不可抵赖，意思是不能否认已经发生过的行为

**“https”，默认端口号 443**，其他都完全沿用 HTTP，没有任何新的东西。

![](https://static001.geekbang.org/resource/image/50/a3/50d57e18813e18270747806d5d73f0a3.png)

#### SSL/TLS

SSL 即安全套接层（Secure Sockets Layer），在 OSI 模型中处于第 5 层（会话层）

SSL 发展到 v3 时在 1999 年改名为 TLS

### 对称加密与非对称加密

#### 对称加密

AES（高级加密标准）密钥长度可以是 128、192 或 256。

ChaCha20密钥长度固定为 256 位

#### 非对称加密（运算速度很慢）

RSA 它的安全性基于“**整数分解**”的数学难题，使用两个超大素数的乘积作为生成密钥的材料

ECC 基于“**椭圆曲线离散对数**”的数学难题，使用特定的曲线方程和基点生成公钥和私钥

#### 混合加密（TLS）

通信刚开始的时候使用非对称算法,解决密钥交换的问题。用随机数产生对称算法使用的“**会话密钥**”，再用公钥加密。(会话密钥很短,16/32 字节慢一点也无所谓)。对方拿到密文后用私钥解密，取出会话密钥。这样就实现了对称密钥的安全交换，后续就不再使用非对称加密，全都使用对称加密。

![](https://static001.geekbang.org/resource/image/e4/85/e41f87110aeea3e548d58cc35a478e85.png)

### 数字签名与证书

#### 摘要算法

可近似地理解成一种特殊的压缩算法，能够把任意长度的数据“压缩”成固定长度、而且独一无二的“摘要”字符串

摘要算法对输入具有“单向性”和“雪崩效应”，输入的微小不同会导致输出的剧烈变化

![](https://static001.geekbang.org/resource/image/28/d8/2865d2c77466efb7a480833bcb27f9d8.png)

常用的摘要算法：MD5、SHA-1

#### 完整性

摘要算法保证了“数字摘要”和原文是完全等价的。只要在原文后附上它的摘要，就能够保证数据的完整性。

![](https://static001.geekbang.org/resource/image/c2/96/c2e10e9afa1393281b5633b1648f2696.png)

### TLS1.2的连接过程

#### TLS协议由子协议组成

- 记录协议：规定了TLS收发数据的基本单位：记录
- 报警协议：向对方发出警报信息
- 握手协议：TLS 里最复杂的子协议，要比 TCP 的 SYN/ACK 复杂的多，浏览器和服务器会在握手过程中协商 TLS 版本号、随机数、密码套件等信息，然后交换证书和密钥参数，最终双方协商得到会话密钥，用于后续的混合加密系统。
- 变更密码规范协议：告诉对方，后续的数据都将使用加密保护

#### ECDHE 握手过程

![](https://static001.geekbang.org/resource/image/9c/1e/9caba6d4b527052bbe7168ed4013011e.png)

#### RSA 握手过程

![](https://static001.geekbang.org/resource/image/cb/d2/cb9a89055eadb452b7835ba8db7c3ad2.png)

### TLS1.3新特性

- 为了兼容 1.1、1.2 等“老”协议，TLS1.3 会“伪装”成 TLS1.2，新特性在“扩展”里实现；
- 1.1、1.2 在实践中发现了很多安全隐患，所以 TLS1.3 大幅度删减了加密算法，只保留了 ECDHE、AES、ChaCha20、SHA-2 等极少数算法，强化了安全；
- TLS1.3 也简化了握手过程，完全握手只需要一个消息往返，提升了性能。

### HTTPS优化

- 可以有多种硬件和软件手段减少网络耗时和计算耗时，让 HTTPS 变得和 HTTP 一样快，最可行的是软件优化；
- 应当尽量使用 ECDHE 椭圆曲线密码套件，节约带宽和计算量，还能实现“False Start”；
- 服务器端应当开启“OCSP Stapling”功能，避免客户端访问 CA 去验证证书；
- 会话复用的效果类似 Cache，前提是客户端必须之前成功建立连接，后面就可以用“Session ID”“Session Ticket”等凭据跳过密钥交换、证书验证等步骤，直接开始加密通信。

### 迁移HTTPS

#### 迁移的顾虑

- “慢”，是指惯性思维，拿以前的数据来评估 HTTPS 的性能，认为 HTTPS 会增加服务器的成本，增加客户端的时延，影响用户体验。
- “贵”，主要是指证书申请和维护的成本太高，网站难以承担。
- 难”，是指 HTTPS 涉及的知识点太多、太复杂，有一定的技术门槛，不能很快上手。

#### 从 HTTP 切换到 HTTPS流程

**1.申请证书：Let’s Encrypt（免费，中小型公司适用）**

注意事项：

- 申请证书时应当同时申请 RSA 和 ECDSA 两种证书，在 Nginx 里配置成双证书验证，这样服务器可以自动选择快速的椭圆曲线证书，同时也兼容只支持 RSA 的客户端。
- 申请 RSA 证书，私钥至少要 2048 位，摘要算法应该选用 SHA-2，如 SHA256、SHA384 等
- 出于安全的考虑，“Let’s Encrypt”证书的有效期很短，只有 90 天，时间一到就会过期失效，所以必须要定期更新（在 crontab 里加个每周或每月任务，发送更新请求）

**2.配置 HTTPS**

配置 Web 服务器：nginx 上非常简单，只要在“listen”指令后面加上参数“ssl”，再配上刚才的证书文件就可以实现最基本的 HTTPS

```nginx
listen                443 ssl;
 
ssl_certificate       xxx_rsa.crt;  #rsa2048 cert
ssl_certificate_key   xxx_rsa.key;  #rsa2048 private key
 
ssl_certificate       xxx_ecc.crt;  #ecdsa cert
ssl_certificate_key   xxx_ecc.key;  #ecdsa private ke
```

为了提高 HTTPS 的安全系数和性能，可以强制 Nginx 只支持 TLS1.2 以上的协议，打开“Session Ticket”会话复用：

```nginx
ssl_protocols               TLSv1.2 TLSv1.3;
 
ssl_session_timeout         5m;
ssl_session_tickets         on;
ssl_session_ticket_key      ticket.key;
```

密码套件的选择方面，以服务器的套件优先，可以避免恶意客户端故意选择较弱的套件、降低安全等级，密码套件向 TLS1.3“看齐”，只使用 ECDHE、AES 和 ChaCha20，支持“False Start”

```nginx
ssl_prefer_server_ciphers   on;
 
 
ssl_ciphers   ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-CHACHA20-POLY1305:ECDHE+AES128:!MD5:!SHA1;
```

如果服务器上使用了 OpenSSL 的分支 BorringSSL，那么还可以使用一个特殊的“等价密码组”（Equal preference cipher groups）特性，它可以让服务器配置一组“等价”的密码套件，在这些套件里允许客户端优先选择，比如这么配置：

```nginx
ssl_ciphers 
[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305];
```

全部配置完成后，可以访问https://www.ssllabs.com/，测试网站的安全程度

**3.服务器名称指示**

在 HTTP 协议里，多个域名可以同时在一个 IP 地址上运行，这就是“虚拟主机”

在 HTTPS 里，因为请求头只有在 TLS 握手之后才能发送，在握手时就必须选择“虚拟主机”对应的证书，TLS 无法得知域名的信息，就只能用 IP 地址来区分

解决这个问题得用到 TLS 的“扩展”，给协议加个**SNI**（Server Name Indication）的“补充条款”。它的作用和 Host 字段差不多，客户端会在“Client Hello”时带上域名信息，这样服务器就可以根据名字而不是 IP 地址来选择证书

```nginx
Extension: server_name (len=19)
    Server Name Indication extension
        Server Name Type: host_name (0)
        Server Name: www.chrono.com
```

**4.重定向跳转**

把之前不安全的 HTTP 网址用 301 或 302“重定向”到新的 HTTPS 网站，这在 Nginx 里也很容易做到，使用“return”或“rewrite”都可以。

```nginx
return 301 https://$host$request_uri;             # 永久重定向
rewrite ^  https://$host$request_uri permanent;   # 永久重定向
```

这种方式有**两个问题**一个是重定向增加了网络成本，多出了一次请求；另一个是存在安全隐患，重定向的响应可能会被“中间人”窜改，实现“会话劫持”，跳转到恶意网站。

“**HSTS**”（HTTP 严格传输安全，HTTP Strict Transport Security）的技术可以消除这种安全隐患。HTTPS 服务器需要在发出的响应头里添加一个“**Strict-Transport-Security**”的字段，再设定一个有效期，例如：

```nginx
Strict-Transport-Security: max-age=15768000; includeSubDomains
```

有了“HSTS”的指示，以后浏览器再访问同样的域名的时候就会自动把 URI 里的“http”改成“https”，直接访问安全的 HTTPS 网站。这样“中间人”就失去了攻击的机会，而且对于客户端来说也免去了一次跳转，加快了连接速度。
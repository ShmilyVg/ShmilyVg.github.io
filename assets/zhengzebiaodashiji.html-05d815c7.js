import{_ as n,p as i,q as e,Z as d}from"./framework-eb6cfbb5.js";const s={},l=d(`<h1 id="正则表达式集" tabindex="-1"><a class="header-anchor" href="#正则表达式集" aria-hidden="true">#</a> 正则表达式集</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>验证数字：^[0-9]*$
验证n位的数字：^\\d{n}$
验证至少n位数字：^\\d{n,}$
验证m-n位的数字：^\\d{m,n}$
验证零和非零开头的数字：^(0|[1-9][0-9]*)$
验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
验证非零的正整数：^\\+?[1-9][0-9]*$
验证非零的负整数：^\\-[1-9][0-9]*$
验证非负整数（正整数 + 0）  ^\\d+$
验证非正整数（负整数 + 0）  ^((-\\d+)|(0+))$
验证长度为3的字符：^.{3}$
验证数字英文中文匹配（不包含特殊符号）：/^[0-9a-zA-Z\\\\u4e00-\\\\u9fa5]+$/
验证由26个英文字母组成的字符串：^[A-Za-z]+$
验证由26个大写英文字母组成的字符串：^[A-Z]+$
验证由26个小写英文字母组成的字符串：^[a-z]+$
验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
验证由数字、26个英文字母或者下划线组成的字符串：^\\w+$
验证用户密码:^[a-zA-Z]\\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
验证是否含有 ^%&amp;&#39;,;=?$\\&quot; 等字符：[^%&amp;&#39;,;=?$\\x22]+
验证汉字：^[\\u4e00-\\u9fa5],{0,}$
验证Email地址：^\\w+[-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$
验证InternetURL：^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
验证电话号码：^(\\(\\d{3,4}\\)|\\d{3,4}-)?\\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
验证身份证号（15位或18位数字）：^\\d{15}|\\d{}18$
验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”
验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$    正确格式为：01、09和1、31。
整数：^-?\\d+$
非负浮点数（正浮点数 + 0）：^\\d+(\\.\\d+)?$
正浮点数   ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$
非正浮点数（负浮点数 + 0） ^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$
负浮点数  ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
浮点数  ^(-?\\d+)(\\.\\d+)?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="title-虚拟列表date-2020-05-28" tabindex="-1"><a class="header-anchor" href="#title-虚拟列表date-2020-05-28" aria-hidden="true">#</a> title: 虚拟列表 date: 2020/05/28</h2><h1 id="符号表示意义" tabindex="-1"><a class="header-anchor" href="#符号表示意义" aria-hidden="true">#</a> 符号表示意义：</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>匹配除换行符以外的任意字符
\\w 	匹配字母或数字或下划线或汉字
\\s 	匹配任意的空白符
\\d 	匹配数字
\\b 	匹配单词的开始或结束
^ 	匹配字符串的开始
$ 	匹配字符串的结束
[\\u4e00-\\u9fa5]{2,20} 匹配2-20个汉字
.　　　　匹配除换行符 \\n 之外的任何单字符。要匹配 . ，请使用 \\.
* 	重复零次或更多次
+ 	重复一次或更多次
? 	重复零次或一次
{n} 	重复n次
{n,} 	重复n次或更多次
{n,m} 	重复n到m次

\\W 	匹配任意字母，数字，下划线，汉字的字符
\\S 	匹配任意空白符的字符
\\D 	匹配任意数字的字符
\\B 	匹配单词开头或结束的位置
[^x] 	匹配x以外的任意字符
[^aeiou] 	匹配aeiou这几个字母以外的任意字符

(exp) 	匹配exp,并捕获文本到自动命名的组里
(?&lt;name&gt;exp) 	匹配exp,并捕获文本到名称为name的组里，也可以写成(?&#39;name&#39;exp)
(?:exp) 	匹配exp,不捕获匹配的文本，也不给此分组分配组号
零宽断言
(?=exp) 	匹配exp前面的位置
(?&lt;=exp) 	匹配exp后面的位置
(?!exp) 	匹配后面跟的不是exp的位置
(?&lt;!exp) 	匹配前面不是exp的位置
注释
(?#comment) 	这种类型的组不对正则表达式的处理产生任何影响，用于提供注释让人阅读
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function v(r,c){return i(),e("div",null,a)}const m=n(s,[["render",v],["__file","zhengzebiaodashiji.html.vue"]]);export{m as default};

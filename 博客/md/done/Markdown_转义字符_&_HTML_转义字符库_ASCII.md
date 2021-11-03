
---
 title: Markdown | 转义字符 & HTML | 转义 | ASCII
 date: 
 updated: 
 categories:
 - 
 tags:
 - 
---
>
<!--less-->
﻿
# Markdown
## 转义字符
Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符。e.g. 
![](https://img-blog.csdnimg.cn/20210209123510276.png#pic_center)
Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

| 结果 |   描述   |
| :--: | :------: |
|  \   |  反斜线  |
|  `   |  反引号  |
|  *   |   星号   |
|  _   |  下划线  |
|  {}  |  花括号  |
|  []  |  方括号  |
|  ()  |  小括号  |
|  #   |  井字号  |
|  +   |   加号   |
|  -   |   减号   |
|  .   | 英文句点 |
|  !   |  感叹号  |

# HTML
参考网站：[HTML 转义字符](http://www.w3chtml.com/html/character.html)

由于`Markdown`其本身支持`HTML`语法, 用`\`可能有时候和`HTML`语法冲突。所以在实际使用中会出现诸如`<`(用于定义 HTML 标签的开始), `>`无法正常显示的问题，这是因为使用上述的特殊字符会被认为是HTML语句而不予显示。因此需要用对应的实体编号或者实体名称来代替。

字符实体有三部分：一个和号`&`，一个`实体名称`，或者 `#` 和一个`实体编号`，以及一个分号 `;`，即：`%实体名称;`或`#实体编号;`。要在 HTML 文档中显示小于号，我们需要这样写：`&lt;` 或者 `&#60;`。
e.g. `&#60; test &#62;` = `< test >`

使用实体名称而不是实体编号的好处在于，名称相对来说更容易记忆。而这么做的坏处是，并不是所有的浏览器都支持最新的实体名称，然而几乎所有的浏览器对实体编号的支持都很好。

## 转义字符
空格是 HTML 中最普通的字符实体。

通常情况下，HTML 会裁掉文档中的空格。假如你在文档中连续输入 10 个空格，那么 HTML 会去掉其中的9个。如果使用 `&nbsp;`，就可以在文档中增加空格。

### 常用字符实体
**注意：** 实体对大小写敏感。

**最常用的字符实体：**
| 结果 | 描述   | 实体名称           | 实体编号 |
| -------- | ------ | ------------------ | -------- |
|          | 空格   | \&nbsp;            | \&#160;  |
| <        | 小于号 | \&lt;              | \&#60;   |
| >        | 大于号 | \&gt;              | \&#62;   |
| \&       | 和号   | \&amp;             | \&#38;   |
| "        | 引号   | \&quot;            | \&#34;   |
| '        | 撇号   | \&apos; (IE不支持) | \&#39;   |


**其他一些常用的字符实体：**
| 结果 | 描述     | 实体名称  | 实体编号 |
| -------- | -------- | --------- | -------- |
| ￠       | 分       | \&cent;   | \&#162;  |
| £        | 镑       | \&pound;  | \&#163;  |
| ¥        | 日圆     | \&yen;    | \&#165;  |
| §        | 节       | \&sect;   | \&#167;  |
| ©        | 版权     | \&copy;   | \&#169;  |
| ®        | 注册商标 | \&reg;    | \&#174;  |
| ×        | 乘号     | \&times;  | \&#215;  |
| ÷        | 除号     | \&divide; | \&#247;  |

### 符号实体库
参考网站：[HTML 符号实体](http://www.w3chtml.com/html/ref/symbol.html)

**注意：** 实体对大小写敏感。

#### 数学符号库
| 结果 | 描述                | 实体名称  | 实体编号 |
| ---- | ------------------- | --------- | -------- |
| ∀    | for all             | \&forall; | \&#8704; |
| ∂    | part                | \&part;   | \&#8706; |
| ∃    | exists              | \&exists; | \&#8707; |
| ∅    | empty               | \&empty;  | \&#8709; |
| ∇    | nabla               | \&nabla;  | \&#8711; |
| ∈    | isin                | \&isin;   | \&#8712; |
| ∉    | notin               | \&notin;  | \&#8713; |
| ∋    | ni                  | \&ni;     | \&#8715; |
| ∏    | prod                | \&prod;   | \&#8719; |
| ∑    | sum                 | \&sum;    | \&#8721; |
| −    | minus               | \&minus;  | \&#8722; |
| ∗    | lowast              | \&lowast; | \&#8727; |
| √    | square root         | \&radic;  | \&#8730; |
| ∝    | proportional to     | \&prop;   | \&#8733; |
| ∞    | infinity            | \&infin;  | \&#8734; |
| ∠    | angle               | \&ang;    | \&#8736; |
| ∧    | and                 | \&and;    | \&#8743; |
| ∨    | or                  | \&or;     | \&#8744; |
| ∩    | cap                 | \&cap;    | \&#8745; |
| ∪    | cup                 | \&cup;    | \&#8746; |
| ∫    | integral            | \&int;    | \&#8747; |
| ∴    | therefore           | \&there4; | \&#8756; |
| ∼    | simular to          | \&sim;    | \&#8764; |
| ≅    | approximately equal | \&cong;   | \&#8773; |
| ≈    | almost equal        | \&asymp;  | \&#8776; |
| ≠    | not equal           | \&ne;     | \&#8800; |
| ≡    | equivalent          | \&equiv;  | \&#8801; |
| ≤    | less or equal       | \&le;     | \&#8804; |
| ≥    | greater or equal    | \&ge;     | \&#8805; |
| ⊂    | subset of           | \&sub;    | \&#8834; |
| ⊃    | superset of         | \&sup;    | \&#8835; |
| ⊄    | not subset of       | \&nsub;   | \&#8836; |
| ⊆    | subset or equal     | \&sube;   | \&#8838; |
| ⊇    | superset or equal   | \&supe;   | \&#8839; |
| ⊕    | circled plus        | \&oplus;  | \&#8853; |
| ⊗    | cirled times        | \&otimes; | \&#8855; |
| ⊥    | perpendicular       | \&perp;   | \&#8869; |
| ⋅    | dot operator        | \&sdot;   | \&#8901; |

#### 希腊字母库
| 结果 | 描述           | 实体名称    | 实体编号 |
| ---- | -------------- | ----------- | -------- |
| Α    | Alpha          | \&Alpha;    | \&#913;  |
| Β    | Beta           | \&Beta;     | \&#914;  |
| Γ    | Gamma          | \&Gamma;    | \&#915;  |
| Δ    | Delta          | \&Delta;    | \&#916;  |
| Ε    | Epsilon        | \&Epsilon;  | \&#917;  |
| Ζ    | Zeta           | \&Zeta;     | \&#918;  |
| Η    | Eta            | \&Eta;      | \&#919;  |
| Θ    | Theta          | \&Theta;    | \&#920;  |
| Ι    | Iota           | \&Iota;     | \&#921;  |
| Κ    | Kappa          | \&Kappa;    | \&#922;  |
| Λ    | Lambda         | \&Lambda;   | \&#923;  |
| Μ    | Mu             | \&Mu;       | \&#924;  |
| Ν    | Nu             | \&Nu;       | \&#925;  |
| Ξ    | Xi             | \&Xi;       | \&#926;  |
| Ο    | Omicron        | \&Omicron;  | \&#927;  |
| Π    | Pi             | \&Pi;       | \&#928;  |
| Ρ    | Rho            | \&Rho;      | \&#929;  |
| Σ    | Sigma          | \&Sigma;    | \&#931;  |
| Τ    | Tau            | \&Tau;      | \&#932;  |
| Υ    | Upsilon        | \&Upsilon;  | \&#933;  |
| Φ    | Phi            | \&Phi;      | \&#934;  |
| Χ    | Chi            | \&Chi;      | \&#935;  |
| Ψ    | Psi            | \&Psi;      | \&#936;  |
| Ω    | Omega          | \&Omega;    | \&#937;  |
| α    | alpha          | \&alpha;    | \&#945;  |
| β    | beta           | \&beta;     | \&#946;  |
| γ    | gamma          | \&gamma;    | \&#947;  |
| δ    | delta          | \&delta;    | \&#948;  |
| ε    | epsilon        | \&epsilon;  | \&#949;  |
| ζ    | zeta           | \&zeta;     | \&#950;  |
| η    | eta            | \&eta;      | \&#951;  |
| θ    | theta          | \&theta;    | \&#952;  |
| ι    | iota           | \&iota;     | \&#953;  |
| κ    | kappa          | \&kappa;    | \&#954;  |
| λ    | lambda         | \&lambda;   | \&#923;  |
| μ    | mu             | \&mu;       | \&#956;  |
| ν    | nu             | \&nu;       | \&#925;  |
| ξ    | xi             | \&xi;       | \&#958;  |
| ο    | omicron        | \&omicron;  | \&#959;  |
| π    | pi             | \&pi;       | \&#960;  |
| ρ    | rho            | \&rho;      | \&#961;  |
| ς    | sigmaf         | \&sigmaf;   | \&#962;  |
| σ    | sigma          | \&sigma;    | \&#963;  |
| τ    | tau            | \&tau;      | \&#964;  |
| υ    | upsilon        | \&upsilon;  | \&#965;  |
| φ    | phi            | \&phi;      | \&#966;  |
| χ    | chi            | \&chi;      | \&#967;  |
| ψ    | psi            | \&psi;      | \&#968;  |
| ω    | omega          | \&omega;    | \&#969;  |
| ϑ    | theta symbol   | \&thetasym; | \&#977;  |
| ϒ    | upsilon symbol | \&upsih;    | \&#978;  |
| ϖ    | pi symbol      | \&piv;      | \&#982;  |

#### 其他实体
| 结果 | 描述                              | 实体名称  | 实体编号 |
| ---- | --------------------------------- | --------- | -------- |
| Œ    | capital ligature OE               | \&OElig;  | \&#338;  |
| œ    | small ligature oe                 | \&oelig;  | \&#339;  |
| Š    | capital S with caron              | \&Scaron; | \&#352;  |
| š    | small S with caron                | \&scaron; | \&#353;  |
| Ÿ    | capital Y with diaeres            | \&Yuml;   | \&#376;  |
| ƒ    | f with hook                       | \&fnof;   | \&#402;  |
| ˆ    | modifier letter circumflex accent | \&circ;   | \&#710;  |
| ˜    | small tilde                       | \&tilde;  | \&#732;  |
|      | en space                          | \&ensp;   | \&#8194; |
|      | em space                          | \&emsp;   | \&#8195; |
|      | thin space                        | \&thinsp; | \&#8201; |
| ‌     | zero width non-joiner             | \&zwnj;   | \&#8204; |
| ‍     | zero width joiner                 | \&zwj;    | \&#8205; |
| ‎     | left-to-right mark                | \&lrm;    | \&#8206; |
| ‏     | right-to-left mark                | \&rlm;    | \&#8207; |
| –    | en dash                           | \&ndash;  | \&#8211; |
| —    | em dash                           | \&mdash;  | \&#8212; |
| ‘    | left single quotation mark        | \&lsquo;  | \&#8216; |
| ’    | right single quotation mark       | \&rsquo;  | \&#8217; |
| ‚    | single low-9 quotation mark       | \&sbquo;  | \&#8218; |
| “    | left double quotation mark        | \&ldquo;  | \&#8220; |
| ”    | right double quotation mark       | \&rdquo;  | \&#8221; |
| „    | double low-9 quotation mark       | \&bdquo;  | \&#8222; |
| †    | dagger                            | \&dagger; | \&#8224; |
| ‡    | double dagger                     | \&Dagger; | \&#8225; |
| •    | bullet                            | \&bull;   | \&#8226; |
| …    | horizontal ellipsis               | \&hellip; | \&#8230; |
| ‰    | per mille                         | \&permil; | \&#8240; |
| ′    | minutes                           | \&prime;  | \&#8242; |
| ″    | seconds                           | \&Prime;  | \&#8243; |
| ‹    | single left angle quotation       | \&lsaquo; | \&#8249; |
| ›    | single right angle quotation      | \&rsaquo; | \&#8250; |
| ‾    | overline                          | \&oline;  | \&#8254; |
| €    | euro                              | \&euro;   | \&#8364; |
| ™    | trademark                         | \&trade;  | \&#8482; |
| ←    | left arrow                        | \&larr;   | \&#8592; |
| ↑    | up arrow                          | \&uarr;   | \&#8593; |
| →    | right arrow                       | \&rarr;   | \&#8594; |
| ↓    | down arrow                        | \&darr;   | \&#8595; |
| ↔    | left right arrow                  | \&harr;   | \&#8596; |
| ↵    | carriage return arrow             | \&crarr;  | \&#8629; |
| ⌈    | left ceiling                      | \&lceil;  | \&#8968; |
| ⌉    | right ceiling                     | \&rceil;  | \&#8969; |
| ⌊    | left floor                        | \&lfloor; | \&#8970; |
| ⌋    | right floor                       | \&rfloor; | \&#8971; |
| ◊    | lozenge                           | \&loz;    | \&#9674; |
| ♠    | spade                             | \&spades; | \&#9824; |
| ♣    | club                              | \&clubs;  | \&#9827; |
| ♥    | heart                             | \&hearts; | \&#9829; |
| ♦    | diamond                           | \&diams;  | \&#9830; |

## ASCII码
参考网站: [HTML ASCII](http://www.w3chtml.com/html/ref/ascii.html)

**7 比特 可显示的 ASCII 代码:**
| 结果 | 描述                 | 实体编号 |
| ---- | -------------------- | -------- |
|      | space                | \&#32;   |
| !    | exclamation mark     | \&#33;   |
| "    | quotation mark       | \&#34;   |
| #    | number sign          | \&#35;   |
| $    | dollar sign          | \&#36;   |
| %    | percent sign         | \&#37;   |
| \&   | ampersand            | \&#38;   |
| '    | apostrophe           | \&#39;   |
| (    | left parenthesis     | \&#40;   |
| )    | right parenthesis    | \&#41;   |
| *    | asterisk             | \&#42;   |
| +    | plus sign            | \&#43;   |
| ,    | comma                | \&#44;   |
| -    | hyphen               | \&#45;   |
| .    | period               | \&#46;   |
| /    | slash                | \&#47;   |
| 0    | digit 0              | \&#48;   |
| 1    | digit 1              | \&#49;   |
| 2    | digit 2              | \&#50;   |
| 3    | digit 3              | \&#51;   |
| 4    | digit 4              | \&#52;   |
| 5    | digit 5              | \&#53;   |
| 6    | digit 6              | \&#54;   |
| 7    | digit 7              | \&#55;   |
| 8    | digit 8              | \&#56;   |
| 9    | digit 9              | \&#57;   |
| :    | colon                | \&#58;   |
| ;    | semicolon            | \&#59;   |
| <    | less-than            | \&#60;   |
| =    | equals-to            | \&#61;   |
| >    | greater-than         | \&#62;   |
| ?    | question mark        | \&#63;   |
| @    | at sign              | \&#64;   |
| A    | uppercase A          | \&#65;   |
| B    | uppercase B          | \&#66;   |
| C    | uppercase C          | \&#67;   |
| D    | uppercase D          | \&#68;   |
| E    | uppercase E          | \&#69;   |
| F    | uppercase F          | \&#70;   |
| G    | uppercase G          | \&#71;   |
| H    | uppercase H          | \&#72;   |
| I    | uppercase I          | \&#73;   |
| J    | uppercase J          | \&#74;   |
| K    | uppercase K          | \&#75;   |
| L    | uppercase L          | \&#76;   |
| M    | uppercase M          | \&#77;   |
| N    | uppercase N          | \&#78;   |
| O    | uppercase O          | \&#79;   |
| P    | uppercase P          | \&#80;   |
| Q    | uppercase Q          | \&#81;   |
| R    | uppercase R          | \&#82;   |
| S    | uppercase S          | \&#83;   |
| T    | uppercase T          | \&#84;   |
| U    | uppercase U          | \&#85;   |
| V    | uppercase V          | \&#86;   |
| W    | uppercase W          | \&#87;   |
| X    | uppercase X          | \&#88;   |
| Y    | uppercase Y          | \&#89;   |
| Z    | uppercase Z          | \&#90;   |
| [    | left square bracket  | \&#91;   |
| \    | backslash            | \&#92;   |
| ]    | right square bracket | \&#93;   |
| ^    | caret                | \&#94;   |
| _    | underscore           | \&#95;   |
| `    | grave accent         | \&#96;   |
| a    | lowercase a          | \&#97;   |
| b    | lowercase b          | \&#98;   |
| c    | lowercase c          | \&#99;   |
| d    | lowercase d          | \&#100;  |
| e    | lowercase e          | \&#101;  |
| f    | lowercase f          | \&#102;  |
| g    | lowercase g          | \&#103;  |
| h    | lowercase h          | \&#104;  |
| i    | lowercase i          | \&#105;  |
| j    | lowercase j          | \&#106;  |
| k    | lowercase k          | \&#107;  |
| l    | lowercase l          | \&#108;  |
| m    | lowercase m          | \&#109;  |
| n    | lowercase n          | \&#110;  |
| o    | lowercase o          | \&#111;  |
| p    | lowercase p          | \&#112;  |
| q    | lowercase q          | \&#113;  |
| r    | lowercase r          | \&#114;  |
| s    | lowercase s          | \&#115;  |
| t    | lowercase t          | \&#116;  |
| u    | lowercase u          | \&#117;  |
| v    | lowercase v          | \&#118;  |
| w    | lowercase w          | \&#119;  |
| x    | lowercase x          | \&#120;  |
| y    | lowercase y          | \&#121;  |
| z    | lowercase z          | \&#122;  |
| {    | left curly brace     | \&#123;  |
| \|   | vertical bar         | \&#124;  |
| }    | right curly brace    | \&#125;  |
| ~    | tilde                | \&#126;  |




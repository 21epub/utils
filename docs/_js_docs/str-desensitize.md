# 对数据进行脱敏处理

## 描述
<p>姓名脱敏：<br/>
  中文姓名：<br/>
    每4个汉字展示前1位，末3位屏蔽; <br/>
    少于4 个汉字的只展示第1位，其他屏蔽。（数字字母均视同汉字处理）<br/>
  英文姓名：<br/>
    如果中间是有空格的，屏蔽第一个空格后面的所有英文字母; <br/>
    如果中间没有空格，末3分之 2（四舍五入）部B分屏菘掉; <br/>
身份证脱敏： <br/>
  号码长度为 15位的：号码的第7位到12位和最后1位屏蔽，其他不屏;<br/>
  号码长度为 18位的：号码的第7位到14位和最后2位屏蔽，其他不屏; <br/>
手机号码： <br/>
  只展示前3位、末3位，中间均屏蔽 <br/>
  支持格式 带-或者空格 例如会将 178-7777-8888 或178 7777 8888統一输出为178*****888 <br/>
固定电话： <br/>
  区号不屏蔽；电话号码屏蔽末4位：分机号码屏蔽末2位 <br/>
  注意：仅支持2段或3段，如 0571-87006789-1234 <br/>
银行卡号 <br/>
  号码长度等于或者大于16位的：只展示前4位、末4位，中间均屏 <br/>
  纯教字字符串，支持带空格或-，会先将空格或-去除再屏蔽 <br/></p>


## 参数
 

  | 参数名 | 类型 |
| --- | --- |
value | <code>string</code> | 
type | <code>DesensitizeType</code> | 

## 返回 
(<code>string</code>)：<p>脱敏后的字符串</p>
## 示例

 ### ts类型 
```typescript
type DesensitizeType = 'name' | 'phone' | 'IDCard' | 'telephone' | 'bankCard';
desensitize(value:string, type?:DesensitizeType)
```
 ### demo 
```typescript
import { desensitize } from '@21epub/utils';
import type { DesensitizeType } from '@21epub/utils';

console.log(desensitize('')); // ''
console.log(desensitize('张3粒死王五')); // 张3**王五
console.log(desensitize('17775262736', 'phone')); // 177*****736
```


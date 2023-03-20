---
title: styled-string
nav:
  title: 文档
group:
  title: 数据转换
---

# 将styled对象转为css-in-js可以运行的字符串

```js
import { styledToString } from '@21epub/utils';


const styled = {
  width: '100px',
  label: {
    color: 'red',
  },
  '.className': {
    height: '100px',
    display: 'none',
    '& > div': {
      'background-color': 'red',
    },
  },
  '.className::after': {
    content: ':',
  },
};

const styledString = styledToString(styled)

styledString = `&{width:100px;label{color:red;}.className{height:100px;display:none;& > div{background-color:red;}}.className::after{content:':';}}`;

```

// 用于临时保存全局变量，确保所有id唯一
const idCounter = {};

/**
 * @name 生成全局唯一ID
 * @param {string} prefix=$21epub$ 指定id的前缀
 * @returns {string} 返回一个唯一ID
 * @example <caption>ts类型</caption>
getUniqueId(prefix?:string);
 * @example <caption>demo</caption>
import { getUniqueId } from '@21epub/utils';

console.log(getUniqueId()); //  1;
console.log(getUniqueId()); //  2;
console.log(getUniqueId()); //  3;
console.log(getUniqueId()); //  4;
console.log(getUniqueId()); //  5;
console.log(getUniqueId('test_')); //  test_1;
console.log(getUniqueId('test_')); //  test_2;
console.log(getUniqueId('test_')); //  test_3;
console.log(getUniqueId('test_')); //  test_4;
console.log(getUniqueId('test_')); //  test_5;
 */
const getUniqueId = (prefix: string = '$21epub$'): string => {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }
  // eslint-disable-next-line no-plusplus
  const id = ++idCounter[prefix];
  if (prefix === '$21epub$') {
    return `${id}`;
  }
  return `${prefix}${id}`;
};

export default getUniqueId;

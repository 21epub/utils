import { relativeToAbsolute } from '@21epub/utils';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

const RelativeToAbsolute: React.FC = () => {
  const [input, setInput] = useState<string>('/utils/epub360.ico');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(relativeToAbsolute(input));
  };

  return (
    <Space>
      <Space.Compact>
        <Input
          style={{ width: '240px' }}
          addonBefore='相对路径'
          defaultValue={input}
          onChange={onChange}
        />
      </Space.Compact>
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Space>
        <Input
          style={{ width: '400px' }}
          addonBefore='绝对路径'
          value={result}
        />
        <Button type='primary' href={result} target='_blank'>
          跳转
        </Button>
      </Space>
    </Space>
  );
};

export default RelativeToAbsolute;

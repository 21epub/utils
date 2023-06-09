import { stringToHtml } from '@21epub/utils';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

const HtmlToString: React.FC = () => {
  const [input, setInput] = useState<string>('<内容>');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(stringToHtml(input));
  };

  return (
    <Space>
      <Space.Compact>
        <Input
          style={{ width: '300px' }}
          addonBefore='string'
          defaultValue={input}
          onChange={onChange}
        />
      </Space.Compact>
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Space.Compact>
        <Input style={{ width: '300px' }} addonBefore='html' value={result} />
      </Space.Compact>
    </Space>
  );
};

export default HtmlToString;

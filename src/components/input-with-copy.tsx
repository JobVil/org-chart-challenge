import { Button } from '@chakra-ui/button';
import { useClipboard } from '@chakra-ui/hooks';
import { InputGroup, InputLeftAddon, Input, InputProps } from '@chakra-ui/input';
import { FC, useState } from 'react';

type InputWithCopyProps = {
  inputTitle: string;
  inputProps: InputProps;
  onChange?: (newValue: string) => void;
};

export const InputWithCopy: FC<InputWithCopyProps> = (props) => {
  const [inputValue, setInputValue] = useState(props.inputProps.defaultValue);
  const setInputValueWrapper = (newValue: string) => {
    setInputValue(newValue);
    props.onChange && props.onChange(newValue);
  };
  const { hasCopied, onCopy } = useClipboard(inputValue?.toString() || '');

  return (
    <InputGroup>
      <InputLeftAddon children={props.inputTitle} />
      <Input
        {...props.inputProps}
        value={inputValue}
        onChange={(e) => {
          setInputValueWrapper(e.target.value);
        }}
      />
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? 'Copied' : 'Copy'}
      </Button>
    </InputGroup>
  );
};

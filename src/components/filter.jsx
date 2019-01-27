import { Box, Button as ButtonBase, Flex, Text } from 'rebass';
import { useContext, useState } from 'react';
import styled from 'styled-components';

import { IndexContext } from 'src/constants/context';

const Button = styled(ButtonBase)`
  padding: 5px 17px 5px;
  &:focus {
    z-index: 1;
  }
`;

const ResetButton = styled(ButtonBase)`
  cursor: pointer;
  height: 20px;
  padding: 0;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 20px;
  z-index: 10;
`;

const Input = styled('input')`
  border: 1px solid #d9dce1;
  color: #1f1f1f;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  padding: 0 40px 0 20px;
  text-overflow: ellipsis;
  width: 100%;
  &:focus {
    z-index: 1;
  }
`;

const Filter = props => {
  const [text, setText] = useState('');
  const { found, filterItems } = useContext(IndexContext);

  const onChange = evt => {
    setText(evt.target.value);
  };

  const submit = () => {
    filterItems({ needle: text });
  };

  const reset = () => {
    setText('');
    filterItems({ needle: '' });
  };

  return (
    <Box {...props}>
      <Flex>
        <Flex width="100%" style={{ position: 'relative' }}>
          <Input
            placeholder="Введите название изображения"
            value={text}
            onChange={onChange}
            onKeyDown={e => (e.keyCode == 13 ? submit() : false)}
          />
          {text ? (
            <ResetButton bg="transparent" color="#cfcfcf" onClick={reset} p="0" type="button">
              &#10005;
            </ResetButton>
          ) : null}
        </Flex>
        <Button
          bg="#45b4ee"
          borderRadius="0 4px 4px 0"
          disabled={!text.length}
          onClick={submit}
          type="button"
        >
          Найти
        </Button>
      </Flex>
      {found !== false ? (
        <Text color="#1f1f1f" mb="-11px" mt="3px" px="5px" textAlign="right" width="auto">
          найдено:{' '}
          <small>
            <b>{found}</b>
          </small>
        </Text>
      ) : null}
    </Box>
  );
};

export default Filter;

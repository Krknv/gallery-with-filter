import { Flex, Image as ImageBase } from 'rebass';
import { useState, useContext } from 'react';
import styled from 'styled-components';

import { IndexContext } from 'src/constants/context';

const Image = styled(ImageBase)`
  object-fit: cover;
`;

const Input = styled('input')`
  background: transparent;
  border: none;
  color: #1f1f1f;
  font-size: 16px;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  &:focus {
    box-shadow: 0px 1px 0px #45b4ee;
    outline: none;
  }
`;

const GalleryItem = ({ index = 0, src = '', title = '' }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const context = useContext(IndexContext);
  const onError = () => {
    setImageSrc('static/images/placeholder.png');
  };
  const onChange = evt => {
    context.changeTitle({ index, src, title: evt.target.value });
  };
  return (
    <Flex flexDirection="column" mb="10px" px="10px" width={[1, 1 / 2, 1 / 4]}>
      <Image src={imageSrc} onError={onError} height={['400px', '300px', '200px']} />
      <Input defaultValue={title} placeholder="без названия" onChange={onChange} />
    </Flex>
  );
};

export default GalleryItem;

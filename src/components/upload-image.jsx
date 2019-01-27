import React, { useContext, useState } from 'react';
import { Button as ButtonBase, Flex } from 'rebass';
import styled from 'styled-components';

import { IndexContext } from 'src/constants/context';

const Button = styled(ButtonBase)`
  padding: 5px 17px 5px;
  height: 52px;
  &:focus {
    z-index: 1;
  }
`;

const HiddenInput = styled('input')`
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
`;

const inputRef = React.createRef();

const UploadImage = props => {
  const [files, setFiles] = useState(false);
  const { addItems } = useContext(IndexContext);

  const handleSelectedFiles = evt => {
    const rawFiles = Array.from(evt.target.files);
    const files = rawFiles.map((file, index) => {
      const id = Date.now();
      return {
        id: -id,
        src: URL.createObjectURL(file),
        title: `new-image-${id}`,
      };
    });
    files && setFiles(files);
  };

  const handleUpload = () => {
    if (!files) return;
    addItems(files);
    setFiles(false);
  };

  return (
    <Flex {...props}>
      <HiddenInput
        multiple
        name="files[]"
        onChange={handleSelectedFiles}
        ref={inputRef}
        type="file"
      />
      <Button
        as="button"
        bg="#b1b1b1"
        borderRadius="4px 0 0 4px"
        onClick={() => inputRef.current.click()}
        style={{ whiteSpace: 'nowrap' }}
        width="100%"
      >
        {files.length ? `Выбрано ${files.length}` : 'Выбрать файл'}
      </Button>
      <Button
        bg="#48ad60"
        borderRadius="0 4px 4px 0"
        disabled={!files.length}
        onClick={handleUpload}
        type="button"
        width="100%"
      >
        Загрузить
      </Button>
    </Flex>
  );
};

export default UploadImage;

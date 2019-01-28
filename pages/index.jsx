import Filter from 'src/components/filter';
import { Box, Flex } from 'rebass';
import { useState } from 'react';

import { generateItems } from 'src/helpers/generate-items';
import { IndexContext } from 'src/constants/context';
import { ITEMS_COUNT, ITEMS_SHIFT } from 'src/constants';
import Gallery from 'src/components/gallery';
import UploadImage from 'src/components/upload-image';

const Index = ({ initialItems }) => {
  const [filtered, setFiltered] = useState(undefined);
  const [found, setFound] = useState(false);
  const [items, setItems] = useState(initialItems);

  const filterItems = ({ needle }) => {
    const filtered = items.filter(({ title }) => title.includes(needle));
    setFiltered(needle.length ? filtered : false);
    setFound(needle.length ? filtered.length : false);
  };

  const changeTitle = item => {
    setItems([...items.slice(0, item.index), item, ...items.slice(item.index + 1)]);
  };

  const addItems = newItems => {
    setItems([...newItems, ...items]);
  };

  return (
    <IndexContext.Provider value={{ items, found, addItems, filterItems, changeTitle }}>
      <Box mx="auto" style={{ maxWidth: '1280px' }}>
        <Flex flexDirection={['column', null, 'row']}>
          <UploadImage mb={'15px'} />
          <Filter width={1} mb="15px" ml={[0, null, '20px']} />
        </Flex>
        <Gallery items={filtered || items} />
      </Box>
    </IndexContext.Provider>
  );
};

Index.getInitialProps = () => {
  const initialItems = generateItems(ITEMS_COUNT, ITEMS_SHIFT);
  return { initialItems };
};

export default Index;

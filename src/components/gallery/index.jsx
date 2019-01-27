import { Flex, Text } from 'rebass';
import Item from 'src/components/gallery/item';

const GalleryList = ({ items }) => {
  return (
    <Flex flexWrap="wrap" mx="-10px">
      {items.length ? (
        items.map(({ src, title }, index) => (
          <Item key={src} index={index} src={src} title={title} />
        ))
      ) : (
        <Text as="h4" textAlign="center" width="100%">
          нет изображений
        </Text>
      )}
    </Flex>
  );
};

export default GalleryList;

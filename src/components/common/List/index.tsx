import { Wrapper } from './List.styles';

interface ListProps<ItemType> {
  items: ItemType[];
  renderItem: (item: ItemType, index: number) => React.ReactNode;
}

function List<ItemType>({ items, renderItem }: ListProps<ItemType>) {
  return <Wrapper>{items.map(renderItem)}</Wrapper>;
}

export default List;

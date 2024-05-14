import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Item } from '../types';

type Props = {
  initialItems: Item[];
  children: ReactNode;
};

export const ItemListContext = createContext(
  {} as {
    itemList: Item[];
    setItemList: Dispatch<SetStateAction<Item[]>>;
  }
);

export const useItemListContext = () => {
  const context = useContext(ItemListContext);
  if (!context) {
    throw new Error(
      'useItemLListContext must be used within an ItemListProvider'
    );
  }
  return context;
};

export const ItemListProvider: FC<Props> = (props) => {
  const { initialItems, children } = props;
  const [itemList, setItemList] = useState<Item[]>(initialItems);

  return (
    <ItemListContext.Provider value={{ itemList, setItemList }}>
      {children}
    </ItemListContext.Provider>
  );
};

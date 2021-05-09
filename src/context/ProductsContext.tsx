import { createContext, ReactNode, useState } from 'react';

interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  about: string;
  imgURL: string;
  price: number;
  category: string;
}
interface ProductsProviderProps {
  children: ReactNode;
}

// productsDisplay: ProductData[];
interface CartInfoData {
  totalProducts: number;
  totalValue: number;
}
interface ProductsContextData {
  productsDisplay: ProductData[];
  LoadData: (data: ProductData[]) => void;
  cartInfo: CartInfoData;
  updateCart: (data: CartInfoData) => void;
  categoryDisplay: string;
  setProductsByCategory: (filter: string) => void;
  setProductsByInput: (filter: string) => void;
}

export const ProductsContext = createContext({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [productsList, setProductsList] = useState<ProductData[]>([]);
  const [productsDisplay, setProductsDisplay] = useState([]);
  const [categoryDisplay, setCategoryDisplay] = useState(
    'Sugestão do Vendedor',
  );
  const [cartInfo, setCartInfo] = useState<CartInfoData>({
    totalProducts: 0,
    totalValue: 0,
  });

  function updateCart({
    totalProducts: quantity,
    totalValue: value,
  }: CartInfoData) {
    const cartNow = cartInfo;
    setCartInfo({
      totalProducts: cartNow.totalProducts + quantity,
      totalValue: cartNow.totalValue + value,
    });
  }
  function LoadData(data: ProductData[]) {
    setProductsList(data);
    setProductsDisplay(data);
  }

  function setProductsByCategory(filter: string) {
    setCategoryDisplay(filter);
    if (filter !== 'Sugestao do Vendedor') {
      const filterByTag = productsList.filter(product => {
        return product.category === filter;
        // return product.category.includes(filter);
      });
      setProductsDisplay(filterByTag);
    } else {
      setProductsDisplay(productsList);
    }
  }
  // Filtrando Product Display filtra oq tem

  function setProductsByInput(filter: string) {
    setCategoryDisplay(`Procurando por ${filter}`);
    const filterByInput = productsList.filter(product =>
      product.title.toLowerCase().includes(filter.toLowerCase()),
    );
    setProductsDisplay(filterByInput);
  }
  return (
    <ProductsContext.Provider
      value={{
        productsDisplay,
        LoadData,
        cartInfo,
        updateCart,
        categoryDisplay,
        setProductsByCategory,
        setProductsByInput,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

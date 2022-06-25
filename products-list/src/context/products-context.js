import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProdContextComponent = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7;.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      description:
        "Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm. Stand Collar Liner jacket, keeps you warm in cold weather.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Mens Cotton Jacket",
      description:
        "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((currentProdList) => {
      const prodIndex = currentProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProdContextComponent;

// this is approach 1 to replace Redux: using the Context API
// disadvantages: Context API is great for low frequency updates (like locale/theme etc.), but isn't good for high frequency updates
// Context has no way of figuring out which component using the context really is concerned with the changes, and which component isn't
// This means every component which uses context will rebuild and render when there are any changes to the context, irrespective of whether it is directly affected or not

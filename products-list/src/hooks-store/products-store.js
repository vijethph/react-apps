import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initStore(actions, {
    products: [
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
    ],
  });
};

export default configureStore;

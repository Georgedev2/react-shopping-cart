import { IS_FETCHING, IS_AVAILABLE, IS_NOT_AVAILABLE } from "../types";

const isFetching = () => {
  return {
    type: IS_FETCHING,
  };
};
const isAvailable = (shopItems) => {
  return {
    type: IS_AVAILABLE,
    payload: shopItems,
  };
};
const fatchDataFalure = (error) => {
  return {
    type: IS_NOT_AVAILABLE,
    payload: error,
  };
};

export const shopActions = () => {
  return (dispatch) => {
    dispatch(isFetching());

    fetch("/data.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((info) => {
        let shopItems = info.shopItems;
        dispatch(isAvailable(shopItems));
      })
      .catch((error) => {
        dispatch(fatchDataFalure(error.massage));
      });
  };
};

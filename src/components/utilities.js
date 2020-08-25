export let totalQty = () => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"))|| [];

  let totalQty = cartItems.reduce((acc, el) => {
    return acc + el.qty;
  }, 0);
  return totalQty; 
};

export let info = [
  { id: 1, title: "contact us", link: "/contact" },
  { id: 2, title: "Shipping cost & delevery", link: "/Shipping cost" },
  { id: 3, title: "SiteMap", link: "/SiteMap" },
  { id: 4, title: "payment", link: "/payment" },
  { id: 5, title: "cancellation", link: "/cancellation" },
  { id: 6, title: "terms and condition", link: "/terms&condition" },
];

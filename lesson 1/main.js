const goods = [
  { title: "Shirt", price: 150, url: "./images/shirt.jpg" },
  { title: "Socks", price: 50, url: "./images/socks.jpg" },
  { title: "Jacket", price: 350, url: "./images/jacket.jpg" },
  { title: "Shoes", price: 250, url: "./images/shoes.png" },
];

/*
const renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><h3>${title}</h3>
    <p>${price}</p></div>`;
};
const renderGoodList = (list) => {
  let goodList = list.map((item) => renderGoodsItem(item.title, item.price));
  document.querySelector(".goods-list").innerHTML = goodList;
};
renderGoodList(goods);
*/
goods.forEach((item) => {
  const list = document.querySelector(".goods-list");
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="goods-item">
    <img src="${item.url}" alt="img">
    <h3>${item.title}</h3>
    <p>${item.price} $</p></div>`
  );
});

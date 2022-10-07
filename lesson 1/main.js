/*
const goods = [
  { title: "Shirt", price: 150, url: "./images/shirt.jpg" },
  { title: "Socks", price: 50, url: "./images/socks.jpg" },
  { title: "Jacket", price: 350, url: "./images/jacket.jpg" },
  { title: "Shoes", price: 250, url: "./images/shoes.png" },
];


const renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};
const renderGoodList = (list) => {
  let goodList = list.map((item) => renderGoodsItem(item.title, item.price));
  document.querySelector(".goods-list").innerHTML = goodList;
};
renderGoodList(goods);

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
*/
class GoodsItem {
  constructor(title, price, url) {
    this.title = title;
    this.price = price;
    this.url = url;
  }
  render() {
    return `<div class="goods-item"><img src="${this.url}" alt="img"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150, url: "./images/shirt.jpg" },
      { title: "Socks", price: 50, url: "./images/socks.jpg" },
      { title: "Jacket", price: 350, url: "./images/jacket.jpg" },
      { title: "Shoes", price: 250, url: "./images/shoes.png" },
    ];
  }
  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price, good.url);
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

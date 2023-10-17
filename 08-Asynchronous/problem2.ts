const clothes = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

interface ObjItem {
  item: string;
  price: number;
  time: number;
}

function buyApparel(money: number, objItem: ObjItem, callback: (sisa: number) => void) {
  // your code here
  let sisa: number;
  money -= objItem.price;
  setTimeout(() => {
    console.log("saya membawa uang sebesar", money + objItem.price);
    console.log("ingin membeli", objItem.item, "dengan harga", objItem.price);
    console.log("dan waktu yang dibutuhkan adalah", objItem.time, "s");
    callback(money);
}, objItem.time);
}

buyApparel(150000, clothes, (sisa) => {
  buyApparel(sisa, pants, (sisa) =>{
    buyApparel(sisa, hat, (sisa)=>{
      buyApparel(sisa, shoes,(sisa)=>{
        console.log("sisa kembalian", sisa)
  })
})
  })
})

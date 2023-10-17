function lottery(num: number): Promise<string> {
  // your code here
  const Winning = Math.ceil(Math.random() * 10);
  const User = Math.ceil(Math.random() * 10);
  
  
  

  console.log("undian lotre dimulai...");
  console.log("sedang mengundi nomor anda...");

  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  setTimeout(() => {
    if (User === Winning) {
      return Promise.resolve("selamat anda mendapatkan hadiah utama berupa mobil");
    } else {
      return Promise.resolve("maaf anda kurang beruntung");
    }
  }, 10000);
}
const User = Math.ceil(Math.random() * 10);
const promise = lottery(User);

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir…"));

function jajanBoba(uang: number, callback: (uang: number) => void) {
  setTimeout(() => {
  console.log("kamu jajan boba dengan harga Rp.5000");
  }, 5000);
  if (uang > 5000) {
      uang = uang - 5000;
      setTimeout(() => {
          console.log("sisa uang kamu Rp." + uang);
      }, 5000);
      callback(uang);
  } else {
      setTimeout(() => {
          console.log("maaf uang kamu belum cukup untuk membeli boba");
      }, 2000);
      // setTimeout(() => {
      //     console.log("sisa uang kamu Rp." + uang);
      // }, 2000);
  }
}

function jajanSeblak(uang: number) {
  setTimeout(() => {
      console.log("kamu jajan seblak dengan harga Rp.8000");
  },9000)

  if (uang > 8000) {
      uang = uang - 8000;
      setTimeout(() => {
          console.log("sisa uang kamu Rp." + uang);
      }, 9000);
  } else {
      setTimeout(() => {
          console.log("maaf uang kamu belum cukup untuk membeli seblak");
      }, 9000);
      // setTimeout(() => {
      //     console.log("sisa uang kamu Rp." + uang);
      // }, 2000);
  }
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);


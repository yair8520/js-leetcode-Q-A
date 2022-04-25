let myPromise = new Promise((myResolve, myReject) => {
    let x = 0;
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
  
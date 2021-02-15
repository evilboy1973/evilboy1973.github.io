if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(registration =>{
      console.log("SW Registered!");
      console.log("registration");
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}
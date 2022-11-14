setInterval(function () {
  fetch("https://smartlightcontrol.herokuapp.com/api")
    .then((hasil) => hasil.json())
    .then((res) => {
      console.log(res);
      document.getElementById("JAM").innerHTML =
        res.JAM.toString() +
        ":" +
        res.MENIT.toString() +
        ":" +
        res.DETIK.toString();
      document.getElementById("TANGGAL").innerHTML =
        res.TANGGAL.toString() +
        "/" +
        res.BULAN.toString() +
        "/" +
        res.TAHUN.toString();
      document.getElementById("lampu").innerHTML = res.lampu;
    });
}, 1000);



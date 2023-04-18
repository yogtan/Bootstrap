var pil = [];
var button = "";
var jumPilihan;
var input = "";

function TampilanPilihan() {
  jumPilihan = document.getElementById("jumPilihan").value;
  var pilihan = "";
  button = '<button onclick="Radiobtn()">Submit</button>';

  for (var i = 1; i <= jumPilihan; i++) {
    pilihan += "<p> Pilihan " + i + ': <input type="text" id="input' + i + '"> </p>';
  }
  pilihan += button;
  document.getElementById("pilihan").innerHTML = pilihan;
}
function call2Func() {
  Radionbtn();
  DropDown();
}

function Radiobtn() {
  jumPilihan = document.getElementById("jumPilihan").value;
  var kataPil = "";
  button = '<button onclick="Output()">Submit</button>';

  for (var i = 1; i <= jumPilihan; i++) {
    pil[i - 1] = document.getElementById("input" + i).value;
    input += pil[i - 1] + ", ";
    kataPil += '<p><input type="checkbox" name="pilihan" value="' + pil[i - 1] + '"> ' + pil[i - 1] + "</p>";
  }
  kataPil += button;
  document.getElementById("btnRadio").innerHTML = kataPil;
}

function Output() {
  var depan = document.getElementById("namadepan").value;
  var belakang = document.getElementById("namabelakang").value;
  var email = document.getElementById("email").value;
  var radio = document.getElementsByName("pilihan");
  let pi = [];
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      var teksPilihan = radio[i].value;
      pi += teksPilihan + " ";
    }
  }
  var Output = "Nama      : " + depan + " " + belakang + "<br>" + "Email      : " + email + "<br>" + "Jumlah Pilihan: " + jumPilihan + "<br>" + "Inputan      : " + input + "<br>" + "Pilihan     : " + pi;

  var modalTitle = document.querySelector(".modal-title");
  var modalBody = document.querySelector(".modal-body");

  modalTitle.textContent = "Hasil Output";

  modalBody.innerHTML = Output;

  var popUp = new bootstrap.Modal(document.getElementById("pop"), {});
  popUp.show();
  document.getElementById("namadepan").value = "";
  document.getElementById("namabelakang").value = "";
  document.getElementById("email").value = "";
  document.getElementsByName("pilihan").value = "";
  document.getElementById("jumPilihan").value = "";
}
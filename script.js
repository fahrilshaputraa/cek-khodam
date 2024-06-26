var khodamList = []
document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            khodamList = data;
        })
        .catch(error => console.error(error));
});  
const resultList = document.getElementById("result");
const namaInput = document.getElementById("namaInput");

function submitNama() {
      const nama = namaInput.value[0].toUpperCase() + namaInput.value.slice(1);
      const punyaKhodam = Math.random() < 0.5;
  
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
  
      if (punyaKhodam) {
          const khodamIndex = Math.floor(Math.random() * khodamList.length);
          const khodam = khodamList[khodamIndex];
          listItem.innerHTML = `<b>${nama}</b> Punya ${khodam.nama}. <br> <p class="text-muted">${khodam.deskripsi}</p>`;
      } else {
          listItem.textContent = `${nama} tidak punya khodam.`;
      }
  
      resultList.prepend(listItem);
      namaInput.value = ""; 
  }

function handleKeyPress(event) {
    if(namaInput.value === "") {    
        return;
    }else if (event.key === "Enter") {
        submitNama();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var socket = io("https://livetiktok.dev-sti-group.biz.id");
    setTimeout(function(){
        socket.on('new_comment', function(data) {
            document.getElementById('namaInput').value = data.comment;
            setTimeout(function(){
                submitNama();
            }, 800)
        });
    }, 1500);
});

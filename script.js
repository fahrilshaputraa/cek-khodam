const khodamList = [
    ["Khodam Kucing", "Melayani dalam mengusir tikus dan menjaga rumah dari roh jahat dengan kehadirannya yang menenangkan."],
    ["Khodam Anjing", "Menjaga rumah dengan setia dan memberikan perlindungan dari bahaya."],
    ["Khodam Burung", "Mengirim pesan dengan cepat dan memberikan kebebasan berpikir."],
    ["Khodam Kupu-kupu", "Mendatangkan keberuntungan dan kebahagiaan dengan keindahan dan kelembutannya."],
    ["Khodam Harimau", "Memberi keberanian dan kekuatan dalam menghadapi tantangan hidup."],
    ["Khodam Gajah", "Memberi kekuatan fisik dan mental serta kebijaksanaan dalam mengambil keputusan."],
    ["Khodam Kuda", "Memberi kecepatan dan ketangkasan dalam bertindak serta semangat yang tak kenal lelah."],
    ["Khodam Sapi", "Memberi ketenangan dan ketabahan dalam menghadapi kesulitan."],
    ["Khodam Domba", "Memberi kedamaian dan kelembutan hati dalam berinteraksi dengan orang lain."],
    ["Khodam Ikan", "Memberi ketenangan pikiran dan ketajaman intuisi dalam melihat peluang."],
    ["Khodam Ayam", "Membangunkan di pagi hari dan memberikan energi untuk memulai hari dengan semangat."],
    ["Khodam Kelinci", "Mendatangkan keberuntungan dan kebahagiaan dengan sifatnya yang ceria dan penuh semangat."],
    ["Khodam Kambing", "Memberi keberanian dan kemampuan untuk menghadapi tantangan dengan kepala dingin."],
    ["Khodam Singa", "Memberi kekuatan dan kepemimpinan dalam mengatasi rintangan."],
    ["Khodam Elang", "Memberi pandangan jauh ke depan dan ketajaman dalam mengambil keputusan."],
    ["Khodam Ular", "Memberi kebijaksanaan dan kemampuan untuk menghadapi situasi sulit dengan tenang."],
    ["Khodam Buaya", "Menjaga harta benda dan memberi perlindungan dari bahaya yang tidak terlihat."],
    ["Khodam Bebek", "Memberi kesabaran dan kemampuan untuk menyesuaikan diri dengan perubahan."],
    ["Khodam Angsa", "Mendatangkan cinta dan keharmonisan dalam hubungan."],
    ["Khodam Kura-kura", "Memberi umur panjang dan kebijaksanaan dalam menjalani hidup dengan sabar."],
    ["Khodam Lumba-lumba", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Kijang", "Memberi kelincahan dan kecepatan dalam bertindak serta menghadapi situasi dengan tangkas."],
    ["Khodam Tupai", "Mendatangkan rejeki dan ketekunan dalam bekerja keras untuk masa depan."],
    ["Khodam Serigala", "Menjaga keluarga dan memberikan kesetiaan serta perlindungan."],
    ["Khodam Panda", "Memberi kedamaian dan ketenangan dalam menghadapi stress dan tekanan hidup."],
    ["Khodam Macan", "Memberi kekuatan dan keberanian dalam menghadapi situasi berbahaya."],
    ["Khodam Merak", "Mendatangkan kekayaan dan kemakmuran dengan penampilannya yang mempesona."],
    ["Khodam Jerapah", "Memberi pandangan luas dan kemampuan untuk melihat jauh ke depan."],
    ["Khodam Koala", "Memberi ketenangan dan ketenangan pikiran dalam menghadapi situasi sulit."],
    ["Khodam Burung Hantu", "Memberi kebijaksanaan dan kemampuan untuk melihat yang tidak terlihat oleh orang lain."],
    ["Khodam Kelelawar", "Menjaga dari bahaya yang datang di malam hari dan memberikan perlindungan."],
    ["Khodam Unta", "Memberi ketahanan dan kemampuan untuk bertahan dalam kondisi yang sulit."],
    ["Khodam Kadal", "Memberi adaptabilitas dan kemampuan untuk beradaptasi dengan lingkungan yang berubah."],
    ["Khodam Kucing Hutan", "Memberi ketajaman dan kemampuan untuk bergerak dengan hati-hati."],
    ["Khodam Rakun", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Zebra", "Memberi keberanian dan kemampuan untuk tetap teguh dalam menghadapi tekanan."],
    ["Khodam Serigala Laut", "Menjaga di laut dan memberikan perlindungan dalam perjalanan laut."],
    ["Khodam Anjing Laut", "Memberi kecepatan dan ketangkasan dalam air serta kemampuan untuk bertahan hidup."],
    ["Khodam Paus", "Memberi ketenangan dan kekuatan dalam menghadapi situasi emosional yang sulit."],
    ["Khodam Hiu", "Menjaga harta benda dan memberi keberanian dalam menghadapi bahaya."],
    ["Khodam Penyu", "Memberi umur panjang dan ketenangan dalam menjalani hidup dengan sabar."],
    ["Khodam Bintang Laut", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi sulit."],
    ["Khodam Teripang", "Memberi kesehatan dan kemampuan untuk pulih dari penyakit."],
    ["Khodam Koral", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Kerang", "Mendatangkan kekayaan dan kemakmuran dengan kemampuan untuk menemukan yang berharga."],
    ["Khodam Gurita", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Udang", "Mendatangkan rejeki dan kemampuan untuk bekerja keras demi masa depan."],
    ["Khodam Kepiting", "Memberi perlindungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Laba-laba", "Memberi kesabaran dan kemampuan untuk menunggu waktu yang tepat untuk bertindak."],
    ["Khodam Semut", "Memberi kerja keras dan ketekunan dalam mencapai tujuan."],
    ["Khodam Belalang", "Memberi kelincahan dan kecepatan dalam bertindak serta menghadapi situasi dengan tangkas."],
    ["Khodam Capung", "Memberi kebebasan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Lebah", "Memberi keberhasilan dan kemampuan untuk bekerja sama dengan orang lain."],
    ["Khodam Tawon", "Memberi kekuatan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Kupu-kupu Malam", "Mendatangkan cinta dan keharmonisan dalam hubungan."],
    ["Khodam Nyamuk", "Memberi ketekunan dan kemampuan untuk menghadapi situasi sulit dengan gigih."],
    ["Khodam Kumbang", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Cacing", "Memberi ketahanan dan kemampuan untuk bertahan dalam kondisi yang sulit."],
    ["Khodam Kecoak", "Memberi adaptabilitas dan kemampuan untuk beradaptasi dengan lingkungan yang berubah."],
    ["Khodam Lalat", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Tikus", "Mendatangkan rejeki dan ketekunan dalam bekerja keras untuk masa depan."],
    ["Khodam Kura-kura Air", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Iguana", "Memberi adaptabilitas dan kemampuan untuk beradaptasi dengan lingkungan yang berubah."],
    ["Khodam Komodo", "Memberi kekuatan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Bunglon", "Memberi adaptabilitas dan kemampuan untuk beradaptasi dengan lingkungan yang berubah."],
    ["Khodam Kalajengking", "Memberi perlindungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Tarantula", "Memberi keberanian dan kemampuan untuk menghadapi situasi berbahaya."],
    ["Khodam Katak", "Memberi kelincahan dan kemampuan untuk bertindak dengan cepat dalam situasi yang mendesak."],
    ["Khodam Kodok", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Buaya Air", "Menjaga di laut dan memberikan perlindungan dalam perjalanan laut."],
    ["Khodam Ular Sanca", "Memberi kekuatan dan kemampuan untuk menghadapi situasi yang sulit."],
    ["Khodam Anaconda", "Memberi kekuatan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Piton", "Memberi ketenangan dan kemampuan untuk menghadapi situasi yang sulit dengan tenang."],
    ["Khodam Ular Kobra", "Memberi kebijaksanaan dan kemampuan untuk menghadapi situasi sulit dengan tenang."],
    ["Khodam Burung Unta", "Memberi kecepatan dan ketangkasan dalam bertindak serta semangat yang tak kenal lelah."],
    ["Khodam Kakaktua", "Memberi kecerdasan dan kemampuan untuk berkomunikasi dengan baik."],
    ["Khodam Burung Merpati", "Mendatangkan cinta dan keharmonisan dalam hubungan."],
    ["Khodam Burung Kenari", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Burung Jalak", "Memberi keberuntungan dan kemampuan untuk bekerja sama dengan orang lain."],
    ["Khodam Burung Pleci", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Cendet", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Cucak Rowo", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Burung Kacer", "Memberi keberuntungan dan kemampuan untuk bekerja sama dengan orang lain."],
    ["Khodam Burung Murai", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Burung Tledekan", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Trucukan", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Walet", "Memberi kekayaan dan kemampuan untuk menemukan yang berharga."],
    ["Khodam Burung Sriti", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Burung Gelatik", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Jalak Bali", "Memberi keberuntungan dan kemampuan untuk bekerja sama dengan orang lain."],
    ["Khodam Burung Cucak Ijo", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Burung Gereja", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Anis Merah", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Burung Ciblek", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Hwamei", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Pekin Robin", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Fantail", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Pigeon", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Bower", "Memberi kebahagiaan dan kemampuan untuk menikmati hidup dengan ceria."],
    ["Khodam Burung Woodcock", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Caracara", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Quetzal", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Grosbeak", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Skimmer", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Myna", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Redstart", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Stork", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Nighthawk", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Rail", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Wren", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Roadrunner", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Tern", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Partridge", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Wagtail", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Woodpecker", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Hawk", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Jay", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Weaver", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Snipe", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Robin", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Rook", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Falcon", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Wryneck", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Merganser", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Woodcock", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Coot", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Goose", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Quail", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Nuthatch", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Pelican", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Ostrich", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Thrush", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Lark", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Starling", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Puffin", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Hornbill", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Myna", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Peacock", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Grebe", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Raven", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Wren", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Hummingbird", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Plover", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Oystercatcher", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Sandpiper", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Dipper", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Cuckoo", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Murrelet", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Shearwater", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Gull", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Heron", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Parakeet", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Pelican", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Albatross", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Flycatcher", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Swallow", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Finch", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Lark", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Canary", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Thrush", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Nightjar", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Sparrow", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Hawk", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Jay", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Weaver", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Snipe", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Robin", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Rook", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Falcon", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Wryneck", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Merganser", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Woodcock", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Coot", "Memberi kecerdasan dan kemampuan untuk beradaptasi dengan lingkungan baru."],
    ["Khodam Burung Goose", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Quail", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Nuthatch", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Pelican", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Ostrich", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."],
    ["Khodam Burung Thrush", "Memberi keberuntungan dan kemampuan untuk bertahan dalam situasi yang sulit."],
    ["Khodam Burung Lark", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Starling", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Puffin", "Memberi ketenangan dan kemampuan untuk menenangkan pikiran yang gelisah."],
    ["Khodam Burung Hornbill", "Memberi kecerdasan dan kemampuan untuk memecahkan masalah dengan cepat."]
  ];
  
const resultList = document.getElementById("result");

function submitNama() {
      const namaInput = document.getElementById("namaInput");
      const nama = namaInput.value;
      const punyaKhodam = Math.random() < 0.4;
  
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
  
      if (punyaKhodam) {
          const khodamIndex = Math.floor(Math.random() * khodamList.length);
          const [namaKhodam, keteranganKhodam] = khodamList[khodamIndex];
          listItem.innerHTML = `${nama} punya khodam ${namaKhodam}. <br> <small class="text-muted">${keteranganKhodam}</small>`;
      } else {
          listItem.textContent = `${nama} tidak punya khodam.`;
      }
  
      resultList.appendChild(listItem);
      namaInput.value = ""; 
  }

function handleKeyPress(event) {
    if (event.key === "Enter") {
        submitNama();
    }
}
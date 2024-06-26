const khodamList = [
    ["Khodam Selempak", "Si jahil yang suka sembunyi di balik pintu dan bikin orang kaget."],
    ["Khodam BH", "Penjaga fashion yang selalu memastikan BH Anda tidak nyasar."],
    ["Khodam Cangcut", "Tukang jahit andal yang bisa memperbaiki cangcut bolong dalam sekejap."],
    ["Khodam Kunti", "Penyanyi dangdut yang suaranya bikin bulu kuduk merinding (tapi lucunya bikin ketawa)."],
    ["Khodam Mokondo", "Si jomblo ngenes yang selalu punya cerita cinta yang absurd."],
    ["Khodam Gemini", "Si kembar identik yang hobinya ngerjain orang dengan trik sulap receh."],
    ["Khodam Rukiyah", "Pakar pengusir setan yang gayanya kocak abis."],
    ["Khodam Baterai", "Pemberi energi yang selalu siap sedia saat Anda kehabisan tenaga (tapi jangan harap dia bisa ngecas HP ya)."],
    ["Khodam Kera", "Si lincah yang suka iseng ngambilin barang-barang kecil."],
    ["Khodam Sapi", "Si pemalas yang hobinya cuma makan dan tidur."],
    ["Khodam Kunci", "Si pelupa yang selalu nyasar dan bikin Anda ikut-ikutan nyasar."],
    ["Khodam Tutup Botol", "Kolektor tutup botol yang punya koleksi dari seluruh dunia."],
    ["Khodam Lemari", "Penjaga pakaian yang selalu rapi dan wangi."],
    ["Khodam Baju Bolong", "Si modis yang percaya bahwa baju bolong itu tren terbaru."],
    ["Khodam Sunder Bolong", "Tukang tambal sunder keliling yang punya plester ajaib."],
    ["Khodam Suster Ngesot", "Perawat yang suka ngesot di lorong rumah sakit sambil nyanyi lagu India."],
    ["Khodam Tuyul", "Pencuri receh yang suka meninggalkan permen sebagai tanda terima kasih."],
    ["Khodam Pikun", "Si pelupa yang selalu lupa nama Anda (tapi dia ingat nama mantan Anda)."],
    ["Khodam Merbabu", "Pendaki gunung yang selalu tersesat tapi selalu bawa bekal yang enak."],
    ["Khodam Kucing", "Si manja yang suka minta dielus-elus (tapi awas dicakar kalau lagi bad mood)."],
    ["Khodam Piring", "Pencuci piring yang rajin dan tidak pernah mengeluh (kecuali kalau disuruh nyuci panci gosong)."],
    ["Khodam Anjing", "Penjaga rumah yang setia dan selalu siap menggonggong pada orang asing (tapi jangan kaget kalau dia lebih galak sama tukang pos)."],
    ["Khodam Kursi", "Tempat duduk yang nyaman dan selalu siap menopang tubuh Anda (tapi jangan coba-coba tiduran di atasnya ya)."],
    ["Khodam Merpati", "Pengantar pesan yang handal dan tidak pernah salah alamat (kecuali kalau lagi mabuk cinta)."],
    ["Khodam Gajah", "Si besar yang baik hati dan suka membantu orang (tapi jangan sampai keinjek ya)."],
    ["Khodam Meja", "Tempat kerja yang rapi dan selalu bersih (kecuali kalau Anda punya kebiasaan makan di atas meja)."],
    ["Khodam Payung", "Pelindung dari hujan dan panas yang selalu setia menemani Anda (tapi jangan harap dia bisa terbang ya)."],
    ["Khodam Kolor Ijo", "Si superhero kampung yang kostumnya terbuat dari kolor bekas."],
    ["Khodam Sendok", "Si tukang makan yang selalu lapar dan tidak pernah kenyang."],
    ["Khodam Garpu", "Pasangan serasi Khodam Sendok yang selalu siap menusuk makanan."],
    ["Khodam Pisau", "Si tajam yang suka memotong-motong makanan (tapi hati-hati jangan sampai kena jari)."],
    ["Khodam Gelas", "Penampung minuman yang selalu siap sedia saat Anda haus."],
    ["Khodam Botol", "Penyimpan air minum yang praktis dan mudah dibawa ke mana-mana."],
    ["Khodam Panci", "Tempat masak yang serbaguna dan bisa digunakan untuk berbagai jenis masakan."],
    ["Khodam Wajan", "Alat penggorengan yang andal dan bisa menghasilkan gorengan yang renyah."],
    ["Khodam Spatula", "Si pembalik makanan yang cekatan dan tidak pernah membuat makanan gosong."],
    ["Khodam Centong Nasi", "Si pengambil nasi yang selalu adil dan tidak pernah pilih kasih."],
    ["Khodam Sapu", "Si pembersih lantai yang rajin dan tidak pernah mengeluh (kecuali kalau disuruh nyapu halaman)."],
    ["Khodam Pel", "Si pengelap lantai yang selalu basah dan licin (hati-hati jangan sampai terpeleset)."],
    ["Khodam Ember", "Penampung air yang besar dan kuat (tapi jangan coba-coba angkat kalau lagi penuh)."],
    ["Khodam Gayung", "Si penyiram tanaman yang selalu memastikan tanaman Anda tidak kehausan."],
    ["Khodam Sikat Gigi", "Si pembersih gigi yang rajin dan selalu mengingatkan Anda untuk sikat gigi sebelum tidur."],
    ["Khodam Pasta Gigi", "Si pemberi rasa segar pada mulut Anda setelah sikat gigi."],
    ["Khodam Sabun", "Si pembersih badan yang selalu wangi dan menyegarkan."],
    ["Khodam Shampo", "Si pembersih rambut yang selalu lembut dan harum."],
    ["Khodam Kondisioner", "Si pelembut rambut yang selalu membuat rambut Anda mudah diatur."],
    ["Khodam Handuk", "Si pengering badan yang selalu lembut dan hangat."],
    ["Khodam Sisir", "Si perapi rambut yang selalu memastikan rambut Anda tidak kusut."],
    ["Khodam Cermin", "Si pemantul wajah yang selalu jujur dan tidak pernah berbohong (kecuali kalau Anda lagi jerawatan)."],
    ["Khodam Jam Dinding", "Si penunjuk waktu yang selalu tepat dan tidak pernah telat (kecuali kalau baterainya habis)."],
    ["Khodam Kalender", "Si penunjuk tanggal yang selalu akurat dan tidak pernah salah (kecuali kalau Anda lupa merobek halamannya)."],
    ["Khodam Buku", "Si penyimpan ilmu yang selalu siap memberikan pengetahuan baru."],
    ["Khodam Pensil", "Si penulis yang selalu siap mencatat ide-ide brilian Anda."],
    ["Khodam Pulpen", "Si penulis yang lebih modern dan tidak perlu diraut."],
    ["Khodam Penghapus", "Si penghapus kesalahan yang selalu siap memperbaiki tulisan Anda."],
    ["Khodam Penggaris", "Si pengukur jarak yang selalu akurat dan tidak pernah meleset."],
    ["Khodam Tas", "Si penyimpan barang yang selalu siap menemani Anda ke mana saja."],
    ["Khodam Sepatu", "Si pelindung kaki yang selalu nyaman dan stylish."],
    ["Khodam Kaos Kaki", "Si penghangat kaki yang selalu lembut dan tidak membuat kaki bau."],
    ["Khodam Topi", "Si pelindung kepala dari panas dan hujan yang selalu keren."],
    ["Khodam Sarung Tangan", "Si pelindung tangan dari dingin dan kotoran yang selalu praktis."],
    ["Khodam Kacamata", "Si penjernih pandangan yang selalu membantu Anda melihat dengan jelas."],
    ["Khodam Dompet", "Si penyimpan uang yang selalu aman dan tidak mudah hilang."],
    ["Khodam HP", "Si penghubung dunia yang selalu siap sedia saat Anda ingin berkomunikasi."],
    ["Khodam Laptop", "Si pekerja keras yang selalu siap membantu Anda menyelesaikan tugas."],
    ["Khodam TV", "Si penghibur yang selalu siap menyajikan acara-acara menarik."],
    ["Khodam Radio", "Si penyaji musik dan informasi yang selalu menemani Anda di mana saja."],
    ["Khodam Kipas Angin", "Si penyejuk udara yang selalu siap mendinginkan Anda saat kepanasan."],
    ["Khodam AC", "Si penyejuk udara yang lebih canggih dan bisa membuat Anda betah di dalam ruangan."],
    ["Khodam Kulkas", "Si penyimpan makanan dan minuman yang selalu dingin dan segar."],
    ["Khodam Mesin Cuci", "Si pencuci pakaian yang selalu bersih dan wangi."],
    ["Khodam Setrika", "Si perapi pakaian yang selalu licin dan tidak kusut."],
    ["Khodam Vacuum Cleaner", "Si pembersih debu yang selalu bersih dan tidak berisik."],
    ["Khodam Lampu", "Si penerang ruangan yang selalu terang dan tidak membuat mata silau."],
    ["Khodam Tempat Tidur", "Si tempat istirahat yang selalu nyaman dan empuk."],
    ["Khodam Bantal", "Si penopang kepala yang selalu lembut dan empuk."],
    ["Khodam Selimut", "Si penghangat tubuh yang selalu lembut dan hangat."],
    ["Khodam Mimpi Indah", "Si pengantar mimpi indah yang selalu membuat Anda tidur nyenyak."],
    ["Khodam Mimpi Buruk", "Si pengganggu tidur yang selalu membuat Anda terbangun dengan keringat dingin."],
    ["Khodam Nasi Goreng Gosong", "Si koki gagal yang selalu bikin nasi goreng gosong tapi tetap enak (katanya)."],
    ["Khodam Mie Instan Basi", "Si pelupa yang suka menyimpan mie instan sampai kadaluarsa tapi tetap memakannya."],
    ["Khodam Knalpot Bising", "Si berisik yang suka membangunkan tetangga dengan suara knalpot motornya."],
    ["Khodam Ketombe Nakal", "Si putih-putih yang suka berjatuhan di baju hitam Anda."],
    ["Khodam Bau Kaos Kaki", "Si aroma tidak sedap yang selalu muncul setelah Anda berolahraga."],
    ["Khodam Sendawa Keras", "Si pembuat malu yang suka bersendawa keras di tempat umum."],
    ["Khodam Kentut Bau", "Si teror diam-diam yang suka meninggalkan aroma tidak sedap di lift."],
    ["Khodam Nyamuk Nakal", "Si penghisap darah yang selalu mengincar bagian tubuh yang paling gatal."],
    ["Khodam Lalat Gangguin", "Si pengganggu makan yang suka hinggap di makanan Anda."],
    ["Khodam Cicak Jatuh", "Si pembawa sial (katanya) yang suka jatuh di kepala Anda."],
    ["Khodam Upil Kering", "Si menjijikkan yang suka nongol di hidung Anda saat sedang berbicara dengan orang penting."],
    ["Khodam Ingus Meletus", "Si memalukan yang suka meletus saat Anda sedang tertawa terbahak-bahak."],
    ["Khodam Kuku Kaki Panjang", "Si jorok yang tidak pernah memotong kuku kakinya."],
    ["Khodam Rambut Rontok", "Si penyebab kebotakan yang suka meninggalkan jejak di bantal dan sisir Anda."],
    ["Khodam Jerawat Nakal", "Si merah-merah yang suka muncul di wajah Anda sebelum kencan penting."],
    ["Khodam Bau Mulut", "Si pembunuh rasa percaya diri yang suka muncul setelah makan bawang."],
    ["Khodam Keringat Bau", "Si pembuat malu yang suka muncul saat Anda sedang gugup."],
    ["Khodam Daki Tebal", "Si jorok yang suka menumpuk di sela-sela jari kaki Anda."],
    ["Khodam Mata Belekan", "Si pengganggu penglihatan yang suka muncul saat Anda bangun tidur."],
    ["Khodam Kuping Berair", "Si menjijikkan yang suka mengeluarkan cairan kuning saat Anda sedang sakit."],
    ["Khodam Hidung Meler", "Si penyebab pilek yang suka bikin Anda bersin-bersin."],
    ["Khodam Batuk Tak Berhenti", "Si pengganggu tidur yang suka bikin Anda terbangun di malam hari."],
    ["Khodam Bersin Beruntun", "Si pembuat malu yang suka bikin Anda bersin berkali-kali di depan umum."],
    ["Khodam Cegukan Terus-terusan", "Si pengganggu makan yang suka bikin Anda keselek."],
    ["Khodam Ngiler Saat Tidur", "Si jorok yang suka meninggalkan bekas di bantal Anda."],
    ["Khodam Mimisan Misterius", "Si pembuat panik yang suka muncul tiba-tiba tanpa sebab."],
    ["Khodam Bisul Sakit", "Si nyeri yang suka muncul di tempat yang paling tidak nyaman."],
    ["Khodam Gigitan Nyamuk Gatal", "Si penyebab bentol-bentol yang suka bikin Anda menggaruk tanpa henti."],
    ["Khodam Luka Lecet Perih", "Si pengingat masa kecil yang suka bikin Anda merasa seperti anak kecil lagi."],
    ["Khodam Pusing Kepala", "Si pembuat pusing yang suka muncul saat Anda sedang banyak pikiran."],
    ["Khodam Sakit Perut Melilit", "Si pengganggu makan yang suka bikin Anda bolak-balik ke kamar mandi."],
    ["Khodam Diare Tak Terkendali", "Si pembuat malu yang suka muncul saat Anda sedang bepergian jauh."],
    ["Khodam Muntah-muntah", "Si penyebab lemas yang suka muncul setelah makan makanan pedas."],
    ["Khodam Demam Tinggi", "Si pembuat meriang yang suka bikin Anda tidak bisa beraktivitas."],
    ["Khodam Flu Berat", "Si penyebab pilek dan batuk yang suka bikin Anda terbaring lemah di tempat tidur."],
    ["Khodam Alergi Aneh", "Si pembuat gatal-gatal yang suka muncul saat Anda berada di dekat benda-benda tertentu."],
    ["Khodam Insomnia Kronis", "Si pengganggu tidur yang suka bikin Anda begadang semalaman."],
    ["Khodam Mimpi Buruk Berulang", "Si peneror tidur yang suka menghantui Anda dengan mimpi buruk yang sama."],
    ["Khodam Kesurupan Ringan", "Si iseng yang suka bikin Anda bertingkah aneh dan berbicara dengan suara berbeda."],
    ["Khodam Ketindihan Misterius", "Si penekan dada yang suka bikin Anda sulit bernapas saat tidur."],
    ["Khodam Suara Aneh di Malam Hari", "Si pembuat takut yang suka bikin Anda merinding di tengah malam."],
    ["Khodam Bayangan Hitam Bergerak", "Si misterius yang suka muncul di sudut mata Anda saat Anda sendirian."],
    ["Khodam Perasaan Diawasi", "Si paranoid yang suka bikin Anda merasa selalu diawasi oleh seseorang."],
    ["Khodam Pocong Selfie", "Hantu pocong narsis yang hobinya selfie di kuburan dan update di media sosial."],
    ["Khodam Kuntilanak Ngomel", "Kuntilanak cerewet yang suka mengomel tentang harga cabai yang naik terus."],
    ["Khodam Genderuwo TikTokan", "Genderuwo gaul yang suka bikin video TikTok dengan jogetan absurd."],
    ["Khodam Tuyul Belanja Online", "Tuyul modern yang suka belanja online pakai uang curiannya."],
    ["Khodam Wewe Gombel Nge-gym", "Wewe Gombel yang rajin fitness untuk menjaga bentuk tubuhnya yang aduhai."],
    ["Khodam Jelangkung Kepo", "Jelangkung yang suka bertanya-tanya tentang kehidupan pribadi Anda."],
    ["Khodam Leak Belajar Bahasa Korea", "Leak yang terobsesi dengan K-Pop dan berusaha keras belajar bahasa Korea."],
    ["Khodam Sundel Bolong Ikut Audisi Dangdut", "Sundel Bolong yang bercita-cita menjadi penyanyi dangdut terkenal."],
    ["Khodam Palasik Nyasar ke Mall", "Palasik yang kebingungan mencari jalan pulang setelah tersesat di mall."],
    ["Khodam Banaspati Nonton Sinetron", "Banaspati yang suka baperan saat menonton sinetron drama romantis."],
    ["Khodam Kolong Wewe Jualan Gorengan", "Kolong Wewe yang banting setir menjadi pengusaha gorengan sukses."],
    ["Khodam Kuyang Jadi YouTuber Mukbang", "Kuyang yang alih profesi menjadi YouTuber mukbang dengan menu favoritnya, darah segar."],
    ["Khodam Begu Ganong Jadi Barista", "Begu Ganong yang membuka kedai kopi kekinian di tengah hutan."],
    ["Khodam Noni Belanda Jadi Selebgram", "Noni Belanda yang eksis di Instagram dengan gaya fashion vintage."],
    ["Khodam Si Manis Jembatan Ancol Jadi Driver Ojol", "Si Manis Jembatan Ancol yang mencari nafkah sebagai driver ojol untuk menghidupi keluarganya."],
    ["Khodam Buto Ijo Jadi Vegan", "Buto Ijo yang beralih menjadi vegan karena peduli dengan lingkungan."],
    ["Khodam Babi Ngepet Jadi YouTuber Gaming", "Babi Ngepet yang jago main game online dan punya banyak subscriber."],
    ["Khodam Jurig Jarian Jadi Pelari Maraton", "Jurig Jarian yang menyalurkan hobinya berlari dengan mengikuti lomba maraton."],
    ["Khodam Hantu Jeruk Purut Jadi Petani Jeruk", "Hantu Jeruk Purut yang beralih profesi menjadi petani jeruk sukses."],
    ["Khodam Hantu Galau Jadi Penulis Puisi", "Hantu Galau yang menuangkan isi hatinya dalam bentuk puisi-puisi romantis."],
    ["Khodam Tuyul Jadi YouTuber Gaming", "Tuyul yang alih profesi jadi YouTuber gaming, jago main Mobile Legends dan sering live streaming sambil ngumpulin receh dari penonton."],
    ["Khodam Pocong Nge-Rap", "Pocong gaul yang punya bakat nge-rap dan bikin lagu tentang kehidupan di alam kubur."],
    ["Khodam Kuntilanak Jadi Beauty Vlogger", "Kuntilanak cantik yang suka bikin tutorial makeup seram tapi tetap terlihat menawan."],
    ["Khodam Genderuwo Jadi Personal Trainer", "Genderuwo kekar yang membuka jasa personal trainer dengan program latihan ekstrim di tengah hutan."],
    ["Khodam Wewe Gombel Ikut MasterChef", "Wewe Gombel yang jago masak dan punya resep rahasia sup buntut anak hilang (tapi jangan tanya bahannya dari mana)."],
    ["Khodam Jelangkung Jadi Stand Up Comedian", "Jelangkung yang punya selera humor tinggi dan suka bikin jokes tentang pengalamannya berkomunikasi dengan manusia."],
    ["Khodam Leak Jadi DJ", "Leak yang punya skill nge-DJ handal dan sering tampil di pesta-pesta Halloween."],
    ["Khodam Sundel Bolong Jadi Model Lingerie", "Sundel Bolong yang percaya diri dengan tubuhnya dan berani tampil seksi sebagai model lingerie."],
    ["Khodam Palasik Jadi Pramugari", "Palasik yang ramah dan selalu siap melayani penumpang dengan senyum manis (tapi jangan kaget kalau dia tiba-tiba melayang)."],
    ["Khodam Banaspati Jadi Petani Organik", "Banaspati yang peduli dengan kesehatan dan memilih bertani secara organik."],
    ["Khodam Kolong Wewe Jadi Tukang Pijat", "Kolong Wewe yang punya keahlian memijat dan bisa menghilangkan pegal-pegal."],
    ["Khodam Kuyang Jadi Penari Balet", "Kuyang yang anggun dan lentur, mahir menari balet dengan kepala dan organ dalamnya yang melayang."],
    ["Khodam Begu Ganong Jadi Penyiar Radio Horor", "Begu Ganong yang punya suara seram dan suka membawakan acara radio horor tengah malam."],
    ["Khodam Noni Belanda Jadi Desainer Baju Adat", "Noni Belanda yang jatuh cinta dengan budaya Indonesia dan menciptakan desain baju adat modern."],
    ["Khodam Si Manis Jembatan Ancol Jadi Penyelam Profesional", "Si Manis Jembatan Ancol yang memanfaatkan kemampuan berenangnya untuk menjadi penyelam profesional."],
    ["Khodam Buto Ijo Jadi Aktivis Lingkungan", "Buto Ijo yang sadar akan pentingnya menjaga lingkungan dan aktif dalam kampanye penyelamatan hutan."],
    ["Khodam Babi Ngepet Jadi Chef Restoran Padang", "Babi Ngepet yang jago masak rendang dan punya restoran Padang terkenal."],
    ["Khodam Jurig Jarian Jadi Kurir Paket", "Jurig Jarian yang memanfaatkan kecepatan larinya untuk mengantar paket dengan cepat dan tepat waktu."],
    ["Khodam Hantu Jeruk Purut Jadi Penjual Es Jeruk", "Hantu Jeruk Purut yang membuka usaha es jeruk segar di dekat TPU Jeruk Purut."],
    ["Khodam Hantu Galau Jadi Penulis Lagu Indie", "Hantu Galau yang menciptakan lagu-lagu indie dengan lirik sendu dan melodi melankolis."],
    ["Khodam Jenglot Jadi Kolektor Barang Antik", "Jenglot yang punya hobi mengoleksi barang-barang antik dan mistis."],
    ["Khodam Ocong Jadi Pembalap Liar", "Ocong yang suka kebut-kebutan di jalanan sepi tengah malam."],
    ["Khodam Hantu Penasaran Jadi Detektif Swasta", "Hantu Penasaran yang menggunakan kemampuannya untuk memecahkan kasus-kasus misterius."],
    ["Khodam Jin Pengabul Jadi YouTuber Prank", "Jin Pengabul yang suka mengerjai orang dan merekamnya untuk konten YouTube."],
    ["Khodam Peri Hutan Jadi Aktivis Konservasi", "Peri Hutan yang peduli dengan kelestarian alam dan aktif dalam upaya konservasi hutan."],
    ["Khodam Dewi Sri Jadi Influencer Pertanian", "Dewi Sri yang membagikan tips dan trik bertani modern melalui media sosial."],
    ["Khodam Mak Lampir Jadi Makeup Artist", "Mak Lampir yang punya keahlian merias wajah dan mengubah penampilan seseorang menjadi lebih cantik (atau seram)."],
    ["Khodam Genderuwo Jadi Youtuber ASMR", "Genderuwo yang punya suara berat dan menenangkan, membuat konten ASMR untuk membantu orang rileks dan tidur nyenyak."],
    ["Khodam Tuyul Jadi Investor Saham", "Tuyul yang pintar menganalisis pasar saham dan berhasil mengumpulkan banyak uang dari investasi."],
    ["Khodam Pocong Jadi Penari Breakdance", "Pocong yang lincah dan punya gerakan breakdance yang keren."]
];
  
const resultList = document.getElementById("result");
const namaInput = document.getElementById("namaInput");

function submitNama() {
      const nama = namaInput.value[0].toUpperCase() + namaInput.value.slice(1);
      const punyaKhodam = Math.random() < 0.5;
  
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
  
      if (punyaKhodam) {
          const khodamIndex = Math.floor(Math.random() * khodamList.length);
          const [namaKhodam, keteranganKhodam] = khodamList[khodamIndex];
          listItem.innerHTML = `<b>${nama}</b> Punya ${namaKhodam}. <br> <small class="text-muted">${keteranganKhodam}</small>`;
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
    var socket = io("http://172.16.14.146:5001");
    setTimeout(function(){
        socket.on('new_comment', function(data) {
            document.getElementById('namaInput').value = data.comment;
            setTimeout(function(){
                submitNama();
            }, 800)
        });
    }, 1500);
});
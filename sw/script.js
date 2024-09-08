const characters = [
    {
        id: 1,
        name: "Luke Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        homeworld: "tatooine",
      },
      {
        id: 2,
        name: "C-3PO",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        homeworld: "tatooine",
      },
      {
        id: 3,
        name: "R2-D2",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        homeworld: "naboo",
      },
      {
        id: 4,
        name: "Darth Vader",
        pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        homeworld: "tatooine",
      },
      {
        id: 5,
        name: "Leia Organa",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        homeworld: "alderaan",
      },
      {
        id: 6,
        name: "Owen Lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 7,
        name: "Beru Whitesun lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 8,
        name: "R5-D4",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        homeworld: "tatooine",
      },
      {
        id: 9,
        name: "Biggs Darklighter",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        homeworld: "tatooine",
      },
      {
        id: 10,
        name: "Obi-Wan Kenobi",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        homeworld: "stewjon",
      },
      {
        id: 11,
        name: "Anakin Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        homeworld: "tatooine",
      },
      {
        id: 12,
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu",
      },
      {
        id: 13,
        name: "Chewbacca",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        homeworld: "kashyyyk",
      },
      {
        id: 14,
        name: "Han Solo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        homeworld: "corellia",
      },
      {
        id: 15,
        name: "Greedo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        homeworld: "Rodia",
      },
      {
        id: 16,
        name: "Jabba Desilijic Tiure",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        homeworld: "tatooine",
      },
      {
        id: 18,
        name: "Wedge Antilles",
        pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
        homeworld: "corellia",
      },
      {
        id: 19,
        name: "Jek Tono Porkins",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        homeworld: "bestine",
      },
      {
        id: 20,
        name: "Yoda",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
        homeworld: "other",
        
      },
      {
        id: 21,
        name: "Palpatine",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        homeworld: "naboo",
      },
];



//Butona tıklandığında tetiklenecek fonksiyon
function renderCharacters() {
    const characterContainer = document.getElementById('characterContainer');
    characterContainer.innerHTML = ""; // Önceden varsa içeriği temizlek için

    characters.forEach(character => {
        const characterCard = `
            <div class="col-md-3 mb-5 ">
                <div class="card ">
                    <img src="${character.pic}" class="card-img-top border rounded-0 border-dark border-3"  alt="${character.name}" style="height: 350px;>
                    <div class="card-body">
                        <h5 class="card-title pt-2">${character.name}</h5>
                        <p class="card-text pb-2 ">Homeworld: ${character.homeworld}</p>
                    </div>
                </div>
            </div>
        `;
        characterContainer.innerHTML += characterCard;
    });
    
    
    // Butonun metnini ve stilini degistidik
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.onclick = removeCharacters;
    toggleButton.innerText = "Karakterleri Gizle ";
    toggleButton.className = "btn my-5 btn-danger";
  }
  
  
  //  Karakterleri kaldıracak fonksiyon
  function removeCharacters() {
    const characterContainer = document.getElementById('characterContainer');
    characterContainer.innerHTML = ""; // Önceden varsa içeriği temizlek için
    
    // Butonun metnini ve stilini güncelledik
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.innerText = "Karakterleri Göster";
    toggleButton.className = "my-5 btn btn-success";
    toggleButton.onclick = renderCharacters;
  }
  
  //  Başlangıçta butona renderCharacters fonksiyonunu atayalım
  document.getElementById('toggleButton').onclick = renderCharacters;
  

//karakterlerin homeworldlerinin işlenmemiş halini döndük
let homeworldRaw = characters.map((character) => character.homeworld);
console.log(homeworldRaw);

//veri setimizde homeworld değeri olmayan veya belirtilmemiş olan var ise ona other değerini atadık
homeworldRaw = homeworldRaw.map((homeworld) =>
  homeworld !== undefined && homeworld !== null ? homeworld : "other"
);
console.log(homeworldRaw);


//tekrarlayan homeworld değerlerinin yerine yeni bir array içinde homeworld değerlerini tekrarsız aldık
let homeworldsUnique = [...new Set(homeworldRaw)];
console.log(homeworldsUnique);

// Tüm homeworld isimlerini küçük harfe dönüştürdük ve yeni bir dizi olan homeworldsLowercase'e atadık
let homeworldsLowercase = homeworldsUnique.map((homeworld) =>
  homeworld !== undefined && homeworld !== null
    ? homeworld.toLowerCase()
    : "other"
  );

  console.log(homeworldsLowercase);
  const homeworlds = homeworldsLowercase; 
  console.log(homeworlds) 

  //inputs classını değişkene tanımladık
  const inputs = document.querySelector(".inputs");

  // son aşamada tekrarsız homeworld arrayının değerleri için input oluşturup innerhtml ile ekledik
for (let i = 0; i < homeworlds.length; i++) {
  inputs.innerHTML += `
  <div class="formCheck mb-4 ps-4">
  <input class="formCheckInput" type="radio" name="homeworld" value="${homeworlds[i]}" id="homeworld${homeworlds[i]}"/>
    <label class="formCheckLabel text-white" for="homeworld${homeworlds[i]}">${homeworlds[i]}</label>
    </div>
</div>`;
}


//js ile html'e eklediğimiz formcheckinput class'ına sahip inputlarımızın her birini allinputs'a atadık
const allinputs = document.querySelectorAll(".formCheckInput");
//forEach ile her bir input için seçildiğindeki değer ile filtrelediğimiz veri setimizindeki homeworld değerlerinin eşitliğini kontrol ettik(küçük harfe dönüştürerek)
allinputs.forEach(function (input) {
  input.addEventListener("click", function () {
    const clickedInput = this.value; // Tıklanan radio butonunun değerini aldık ve filtrelediğimiz veri setimizdeki homeworld değerlerinin eşitliğini kontrol ettik 
    //homeworld değeri seçilen homeworld ile eşleşen karakterleri buluyoruz.
    const filteredHomeworld = characters.filter((element) =>
       element.homeworld.toLowerCase() === clickedInput.toLowerCase()
  );

  const characterContainer = document.getElementById('characterContainer');
    characterContainer.innerHTML = ""; // Var ise önceki içerikleri temizledik

    // Filtrelenen karakterleri html'de characterconterContainer <div>imize ekliyoruz(id kullanarak ulaştım)
    filteredHomeworld.forEach(function (person) {
      const personCard =`
      <div class=" col-md-3 mb-5">
      <div class="card">
      <img src="${person.pic}" class="card-img-top border rounded-0 border-dark border-3" alt="${person.name}" style="height: 350px;">
      <div class="card-body pt-2 pb-2">
      <h5 class="card-title">${person.name}</h5>
      <p class="card-text ">Homeworld: ${person.homeworld}</p>
      </div>
      </div>
        </div>`;
        characterContainer.innerHTML += personCard;
    });
  });
});
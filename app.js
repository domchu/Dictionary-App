let wordAudioSound = new Audio();
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let inp1 = document.querySelector(".inp1");
  let inp = inp1.value;
  let loaderPart = document.querySelector(".lds-roller");
  let icon = document.querySelector(".icon");
  let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${inp}`;
  loaderPart.style.display = "block";

  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      loaderPart.style.display = "none";
      // icon.style.display = "block";
      let mainWord = data.map((p) => {
        console.log(p);
        let wordAudioSrc = p.phonetics[0].audio;

        // wordAudioSound.src = wordAudioSrc;

        return `<div class="content">
                        <h1 class="head-word">${p.word}</h1>
                        <p class="head-meaning">${p.meanings[0].definitions[0].definition}</p>

                      <audio controls src="${wordAudioSrc}">
                       
                        Your browser does not support the <code>audio</code> element.
                      </audio>

                        
                        <p class="head-phonetics"></p>
                        </div>`;
      });

      let word = document.querySelector(".word");
      word.innerHTML = `<div>${mainWord}</div>`;
    });
});

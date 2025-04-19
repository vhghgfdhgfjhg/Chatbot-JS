// const inputfield = document.querySelector(".inputfield");
// const enter = document.querySelector(".fa-circle-up");
// const content = document.querySelector(".content");
// const folder = document.querySelector(".fa-folder-open");
// const API_key = 'AIzaSyBzVfLtVKWwZ5v3BFsPi-Ml_-GgccH5Cg8';
// const API =
//   `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_key}`;

//   const generatebotresponse = async() =>{
//     const requestOptions = {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         contents: [{
//           parts:[{text: inputfield.value}]
//         }]
//       })
//     }
//     try{
//       const res = await fetch(API , requestOptions);
//       const data = await res.json();
//       if(!res.ok) throw new Error(data.error.value);
//       // console.log(data);
//       var apires = data.candidates[0].content.parts[0].text.trim();
//       console.log(apires);
//     }
//     catch{
//         console.log(error);

//     }

//   }

// function inputhandel() {
//   var input = inputfield.value;
//   var userinput = document.createElement("p");
//   userinput.textContent = input;
//   userinput.className = "userinput";
//   var divuser = document.createElement("div");
//   divuser.className = "usertext";
//   content.appendChild(divuser).appendChild(userinput);
//   console.log(input);
// }

// function botoutput() {
//   var botimg = document.createElement("i");
//   botimg.className = "fa-solid fa-robot new";
//   var botoutput = document.createElement("p");
//   botoutput.className = "botoutput";
//   botoutput.textContent = `thinking... `;
//   var divbot = document.createElement("div");
//   divbot.className = "bottext";
//   content.appendChild(divbot).appendChild(botoutput).appendChild(botimg);
//   //   content.appendChild(botimg);
// }

// enter.addEventListener("click", function () {
//   inputhandel();
//   generatebotresponse();
//   setTimeout(function () {
//     botoutput();
//   }, 2000);
// });

// folder.addEventListener("click", function () {});

const inputfield = document.querySelector(".inputfield");
const enter = document.querySelector(".fa-circle-up");
const content = document.querySelector(".content");
const folder = document.querySelector(".fa-folder-open");
const jjjj = document.querySelector('.gggg');
const API_key = "AIzaSyBzVfLtVKWwZ5v3BFsPi-Ml_-GgccH5Cg8";
const API = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_key}`;
const choosefile = document.querySelector(".input");

function inputhandel() {
  var input = inputfield.value;
  var userinput = document.createElement("p");
  userinput.textContent = input;
  userinput.className = "userinput";
  var divuser = document.createElement("div");
  divuser.className = "usertext";
  content.appendChild(divuser).appendChild(userinput);
  // console.log(input);
}

const generatebotresponse = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: inputfield.value }],
        },
      ],
    }),
  };
  try {
    const res = await fetch(API, requestOptions);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error.value);
    // console.log(data);
    var apires = data.candidates[0].content.parts[0].text.trim();
    // console.log(apires);
    var botimg = document.createElement("i");
    botimg.className = "fa-solid fa-robot new";
    var botoutput = document.createElement("p");
    botoutput.className = "botoutput";
    botoutput.textContent = `${apires} `;
    var divbot = document.createElement("div");
    divbot.className = "bottext";
    content.appendChild(divbot).appendChild(botoutput).appendChild(botimg);
    //   content.appendChild(botimg);
  } catch {
    console.log(error);
  }
};

enter.addEventListener("click", function () {
  inputhandel();
  setTimeout(function () {
    generatebotresponse();
  }, 1000);
});

// function files(){
//   const fileimg = document.querySelector('.fa-file');
//   fileimg.style.display = 'none'
//   const file = document.createElement('input');
//   file.className = 'file'
//   file.type = 'file';
//   file.accept = 'images/*'
//   choosefile.appendChild(file)
//   console.log(file.value);
// }
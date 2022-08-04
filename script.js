const fakeData = [
  {
    name: "Brian",
    age: 45,
    bio: "Developer. I live with my mum",
    attractiveness: 5.5,
    avatar: "images/brian-img.jpg",
  },
  {
    name: "Clive",
    age: 51,
    bio: "I'd love to join your tables",
    attractiveness: 7,
    avatar: "images/clive-img.jpg",
  },
  {
    name: "Walter",
    age: 42,
    bio: "I collect stamps",
    attractiveness: 6.7,
    avatar: "images/walter-img.jpg",
  },
  {
    name: "Frank",
    age: 30,
    bio: "I love a sardine sandwich",
    attractiveness: 5,
    avatar: "images/frank-img.jpg",
  },
  {
    name: "Craig",
    age: 29,
    bio: "Do you enjoy pickles?",
    attractiveness: 7.8,
    avatar: "images/craig-img.jpg",
  },
  {
    name: "Bill",
    age: 19,
    bio: "I work for Microsoft. Do you dig that?",
    attractiveness: 6,
    avatar: "images/bill-img.jpg",
  },
];

class Developer {
  constructor(data) {
    this.liked = false;
    this.swiped = false;
    Object.assign(this, data);
  }

  getDeveloper() {
    return `
        <div id="information-container">
          <h2>${this.name}</h2>
          <p><span>Age</span>: ${this.age} &nbsp &nbsp 
          <i class="fa-solid fa-computer-mouse"></i> &nbsp &nbsp Bio: ${this.bio}
          &nbsp &nbsp <i class="fa-solid fa-computer-mouse"></i> &nbsp &nbsp
          Attractiveness: ${this.attractiveness} </p>
           
        </div>
        <div id="img-container">
          <div class="img" style="background-image: url(${this.avatar})"></div>
          <div class="button-wrapper">
            <button class="love">Loving that look</button>
            <button class="nope"><span>Sadly not my type</span></button>
          </div>
        </div>
     
    `;
  }
}

let currentDeveloperIndex = 0;
let currentDeveloper = new Developer(fakeData[currentDeveloperIndex]);

const card = document.getElementById("card-container");
card.innerHTML = currentDeveloper.getDeveloper();

document.getElementsByTagName("button")[0].addEventListener("click", yes);
document.getElementsByTagName("button")[1].addEventListener("click", no);

function render() {
  currentDeveloperIndex += 1;

  if (currentDeveloperIndex === fakeData.length) {
    currentDeveloperIndex = 0;
  }

  currentDeveloper = new Developer(fakeData[currentDeveloperIndex]);
  card.innerHTML = currentDeveloper.getDeveloper();
  document.getElementsByTagName("button")[0].addEventListener("click", yes);
  document.getElementsByTagName("button")[1].addEventListener("click", no);
}
function yes() {
  currentDeveloper.liked = true;
  currentDeveloper.swiped = true;
  setTimeout(render, 500);
}

function no() {
  currentDeveloper.liked = false;
  currentDeveloper.swiped = true;
  setTimeout(render, 500);
}

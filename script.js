const fakeData = [
  {
    name: "Brian",
    age: 45,
    bio: "Developer, lives with his mum",
    attractiveness: 5.5,
    avatar:
      "https://www.industryconnect.org/wp-content/uploads/2016/04/Computer-Nerd.jpg",
  },
  {
    name: "Clive",
    age: 51,
    bio: "I'd love to join your tables",
    attractiveness: 7,
    avatar:
      "https://media.istockphoto.com/photos/retro-computer-office-nerd-at-home-office-picture-id617888054?k=20&m=617888054&s=170667a&w=0&h=v5OI0IvEZJ3VSGbcvTj9uDnimsikeIuOghd3B_QBASA=",
  },
  {
    name: "Walter",
    age: 42,
    bio: "I collect stamps",
    attractiveness: 6.7,
    avatar:
      "https://images.freeimages.com/images/premium/previews/1926/19263545-excited-geeky-nerd-computer-science-work-man-vintage-style.jpg",
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
      <div id="card">
      <div id="information">
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

  if (currentDeveloperIndex < fakeData.length) {
    currentDeveloper = new Developer(fakeData[currentDeveloperIndex]);
    card.innerHTML = currentDeveloper.getDeveloper();
    document.getElementsByTagName("button")[0].addEventListener("click", yes);
    document.getElementsByTagName("button")[1].addEventListener("click", no);
  }
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

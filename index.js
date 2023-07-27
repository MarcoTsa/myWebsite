const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

// Game Websites
const games_product = [
  {
    id: 0,
    image: "images/site-images/snake.png",
    title: "Snake",
    site: "SnakeGame/index.html",
  },
  {
    id: 1,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 2,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 3,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 4,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 5,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 6,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
];

const categories_games = [
  ...new Set(
    games_product.map((item) => {
      return item;
    })
  ),
];

const displayItem_games = (item2) => {
  document.getElementById("games").innerHTML = item2
    .map((item) => {
      var { image, title, site } = item;
      return `<div class="box">
        <div class="img-box">
          <img class="images" src=${image}></img>
        </div>
        <div class"bottom">
          <p class="name">${title}</p>
          <h3>
            <a href=${site}>Go to Site</a>
          </h3>
        </div>
      </div>`;
    })
    .join("");
};

displayItem_games(categories_games);

// Usefull Websites
const usefull_product = [
  {
    id: 0,
    image: "images/site-images/waehrungs_converter.png",
    title: "Währungs Converter",
    site: "WaehrungsConverter/index.html",
  },
  {
    id: 1,
    image: "images/site-images/InternetSpeedTest.png",
    title: "Internet Speed Test",
    site: "InternetSpeedtest/index.html",
  },
  {
    id: 2,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 3,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 4,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 5,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 6,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 7,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
];

const categories_usefull = [
  ...new Set(
    usefull_product.map((item) => {
      return item;
    })
  ),
];

const displayItem_usefull = (item2) => {
  document.getElementById("usefull").innerHTML = item2
    .map((item) => {
      var { image, title, site } = item;
      return `<div class="box">
        <div class="img-box">
          <img class="images" src=${image}></img>
        </div>
        <div class"bottom">
          <p class="name">${title}</p>
          <h3>
            <a href=${site}>Go to Site</a>
          </h3>
        </div>
      </div>`;
    })
    .join("");
};

displayItem_usefull(categories_usefull);

// Random Wesites
const random_product = [
  {
    id: 0,
    image: "images/site-images/tradingview.png",
    title: "BitCoin TradingView",
    site: "TradingView/index.html",
  },
  {
    id: 1,
    image: "images/site-images/ShopAdminDashboard.png",
    title: "Admin Daschboard for Shop",
    site: "ShopAdminDashboard/index.html",
  },
  {
    id: 2,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 3,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 4,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 5,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 6,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 7,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
  {
    id: 8,
    image: "images/work_in_progress.jpeg",
    title: "Platzhalter",
    site: "#",
  },
];

const categories_random = [
  ...new Set(
    random_product.map((item) => {
      return item;
    })
  ),
];

const displayItem_random = (item2) => {
  document.getElementById("random").innerHTML = item2
    .map((item) => {
      var { image, title, site } = item;
      return `<div class="box">
        <div class="img-box">
          <img class="images" src=${image}></img>
        </div>
        <div class"bottom">
          <p class="name">${title}</p>
          <h3>
            <a href=${site}>Go to Site</a>
          </h3>
        </div>
      </div>`;
    })
    .join("");
};

displayItem_random(categories_random);

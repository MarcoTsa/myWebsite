const sideLinks = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)"
);

sideLinks.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", () => {
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

const searchBtn = document.querySelector(
  ".content nav form .form-input button"
);
const searchBtnIcon = document.querySelector(
  ".content nav form .form-input button .bx"
);
const searchForm = document.querySelector(".content nav form");

searchBtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault;
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchBtnIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchBtnIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    sideBar.classList.add("close");
  } else {
    sideBar.classList.remove("close");
  }
  if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

const toggler = document.getElementById("theme-toggle");

toggler.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

const games_product = [
  {
    id: 0,
    image: "images/site-images/snake.png",
    title: "Snake",
    site: "SnakeGame/index.html",
  },
  {
    id: 1,
    image: "images/site-images/PingPong.png",
    title: "Possible PingPong",
    site: "PingPongGame/index.html",
  },
  {
    id: 2,
    image: "images/site-images/XOGame.png",
    title: "XO Game",
    site: "XOGame/index.html",
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
          <img class="images" src=${image} loading="lazy"></img>
        </div>
        <div class"bottom">
          <p class="name">${title}</p>
          <h4 class"go-to">
            <a class="go-to-site" href=${site}>Go to Site</a>
          </h4>
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
    site: "InternetSpeedTest/index.html",
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
          <img class="images" src=${image} loading="lazy"></img>
        </div>
        <div class"bottom">
          <p class="name">${title}</p>
          <h4 class"go-to">
            <a class="go-to-site" href=${site}>Go to Site</a>
          </h4>
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
    image: "images/site-images/FilmApp.png",
    title: "Movie-Site mit API",
    site: "FilmApp/index.html",
  },
  {
    id: 3,
    image: "images/site-images/SadowGenerator.png",
    title: "Schatten Generator",
    site: "SchattenGenerator/index.html",
  },
  {
    id: 4,
    image: "images/site-images/Donut.png",
    title: "Rotating Donut",
    site: "RotatingDonut/index.html",
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
          <img class="images" src=${image} loading="lazy"></img>
        </div>
        <div class"bottom">
          <p class="name">${title}</p>
          <h4 class"go-to">
            <a class="go-to-site" href=${site} style="">Go to Site</a>
          </h4>
        </div>
      </div>`;
    })
    .join("");
};

displayItem_random(categories_random);

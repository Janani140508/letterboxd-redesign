// Complete 48-Film Database
let films = [
  // Sci-Fi
  { id: 1, title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: "4.9", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop" },
  { id: 2, title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", rating: "4.6", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop" },
  { id: 3, title: "Inception", year: 2010, genre: "Sci-Fi", rating: "4.8", img: "https://images.unsplash.com/photo-1500462859274-129a00832363?w=400&auto=format&fit=crop" },
  { id: 4, title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: "4.7", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop" },
  { id: 5, title: "Arrival", year: 2016, genre: "Sci-Fi", rating: "4.5", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&auto=format&fit=crop" },
  { id: 6, title: "2001: A Space Odyssey", year: 1968, genre: "Sci-Fi", rating: "4.8", img: "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?w=400&auto=format&fit=crop" },
  { id: 7, title: "Dune", year: 2021, genre: "Sci-Fi", rating: "4.6", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop" },
  { id: 8, title: "Ex Machina", year: 2014, genre: "Sci-Fi", rating: "4.5", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop" },
  { id: 9, title: "The Martian", year: 2015, genre: "Sci-Fi", rating: "4.4", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&auto=format&fit=crop" },
  { id: 10, title: "Edge of Tomorrow", year: 2014, genre: "Sci-Fi", rating: "4.3", img: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=400&auto=format&fit=crop" },
  { id: 11, title: "Gravity", year: 2013, genre: "Sci-Fi", rating: "4.2", img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&auto=format&fit=crop" },
  { id: 12, title: "Tenet", year: 2020, genre: "Sci-Fi", rating: "4.1", img: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&auto=format&fit=crop" },

  // Drama
  { id: 13, title: "Oppenheimer", year: 2023, genre: "Drama", rating: "4.8", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop" },
  { id: 14, title: "Past Lives", year: 2023, genre: "Drama", rating: "4.5", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop" },
  { id: 15, title: "Whiplash", year: 2014, genre: "Drama", rating: "4.7", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop" },
  { id: 16, title: "Parasite", year: 2019, genre: "Drama", rating: "4.9", img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&auto=format&fit=crop" },
  { id: 17, title: "The Social Network", year: 2010, genre: "Drama", rating: "4.6", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop" },
  { id: 18, title: "Fight Club", year: 1999, genre: "Drama", rating: "4.8", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&auto=format&fit=crop" },
  { id: 19, title: "The Godfather", year: 1972, genre: "Drama", rating: "5.0", img: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&auto=format&fit=crop" },
  { id: 20, title: "Taxi Driver", year: 1976, genre: "Drama", rating: "4.7", img: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=400&auto=format&fit=crop" },
  { id: 21, title: "There Will Be Blood", year: 2007, genre: "Drama", rating: "4.7", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop" },
  { id: 22, title: "Manchester by the Sea", year: 2016, genre: "Drama", rating: "4.4", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop" },
  { id: 23, title: "Aftersun", year: 2022, genre: "Drama", rating: "4.6", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&auto=format&fit=crop" },
  { id: 24, title: "12 Angry Men", year: 1957, genre: "Drama", rating: "4.9", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop" },

  // Action
  { id: 25, title: "The Dark Knight", year: 2008, genre: "Action", rating: "4.9", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop" },
  { id: 26, title: "Mad Max: Fury Road", year: 2015, genre: "Action", rating: "4.6", img: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&auto=format&fit=crop" },
  { id: 27, title: "John Wick: Chapter 4", year: 2023, genre: "Action", rating: "4.4", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop" },
  { id: 28, title: "Top Gun: Maverick", year: 2022, genre: "Action", rating: "4.6", img: "https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f1?w=400&auto=format&fit=crop" },
  { id: 29, title: "Gladiator", year: 2000, genre: "Action", rating: "4.8", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&auto=format&fit=crop" },
  { id: 30, title: "Heat", year: 1995, genre: "Action", rating: "4.6", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop" },
  { id: 31, title: "Kill Bill: Vol. 1", year: 2003, genre: "Action", rating: "4.5", img: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=400&auto=format&fit=crop" },
  { id: 32, title: "Skyfall", year: 2012, genre: "Action", rating: "4.3", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop" },
  { id: 33, title: "The Batman", year: 2022, genre: "Action", rating: "4.4", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop" },
  { id: 34, title: "Mission: Impossible - Fallout", year: 2018, genre: "Action", rating: "4.5", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop" },
  { id: 35, title: "Casino Royale", year: 2006, genre: "Action", rating: "4.4", img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&auto=format&fit=crop" },
  { id: 36, title: "Baby Driver", year: 2017, genre: "Action", rating: "4.2", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop" },

  // Animation
  { id: 37, title: "Spider-Verse", year: 2023, genre: "Animation", rating: "4.7", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&auto=format&fit=crop" },
  { id: 38, title: "Spirited Away", year: 2001, genre: "Animation", rating: "4.9", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop" },
  { id: 39, title: "Your Name", year: 2016, genre: "Animation", rating: "4.8", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop" },
  { id: 40, title: "Arcane", year: 2021, genre: "Animation", rating: "4.9", img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&auto=format&fit=crop" },
  { id: 41, title: "Princess Mononoke", year: 1997, genre: "Animation", rating: "4.8", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop" },
  { id: 42, title: "Howl's Moving Castle", year: 2004, genre: "Animation", rating: "4.7", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop" },
  { id: 43, title: "WALL-E", year: 2008, genre: "Animation", rating: "4.6", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop" },
  { id: 44, title: "Ratatouille", year: 2007, genre: "Animation", rating: "4.5", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format&fit=crop" },
  { id: 45, title: "Puss in Boots: The Last Wish", year: 2022, genre: "Animation", rating: "4.5", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop" },
  { id: 46, title: "Coco", year: 2017, genre: "Animation", rating: "4.6", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop" },
  { id: 47, title: "The Boy and the Heron", year: 2023, genre: "Animation", rating: "4.3", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&auto=format&fit=crop" },
  { id: 48, title: "Soul", year: 2020, genre: "Animation", rating: "4.4", img: "https://images.unsplash.com/photo-1511192832253-7f39c6a51d95?w=400&auto=format&fit=crop" }
];

// Diary State
let diaryLogs = [];

// DOM Elements
const filmGrid = document.getElementById("filmGrid");
const filmCount = document.getElementById("filmCount");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const logModal = document.getElementById("logModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const logForm = document.getElementById("logForm");

// Navigation View Elements
const navButtons = document.querySelectorAll(".nav-link");
const heroSection = document.querySelector("main > section:first-child");
const filterSection = document.getElementById("filterContainer").parentElement;
const listsView = document.getElementById("listsView");
const reviewsView = document.getElementById("reviewsView");
const journalView = document.getElementById("journalView");

// Render Film Cards to the Grid
function renderFilms(list) {
  filmGrid.innerHTML = "";
  list.forEach(film => {
    const card = document.createElement("div");
    card.className = "group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col";
    card.innerHTML = `
      <div class="relative aspect-[2/3] overflow-hidden bg-slate-800">
        <img src="${film.img}" alt="${film.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        <div class="absolute top-2 right-2 bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-emerald-400">
          ★ ${film.rating}
        </div>
      </div>
      <div class="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-xs text-white truncate group-hover:text-emerald-400 transition-colors">${film.title}</h4>
          <p class="text-[11px] text-slate-400 mt-0.5">${film.year} • ${film.genre}</p>
        </div>
        <button onclick="quickLogAction('${film.title}')" class="mt-3 w-full text-center text-[10px] font-semibold py-1 rounded bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 transition text-slate-300">
          Quick Log
        </button>
      </div>
    `;
    filmGrid.appendChild(card);
  });
  filmCount.innerText = list.length;
}

// Genre Filter
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => {
      b.className = "filter-btn bg-slate-800 hover:bg-slate-700 text-slate-300 px-3.5 py-1 rounded-full text-xs font-semibold transition";
    });
    btn.className = "filter-btn active bg-emerald-500 text-slate-950 px-3.5 py-1 rounded-full text-xs font-bold transition";
    
    const genre = btn.getAttribute("data-genre");
    const filtered = genre === "All" ? films : films.filter(f => f.genre === genre);
    renderFilms(filtered);
  });
});

// Live Search
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const matched = films.filter(f => f.title.toLowerCase().includes(query) || f.genre.toLowerCase().includes(query));
  renderFilms(matched);
});

// Keyboard Shortcut ("/")
window.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

// Modal Logic
function showModal() {
  logModal.classList.remove("hidden");
  logModal.classList.add("flex");
}

function hideModal() {
  logModal.classList.add("hidden");
  logModal.classList.remove("flex");
}

openModalBtn.addEventListener("click", () => {
  document.getElementById("filmTitleInput").value = "";
  showModal();
});

closeModalBtn.addEventListener("click", hideModal);

window.quickLogAction = function(title) {
  document.getElementById("filmTitleInput").value = title;
  showModal();
};

// Form Submit: Log New Film & Add to Journal
logForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("filmTitleInput").value;
  const genre = document.getElementById("filmGenreInput").value;
  const rating = document.getElementById("filmRatingInput").value;
  const review = document.getElementById("filmReviewInput").value || "Watched and logged.";

  // Add to Grid
  const newFilm = {
    id: films.length + 1,
    title: title,
    year: new Date().getFullYear(),
    genre: genre,
    rating: rating,
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop"
  };
  films.unshift(newFilm);
  renderFilms(films);

  // Add to Diary Logs
  diaryLogs.unshift({ title, rating, review, date: new Date().toLocaleDateString() });

  // Update Journal Tab UI
  const journalEntries = document.getElementById("journalEntries");
  document.getElementById("journalCount").innerText = `${diaryLogs.length} entries`;

  journalEntries.innerHTML = diaryLogs.map(item => `
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-3 flex justify-between items-center text-xs">
      <div>
        <span class="font-bold text-white text-sm">${item.title}</span>
        <p class="text-slate-400 text-[11px] mt-0.5">${item.review}</p>
      </div>
      <div class="text-right">
        <span class="text-emerald-400 font-bold">★ ${item.rating}</span>
        <span class="block text-[10px] text-slate-500">${item.date}</span>
      </div>
    </div>
  `).join("");

  hideModal();
  logForm.reset();
});

// Navigation View Switcher (Films, Lists, Reviews, Journal)
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => {
      b.className = "nav-link text-slate-300 hover:text-emerald-400 transition-colors";
    });
    btn.className = "nav-link text-emerald-400 font-semibold transition-colors";

    const view = btn.getAttribute("data-view");

    // Hide all main elements
    heroSection.classList.add("hidden");
    filterSection.classList.add("hidden");
    filmGrid.classList.add("hidden");
    listsView.classList.add("hidden");
    reviewsView.classList.add("hidden");
    journalView.classList.add("hidden");

    // Show selected view
    if (view === "films") {
      heroSection.classList.remove("hidden");
      filterSection.classList.remove("hidden");
      filmGrid.classList.remove("hidden");
    } else if (view === "lists") {
      listsView.classList.remove("hidden");
    } else if (view === "reviews") {
      reviewsView.classList.remove("hidden");
    } else if (view === "journal") {
      journalView.classList.remove("hidden");
    }
  });
});

// Initial Render
renderFilms(films);
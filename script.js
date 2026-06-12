/* ============================================
   STATE
   ============================================ */
let currentLang = "ar";
let activeMuscleFilter = "all";

/* ============================================
   LANGUAGE SWITCHING
   ============================================ */
function setLanguage(lang) {
  currentLang = lang;
  const html = document.getElementById("html-root");
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Update every element with a data-i18n key
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });

  // Update active language button
  document.getElementById("btn-ar").classList.toggle("active", lang === "ar");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");

  // Re-render dynamic sections in the new language
  renderExerciseFilters();
  renderExercises();
  renderNutrition();
  renderCoachServices();

  // Clear calculator results so old-language text doesn't linger
  resetResult("bmi-result");
  resetResult("tdee-result");
  resetResult("macro-result");
}

function resetResult(id) {
  const el = document.getElementById(id);
  el.innerHTML = `<p class="result-placeholder">${translations[currentLang].result_placeholder}</p>`;
}

/* ============================================
   MOBILE NAV
   ============================================ */
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("main-nav").classList.toggle("open");
});

/* ============================================
   TABS (Calculators)
   ============================================ */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
  });
});

/* ============================================
   CALCULATOR: BMI
   ============================================ */
document.getElementById("bmi-calc").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const height = parseFloat(document.getElementById("bmi-height").value);
  const result = document.getElementById("bmi-result");

  if (!weight || !height) {
    result.innerHTML = `<p class="result-placeholder">${translations[currentLang].result_placeholder}</p>`;
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const t = translations[currentLang];

  let category;
  if (bmi < 18.5) category = t.bmi_underweight;
  else if (bmi < 25) category = t.bmi_normal;
  else if (bmi < 30) category = t.bmi_over;
  else category = t.bmi_obese;

  result.innerHTML = `
    <div class="result-headline">${bmi.toFixed(1)}</div>
    <div class="result-tag">${category}</div>
  `;
});

/* ============================================
   CALCULATOR: TDEE (Mifflin-St Jeor)
   ============================================ */
document.getElementById("tdee-calc").addEventListener("click", () => {
  const gender = document.getElementById("tdee-gender").value;
  const age = parseFloat(document.getElementById("tdee-age").value);
  const weight = parseFloat(document.getElementById("tdee-weight").value);
  const height = parseFloat(document.getElementById("tdee-height").value);
  const activity = parseFloat(document.getElementById("tdee-activity").value);
  const result = document.getElementById("tdee-result");
  const t = translations[currentLang];

  if (!age || !weight || !height) {
    result.innerHTML = `<p class="result-placeholder">${t.result_placeholder}</p>`;
    return;
  }

  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr += gender === "male" ? 5 : -161;

  const tdee = bmr * activity;
  const cut = tdee * 0.8;
  const bulk = tdee * 1.15;

  result.innerHTML = `
    <div class="result-row">
      <span class="label">${t.tdee_result_label}</span>
      <span class="value">${Math.round(tdee)} <small>kcal</small></span>
    </div>
    <div class="result-row">
      <span class="label">${t.tdee_cut_label}</span>
      <span class="value">${Math.round(cut)} <small>kcal</small></span>
    </div>
    <div class="result-row">
      <span class="label">${t.tdee_bulk_label}</span>
      <span class="value">${Math.round(bulk)} <small>kcal</small></span>
    </div>
  `;
});

/* ============================================
   CALCULATOR: MACROS
   ============================================ */
document.getElementById("macro-calc").addEventListener("click", () => {
  const calories = parseFloat(document.getElementById("macro-calories").value);
  const weight = parseFloat(document.getElementById("macro-weight").value);
  const goal = document.getElementById("macro-goal").value;
  const result = document.getElementById("macro-result");
  const t = translations[currentLang];

  if (!calories || !weight) {
    result.innerHTML = `<p class="result-placeholder">${t.result_placeholder}</p>`;
    return;
  }

  // Protein target depends on goal
  let proteinPerKg = goal === "cut" ? 2.2 : goal === "bulk" ? 1.8 : 2.0;
  const proteinG = weight * proteinPerKg;
  const proteinCal = proteinG * 4;

  // Fat: 25% of total calories
  const fatCal = calories * 0.25;
  const fatG = fatCal / 9;

  // Remaining calories go to carbs
  const carbCal = Math.max(calories - proteinCal - fatCal, 0);
  const carbG = carbCal / 4;

  result.innerHTML = `
    <div class="result-row">
      <span class="label">${t.macro_protein}</span>
      <span class="value">${Math.round(proteinG)}g</span>
    </div>
    <div class="result-row">
      <span class="label">${t.macro_carbs}</span>
      <span class="value">${Math.round(carbG)}g</span>
    </div>
    <div class="result-row">
      <span class="label">${t.macro_fat}</span>
      <span class="value">${Math.round(fatG)}g</span>
    </div>
  `;
});

/* ============================================
   EXERCISE LIBRARY RENDERING
   ============================================ */
function renderExerciseFilters() {
  const container = document.getElementById("ex-filters");
  container.innerHTML = "";

  muscleGroups.forEach((group) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (group.key === activeMuscleFilter ? " active" : "");
    btn.textContent = currentLang === "ar" ? group.ar : group.en;
    btn.addEventListener("click", () => {
      activeMuscleFilter = group.key;
      renderExerciseFilters();
      renderExercises();
    });
    container.appendChild(btn);
  });
}

function renderExercises() {
  const container = document.getElementById("exercise-grid");
  container.innerHTML = "";

  const list = exercises.filter(
    (ex) => activeMuscleFilter === "all" || ex.group === activeMuscleFilter
  );

  list.forEach((ex) => {
    const card = document.createElement("div");
    card.className = "ex-card";
    const name = currentLang === "ar" ? ex.name_ar : ex.name_en;
    const desc = currentLang === "ar" ? ex.desc_ar : ex.desc_en;
    card.innerHTML = `
      <h3>${name}</h3>
      <span class="ex-sets">${ex.sets}</span>
      <p>${desc}</p>
    `;
    container.appendChild(card);
  });
}

/* ============================================
   NUTRITION TIPS RENDERING
   ============================================ */
function renderNutrition() {
  const container = document.getElementById("nutrition-grid");
  container.innerHTML = "";

  nutritionTips.forEach((tip) => {
    const card = document.createElement("div");
    card.className = "nut-card";
    const title = currentLang === "ar" ? tip.title_ar : tip.title_en;
    const text = currentLang === "ar" ? tip.text_ar : tip.text_en;
    card.innerHTML = `
      <span class="icon">${tip.icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    `;
    container.appendChild(card);
  });
}

/* ============================================
   COACH SERVICES RENDERING
   ============================================ */
function renderCoachServices() {
  const container = document.getElementById("coach-grid");
  container.innerHTML = "";

  coachServices.forEach((service) => {
    const card = document.createElement("div");
    card.className = "coach-card";
    const title = currentLang === "ar" ? service.title_ar : service.title_en;
    const text = currentLang === "ar" ? service.text_ar : service.text_en;
    card.innerHTML = `
      <span class="icon">${service.icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    `;
    container.appendChild(card);
  });
}

/* ============================================
   EVENT LISTENERS FOR LANGUAGE BUTTONS
   ============================================ */
document.getElementById("btn-ar").addEventListener("click", () => setLanguage("ar"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

/* ============================================
   INITIAL RENDER
   ============================================ */
renderExerciseFilters();
renderExercises();
renderNutrition();
renderCoachServices();

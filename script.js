"use strict";
const container = document.querySelector(".main-container");
const fillterBtn = document.querySelector(".title-access-fillter");
const sortBtn = document.querySelector(".title-access-sort");
const optionsFillter = document.querySelector(".fillter");
const optionsSort = document.querySelector(".sort");
const goBack = document.querySelector(".back");
const main = document.querySelector(".main");
const getChild = document.querySelector(".getchild");
const userAccess = document.querySelector(".user-access");
const lightAndDarkBtn = document.querySelector(".light-dark-icon");
const header = document.querySelector(".header");
let userSearch = document.querySelector(".input-search");

let allCountries;
let countryDataInScreen = [];

//header
const body = document.querySelector("body");
const headerMain = document.createElement("div");
body.prepend(headerMain);
headerMain.classList.add("header");
headerMain.style.width = "100%";
headerMain.style.height = "3.5rem";
headerMain.style.backgroundColor = "var(--color-elements)";
const question = document.createElement("h2");
question.textContent = "Where in the world?";
headerMain.append(question);
const moonBtn = document.createElement("img");
moonBtn.src = "img/moon.png";
headerMain.append(moonBtn);
// moonBtn.classList.add("light-dark-icon");
moonBtn.setAttribute("onclick", "handeleLightAndDark()");
moonBtn.style.marginTop = "0.3rem";
moonBtn.style.width = "1.2rem";
moonBtn.style.cursor = "pointer";

//-----------------------
const createCard = function (data) {
  countryDataInScreen.push(data);
  const infoCounty = document.createElement("div");
  container.append(infoCounty);
  infoCounty.setAttribute("onclick", "renderDetailsCountry(event)");
  infoCounty.classList.add("getchild");
  infoCounty.style.width = "15rem";
  infoCounty.style.height = "17.5rem";
  infoCounty.style.marginBottom = "2.2rem";
  infoCounty.classList.add("info-country");
  const imgFlag = document.createElement("img");
  imgFlag.src = `${data.flags.png}`;
  imgFlag.style.height = "8.5rem";
  infoCounty.append(imgFlag);
  const infoCountryText = document.createElement("div");
  infoCounty.append(infoCountryText);
  imgFlag.style.width = "100%";
  const nameCountry = document.createElement("h4");
  nameCountry.textContent = `${data.name.common}`;
  nameCountry.style.marginBottom = "0.6rem";
  infoCountryText.append(nameCountry);
  infoCountryText.classList.add("info-country");
  const population = document.createElement("p");
  population.style.marginBottom = "0.5rem";
  population.textContent = `Population : ${data.population}`;
  infoCountryText.append(population);
  const region = document.createElement("p");
  region.style.marginBottom = "0.5rem";
  region.textContent = `Region: ${data.region}`;
  infoCountryText.append(region);
  const capital = document.createElement("p");
  capital.textContent = `Capital: ${data.capital[0]}`;
  infoCountryText.append(capital);
};

//CountryDetails
const countryDetails = function (data) {
  const languagesToArr = Object.values(data.languages);
  console.log(languagesToArr);
  const currenciesToArr = Object.values(data.currencies);
  console.log(currenciesToArr);
  const containerDetail = document.createElement("div");
  containerDetail.style.marginRight = "auto";
  containerDetail.style.marginLeft = "auto";
  container.append(containerDetail);
  const containerBtnBack = document.createElement("div");
  containerBtnBack.style.width = "100%";
  containerBtnBack.style.height = "3rem";
  containerBtnBack.style.marginBottom = "2rem";
  containerDetail.append(containerBtnBack);
  const textBack = document.createElement("p");
  textBack.textContent = "← back";
  textBack.classList.add("back-btn");
  textBack.setAttribute("onclick", "goToHome()");
  containerBtnBack.append(textBack);
  const infoCountryDetails = document.createElement("div");
  infoCountryDetails.classList.add("detail-container");
  containerDetail.append(infoCountryDetails);
  const imgContryDetail = document.createElement("img");
  imgContryDetail.classList.add("img-detail");
  imgContryDetail.style.marginRight = "10%";
  imgContryDetail.style.marginBottom = "15%";
  imgContryDetail.src = `${data.flags.png}`;
  infoCountryDetails.append(imgContryDetail);
  const infoContryText = document.createElement("div");
  infoCountryDetails.append(infoContryText);
  const nameCountryDtail = document.createElement("h2");
  nameCountryDtail.style.marginBottom = "1rem";
  nameCountryDtail.textContent = `${data.name.common}`;
  infoContryText.append(nameCountryDtail);
  const topLevelDomain = document.createElement("p");
  topLevelDomain.style.marginBottom = "0.5rem";
  topLevelDomain.textContent = `Native name :${data.name.common}`;
  infoContryText.append(topLevelDomain);
  const population = document.createElement("p");
  population.style.marginBottom = "0.5rem";
  population.textContent = `Population : ${data.population}`;
  infoContryText.append(population);
  const currencies = document.createElement("p");
  currencies.style.marginBottom = "0.5rem";
  currencies.textContent = `Currencies : ${currenciesToArr[0].name}`;
  infoContryText.append(currencies);
  const regionDetail = document.createElement("p");
  regionDetail.style.marginBottom = "0.5rem";
  regionDetail.textContent = `Region Detail : ${data.region}`;
  infoContryText.append(regionDetail);
  const languages = document.createElement("p");
  languages.style.marginBottom = "0.5rem";
  languages.textContent = `Languages :${languagesToArr}`;
  infoContryText.append(languages);
  const subRegion = document.createElement("p");
  subRegion.style.marginBottom = "0.5rem";
  subRegion.textContent = `Sub Region :${data.subregion}`;
  infoContryText.append(subRegion);
  const capitalDetail = document.createElement("p");
  capitalDetail.style.marginBottom = "0.5rem";
  capitalDetail.textContent = `Capital: ${data.capital[0]}`;
  infoContryText.append(capitalDetail);
  if (!data.borders) return;
  const border = document.createElement("span");
  border.style.marginBottom = "0.5rem";
  border.textContent = `Border :`;
  infoContryText.append(border);
  const nameBorder1 = document.createElement("span");
  nameBorder1.textContent = `${data.borders[0]}`;
  infoContryText.append(nameBorder1);
  const nameBorder2 = document.createElement("span");
  nameBorder2.textContent = `${data.borders[1]}`;
  infoContryText.append(nameBorder2);
  const nameBorder3 = document.createElement("span");
  nameBorder3.textContent = `${data.borders[2]}`;
  infoContryText.append(nameBorder3);
};
function handelError() {
  header.classList.add("hidden");
  userAccess.classList.add("hidden");
  const titleErr = document.createElement("h4");
  titleErr.textContent = "Something went wrong, please try again!";
  container.append(titleErr);
}
//get countries from region
const getCountrysFromRegion = async function (region) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    for (let i = 0; i < 8; i++) {
      createCard(data[i]);
    }
  } catch (err) {
    handelError();
  }
};
getCountrysFromRegion("america");

//display items fillter
fillterBtn.addEventListener("mouseover", function () {
  optionsFillter.classList.toggle("hidden");
});
//hidden items fillter
optionsFillter.addEventListener("mouseleave", function () {
  optionsFillter.classList.add("hidden");
});
//display option sort
sortBtn.addEventListener("mouseover", function () {
  optionsSort.classList.toggle("hidden");
  optionsFillter.classList.add("hidden");
});
//hidden items sort
optionsSort.addEventListener("mouseleave", function () {
  optionsSort.classList.add("hidden");
});

//section fillter
optionsFillter.addEventListener("click", function (e) {
  countryDataInScreen = [];
  const regionName = e.target.textContent;
  const editRegionName = regionName[0].toLowerCase() + regionName.slice(1);
  console.log(editRegionName);
  container.textContent = "";
  getCountrysFromRegion(editRegionName);
  optionsFillter.classList.add("hidden");
});
//get 1 contry info
const getOneCountry = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    console.log(data);
    countryDetails(data[0]);
  } catch (err) {
    handelError();
  }
};
// getOneCountry("usa");
//all country
const getAllCountries = async function () {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    console.log(data);
    allCountries = data;
  } catch (err) {
    handelError();
  }
};
getAllCountries();

//search
userSearch.addEventListener("keyup", function (e) {
  let userSearchValue = userSearch.value;
  const editUserSearchValue =
    userSearchValue.slice(0, 1).toUpperCase() + userSearch.value.slice(1);
  console.log(editUserSearchValue);
  let country;
  const findCountry = allCountries.forEach((c, i) => {
    if (c.name.common.includes(editUserSearchValue)) {
      country = c;
      container.textContent = "";
      goBack.classList.remove("hidden");
    }
  });
  createCard(country);
  if (userSearchValue === "") {
    countryDataInScreen = [];
    getCountrysFromRegion("asia");
    goBack.classList.add("hidden");
  }
});
//go back
goBack.addEventListener("click", function (e) {
  container.innerHTML = "";
  getCountrysFromRegion("america");
  userSearch.value = "";
  goBack.classList.add("hidden");
});

//sort
optionsSort.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  if (e.target.textContent === "Name") {
    let sortName = countryDataInScreen.sort((a, b) => {
      if (a.name.common > b.name.common) return 1;
      if (b.name.common > a.name.common) return -1;
    });
    container.innerHTML = "";
    countryDataInScreen = [];
    for (let i = 0; i < 8; i++) {
      createCard(sortName[i]);
    }
  }
  if (e.target.textContent === "Population") {
    let sortPopulation = countryDataInScreen.sort(
      (a, b) => b.population - a.population
    );
    container.innerHTML = "";
    countryDataInScreen = [];
    for (let i = 0; i < 8; i++) {
      createCard(sortPopulation[i]);
    }
  }
  if (e.target.textContent === "Area") {
    let sortArea = countryDataInScreen.sort((a, b) => b.area - a.area);
    container.innerHTML = "";
    countryDataInScreen = [];
    for (let i = 0; i < 8; i++) {
      createCard(sortArea[i]);
    }
  }
});
//light and dark
function handeleLightAndDark() {
  document.querySelector("html").classList.toggle("dark-mode");
}
// page details
function renderDetailsCountry(event) {
  const findCountry =
    event.target.closest(".getchild").children[1].children[0].innerHTML;
  const editFindCountry = findCountry[0].toLowerCase() + findCountry.slice(1);
  console.log(editFindCountry);
  container.innerHTML = "";
  userAccess.classList.add("hidden");
  container.style.paddingTop = "4rem";
  userSearch.value = "";
  getOneCountry(editFindCountry);
}
renderDetailsCountry();
//go to home
function goToHome() {
  container.innerHTML = "";
  goBack.classList.add("hidden");
  container.style.paddingTop = "0.5rem";
  userAccess.classList.remove("hidden");
  for (let i = 0; i < 8; i++) {
    createCard(countryDataInScreen[i]);
  }
}

const addBtns = document.querySelectorAll(".add-btn:not(.solid)");
const saveItemBtns = document.querySelectorAll(".solid");
const addItemContainers = document.querySelectorAll(".add-container");
const addItems = document.querySelectorAll(".add-item");

//Item Lists
const itemLists = document.querySelectorAll(".drag-item-list");
const backLogList = document.getElementById(".backlog-list");
const progressList = document.getElementById(".progress-list");
const completeList = document.getElementById(".complete-list");
const onHoldList = document.getElementById(".on-hold-list");

// Initialise Arrays
let backLogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [];

// Get data from the local storage if available or set default if not
function getSavedColumns() {
  if (localStorage.getItem("backlogItems")) {
    backLogListArray = JSON.parse(localStorage.backLogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backLogListArray = ["Release the course", "Sit back and relax"];
    progressListArray = ["Work on projects", "Listen to music"];
    completeListArray = ["Being Cool", "Getting stuff done"];
    onHoldListArray = ["Being uncool"];
  }
}
getSavedColumns();
updateSavedColumns();

// Set local storage arrays
function updateSavedColumns() {
  listArrays = [
    backLogListArray,
    progressListArray,
    completeListArray,
    onHoldListArray,
  ];
  const arrayNames = ["backLog", "progress", "complete", "onHold"];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(
      `${arrayName}Items`,
      JSON.stringify(listArrays[index])
    );
  });
  //   localStorage.setItem("backlogItems", JSON.stringify(backLogListArray));
  //   localStorage.setItem("progressItems", JSON.stringify(progressListArray));
  //   localStorage.setItem("completeItems", JSON.stringify(completeListArray));
  //   localStorage.setItem("onHoldItems", JSON.stringify(onHoldListArray));
}

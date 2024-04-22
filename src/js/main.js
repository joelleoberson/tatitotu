var checkAllTrigger = document.querySelector(".check-all");
var checkboxes = document.querySelectorAll(".checkbox");

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};

checkAllTrigger.addEventListener("click", checkAll);

var uncheckAllTrigger = document.querySelector(".uncheck-all");

var uncheckAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

uncheckAllTrigger.addEventListener("click", uncheckAll);

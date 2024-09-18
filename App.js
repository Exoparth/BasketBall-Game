let Ta2Btn = document.querySelectorAll("button")[0];
let head1 = document.querySelectorAll("h1")[0];
let Ta3Btn = document.querySelectorAll("button")[1];
let Tb2Btn = document.querySelectorAll("button")[2];
let head2 = document.querySelectorAll("h1")[1];
let Tb3Btn = document.querySelectorAll("button")[3];
let FinalScore = document.querySelectorAll("button")[4];
let count = 0;
let count1 = 0;
Ta2Btn.addEventListener("click", () => {
  count = count + 2;
  head1.innerHTML = count;
});
Ta3Btn.addEventListener("click", () => {
  count = count + 3;
  head1.innerHTML = count;
});
Tb2Btn.addEventListener("click", () => {
  count1 = count1 + 2;
  head2.innerHTML = count1;
});
Tb3Btn.addEventListener("click", () => {
  count1 = count1 + 3;
  head2.innerHTML = count1;
});

FinalScore.addEventListener("click", () => {
  if (count > count1) {
    FinalScore.innerHTML = "Team ASHU Won";
  } else if (count == count1) {
    FinalScore.innerHTML = "Match Draw";
  } else {
    FinalScore.innerHTML = "Team PARTHU Won";
  }
  count = 0;
  count1 = 0;
  head1.innerHTML = count;
  head2.innerHTML = count1;
  setTimeout(res, 1500);
  function res() {
    FinalScore.innerHTML = "Finish The Match";
  }
});

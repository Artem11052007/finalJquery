document.documentElement.style.height = '100%';
document.body.style.cssText = `
          background-image: url('https://perevodpravo.ru/uploads/blog/%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BC%D0%B5%D1%87%D1%82%D0%B02-min.jpg');
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center;
            `;     
const polCart = document.createElement('div');
document.body.append(polCart);
const element2 = document.createElement('div');
polCart.append(element2);
const stat = document.createElement('div');
polCart.append(stat);
const zbig = document.createElement('div');
polCart.append(zbig);
const relod = document.createElement('a'); 
relod.textContent = "Почати спочатку"; 
relod.style.cssText = `
  display: inline-block;
  padding: 10px 18px;
  font-size: 18px;
  background-color: #370075ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

relod.onclick = () => {
  location.reload(); 
};
polCart.append(relod);
$(element2).addClass("element2");
$(".element2").attr({
style: "width: 300px;height:300px; background-color: white;border:1px solid blue;border-radius:20px;"
});
$(stat).addClass("stat");
$(".stat").append("<a>Статистика</a>");
$(".stat").css({
color: "blue",
fontSize: "20px",
 display: "flex",
  flexDirection: "column",
  alignItems: "center"
});
$(zbig).addClass("zbig");
const vir = $("<p>Вірно: <span id='trueCount'>0</span></p>").css({
  color: "green",
  fontSize: "20px"
});
const nevir = $("<p>Невірно: <span id='falseCount'>0</span></p>").css({
  color: "red",
  fontSize: "20px"
});
$(".zbig").append(vir, nevir);
const input = $("<input>").addClass("enter") 
  .css({
    border: "3px solid blue",
    borderRadius: "5px",
    width: "250px",
    height:"35px",
    marginTop:" 10px",
    fontSize: "18px",
    fontWeight: "bold" 
  });
$(".stat").before(input); 
$(".enter").attr("placeholder", "Текст ...") 
const btnPrev = $('<button>&#8592;</button>');
const pages = $("<p><span id='pagesCount'>1</span>/10</p>")
const btnNext = $('<button>&#8594;</button>');
$(".enter").before(btnPrev, btnNext,pages, "<br>");
$(polCart).css({
  backgroundColor:"white",
  borderRadius:"20px",
width:"350px",
height:"auto",
position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding:"10px"
});
$("button").wrapAll('<div class="btn-container"></div>');
$(".btn-container , .zbig").css({
   display: "flex",
  justifyContent: "space-between",
  marginTop:"10px",
  width: "280px"
});
$(element2).append('<div class="words"></div>');
const vubir = $('<div>Виберіть рівень складності: </div>')
$(element2).before(vubir);
const blok = $('<div></div>')
$(vubir).after(blok);
const esaylev = $('<label><input type="radio" name="level" value="easy"> Легкий</label>')
$(blok).append(esaylev);
const mediumlev = $('<label><input type="radio" name="level" value="medium"> Середній</label>')
$(blok).append(mediumlev);
const hardlev = $('<label><input type="radio" name="level" value="hard"> Важкий</label>')
$(blok).append(hardlev);

let words = [];
$("input[name='level']").on("change", function () {
  let level = $(this).val();
  let cards = [];

  switch (level) {
    case "easy":
      cards = [
        {name: "Апатія", name2: "Apathy"},
        {name: "Позов", name2: "Claim"},
        {name: "Пекло", name2: "Hell"},
        {name: "Свобода", name2: "Freedom"},
        {name: "Мужність", name2: "Guts"},
        {name: "Репетиція", name2: "Rehearsal"},
        {name: "Невдача", name2: "Failure"},
        {name: "Вплив", name2: "Influence"},
        {name: "Негаразди", name2: "Adversity"},
        {name: "Мотивація", name2: "Motivation"}
      ];
      break;

    case "medium":
      cards = [
        {name: "Переконання", name2: "Belief"},
        {name: "Винахід", name2: "Invention"},
        {name: "Взаємодія", name2: "Interaction"},
        {name: "Керівництво", name2: "Leadership"},
        {name: "Співчуття", name2: "Compassion"},
        {name: "Проживати", name2: "Reside"},
        {name: "Підтримувати", name2: "Maintain"},
        {name: "Сумніватися", name2: "Hesitate"},
        {name: "Розрізняти", name2: "Discern"},
        {name: "Полегшити", name2: "Alleviate"}
      ];
      break;

    case "hard":
      cards = [
        {name: "Усвідомлення", name2: "Awareness"},
        {name: "Розчарування", name2: "Disappointment"},
        {name: "Зобов’язання", name2: "Commitment"},
        {name: "Надійність", name2: "Reliability"},
        {name: "Удосконалення", name2: "Refinement"},
        {name: "Підлабузник", name2: "Sycophant"},
        {name: "Випадковість", name2: "Serendipity"},
        {name: "Ставка", name2: "Bid"},
        {name: "Заголовок", name2: "Heading"},
        {name: "Щедрий", name2: "Profuse"}
      ];
      break;
  }
  let shuffled = cards.sort(() => Math.random() - 0.5);
  let currentIndex = 0;
  let trueCount = 0;
  let falseCount = 0;

  $(".element2").text(shuffled[currentIndex].name2).css({
    width: "300px",
    height: "300px",
    backgroundColor: "white",
    border: "1px solid blue",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    fontWeight: "bold"
  });

  $(".element2").off("click").on("click", function () {
    const inputValue = $(".enter").val().trim();
    const correctWord = shuffled[currentIndex].name;

    if (inputValue === "") return;

    if (inputValue === correctWord) {
      trueCount++;
      $("#trueCount").text(trueCount);
    } else {
      falseCount++;
      $("#falseCount").text(falseCount);
    }

    if (currentIndex === shuffled.length - 1) {
      const procent = (trueCount / shuffled.length) * 100;
      let message = "";
      if (procent === 100) message = "Євген Олександрович одобрює.";
      else if (procent >= 70) message = "Добре, проте не дуже.";
      else message = "Скачай Duolingo та не позорся!";
      $(".stat").append(`<p id="endMessage" style="color: purple; font-weight: bold; margin-top:10px;">${message}</p>`);
    }
  });

  $(btnNext).on("click", function () {
    if ($(".enter").val() !== "" && currentIndex < shuffled.length - 1) {
      currentIndex++;
      $(".element2").text(shuffled[currentIndex].name2);
      $("#pagesCount").text(currentIndex + 1); 
    }
  });

  $(btnPrev).on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      $(".element2").text(shuffled[currentIndex].name2);
      $("#pagesCount").text(currentIndex + 1);
    }
  });
});
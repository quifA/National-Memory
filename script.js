const questions = [
  {q:"متى تأسست المملكة العربية السعودية؟", options:["1932","1945","1950"], answer:0},
  {q:"ما اسم البرنامج السعودي الذي يهدف لتطوير المدن الذكية؟", options:[" مدرستي"," توكلنا"," نيوم"], answer:2},
  {q:"ما رمز السيفين والنخلة؟", options:["القوة والرخاء","السلام","الحرية"], answer:0},
  {q:"ما العاصمة السعودية؟", options:["الرياض","جدة","مكة"], answer:0},
  {q:"ما اسم مشروع الطاقة المتجددة الضخم الذي تنفذه المملكة في نيوم؟", options:["مشروع الطاقة الشمسية","مشروع الهيدروجين الأخضر","مشروع الرياح"], answer:1},
  {q:"أول قمر صناعي سعودي أُطلق في سنة؟", options:["1985","1995","2000"], answer:0},
  {q:"ما اسم الشركة السعودية المتخصصة في البيانات والذكاء الإصطناعي التي تأسست لدعم رؤية 2030؟", options:["علم","كلاسيرا","سدايا"], answer:2},
  {q:"كم عدد مناطق المملكة؟", options:["13","10","15"], answer:0},
  {q:"اليوم الوطني السعودي أي يوم؟", options:["23 سبتمبر","22 فبراير","1 يناير"], answer:0},
  {q:"من مؤسس المملكة؟", options:["الملك عبدالعزيز","الملك سعود","الملك فهد"], answer:0}
];

let current = 0, score = 0;

function startQuiz(){
  document.getElementById('start').classList.remove('active');
  document.getElementById('quiz').classList.add('active');
  loadQuestion();
}

function loadQuestion(){
  document.getElementById('questionCounter').textContent = `السؤال ${current+1} من ${questions.length}`;
  const q = questions[current];
  document.getElementById('questionText').textContent = q.q;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = "";
  q.options.forEach((opt,i)=>{
    const btn = document.createElement('div');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = ()=>selectOption(btn,i);
    optionsDiv.appendChild(btn);
  });
  document.getElementById('nextBtn').style.display = "none";
}

function selectOption(btn,index){
  const q = questions[current];
  const all = document.querySelectorAll('.option');
  all.forEach(o=>o.onclick=null);
  if(index===q.answer){
    btn.classList.add('correct');
    score++;
    document.getElementById('liveScore').textContent = score; // تحديث
  } else {
    btn.classList.add('wrong');
    all[q.answer].classList.add('correct');
  }
  document.getElementById('nextBtn').style.display = "inline-block";
}


function nextQuestion(){
  current++;
  if(current<questions.length){
    loadQuestion();
  }else{
    showResult();
  }
}

function showResult(){
  document.getElementById('quiz').classList.remove('active');
  document.getElementById('result').classList.add('active');
  document.getElementById('scoreText').textContent = `أحرزت ${score} من ${questions.length}`;
  let msg="";
  if(score>=8) msg="👏 وطنيتك عالية جدًا!";
  else if(score>=5) msg="✨ جيد جدًا، عندك معلومات حلوة عن وطنك";
  else msg="🙂 تحتاج تعرف أكثر عن وطنك!";
  document.getElementById('scoreMessage').textContent = msg;
}
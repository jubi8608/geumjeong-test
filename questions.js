/* 금정수학 학습심리검사 — 문항·채점·처방 데이터
   문구를 고치고 싶으면 이 파일의 글자만 바꾸면 됩니다.
   r: true 는 역채점 문항(그렇다일수록 점수가 낮아짐)입니다. */

var GJ_DATA = {
  scale: ["전혀 아니다", "아니다", "조금 아니다", "약간 그렇다", "그렇다", "매우 그렇다"],

  domains: [
    { key: "motive",   name: "학습동기" },
    { key: "habit",    name: "학습습관" },
    { key: "strategy", name: "학습전략" },
    { key: "emotion",  name: "학습정서" },
    { key: "env",      name: "학습환경" },
    { key: "math",     name: "수학 마음" }
  ],

  factors: [
    { key: "selfEff", name: "자기효능감", domain: "motive",
      good: "노력하면 해낼 수 있다는 믿음이 단단합니다.",
      rx: "작은 단계로 나눈 과제로 매 수업 '해냈다'는 경험을 쌓게 하고, 진도표에 성취를 눈에 보이게 기록합니다.",
      items: [
        ["마음먹고 노력하면 어려운 공부도 해낼 수 있다."],
        ["새로운 내용을 배워도 결국 이해할 수 있을 거라고 생각한다."],
        ["나는 공부를 잘하는 편이 못 된다고 느낀다.", true],
        ["시험을 준비하면 내가 목표한 점수를 받을 수 있다고 믿는다."]
      ] },
    { key: "intrinsic", name: "내재동기", domain: "motive",
      good: "알아 가는 것 자체를 즐기는 힘이 있습니다.",
      rx: "개념이 실제로 쓰이는 장면과 원리 탐구 문제로 '왜?'를 먼저 던지고, 스스로 발견하는 활동을 늘립니다.",
      items: [
        ["새로운 것을 알게 되면 재미있다."],
        ["누가 시키지 않아도 궁금한 것은 찾아본다."],
        ["공부는 해야 하니까 억지로 하는 것이다.", true],
        ["어려운 문제를 풀어냈을 때 뿌듯하다."]
      ] },
    { key: "goal", name: "목표의식", domain: "motive",
      good: "공부하는 이유와 목표가 분명합니다.",
      rx: "학기 목표 점수와 단원 목표를 학생과 함께 정하고, 매주 목표와 현재 위치를 함께 확인합니다.",
      items: [
        ["나는 공부를 왜 해야 하는지 알고 있다."],
        ["이번 학기에 이루고 싶은 공부 목표가 있다."],
        ["하고 싶은 일(꿈)과 지금 하는 공부가 연결되어 있다고 생각한다."],
        ["특별한 목표 없이 그냥 하루하루 공부한다.", true]
      ] },

    { key: "focus", name: "집중력", domain: "habit",
      good: "한번 앉으면 흐트러지지 않고 몰입합니다.",
      rx: "수업을 15~20분 단위의 개념→연습→확인 리듬으로 운영하고, 집중하는 시간을 단계적으로 늘려 갑니다.",
      items: [
        ["공부를 시작하면 한동안 딴짓 없이 집중한다."],
        ["수업 시간에 다른 생각을 자주 한다.", true],
        ["주변이 조금 시끄러워도 하던 공부를 계속할 수 있다."],
        ["공부하다가 금방 지루해져서 자리에서 일어난다.", true]
      ] },
    { key: "plan", name: "계획과 실천", domain: "habit",
      good: "계획을 세우고 그대로 실천하는 습관이 있습니다.",
      rx: "주간 학습 계획표를 함께 작성하고, 수업을 시작할 때 지난주 계획을 얼마나 실천했는지 확인합니다.",
      items: [
        ["공부할 내용과 시간을 미리 정해 둔다."],
        ["계획한 공부는 대부분 그날 끝낸다."],
        ["해야 할 공부를 자꾸 미룬다.", true],
        ["시험 기간 전에 미리 준비 일정을 세운다."]
      ] },
    { key: "diligence", name: "과제 성실도", domain: "habit",
      good: "맡은 과제를 끝까지 성실하게 해냅니다.",
      rx: "분량보다 완성도를 보는 과제로 조정하고, 과제마다 풀이 과정을 확인해 바로 피드백합니다.",
      items: [
        ["숙제는 빠뜨리지 않고 해 간다."],
        ["숙제를 할 때 답만 채우지 않고 제대로 풀려고 한다."],
        ["어려운 숙제는 대충 하거나 건너뛴다.", true],
        ["선생님과 한 약속(숙제, 복습)은 지키려고 노력한다."]
      ] },

    { key: "understand", name: "이해·정리 전략", domain: "strategy",
      good: "배운 내용을 자기 말로 정리하는 힘이 있습니다.",
      rx: "배운 개념을 학생이 직접 설명해 보는 '거꾸로 설명' 시간을 두고, 단원별 개념 정리 노트를 함께 만듭니다.",
      items: [
        ["배운 내용을 내 말로 다시 설명할 수 있다."],
        ["중요한 내용은 표시하거나 따로 정리한다."],
        ["새로 배운 내용을 전에 배운 것과 연결해서 생각한다."],
        ["이해가 안 돼도 그냥 외우고 넘어간다.", true]
      ] },
    { key: "review", name: "점검·복습 전략", domain: "strategy",
      good: "스스로 점검하고 복습하는 습관이 잡혀 있습니다.",
      rx: "1일·1주·1달 간격의 누적 복습 테스트로, 잊어버리기 전에 다시 꺼내 보게 합니다.",
      items: [
        ["공부한 뒤 내가 정말 아는지 스스로 확인해 본다."],
        ["배운 내용은 며칠 안에 다시 복습한다."],
        ["틀린 문제는 나중에 다시 풀어 본다."],
        ["시험 전날에 몰아서 공부하는 편이다.", true]
      ] },

    { key: "anxiety", name: "시험불안 조절", domain: "emotion",
      good: "시험 상황에서도 비교적 차분함을 유지합니다.",
      rx: "실제 시험과 같은 시간·형식의 테스트를 자주 경험하게 해 시험 상황에 익숙해지게 하고, 풀이 순서 전략을 연습합니다.",
      items: [
        ["시험 전에는 너무 긴장되어 잠을 잘 못 잔다.", true],
        ["시험지를 받으면 알던 것도 머릿속이 하얘진다.", true],
        ["시험을 볼 때 비교적 차분하게 문제를 푼다."],
        ["시험 결과가 나쁠까 봐 걱정이 많다.", true]
      ] },
    { key: "resilience", name: "실패 회복력", domain: "emotion",
      good: "실패해도 금방 다시 일어서는 힘이 있습니다.",
      rx: "결과보다 과정과 향상 폭을 칭찬하고, 시험 뒤 '다음엔 이렇게' 계획을 함께 세워 실패를 다음 단계로 연결합니다.",
      items: [
        ["시험을 망쳐도 금방 마음을 다잡는다."],
        ["실수한 뒤에는 무엇이 문제였는지 생각해 본다."],
        ["한 번 성적이 떨어지면 공부할 의욕이 사라진다.", true],
        ["잘 안 될 때도 다시 해 보면 된다고 생각한다."]
      ] },

    { key: "family", name: "가정 지원", domain: "env",
      good: "가정에서 공부를 든든하게 지원받고 있습니다.",
      rx: "정기 학습 리포트와 상담으로 학부모님과 진행 상황을 공유하고, 가정에서 도와주실 부분을 구체적으로 안내합니다.",
      items: [
        ["집에 공부에 집중할 수 있는 공간이 있다."],
        ["부모님과 공부나 학교생활에 대해 편하게 이야기한다."],
        ["공부 때문에 부모님과 자주 다툰다.", true],
        ["부모님은 내가 노력하는 것을 알아주신다."]
      ] },
    { key: "phone", name: "스마트폰 관리", domain: "env",
      good: "스마트폰 사용을 스스로 잘 조절합니다.",
      rx: "수업 중에는 휴대폰을 따로 보관하고, 집에서 공부할 때의 휴대폰 약속을 학생·학부모님과 함께 정합니다.",
      items: [
        ["공부할 때는 스마트폰을 멀리 둔다."],
        ["스마트폰 사용 시간을 스스로 조절할 수 있다."],
        ["잠깐 보려던 스마트폰을 오래 보게 된다.", true],
        ["공부 중에 알림이 오면 바로 확인한다.", true]
      ] },

    { key: "mathConf", name: "수학 자신감", domain: "math",
      good: "수학을 해낼 수 있다는 자신감이 있습니다.",
      rx: "현재 실력보다 한 단계 쉬운 문제부터 시작해 성공 경험을 쌓고, 개인별 맞춤 진도로 자신감을 되찾게 합니다.",
      items: [
        ["나는 수학을 잘할 수 있다고 생각한다."],
        ["처음 보는 수학 문제도 한번 풀어 볼 만하다고 느낀다."],
        ["수학은 머리가 좋은 사람만 잘하는 과목이다.", true],
        ["수학 시간에 질문을 받으면 자신 있게 대답할 수 있다."]
      ] },
    { key: "mathCalm", name: "수학 불안 조절", domain: "math",
      good: "수학 앞에서 긴장하지 않고 편안합니다.",
      rx: "틀려도 괜찮은 분위기에서 마음껏 질문하게 하고, 쉬운 문제부터 차근차근 올라가는 단계별 구성으로 긴장을 낮춥니다.",
      items: [
        ["수학 문제를 보면 가슴이 답답해진다.", true],
        ["수학 시험이 다른 과목 시험보다 더 무섭다.", true],
        ["모르는 수학 문제가 나와도 당황하지 않는다."],
        ["수학 시간에 틀릴까 봐 대답하기가 싫다.", true]
      ] },
    { key: "errorHandle", name: "오답 대처", domain: "math",
      good: "틀린 문제를 실력으로 바꾸는 습관이 있습니다.",
      rx: "오답 원인을 '개념·계산 실수·문제 이해'로 나눠 기록하는 오답 노트를 쓰고, 며칠 뒤 다시 풀어 확인합니다.",
      items: [
        ["틀린 문제는 왜 틀렸는지 원인을 찾아본다."],
        ["틀린 문제는 해설을 본 뒤 다시 혼자 풀어 본다."],
        ["채점하고 나면 틀린 문제는 그냥 넘어간다.", true],
        ["실수로 틀린 것과 몰라서 틀린 것을 구분한다."]
      ] },
    { key: "persist", name: "문제해결 끈기", domain: "math",
      good: "어려운 문제도 끝까지 붙잡는 끈기가 있습니다.",
      rx: "바로 답을 보여 주지 않고 힌트를 단계별로 주어, 스스로 끝까지 풀어내는 경험을 늘립니다.",
      items: [
        ["어려운 수학 문제도 쉽게 포기하지 않고 여러 방법을 시도한다."],
        ["모르는 문제가 나오면 바로 답지를 본다.", true],
        ["한 문제를 오래 고민해서 풀어 본 경험이 있다."],
        ["풀이가 길어지면 중간에 그만두고 싶어진다.", true]
      ] }
  ],

  /* 학습 성향: 좋고 나쁨 없이 A·B 중 어디에 가까운지 */
  axes: [
    { key: "S", a: "혼자 공부형", b: "함께 공부형",
      aTip: "스스로 고민할 시간을 충분히 주면 더 잘 배웁니다.",
      bTip: "질문하고 대화하며 배울 때 이해가 빨라집니다." },
    { key: "M", a: "설명 이해형", b: "실전 풀이형",
      aTip: "원리를 먼저 납득해야 문제로 넘어갑니다.",
      bTip: "직접 풀어 보면서 개념을 익힙니다." },
    { key: "P", a: "빠르게 많이", b: "천천히 정확하게",
      aTip: "속도가 강점이니 검산 습관을 함께 잡아 줍니다.",
      bTip: "정확성이 강점이니 시간 안배를 함께 연습합니다." },
    { key: "D", a: "칭찬에 힘나는 형", b: "도전에 힘나는 형",
      aTip: "작은 성취도 바로 인정해 줄 때 의욕이 오릅니다.",
      bTip: "분명한 목표와 도전 과제를 줄 때 의욕이 오릅니다." }
  ],

  styleItems: [
    { id: "s1", axis: "S", q: "모르는 문제가 생기면", a: "혼자 끝까지 붙잡고 해결해 본다", b: "친구나 선생님께 바로 물어본다" },
    { id: "s2", axis: "M", q: "새 단원을 배울 때", a: "개념 설명을 충분히 듣고 나서 문제를 풀고 싶다", b: "일단 문제부터 풀어 보며 익히고 싶다" },
    { id: "s3", axis: "P", q: "문제집을 풀 때", a: "많은 문제를 빠르게 푸는 게 좋다", b: "적은 문제라도 정확하게 푸는 게 좋다" },
    { id: "s4", axis: "D", q: "더 열심히 하게 되는 때는", a: "잘했다고 칭찬받을 때", b: "목표를 정하고 도전할 때" },
    { id: "s5", axis: "S", q: "공부가 잘 되는 때는", a: "조용히 혼자 할 때", b: "친구들과 같이 할 때" },
    { id: "s6", axis: "M", q: "공식을 외울 때", a: "왜 그렇게 되는지 알아야 외워진다", b: "문제에 여러 번 써 보면 저절로 외워진다" },
    { id: "s7", axis: "P", q: "시험을 볼 때 나는", a: "빨리 풀고 시간이 남는 편이다", b: "꼼꼼히 풀다가 시간이 부족한 편이다" },
    { id: "s8", axis: "D", q: "이런 선생님이 좋다", a: "다정하게 격려해 주시는 선생님", b: "분명한 목표를 정해 주시는 선생님" }
  ],
  styleScale: [
    { v: -2, label: "왼쪽에 아주 가까워요" },
    { v: -1, label: "왼쪽에 조금 가까워요" },
    { v: 1,  label: "오른쪽에 조금 가까워요" },
    { v: 2,  label: "오른쪽에 아주 가까워요" }
  ],

  /* 학습 유형 = 공부 방식(M) × 속도(P) */
  types: {
    "explain-slow": { name: "꼼꼼 이해형",
      desc: "원리를 납득해야 움직이고, 한 문제를 정확하게 끝내는 학생입니다.",
      tips: ["개념 설명 시간을 충분히 두고 '왜'를 짚어 줍니다.", "문제 수를 줄이는 대신 풀이 과정을 꼼꼼히 확인합니다.", "시간 제한 연습을 조금씩 더해 시험 속도를 보완합니다."] },
    "explain-fast": { name: "개념 탐구형",
      desc: "이해가 빠르고 새 개념에 흥미가 커서 진도를 빨리 나가고 싶어 하는 학생입니다.",
      tips: ["핵심 원리를 짚은 뒤 심화 문제로 도전하게 합니다.", "빠른 만큼 생기는 계산 실수를 검토 습관으로 잡습니다.", "이해한 내용을 직접 설명하게 해 깊이를 확인합니다."] },
    "practice-fast": { name: "직진 실전형",
      desc: "일단 부딪혀 보며 익히고, 많은 문제를 빠르게 소화하는 학생입니다.",
      tips: ["문제 풀이로 시작하되 틀린 문제에서 개념을 되짚어 줍니다.", "검산과 풀이 정리 습관을 함께 잡습니다.", "오답 노트로 같은 실수의 반복을 막습니다."] },
    "practice-slow": { name: "차근 연습형",
      desc: "직접 손으로 풀어 보며 익히고, 반복을 통해 실력을 단단히 쌓는 학생입니다.",
      tips: ["예제 → 유사 문제 → 응용 순서로 단계별 반복합니다.", "같은 유형을 충분히 연습한 뒤 다음으로 넘어갑니다.", "작은 성취를 자주 확인해 자신감을 키웁니다."] }
  },

  openItems: [
    { id: "o1", q: "수학에서 가장 자신 있는 단원이나 부분은?", ph: "예: 방정식, 도형 넓이 구하기", type: "text" },
    { id: "o2", q: "수학에서 가장 어렵게 느끼는 단원이나 부분은?", ph: "예: 문장제, 함수 그래프", type: "text" },
    { id: "o3", q: "평소 하루에 공부하는 시간은? (학교·학원 수업 제외)", type: "select",
      options: ["30분 미만", "30분~1시간", "1~2시간", "2~3시간", "3시간 이상"] },
    { id: "o4", q: "다음 시험에서 받고 싶은 수학 점수는?", ph: "예: 90점", type: "text" },
    { id: "o5", q: "요즘 공부하면서 가장 고민되는 점은?", ph: "자유롭게 적어 주세요", type: "textarea" },
    { id: "o6", q: "선생님께 바라는 점이 있다면? (선택)", ph: "자유롭게 적어 주세요", type: "textarea", optional: true }
  ]
};

/* 초등용 문장: 여기 적힌 문항만 초등학생에게 다르게 보입니다 (요인·채점은 같음) */
GJ_DATA.elem = {
  likert: {
    selfEff4: "단원평가를 준비하면 내가 원하는 점수를 받을 수 있다고 믿는다.",
    goal2: "올해 이루고 싶은 공부 목표가 있다.",
    goal3: "커서 하고 싶은 일(꿈)과 지금 하는 공부가 이어져 있다고 생각한다.",
    plan4: "단원평가가 있으면 며칠 전부터 미리 준비한다.",
    review4: "평가 전날에 몰아서 공부하는 편이다.",
    anxiety1: "평가가 있는 날 전에는 너무 긴장되어 잠을 잘 못 잔다.",
    anxiety2: "평가지를 받으면 알던 것도 머릿속이 하얘진다.",
    anxiety3: "평가를 볼 때 비교적 차분하게 문제를 푼다.",
    anxiety4: "평가 점수가 나쁠까 봐 걱정이 많다.",
    resilience1: "평가를 망쳐도 금방 마음을 다잡는다.",
    resilience3: "한 번 점수가 낮게 나오면 공부할 마음이 사라진다.",
    mathCalm2: "수학 시간이 다른 과목 시간보다 더 부담된다."
  },
  style: {
    s7: { q: "평가를 볼 때 나는" }
  },
  open: {
    o1: { ph: "예: 분수의 덧셈, 도형의 둘레" },
    o2: { ph: "예: 분수의 나눗셈, 비와 비율, 문장제" },
    o4: { q: "수학에서 이루고 싶은 목표는?", ph: "예: 분수 문제를 자신 있게 풀기" }
  }
};

/* 학교급에 맞는 문항 가져오기: level 이 "초등학교"면 초등용 문장으로 */
function gjIsElem(level) { return level === "초등학교"; }
function gjItemText(it, level) { return (gjIsElem(level) && GJ_DATA.elem.likert[it.id]) || it.text; }
function gjStyleItem(it, level) {
  var o = gjIsElem(level) && GJ_DATA.elem.style[it.id];
  return o ? Object.assign({}, it, o) : it;
}
function gjOpenItem(it, level) {
  var o = gjIsElem(level) && GJ_DATA.elem.open[it.id];
  return o ? Object.assign({}, it, o) : it;
}

/* 문항 아이디: 요인키 + 번호 (예: selfEff1) */
GJ_DATA.factors.forEach(function (f) {
  f.items = f.items.map(function (it, i) { return { id: f.key + (i + 1), text: it[0], r: !!it[1], factor: f.key }; });
});

/* 같은 요인 문항이 붙어 나오지 않도록 섞은 출제 순서 */
GJ_DATA.likertOrder = (function () {
  var out = [];
  for (var j = 0; j < 4; j++) {
    GJ_DATA.factors.forEach(function (f, fi) {
      var k = (fi * 5 + j * 3) % GJ_DATA.factors.length; // 영역이 번갈아 나오도록 섞기
      out.push(GJ_DATA.factors[k].items[j]);
    });
  }
  // 중복 없이 64개가 되도록 보정
  var seen = {}, res = [];
  out.forEach(function (it) { if (!seen[it.id]) { seen[it.id] = 1; res.push(it); } });
  GJ_DATA.factors.forEach(function (f) { f.items.forEach(function (it) { if (!seen[it.id]) { seen[it.id] = 1; res.push(it); } }); });
  return res;
})();

function gjLevel(score) {
  if (score >= 70) return { key: "high", label: "강점" };
  if (score >= 45) return { key: "mid", label: "보통" };
  return { key: "low", label: "관심 필요" };
}

/* 채점: answers = { likert: {id: 1~6}, style: {id: -2~2}, open: {...} } */
function gjScore(answers) {
  var L = (answers && answers.likert) || {};
  var S = (answers && answers.style) || {};
  var factors = GJ_DATA.factors.map(function (f) {
    var sum = 0, n = 0;
    f.items.forEach(function (it) {
      var v = Number(L[it.id]);
      if (v >= 1 && v <= 6) { sum += it.r ? 7 - v : v; n++; }
    });
    var mean = n ? sum / n : 3.5;
    var score = Math.round((mean - 1) / 5 * 100);
    return { key: f.key, name: f.name, domain: f.domain, score: score, level: gjLevel(score), good: f.good, rx: f.rx };
  });
  var domains = GJ_DATA.domains.map(function (d) {
    var fs = factors.filter(function (f) { return f.domain === d.key; });
    var s = Math.round(fs.reduce(function (a, f) { return a + f.score; }, 0) / fs.length);
    return { key: d.key, name: d.name, score: s, level: gjLevel(s) };
  });
  var overall = Math.round(factors.reduce(function (a, f) { return a + f.score; }, 0) / factors.length);
  var axes = {};
  GJ_DATA.axes.forEach(function (ax) { axes[ax.key] = 0; });
  GJ_DATA.styleItems.forEach(function (it) { var v = Number(S[it.id]) || 0; axes[it.axis] += v; });
  var typeKey = (axes.M < 0 ? "explain" : "practice") + "-" + (axes.P < 0 ? "fast" : "slow");
  var sorted = factors.slice().sort(function (a, b) { return b.score - a.score; });
  return {
    factors: factors, domains: domains, overall: overall, overallLevel: gjLevel(overall),
    axes: axes, typeKey: typeKey, type: GJ_DATA.types[typeKey],
    strengths: sorted.slice(0, 3),
    weak: sorted.slice(-3).reverse(),
    focus: factors.filter(function (f) { return f.score < 60; }).sort(function (a, b) { return a.score - b.score; }).slice(0, 5)
  };
}

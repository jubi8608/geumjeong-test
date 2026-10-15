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

/* ───────────────── 학부모 양육 스타일 검사 ─────────────────
   burden: true 인 요인은 점수가 높을수록 아이에게 부담이 될 수 있는 신호,
   false(자율 지지)는 높을수록 아이에게 도움이 되는 신호입니다. */
var GJ_PARENT = {
  factors: [
    { key: "worry", name: "자녀 학업 걱정", burden: true,
      tip: "걱정이 클수록 아이 앞에서는 점수보다 준비 과정을 이야기해 주세요.",
      items: [["아이 성적 때문에 걱정되어 잠을 설친 적이 있다."], ["아이가 다른 아이들보다 뒤처질까 봐 불안하다."], ["시험 기간이 되면 아이보다 내가 더 긴장된다."], ["아이 성적에 대해 비교적 느긋한 편이다.", true]] },
    { key: "pressure", name: "공부·과제 압박", burden: true,
      tip: "공부 시간과 분량은 아이와 함께 정하고, 약속을 지켰으면 더 요구하지 않기로 해 보세요.",
      items: [["아이가 쉬고 있으면 공부하라는 말이 먼저 나온다."], ["숙제를 다 했는지 매일 확인하고 재촉한다."], ["성적이 떨어지면 휴대폰·게임 등을 제한한다."], ["아이가 정한 공부량이 적어 보여도 일단 맡겨 둔다.", true]] },
    { key: "outcome", name: "결과 중심 반응", burden: true,
      tip: "시험이 끝나면 '몇 점이야?' 대신 '어떤 문제가 어려웠어?'로 대화를 시작해 보세요.",
      items: [["시험이 끝나면 점수부터 묻게 된다."], ["노력했어도 결과가 나쁘면 아쉬운 마음을 내비친다."], ["점수가 낮아도 열심히 했으면 칭찬한다.", true], ["틀린 문제를 통해 무엇을 배웠는지 묻는다.", true]] },
    { key: "compare", name: "비교하는 말", burden: true,
      tip: "다른 아이 대신 아이의 지난번 모습과 비교해 '지난번보다 이만큼 늘었네'라고 말해 주세요.",
      items: [["다른 아이의 성적을 들으면 우리 아이와 비교하게 된다."], ["형제나 친구와 비교하는 말을 한 적이 있다."], ["'누구는 벌써 어디까지 했다더라' 같은 말을 한다."], ["우리 아이만의 속도가 있다고 생각한다.", true]] },
    { key: "mathBurden", name: "부모 수학 부담", burden: true,
      tip: "수학 질문은 학원에 맡기셔도 괜찮아요. '엄마(아빠)도 수학 못했어' 같은 말은 피해 주세요.",
      items: [["나는 학창 시절 수학이 어렵고 싫었다."], ["아이가 수학 문제를 물어보면 부담스럽다."], ["아이 앞에서 '나도 수학 못했어'라고 말한 적이 있다."], ["아이와 수학 이야기를 하는 것이 즐겁다.", true]] },
    { key: "autonomy", name: "자율 지지", burden: false,
      tip: "하루 할 일 중 한두 가지는 아이가 직접 정하게 하고, 지켰을 때 인정해 주세요.",
      items: [["공부 계획을 아이가 스스로 세우게 한다."], ["아이 의견을 듣고 공부 방법을 함께 정한다."], ["아이의 공부를 하나하나 직접 관리한다.", true], ["아이가 실수해도 스스로 해결할 기회를 준다."]] }
  ],
  axes: [
    { key: "M", a: "믿고 맡기는 형", b: "꼼꼼히 챙기는 형" },
    { key: "F", a: "과정을 보는 형", b: "결과를 보는 형" },
    { key: "C", a: "격려하는 형", b: "목표를 주는 형" },
    { key: "Q", a: "빠른 진도 선호", b: "탄탄한 기초 선호" }
  ],
  styleItems: [
    { id: "p1", axis: "M", q: "아이 공부는", a: "아이를 믿고 스스로 하게 둔다", b: "계획부터 하나하나 챙겨 준다" },
    { id: "p2", axis: "F", q: "시험이 끝나면", a: "어떤 문제가 어려웠는지 먼저 묻는다", b: "몇 점인지 먼저 묻는다" },
    { id: "p3", axis: "C", q: "아이를 움직이게 하는 말은", a: "'잘하고 있어' 같은 격려", b: "'이번엔 여기까지 해 보자' 같은 목표" },
    { id: "p4", axis: "Q", q: "학원에 더 바라는 것은", a: "진도를 빨리 나가는 것", b: "기초를 탄탄히 다지는 것" },
    { id: "p5", axis: "M", q: "아이가 숙제를 안 했을 때", a: "스스로 책임지게 둔다", b: "옆에서 끝낼 때까지 확인한다" },
    { id: "p6", axis: "F", q: "아이를 칭찬할 때는", a: "노력하는 모습을 칭찬한다", b: "좋은 결과를 칭찬한다" },
    { id: "p7", axis: "C", q: "아이가 실수했을 때", a: "괜찮다고 다독인다", b: "다음엔 어떻게 할지 짚어 준다" },
    { id: "p8", axis: "Q", q: "선행 학습은", a: "할 수 있을 때 많이 해 두는 게 좋다", b: "현재 학년을 확실히 하는 게 먼저다" }
  ],
  types: {
    "trust-process": { name: "든든한 응원형", desc: "아이를 믿고 기다리며, 노력하는 과정을 알아봐 주시는 부모님입니다.",
      tips: ["지금처럼 과정을 칭찬해 주세요. 아이의 자신감을 키우는 가장 큰 힘입니다.", "아이가 방향을 잃을 땐 한 주 목표 한 가지를 함께 정해 주세요."] },
    "trust-result": { name: "목표 제시형", desc: "아이에게 맡기되 분명한 결과를 기대하시는 부모님입니다.",
      tips: ["결과가 기대에 못 미칠 때도 아이가 노력한 부분을 먼저 짚어 주세요.", "목표는 아이와 함께 정하면 책임감이 더 커집니다."] },
    "manage-process": { name: "세심한 코치형", desc: "하나하나 챙기며 아이의 공부 과정을 함께하시는 부모님입니다.",
      tips: ["아이가 스스로 해 볼 기회를 조금씩 늘려 주세요.", "확인은 '결과 확인' 위주로 하고, 과정은 아이에게 맡겨 보세요."] },
    "manage-result": { name: "열정 매니저형", desc: "꼼꼼히 관리하고 성과를 중요하게 보시는 부모님입니다.",
      tips: ["관리와 기대가 압박으로 느껴지지 않도록 칭찬의 비율을 늘려 주세요.", "공부 계획은 아이와 함께 세우고, 지킨 날은 꼭 인정해 주세요."] }
  },
  openItems: [
    { id: "po1", q: "자녀의 가장 큰 강점은 무엇인가요?", ph: "예: 성실해요, 이해가 빨라요", type: "textarea" },
    { id: "po2", q: "자녀 공부와 관련해 가장 걱정되는 점은?", ph: "자유롭게 적어 주세요", type: "textarea" },
    { id: "po3", q: "금정수학에 바라는 점이 있다면? (선택)", ph: "자유롭게 적어 주세요", type: "textarea", optional: true }
  ],
  /* 부모 요인 ↔ 아이 요인 연결과 해석 문구
     risk: 부모 쪽 신호(burden 요인 60점 이상, 자율 지지는 45점 미만) / child: 아이 점수 50점 미만 */
  links: [
    { p: "worry", c: "anxiety", title: "부모님 학업 걱정 ↔ 아이 시험불안",
      both: "부모님의 걱정이 아이의 시험 긴장으로 이어지고 있을 수 있어요. 시험 전후로는 점수 대신 '준비한 만큼 하면 돼'라고 말해 주세요.",
      parent: "아이는 시험 앞에서 비교적 차분해요. 부모님의 걱정이 아이에게 전해지지 않도록 지금처럼 지켜봐 주세요.",
      child: "부모님은 담담하신데 아이 스스로 시험을 많이 긴장해요. 학원에서 실전 연습으로 긴장을 낮출게요. 집에서는 준비 과정을 칭찬해 주세요.",
      none: "부모님과 아이 모두 시험을 비교적 편안하게 받아들이고 있어요." },
    { p: "mathBurden", c: "mathCalm", title: "부모 수학 부담 ↔ 아이 수학 불안",
      both: "부모님이 느끼시는 수학 부담이 아이에게도 비슷하게 나타나요. '나도 수학 못했어'는 아이에게 '나도 못할 거야'로 들릴 수 있어요.",
      parent: "부모님은 수학이 부담스러우셨지만 아이는 수학 앞에서 편안해요. 수학 이야기는 긍정적으로 해 주세요.",
      child: "아이가 수학에 긴장을 많이 해요. 함께 풀 때 틀린 걸 바로 지적하기보다 '어떻게 생각했어?'라고 물어봐 주세요.",
      none: "부모님과 아이 모두 수학을 편안하게 대하고 있어요." },
    { p: "outcome", c: "resilience", title: "결과 중심 반응 ↔ 아이 실패 회복력",
      both: "점수 중심의 반응이 아이의 실패 회복력에 영향을 주고 있을 수 있어요. 시험 뒤 첫마디를 '어떤 문제가 어려웠어?'로 바꿔 보세요.",
      parent: "아이는 실패해도 잘 일어서는 편이에요. 결과만 보는 반응이 이어지면 이 힘이 약해질 수 있으니 과정도 함께 봐 주세요.",
      child: "부모님은 과정을 보시는데 아이는 실패에 쉽게 낙담해요. 작은 성공을 함께 축하해 주시면 큰 도움이 돼요.",
      none: "과정을 보는 분위기 속에서 아이도 실패를 잘 딛고 일어서고 있어요." },
    { p: "pressure", c: "intrinsic", title: "공부·과제 압박 ↔ 아이 내재동기",
      both: "재촉하는 분위기 속에서 아이는 공부를 '해야 하는 일'로 느끼고 있어요. 공부량은 아이와 함께 정하고, 지켰으면 더 요구하지 않는 약속을 추천드려요.",
      parent: "아이는 아직 배우는 재미를 잃지 않았어요. 압박이 커지면 이 재미가 줄 수 있으니 지금의 균형을 지켜 주세요.",
      child: "압박이 크지 않은데도 아이가 공부 재미를 느끼지 못하고 있어요. 학원에서 성취 경험으로 흥미를 끌어올릴게요.",
      none: "편안한 분위기 속에서 아이가 배우는 재미를 느끼고 있어요." },
    { p: "autonomy", c: "plan", title: "자율 지지 ↔ 아이 계획과 실천",
      both: "아이가 스스로 계획해 본 경험이 부족해요. 처음엔 하루 할 일 한두 가지만 아이가 정하게 하고, 지켰을 때 인정해 주세요.",
      parent: "아이는 스스로 계획하고 실천하는 힘이 있어요. 조금 더 믿고 맡겨 보셔도 좋아요.",
      child: "자율을 존중해 주시는데 아이는 아직 계획 습관이 잡히지 않았어요. 학원에서 주간 계획표로 습관을 함께 잡을게요.",
      none: "믿고 맡겨 주시는 덕분에 아이가 스스로 계획하고 실천하고 있어요." }
  ],
  /* 성향 궁합: 아이 성향 축 ↔ 부모 성향 축 (같은 쪽이면 match) */
  fits: [
    { c: "D", p: "C", title: "힘이 나는 말", left: "칭찬·격려", right: "목표·도전",
      match: "아이가 힘을 얻는 방식과 부모님의 말 방식이 잘 맞아요.",
      ca: "아이는 칭찬에 힘을 얻는데, 부모님은 목표를 먼저 주시는 편이에요. 목표 이야기 전에 잘한 점을 한 가지 먼저 말해 주세요.",
      cb: "아이는 분명한 목표와 도전에서 힘을 얻어요. 격려와 함께 '이번 주엔 여기까지' 같은 구체적인 목표를 주세요." },
    { c: "P", p: "Q", title: "공부 속도", left: "빠르게 많이", right: "천천히 탄탄히",
      match: "공부 속도에 대한 아이의 성향과 부모님의 기대가 비슷해요.",
      ca: "아이는 빠르게 많이 하고 싶어 하고, 부모님은 기초를 중시하세요. 학원에서 빠른 풀이 뒤에 개념 점검을 꼭 붙일게요.",
      cb: "아이는 천천히 정확하게 하는 편인데, 부모님은 빠른 진도를 기대하세요. 재촉하면 실수가 늘 수 있어 정확도부터 잡고 속도를 올릴게요." },
    { c: "S", p: "M", title: "혼자 ↔ 함께", left: "스스로 / 맡김", right: "함께 / 챙김",
      match: "", matchA: "스스로 하려는 아이를 믿고 맡겨 주시는 좋은 조합이에요.", matchB: "함께할 때 힘이 나는 아이에게 부모님의 관심이 잘 맞아요. 혼자 하는 시간도 조금씩 늘려 주세요.",
      ca: "아이는 혼자 해결하고 싶어 하는데 부모님은 꼼꼼히 챙기시는 편이에요. 간섭으로 느끼지 않도록 결과만 확인하고 과정은 맡겨 보세요.",
      cb: "아이는 함께할 때 더 잘하는 편이에요. 가끔 '오늘 뭐 배웠어?' 하고 물어봐 주시는 것만으로도 큰 힘이 돼요." }
  ]
};
GJ_PARENT.factors.forEach(function (f) {
  f.items = f.items.map(function (it, i) { return { id: f.key + (i + 1), text: it[0], r: !!it[1], factor: f.key }; });
});
GJ_PARENT.likertOrder = (function () {
  var out = [];
  for (var j = 0; j < 4; j++) GJ_PARENT.factors.forEach(function (f) { out.push(f.items[j]); });
  return out;
})();

function gjParentLevel(score, burden) {
  if (burden) {
    if (score >= 60) return { key: "low", label: "높음" };
    if (score >= 40) return { key: "mid", label: "보통" };
    return { key: "high", label: "낮음" };
  }
  if (score >= 60) return { key: "high", label: "높음" };
  if (score >= 45) return { key: "mid", label: "보통" };
  return { key: "low", label: "낮음" };
}

function gjParentScore(answers) {
  var L = (answers && answers.likert) || {}, S = (answers && answers.style) || {};
  var factors = GJ_PARENT.factors.map(function (f) {
    var sum = 0, n = 0;
    f.items.forEach(function (it) { var v = Number(L[it.id]); if (v >= 1 && v <= 6) { sum += it.r ? 7 - v : v; n++; } });
    var score = Math.round(((n ? sum / n : 3.5) - 1) / 5 * 100);
    var risk = f.burden ? score >= 60 : score < 45;
    return { key: f.key, name: f.name, burden: f.burden, score: score, level: gjParentLevel(score, f.burden), risk: risk, tip: f.tip };
  });
  var axes = {};
  GJ_PARENT.axes.forEach(function (a) { axes[a.key] = 0; });
  GJ_PARENT.styleItems.forEach(function (it) { axes[it.axis] += Number(S[it.id]) || 0; });
  var typeKey = (axes.M < 0 ? "trust" : "manage") + "-" + (axes.F < 0 ? "process" : "result");
  return { factors: factors, axes: axes, typeKey: typeKey, type: GJ_PARENT.types[typeKey],
    risks: factors.filter(function (f) { return f.risk; }).sort(function (a, b) { return (b.burden ? b.score : 100 - b.score) - (a.burden ? a.score : 100 - a.score); }) };
}

/* 학생·학부모 짝짓기
   1) 자녀 이름 + 학교 구분 + 학교 + 학년이 모두 같으면 같은 아이 후보
   2) 후보가 여러 명(동명이인)이면 보호자 연락처가 같은 쪽을 고름
   → 어머니 번호로 아이가 검사하고 아버지가 다른 번호로 검사해도 연결됩니다. */
function gjNorm(s) { return String(s || "").replace(/\s+/g, "").replace(/^'/, ""); }
function gjDigits(s) { return String(s || "").replace(/\D/g, ""); }
function gjSameChild(a, b) {
  if (!a || !b) return false;
  return gjNorm(a.name) === gjNorm(b.name) && gjNorm(a.school) === gjNorm(b.school) && gjNorm(a.grade) === gjNorm(b.grade) && gjNorm(a.level) === gjNorm(b.level);
}
/* 후보 기록들(rec.info 포함) 중 가장 알맞은 하나: 연락처 일치 우선, 그다음 최신 */
function gjPickPair(target, candidates) {
  var list = candidates.filter(function (c) { return gjSameChild(c.info, target); });
  if (list.length > 1) {
    var ph = gjDigits(target.parentPhone);
    var byPhone = list.filter(function (c) { return ph && gjDigits(c.info.parentPhone) === ph; });
    if (byPhone.length) list = byPhone;
  }
  return list.sort(function (a, b) { return new Date(b.submittedAt) - new Date(a.submittedAt); })[0] || null;
}

/* ───────────────── 원장님 전용 상담 가이드 문구 (PDF에는 나오지 않음) ───────────────── */
var GJ_GUIDE = {
  ask: {
    selfEff: "아이가 '난 안 돼', '못하겠어' 같은 말을 자주 하나요?",
    intrinsic: "아이가 스스로 궁금해서 찾아보는 분야가 있나요?",
    goal: "아이와 공부 목표나 꿈에 대해 이야기해 보신 적 있나요?",
    focus: "집에서 공부할 때 한 번에 얼마나 앉아 있나요?",
    plan: "숙제나 공부를 미루는 편인가요? 주로 언제 하나요?",
    diligence: "숙제를 대충 하거나 빠뜨리는 일이 있나요?",
    understand: "배운 내용을 물어보면 자기 말로 설명하나요, 외운 대로 말하나요?",
    review: "시험 공부는 보통 언제부터 시작하나요?",
    anxiety: "시험 전날이나 당일 아침에 아이 모습이 어떤가요?",
    resilience: "시험을 못 봤을 때 아이 반응은 어떤가요?",
    family: "집에서 공부 이야기를 꺼내면 분위기가 어떤가요?",
    phone: "공부할 때 휴대폰은 어디에 두나요?",
    mathConf: "아이가 수학을 언제부터 어려워했나요?",
    mathCalm: "수학 문제를 풀다 막히면 아이가 어떻게 하나요?",
    errorHandle: "틀린 문제를 다시 풀어 보는 편인가요?",
    persist: "어려운 문제가 나오면 얼마나 붙잡고 있나요?"
  },
  plan: {
    selfEff: "한 단계 쉬운 문제로 '해냈다'는 경험부터",
    intrinsic: "원리 탐구 문제로 흥미 끌어올리기",
    goal: "학기 목표와 주간 목표를 함께 세우기",
    focus: "15~20분 단위 수업 리듬으로 집중 시간 늘리기",
    plan: "주간 계획표 작성과 실천 확인",
    diligence: "분량보다 완성도 중심 과제와 풀이 확인",
    understand: "배운 개념을 직접 설명하는 시간",
    review: "1일·1주·1달 누적 복습 테스트",
    anxiety: "실전과 같은 형식의 테스트로 시험 적응",
    resilience: "과정 칭찬과 시험 뒤 '다음엔 이렇게' 계획",
    family: "정기 리포트로 가정과 진행 상황 공유",
    phone: "수업 중 휴대폰 보관, 가정 약속 정하기",
    mathConf: "현재 실력에 맞춘 개인 진도로 자신감 회복",
    mathCalm: "틀려도 괜찮은 분위기와 단계별 문제 구성",
    errorHandle: "원인을 나눠 쓰는 오답 노트와 재풀이",
    persist: "힌트를 단계별로 주며 끝까지 풀어 보기"
  },
  /* 부모 신호를 부드럽게 꺼내는 말 */
  soft: {
    worry: "그만큼 아이를 아끼셔서 걱정도 크신 것 같아요. 그런데 아이는 그 걱정을 생각보다 크게 느끼고 있을 수 있어요.",
    pressure: "정말 열심히 챙겨 주시는 게 느껴져요. 다만 아이가 공부를 '시켜서 하는 일'로 느끼기 시작하면 학년이 올라갈수록 힘들어져요.",
    outcome: "점수가 중요한 건 당연해요. 다만 시험 뒤 첫마디가 점수면 아이는 다음 시험을 더 두려워하게 돼요.",
    compare: "주변 이야기를 많이 들으시니 비교가 되실 수밖에 없죠. 아이에게는 '지난번의 나'와 비교하는 말이 훨씬 힘이 돼요.",
    mathBurden: "수학은 저희가 맡을게요. 집에서는 '모르면 학원에서 물어보자' 한마디면 충분해요.",
    autonomy: "지금은 하나하나 챙겨 주시는 게 필요한 시기일 수 있어요. 다만 조금씩 아이에게 맡기는 연습을 저희와 함께 해 보면 좋겠어요."
  }
};

/* 결과로 상담 가이드 만들기 */
function gjGuide(r, open, pr) {
  var g = { opener: [], asks: [], soft: [], plan: [], cautions: [], quote: "" };
  var cf = {}; r.factors.forEach(function (f) { cf[f.key] = f; });
  var top = r.strengths[0], low = r.focus.length ? r.focus : r.weak;
  g.opener.push("강점으로 시작: '" + top.name + "' " + top.score + "점. " + top.good);
  if (low[0]) g.opener.push("핵심 과제 하나만 짚기: '" + low[0].name + "' " + low[0].score + "점.");
  g.opener.push("학습 유형 '" + r.type.name + "': " + r.type.desc);
  low.slice(0, 3).forEach(function (f) { g.asks.push(GJ_GUIDE.ask[f.key]); });
  if (open && open.o5) g.quote = open.o5;
  low.slice(0, 3).forEach(function (f) { g.plan.push(f.name + " → " + GJ_GUIDE.plan[f.key]); });
  if (pr) {
    pr.risks.slice(0, 2).forEach(function (f) { g.soft.push({ name: f.name, text: GJ_GUIDE.soft[f.key] }); });
  }
  if (cf.anxiety.score < 50 || cf.mathCalm.score < 50) g.cautions.push("시험·수학 긴장이 큰 아이예요. 아이 앞에서 점수·등수 이야기는 줄이고, 결과지는 학부모님과 먼저 보세요.");
  if (cf.resilience.score < 50) g.cautions.push("실패 이야기에 쉽게 위축되는 아이예요. 약점보다 강점을 먼저, 많이 말해 주세요.");
  if (cf.selfEff.score < 50 || cf.mathConf.score < 50) g.cautions.push("자신감이 낮은 상태예요. 상담 중 문제를 풀게 한다면 쉬운 것부터 시작하세요.");
  if (pr && cf.intrinsic.score < 50 && pr.factors.filter(function (f) { return f.key === "pressure"; })[0].risk) g.cautions.push("공부 압박이 이미 큰 상태라 숙제 양을 늘리는 제안은 피하는 게 좋아요.");
  if (!g.cautions.length) g.cautions.push("전반적으로 안정적인 아이예요. 강점을 먼저 짚고, 목표를 함께 세우는 이야기로 이어 가세요.");
  return g;
}

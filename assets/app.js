/* 蝕刻玻璃杯：點解會變霧？
   按已核準教學設計實作。科學模型勿擅自改動。
   核準用語：｢漫反射｣只指反射光線向多方散開；穿過時被打散只說｢把光線打散｣。
   玻璃畫成薄片；穿過光線較齊、大致向前；學生畫面不標角度、不教反射／折射定律。
*/
(function () {
  "use strict";

  var T = {
    zh: {
      ext: "延伸學習／非中一必須學習成果",
      langBtn: "English",
      teacherNotes: "教師說明",
      closeNotes: "關閉教師說明",
      safetyAll: "本應用只解釋現象，不是實驗步驟。真實蝕刻藥劑非常危險，不可以在課室或家中仿做，也不可自行購買或混和藥劑。",
      title: "蝕刻玻璃杯：點解會變霧？",
      startLead: "先睇現象，再用模擬比較平滑同粗糙嘅玻璃表面，點樣把光線打散。",
      pickMode: "請先選模式：",
      modeTeacher: "教師示範",
      modeTeacherHint: "投影用。可隱藏提示，題目可先作答再顯示解釋。",
      modeStudent: "學生自學",
      modeStudentHint: "自行操作模擬同答題，即時看回饋。不需登入。",
      start: "開始",
      next: "下一頁",
      back: "上一頁",
      replay: "重播動畫",
      fire: "射出光線",
      reset: "重設",
      roughness: "粗糙程度",
      toggleHints: "顯示提示",
      hideHints: "隱藏提示",
      showExplain: "顯示解釋",
      retryQ: "重做本題",
      retryAll: "重做題目",
      backSim: "返回模擬",
      restart: "返回開始",
      step: "畫面",
      bQ: "有花紋的位置為什麼看起來霧霧的？",
      bClear: "沒有蝕刻的位置：較平滑",
      bEtched: "有蝕刻花紋：較粗糙，霧矇矇，有時發白",
      cTitle: "表面點樣變？",
      cCap: "發生化學變化",
      cNote: "本應用不會示範真實步驟，亦不可仿做。這裏只抽象顯示：表面由較平滑變成粗糙。",
      dTitle: "光線怎樣反射和穿過？",
      dLeft: "平滑玻璃",
      dRight: "粗糙（蝕刻）玻璃",
      dNote1: "部分光線會穿過玻璃。表面把光線打散，所以看起來霧矇矇，有時發白，但不是完全不透光。",
      dNote2: "呢度只係定性演示，不教反射定律、折射定律或公式。",
      dNote3: "「漫反射」只用來指反射光線向多方散開。穿過時被打散，只說「把光線打散」，不要叫做漫反射。",
      legendIn: "射向表面（粗實線）",
      legendRef: "反射出去（實線箭嘴）",
      legendTr: "穿過玻璃（虛線）",
      seeSmooth: "較易見到反光，也較能看清楚景物。光線較齊地反射和穿過。",
      seeRough: "看起來霧矇矇，影像不清楚，有時發白。反射光線向多方散開；穿過的光線也被打散，但仍會穿過。",
      eTitle: "連回杯子",
      eBody: "杯上蝕刻花紋的位置較粗糙，光線被打散，所以看起來霧矇矇、影像不清楚，有時發白。沒有蝕刻的位置較平滑，較易見到反光，也較能看清楚景物。部分光線仍會穿過，不是完全不透光。",
      fTitle: "簡單題目",
      fLead: "只作課堂鞏固，不計正式分數，不是可呈交習作。",
      extTag: "延伸題",
      qOf: "第 {n} 題，共 4 題",
      check: "查看回饋",
      correct: "啱",
      incorrect: "未啱",
      hintThen: "先睇提示，再睇正確解釋。",
      gTitle: "記住",
      gBody: "本應用只解釋「點解蝕刻花紋看起來霧霧的」。真實藥劑非常危險，不可以在課室或家中仿做。若見到已做好的蝕刻杯，只准觀看，不要接觸任何蝕刻藥劑。",
      notesTitle: "教師說明（不投影給學生也可）",
      cupBehindClear: "較能看清楚後面景物",
      cupBehindFrost: "後面景物不清楚",
      qs: [
        {
          q: "蝕刻後，杯上有花紋的位置為什麼看起來霧霧的？",
          opts: [
            "表面變粗糙，把光線打散；部分光線仍會穿過，所以霧矇矇，有時發白，但不是完全不透光。",
            "玻璃變成完全不透光。",
            "光線全部消失了，所以變暗。"
          ],
          ans: 0,
          why: [
            "正確。表面變粗糙會把光線打散；部分光線仍會穿過，所以霧矇矇、有時發白，但不是完全不透光。",
            "不是完全不透光；部分光線仍會穿過，只是被打散。",
            "光線沒有全部消失；蝕刻花紋有時更會發白，不是單純變暗。"
          ]
        },
        {
          q: "平滑表面同粗糙表面，光線有什麼分別？",
          opts: [
            "平滑處光線較齊地反射和穿過，較易見到反光或看清楚景物；粗糙處光線向多方散開，看起來霧矇矇，影像不清楚，有時發白。",
            "兩種表面光線的走法完全一樣。",
            "只有平滑面會反射或讓光線穿過；粗糙面完全不反射，也不透光。"
          ],
          ans: 0,
          why: [
            "正確。平滑處光線較齊；粗糙處向多方散開，但仍有反射，也有光線穿過。",
            "粗糙程度不同，光線散開程度也不同。",
            "粗糙面也會反射，也有光線穿過，只是方向較散。"
          ]
        },
        {
          q: "在本應用的蝕刻情境中，表面變粗糙主要是因為什麼？",
          ext: true,
          opts: [
            "發生了化學變化。",
            "只是把顏色塗在杯子上。",
            "杯子自己冷卻後就會變霧。"
          ],
          ans: 0,
          why: [
            "正確。這裏講的是化學蝕刻，不是用砂紙磨花。本應用不教藥劑或製法。",
            "塗顏色不會令表面變成這樣的粗糙來打散光線。",
            "不是單純冷卻造成。"
          ]
        },
        {
          q: "可以在家中或課室自己用藥劑蝕刻玻璃杯嗎？",
          opts: [
            "不可以。真實藥劑非常危險。本應用只解釋現象，不是實驗步驟。",
            "可以，只要小心一點就可以跟應用來做。",
            "可以用食醋或清潔劑代替，一樣安全。"
          ],
          ans: 0,
          why: [
            "正確。不可仿做。應用沒有、也不會提供步驟。",
            "不可仿做。應用沒有、也不會提供步驟。",
            "不可自行試做或改用其他藥劑來模仿蝕刻。"
          ]
        }
      ]
    },
    en: {
      ext: "Extension — not a required S1 learning outcome",
      langBtn: "繁體中文",
      teacherNotes: "Teacher notes",
      closeNotes: "Close teacher notes",
      safetyAll: "This app only explains the phenomenon. It is not a procedure. Real etching chemicals are very dangerous. Do not try this in the classroom or at home, and do not buy or mix chemicals yourself.",
      title: "Why does an etched glass cup look frosty?",
      startLead: "First look at the phenomenon, then compare how smooth and rough glass surfaces scatter light.",
      pickMode: "Please choose a mode:",
      modeTeacher: "Teacher demonstration",
      modeTeacherHint: "For projection. You can hide hints and reveal explanations after the class answers.",
      modeStudent: "Student self-study",
      modeStudentHint: "Explore the simulation and questions with instant feedback. No sign-in.",
      start: "Start",
      next: "Next",
      back: "Back",
      replay: "Replay animation",
      fire: "Send light rays",
      reset: "Reset",
      roughness: "Roughness",
      toggleHints: "Show hints",
      hideHints: "Hide hints",
      showExplain: "Show explanation",
      retryQ: "Try this question again",
      retryAll: "Retry questions",
      backSim: "Back to the simulation",
      restart: "Back to start",
      step: "Screen",
      bQ: "Why does the patterned (etched) part look frosty?",
      bClear: "Not etched: smoother",
      bEtched: "Etched pattern: rougher, frosty, sometimes whitish",
      cTitle: "How does the surface change?",
      cCap: "A chemical change takes place",
      cNote: "This app does not show real steps, and you must not copy them. It only shows, in an abstract way, that the surface changes from smoother to rougher.",
      dTitle: "How is light reflected and how does it go through?",
      dLeft: "Smooth glass",
      dRight: "Rough (etched) glass",
      dNote1: "Some light still goes through the glass. The surface scatters the light, so it looks frosty and may look whitish, but it is not completely opaque.",
      dNote2: "This is a qualitative demonstration only. It does not teach the laws of reflection or refraction, or formulae.",
      dNote3: "“Diffuse reflection” refers only to reflected light spreading in many directions. Light that is scattered as it goes through is simply “scattered light,” not called diffuse reflection.",
      legendIn: "Towards the surface (thick solid line)",
      legendRef: "Reflected (solid arrow)",
      legendTr: "Through the glass (dashed line)",
      seeSmooth: "It is easier to see a reflection, and easier to see objects clearly. Rays stay fairly together as they reflect and go through.",
      seeRough: "It looks frosty, the image is unclear, and it may look whitish. Reflected rays spread out in many directions; rays that go through are also scattered, but some light still passes through.",
      eTitle: "Back to the cup",
      eBody: "The etched pattern is rougher, so light is scattered and that area looks frosty, the image is unclear, and it may look whitish. The unetched parts are smoother, so it is easier to see reflections and to see objects clearly. Some light still goes through — the glass is not completely opaque.",
      fTitle: "Short questions",
      fLead: "For class practice only. No formal mark, and this is not work to be submitted.",
      extTag: "Extension question",
      qOf: "Question {n} of 4",
      check: "See feedback",
      correct: "Correct",
      incorrect: "Not yet",
      hintThen: "A hint first, then the full explanation.",
      gTitle: "Remember",
      gBody: "This app only explains why an etched pattern looks frosty. Real chemicals are very dangerous. Do not try this in the classroom or at home. If you look at a finished etched cup, only look — do not touch any etching chemical.",
      notesTitle: "Teacher notes (you may keep this off the projector)",
      cupBehindClear: "The scene behind is clearer",
      cupBehindFrost: "The scene behind is unclear",
      qs: [
        {
          q: "After etching, why does the patterned part of the cup look frosty?",
          opts: [
            "The surface becomes rough and scatters light; some light still goes through, so it looks frosty and may look whitish, but it is not completely opaque.",
            "The glass becomes completely opaque.",
            "All the light disappears, so it becomes darker."
          ],
          ans: 0,
          why: [
            "Correct. A rough surface scatters light; some light still goes through, so it looks frosty and may look whitish, but it is not completely opaque.",
            "It is not completely opaque; some light still goes through, but it is scattered.",
            "The light does not all disappear; etched patterns often look whitish, not simply darker."
          ]
        },
        {
          q: "How do light rays differ on a smooth surface and a rough surface?",
          opts: [
            "On a smooth area, rays stay fairly together as they reflect and go through, so it is easier to see a reflection or to see objects clearly. On a rough area, rays spread out in many directions; it looks frosty, the image is unclear, and it may look whitish.",
            "Light travels in exactly the same way on both surfaces.",
            "Only a smooth surface reflects light or lets light through; a rough surface does not reflect and is opaque."
          ],
          ans: 0,
          why: [
            "Correct. Rays stay fairly together on the smooth side; they spread out on the rough side, but there is still reflection and some light still goes through.",
            "Different roughness means the rays spread out differently.",
            "A rough surface also reflects light and lets some light through; the directions are just more spread out."
          ]
        },
        {
          q: "In this etching situation, why does the surface become rough?",
          ext: true,
          opts: [
            "A chemical change takes place.",
            "Colour is only painted onto the cup.",
            "The cup simply turns frosty when it cools."
          ],
          ans: 0,
          why: [
            "Correct. This is about chemical etching, not rubbing with sandpaper. This app does not teach the chemicals or how to do it.",
            "Painted colour would not make this kind of rough surface that scatters light.",
            "It is not caused simply by cooling."
          ]
        },
        {
          q: "May you etch a glass cup yourself at home or in the classroom with chemicals?",
          opts: [
            "No. Real chemicals are very dangerous. This app only explains the phenomenon; it is not a procedure.",
            "Yes, if you are careful you can follow the app and do it.",
            "You can use vinegar or a cleaner instead; that is just as safe."
          ],
          ans: 0,
          why: [
            "Correct. Do not try it. The app does not, and will not, give steps.",
            "Do not try it. The app does not, and will not, give steps.",
            "Do not try it yourself, and do not substitute other chemicals to copy etching."
          ]
        }
      ]
    }
  };

  var state = {
    lang: "zh",
    mode: null,
    screen: "A",
    roughness: 70,
    raysOn: false,
    showHints: true,
    qIndex: 0,
    chosen: null,
    revealed: false,
    notesOpen: false,
    animT: 0,
    animId: null
  };

  var screens = ["A", "B", "C", "D", "E", "F", "G"];

  function t() { return T[state.lang]; }
  function $(id) { return document.getElementById(id); }

  function applyLang() {
    var d = t();
    document.documentElement.lang = state.lang === "zh" ? "zh-HK" : "en";
    $("extBanner").textContent = d.ext;
    $("langBtn").textContent = d.langBtn;
    $("notesBtn").textContent = state.notesOpen ? d.closeNotes : d.teacherNotes;
    $("safetyBar").textContent = d.safetyAll;
    $("titleA").textContent = d.title;
    $("leadA").textContent = d.startLead;
    $("pickMode").textContent = d.pickMode;
    $("modeTeacherLabel").textContent = d.modeTeacher;
    $("modeTeacherHint").textContent = d.modeTeacherHint;
    $("modeStudentLabel").textContent = d.modeStudent;
    $("modeStudentHint").textContent = d.modeStudentHint;
    $("btnStart").textContent = d.start;
    $("bTitle").textContent = d.bQ;
    $("capClear").textContent = d.bClear;
    $("capEtched").textContent = d.bEtched;
    $("cTitle").textContent = d.cTitle;
    $("cCap").textContent = d.cCap;
    $("cNote").textContent = d.cNote;
    $("btnReplay").textContent = d.replay;
    $("dTitle").textContent = d.dTitle;
    $("capSmooth").textContent = d.dLeft;
    $("capRough").textContent = d.dRight;
    $("seeSmooth").textContent = d.seeSmooth;
    $("seeRough").textContent = d.seeRough;
    $("dNote1").textContent = d.dNote1;
    $("dNote2").textContent = d.dNote2;
    $("dNote3").textContent = d.dNote3;
    $("legIn").textContent = d.legendIn;
    $("legRef").textContent = d.legendRef;
    $("legTr").textContent = d.legendTr;
    $("btnFire").textContent = d.fire;
    $("btnReset").textContent = d.reset;
    $("labRough").textContent = d.roughness;
    $("btnHints").textContent = state.showHints ? d.hideHints : d.toggleHints;
    $("eTitle").textContent = d.eTitle;
    $("eBody").textContent = d.eBody;
    $("fTitle").textContent = d.fTitle;
    $("fLead").textContent = d.fLead;
    $("gTitle").textContent = d.gTitle;
    $("gBody").textContent = d.gBody;
    $("btnBackSim").textContent = d.backSim;
    $("btnRetryAll").textContent = d.retryAll;
    $("btnRestart").textContent = d.restart;
    $("notesTitle").textContent = d.notesTitle;
    $("btnCloseNotes").textContent = d.closeNotes;
    document.querySelectorAll("[data-nav='back']").forEach(function (b) { b.textContent = d.back; });
    document.querySelectorAll("[data-nav='next']").forEach(function (b) { b.textContent = d.next; });
    renderQuestion();
    updateSteps();
    drawCups();
    drawSurface(1);
    drawBothSims();
  }

  function showScreen(id) {
    state.screen = id;
    document.querySelectorAll(".screen").forEach(function (s) {
      s.classList.toggle("active", s.id === "screen" + id);
    });
    if (id === "C") startSurfaceAnim();
    if (id === "D") drawBothSims();
    if (id === "B" || id === "E") drawCups();
    updateSteps();
  }

  function updateSteps() {
    var i = screens.indexOf(state.screen);
    document.querySelectorAll(".steps").forEach(function (el) {
      el.textContent = t().step + " " + (i + 1) + " / " + screens.length;
    });
    $("teacherTools").classList.toggle("hidden", state.mode !== "teacher");
    $("notesBtn").classList.toggle("hidden", state.mode !== "teacher");
    $("hintBlock").classList.toggle("hidden", !state.showHints);
  }

  function toggleLang() {
    state.lang = state.lang === "zh" ? "en" : "zh";
    applyLang();
  }

  /* —— 畫面 B／E：杯子對照（蝕刻處發白，不是變暗） —— */
  function drawCup(svg, etched) {
    var gid = "glass-" + svg.id;
    var fid = "frost-" + svg.id;
    var scene = etched
      ? '<g opacity="0.35"><rect x="86" y="70" width="28" height="20" fill="#6aa84f"/><polygon points="100,48 90,70 110,70" fill="#38761d"/></g>'
      : '<g><rect x="86" y="70" width="28" height="20" fill="#6aa84f"/><polygon points="100,48 90,70 110,70" fill="#38761d"/></g>';
    var frost = "";
    if (etched) {
      frost = '<path d="M58 50c8 6 6 16 0 22c8 4 10 16 2 24c10 2 8 16 0 22c8 6 6 14-2 20" fill="none" stroke="#f7f4ee" stroke-width="7" stroke-linecap="round" opacity="0.95"/>' +
        '<path d="M72 46c6 8 4 16-1 22c7 5 8 14 1 22c8 3 7 15 0 20c6 5 5 14-1 18" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.85"/>' +
        '<rect x="48" y="40" width="40" height="115" fill="url(#' + fid + ')" opacity="0.55"/>';
    }
    var shine = etched ? "" :
      '<ellipse cx="56" cy="70" rx="5" ry="16" fill="#ffffff" opacity="0.7"/>';
    svg.innerHTML =
      '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="0">' +
      '<stop offset="0" stop-color="#d7eef7"/><stop offset="1" stop-color="#9fc5d8"/></linearGradient>' +
      '<linearGradient id="' + fid + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity="0.2"/><stop offset="1" stop-color="#f3f0e8" stop-opacity="0.7"/></linearGradient></defs>' +
      '<ellipse cx="100" cy="175" rx="42" ry="8" fill="#e2d8c8"/>' +
      scene +
      '<path d="M48 40 q0-12 16-14h24q16 2 16 14v110q0 18-28 22h-16q-28-4-28-22z" fill="url(#' + gid + ')" stroke="#4a6a7a" stroke-width="2.5"/>' +
      '<ellipse cx="72" cy="28" rx="26" ry="8" fill="none" stroke="#4a6a7a" stroke-width="2.5"/>' +
      shine + frost;
  }

  function drawCups() {
    drawCup($("cupClear"), false);
    drawCup($("cupEtched"), true);
    drawCup($("cupClear2"), false);
    drawCup($("cupEtched2"), true);
  }

  /* —— 畫面 C：抽象表面由平滑變粗糙，不准出現藥劑或步驟 —— */
  function startSurfaceAnim() {
    if (state.animId) cancelAnimationFrame(state.animId);
    state.animT = 0;
    function tick() {
      state.animT += 0.012;
      if (state.animT > 1) state.animT = 1;
      drawSurface(state.animT);
      if (state.animT < 1) state.animId = requestAnimationFrame(tick);
    }
    state.animId = requestAnimationFrame(tick);
  }

  function drawSurface(p) {
    var c = $("surfaceCanvas");
    if (!c) return;
    var ctx = c.getContext("2d");
    var w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#f7fbff";
    ctx.fillRect(0, 0, w, h);
    var mid = h * 0.55;
    ctx.beginPath();
    ctx.moveTo(40, mid);
    var bumps = 18;
    for (var i = 0; i <= bumps; i++) {
      var x = 40 + (w - 80) * (i / bumps);
      var amp = 22 * p;
      /* 固定形狀，只改變幅度，避免看起來像隨機塗抹 */
      var y = mid - amp * Math.sin(i * 1.7) * (i % 2 === 0 ? 1 : 0.55);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w - 40, h - 20);
    ctx.lineTo(40, h - 20);
    ctx.closePath();
    ctx.fillStyle = "#c5dbe6";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#1a1a1a";
    ctx.stroke();
    ctx.fillStyle = "#1a1a1a";
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(t().cCap, w / 2, 36);
  }

  /* —— 畫面 D：薄玻璃；入射／反射／穿過同時畫出 —— */
  function drawSim(canvas, roughness, isRight) {
    var ctx = canvas.getContext("2d");
    var w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    /* 背景天空 */
    ctx.fillStyle = "#e7f2fa";
    ctx.fillRect(0, 0, w, h);

    /* 後方景物（樹）。粗糙時影像不清楚，但不要畫成變暗。 */
    var blur = roughness / 100;
    drawTree(ctx, w * 0.78, h * 0.62, 1 - blur * 0.15, blur);

    /* 薄玻璃（薄片，不是厚玻璃磚） */
    var gx = w * 0.46;
    var gTop = 36;
    var gBot = h - 28;
    var gThick = 10; /* 薄片 */
    if (roughness > 5) {
      /* 發白霜霧畫在薄片兩側，玻璃本身仍是薄片，不是厚磚 */
      ctx.fillStyle = "rgba(255,255,255," + (0.28 + blur * 0.4) + ")";
      ctx.fillRect(gx - 10, gTop, gThick + 20, gBot - gTop);
      ctx.strokeStyle = "rgba(255,255,255," + (0.6 + blur * 0.35) + ")";
      ctx.lineWidth = 2.5;
      for (var k = 0; k < 8; k++) {
        ctx.beginPath();
        var yy = gTop + 12 + k * ((gBot - gTop - 24) / 8);
        ctx.moveTo(gx - 8, yy);
        ctx.quadraticCurveTo(gx + gThick / 2, yy + 8, gx + gThick + 8, yy + 2);
        ctx.stroke();
      }
    } else {
      ctx.fillStyle = "rgba(170, 210, 230, 0.35)";
      ctx.fillRect(gx, gTop, gThick, gBot - gTop);
      /* 平滑處較易見反光 */
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.fillRect(gx + 2, gTop + 20, 3, 50);
    }
    ctx.strokeStyle = "#3b5c6c";
    ctx.lineWidth = 2;
    ctx.strokeRect(gx, gTop, gThick, gBot - gTop);

    /* 光源（左上） */
    ctx.beginPath();
    ctx.arc(36, 44, 14, 0, Math.PI * 2);
    ctx.fillStyle = "#f5c518";
    ctx.fill();
    ctx.strokeStyle = "#7a5a00";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (state.raysOn) {
      drawRays(ctx, w, h, gx, gThick, roughness);
    }
  }

  function drawTree(ctx, x, y, alpha, blur) {
    ctx.save();
    ctx.globalAlpha = Math.max(0.45, alpha);
    var offsets = blur > 0.08 ? [-6 * blur, 0, 6 * blur] : [0];
    offsets.forEach(function (dx) {
      ctx.fillStyle = "#38761d";
      ctx.beginPath();
      ctx.moveTo(x + dx, y - 70);
      ctx.lineTo(x - 28 + dx, y - 10);
      ctx.lineTo(x + 28 + dx, y - 10);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#6aa84f";
      ctx.fillRect(x - 8 + dx, y - 10, 16, 28);
    });
    ctx.restore();
  }

  function drawRays(ctx, w, h, gx, gThick, roughness) {
    /* 三條平行入射線，由左上斜向右下，打在薄玻璃上。
       平滑：反射方向一致（水平分量反向、豎直分量不變），穿過大致向前。
       粗糙：反射向多方散開（可稱漫反射）；穿過也被打散，但不稱漫反射。 */
    var r = roughness / 100;
    var starts = [
      { x: 50, y: 70 },
      { x: 50, y: 100 },
      { x: 50, y: 130 }
    ];
    var vx = 0.92, vy = 0.39; /* 平行方向 */
    var lenIn = 1;

    starts.forEach(function (s, i) {
      /* 與薄玻璃左面相交 */
      var tHit = (gx - s.x) / vx;
      var hx = s.x + vx * tHit;
      var hy = s.y + vy * tHit;

      /* 入射：粗實線 */
      strokeRay(ctx, s.x, s.y, hx, hy, false, 5, true);

      /* 反射：平滑時 vx 反向；粗糙時在此基礎上散開 */
      var spread = (i - 1) * r * 0.95;
      var rvx = -vx + spread * 0.15;
      var rvy = vy + spread;
      if (r < 0.08) { rvx = -vx; rvy = vy; }
      var rl = 90 + r * 10;
      var rx = hx + rvx * rl;
      var ry = hy + rvy * rl;
      strokeRay(ctx, hx, hy, rx, ry, false, 4, true);

      /* 穿過薄片後大致向前（稍作極小橫移，避免畫成厚磚塊中的長直穿行） */
      var tSpread = (i - 1) * r * 0.42;
      var tvx = vx;
      var tvy = vy + tSpread;
      if (r < 0.08) { tvx = vx; tvy = vy; }
      var tx0 = gx + gThick;
      var ty0 = hy + vy * (gThick / vx);
      var tl = 95;
      strokeRay(ctx, tx0, ty0, tx0 + tvx * tl, ty0 + tvy * tl, true, 4, true);
    });
  }

  function strokeRay(ctx, x1, y1, x2, y2, dashed, width, arrow) {
    ctx.strokeStyle = "#b36b00";
    ctx.fillStyle = "#b36b00";
    ctx.lineWidth = width;
    ctx.setLineDash(dashed ? [10, 7] : []);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    if (arrow) {
      var a = Math.atan2(y2 - y1, x2 - x1);
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - 12 * Math.cos(a - 0.4), y2 - 12 * Math.sin(a - 0.4));
      ctx.lineTo(x2 - 12 * Math.cos(a + 0.4), y2 - 12 * Math.sin(a + 0.4));
      ctx.closePath();
      ctx.fill();
    }
  }

  function drawBothSims() {
    drawSim($("simSmooth"), 0, false);
    drawSim($("simRough"), Number(state.roughness), true);
  }

  /* —— 題目 —— */
  function renderQuestion() {
    var d = t();
    var q = d.qs[state.qIndex];
    $("qMeta").textContent = d.qOf.replace("{n}", String(state.qIndex + 1));
    $("extTag").classList.toggle("hidden", !q.ext);
    $("extTag").textContent = d.extTag;
    $("qText").textContent = q.q;
    var box = $("options");
    box.innerHTML = "";
    q.opts.forEach(function (text, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "option";
      b.textContent = String.fromCharCode(65 + i) + ".  " + text;
      b.setAttribute("aria-pressed", state.chosen === i ? "true" : "false");
      if (state.revealed && i === q.ans) b.classList.add("correct");
      if (state.revealed && state.chosen === i && i !== q.ans) b.classList.add("wrong");
      b.addEventListener("click", function () { pickOption(i); });
      box.appendChild(b);
    });
    $("btnCheck").textContent = state.mode === "teacher" && !state.revealed ? d.showExplain : d.check;
    $("btnRetryQ").textContent = d.retryQ;
    $("btnRetryQ").classList.toggle("hidden", !state.revealed);
    $("qNext").disabled = !state.revealed;
    renderFeedback();
  }

  function pickOption(i) {
    if (state.revealed && state.mode === "student") return;
    state.chosen = i;
    if (state.mode === "teacher") state.revealed = false;
    renderQuestion();
  }

  function reveal() {
    if (state.chosen === null) return;
    state.revealed = true;
    renderQuestion();
  }

  function renderFeedback() {
    var el = $("feedback");
    var d = t();
    if (!state.revealed || state.chosen === null) {
      el.className = "feedback hidden";
      el.textContent = "";
      return;
    }
    var q = d.qs[state.qIndex];
    var ok = state.chosen === q.ans;
    el.className = "feedback " + (ok ? "ok" : "bad");
    var badge = '<span class="badge">' + (ok ? d.correct : d.incorrect) + "</span>";
    function stripLead(s) {
      return s.replace(/^(正確。|Correct\.\s*)/, "");
    }
    var body = stripLead(q.why[state.chosen]);
    if (!ok) body = d.hintThen + " " + body + " " + stripLead(q.why[q.ans]);
    el.innerHTML = badge + " " + body;
  }

  function resetQuestion() {
    state.chosen = null;
    state.revealed = false;
    renderQuestion();
  }

  /* —— 事件 —— */
  function bind() {
    $("langBtn").addEventListener("click", toggleLang);
    $("btnTeacher").addEventListener("click", function () {
      state.mode = "teacher";
      state.showHints = true;
      syncModeButtons();
    });
    $("btnStudent").addEventListener("click", function () {
      state.mode = "student";
      state.showHints = true;
      syncModeButtons();
    });
    $("btnStart").addEventListener("click", function () {
      if (!state.mode) return;
      showScreen("B");
      applyLang();
    });
    $("btnHints").addEventListener("click", function () {
      state.showHints = !state.showHints;
      applyLang();
    });
    $("btnFire").addEventListener("click", function () {
      state.raysOn = true;
      drawBothSims();
    });
    $("btnReset").addEventListener("click", function () {
      state.raysOn = false;
      state.roughness = 70;
      $("roughRange").value = 70;
      drawBothSims();
    });
    $("roughRange").addEventListener("input", function (e) {
      state.roughness = Number(e.target.value);
      drawBothSims();
    });
    $("btnReplay").addEventListener("click", startSurfaceAnim);
    $("btnCheck").addEventListener("click", reveal);
    $("btnRetryQ").addEventListener("click", resetQuestion);
    $("qNext").addEventListener("click", function () {
      if (state.qIndex < 3) {
        state.qIndex += 1;
        resetQuestion();
      } else {
        showScreen("G");
      }
    });
    $("btnBackSim").addEventListener("click", function () { showScreen("D"); });
    $("btnRetryAll").addEventListener("click", function () {
      state.qIndex = 0;
      resetQuestion();
      showScreen("F");
    });
    $("btnRestart").addEventListener("click", function () { showScreen("A"); });
    $("notesBtn").addEventListener("click", function () {
      state.notesOpen = !state.notesOpen;
      $("notesPanel").classList.toggle("hidden", !state.notesOpen);
      applyLang();
    });
    $("btnCloseNotes").addEventListener("click", function () {
      state.notesOpen = false;
      $("notesPanel").classList.add("hidden");
      applyLang();
    });

    document.querySelectorAll("[data-go]").forEach(function (b) {
      b.addEventListener("click", function () {
        var go = b.getAttribute("data-go");
        if (b.id === "qBack" && state.qIndex > 0) {
          state.qIndex -= 1;
          resetQuestion();
          return;
        }
        showScreen(go);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (state.screen === "F" && !e.altKey && !e.ctrlKey) {
        var map = { a: 0, b: 1, c: 2, A: 0, B: 1, C: 2, "1": 0, "2": 1, "3": 2 };
        if (map[e.key] !== undefined) {
          pickOption(map[e.key]);
          e.preventDefault();
        }
      }
    });
  }

  function syncModeButtons() {
    $("btnTeacher").setAttribute("aria-pressed", state.mode === "teacher" ? "true" : "false");
    $("btnStudent").setAttribute("aria-pressed", state.mode === "student" ? "true" : "false");
    $("btnStart").disabled = !state.mode;
  }

  document.addEventListener("DOMContentLoaded", function () {
    bind();
    applyLang();
    showScreen("A");
  });
})();

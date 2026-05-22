const elCode = document.getElementById("code");
const elTerm = document.getElementById("terminal");

/* Pacing knobs */
const CODE_DELAY_MS = 18; // code types char-by-char
const CODE_PAUSE_MS = 450; // short breath before the terminal takes over
const LINE_DELAY_MS = 95; // terminal prints line-by-line
const FINAL_PAUSE_MS = 320; // tiny pause before the verdict

const codeText = `const system={candidate:"Federico Celia",role:"Web Engineer",status:"INITIALIZING"};

function loadProfile(name){
return{identity:name,passion:["coding","software engineering"],traits:["competitive","resilient","challenge-driven"]};
}

function updateJobMarket(){
return{demand:"high",trend:"rising",competition:"intense"};
}

function optimizeForCompany(profile,market){
return{impact:"high",timeToValue:"fast",risk:"low",fit:market.demand==="high"&&profile.traits.includes("resilient")};
}

console.log(">>> Resume loading: candidate profile...");
const profile=loadProfile(system.candidate);

console.log(">>> Updating job market search...");
const market=updateJobMarket();

console.log(">>> Optimizing for company impact...");
const optimization=optimizeForCompany(profile,market);

console.log(">>> Running final evaluation...");`;

const terminalLines = [
  {
    t: "╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗",
    c: "purple",
  },
  {
    t: "║  TERMINAL OUTPUT // RECRUITER VIEW                                                                                                                                            ║",
    c: "purple",
  },
  {
    t: "╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣",
    c: "purple",
  },

  {
    t: "║  >>> INIT: NEON_RECRUITMENT_PROTOCOL v3.1                                                                                                                                    ║",
    c: "pink",
  },
  {
    t: "║  scanlines=ON | crt_flicker=SUBTLE | noise=LOW | mode=READONLY                                                                                                               ║",
    c: "gray",
  },
  {
    t: "║  target=Federico Celia // Web Developer                                                                                                                                      ║",
    c: "cyan",
  },
  {
    t: "║                                                                                                                                                                               ║",
    c: "white",
  },

  {
    t: "║  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                                                                                                   ║",
    c: "pink",
  },
  {
    t: "║  ┃   FEDERICO CELIA // WEB DEVELOPER // CHALLENGE SEEKER   ┃                                                                                                               ║",
    c: "green",
  },
  {
    t: "║  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                                                                                                   ║",
    c: "pink",
  },
  {
    t: "║                                                                                                                                                                               ║",
    c: "white",
  },

  {
    t: "║  Web developer who loves coding and software engineering. Passionate about sport, competing, and thriving on challenges.                                                     ║",
    c: "white",
  },
  {
    t: '║  motto: "Build. Compete. Improve. Repeat."                                                                                                                                   ║',
    c: "gray",
  },
  {
    t: "║                                                                                                                                                                               ║",
    c: "white",
  },

  {
    t: "║  SKILLSTACK                                                                                                                                                                  ║",
    c: "cyan",
  },
  {
    t: "║    ▸ Frontend: HTML, CSS, JavaScript, React                                                                                                                                  ║",
    c: "green",
  },
  {
    t: "║    ▸ Backend: Node.js, Express, APIs                                                                                                                                         ║",
    c: "green",
  },
  {
    t: "║    ▸ Responsive design: mobile-first, UX-focused layouts                                                                                                                     ║",
    c: "green",
  },
  {
    t: "║                                                                                                                                                                               ║",
    c: "white",
  },

  {
    t: "║  EVIDENCE                                                                                                                                                                    ║",
    c: "cyan",
  },
  {
    t: "║    ⟐ intrinsic drive for coding → high engagement & output                                                                                                                   ║",
    c: "white",
  },
  {
    t: "║    ⟐ engineering mindset → scalable, maintainable systems                                                                                                                    ║",
    c: "white",
  },
  {
    t: "║    ⟐ seeks hard problems → rapid skill compounding                                                                                                                           ║",
    c: "white",
  },
  {
    t: "║    ⟐ competitive sports discipline → consistency under pressure                                                                                                              ║",
    c: "white",
  },
  {
    t: "║                                                                                                                                                                               ║",
    c: "white",
  },

  {
    t: "║  CANDIDATE FIT MATRIX                                                                                                                                                        ║",
    c: "cyan",
  },
  {
    t: "║  Base strength  ████████████████████████░░  93%                                                                                                                              ║",
    c: "green",
  },
  {
    t: "║  Role fit       ██████████████████████████ 100%                                                                                                                              ║",
    c: "green",
  },
  {
    t: "║  decision_rule: (base ≥ 85) && (fit ≥ 85)                                                                                                                                    ║",
    c: "gray",
  },
  {
    t: "║                                                                                                                                                                               ║",
    c: "white",
  },

  {
    t: "║  WHY THIS HIRE MAKES SENSE                                                                                                                                                   ║",
    c: "cyan",
  },
  {
    t: "║    1. Enjoys challenges → turns ambiguity into execution                                                                                                                     ║",
    c: "white",
  },
  {
    t: "║    2. Competitive sports mindset → disciplined improvement + consistency                                                                                                     ║",
    c: "white",
  },
  {
    t: "║    3. Software engineering focus → quality today, speed tomorrow                                                                                                             ║",
    c: "white",
  },
  {
    t: "║    4. Ownership + resilience → finishes the mission under pressure                                                                                                           ║",
    c: "white",
  },
  {
    t: "║                                                                                                                                                                               ║",
    c: "white",
  },

  {
    t: "║  >>> FINAL AUTHORIZATION                                                                                                                                                     ║",
    c: "pink",
  },
  {
    t: "║  ACCESS GRANTED — Perfect candidate for any challenging new role.                                                                                                            ║",
    c: "green",
  },
  {
    t: "║  session_checksum: ▓f2#-7b13-celia-fed // integrity=OK                                                                                                                       ║",
    c: "gray",
  },

  {
    t: "╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝",
    c: "purple",
  },
];

function escapeHtml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function typeCode() {
  let i = 0;
  (function tick() {
    if (i < codeText.length) {
      elCode.textContent += codeText[i++];
      setTimeout(tick, CODE_DELAY_MS);
      return;
    }
    setTimeout(startTerminal, CODE_PAUSE_MS);
  })();
}

function startTerminal() {
  elCode.hidden = true;
  elTerm.hidden = false;
  typeTerminal();
}

function typeTerminal() {
  let idx = 0;
  (function tick() {
    if (idx >= terminalLines.length) return;

    const line = terminalLines[idx++];
    elTerm.innerHTML += `<span class="${line.c}">${escapeHtml(line.t)}</span>\n`;
    elTerm.scrollTop = elTerm.scrollHeight;

    let delay = LINE_DELAY_MS;
    if (line.t.includes("FINAL AUTHORIZATION")) delay = FINAL_PAUSE_MS;

    setTimeout(tick, delay);
  })();
}

typeCode();

// Optional transfer practice. App helpers keep saving, feedback and printing consistent.
export const extensionSteps = [
  {
    "title": "The Great Simit Glitch.",
    "short": "Build a new word bank",
    "lesson": 5,
    "optional": true,
    "minutes": 10,
    "group": "Optional · read · laugh · choose",
    "intro": "A school festival, a message nobody checked, and 100 trays of simit. Build the language you need to rescue the café.",
    "teacher": {
      "pages": "Lesson 5 · fictional school-festival café crisis · word level",
      "goal": "Use adjectives and manner adverbs to describe a comic problem, reactions and possible solutions.",
      "actions": [
        "0–2 min · Read the crisis cards aloud. Ask which message would appear next in the class group chat. Take two quick reactions.",
        "2–7 min · Form six words, compare with a partner and check. Ask which noun or action each answer describes.",
        "7–10 min · Build two adjective–noun phrases and one verb–adverb phrase for the crisis. Which phrase makes the scene easier to imagine?"
      ],
      "say": "What is funny about the situation, and which words make that clear?",
      "look": "unexpected delivery; searched frantically; ridiculous suggestion; spoke confidently; creative solution; generous offer. Students should justify both word form and meaning.",
      "support": "Explain glitch (a small technical fault), tray and stall. Frantic → frantically is a spelling challenge; use unexpected to show that something was not expected.",
      "extend": "Invite a deliberately exaggerated description and a more neutral one. How does each change the humour?",
      "ready": "Students have a new word bank. Keep the ending open: they will invent the rescue. Lesson 5 remains optional."
    }
  },
  {
    "title": "Fix the sentences. Rescue the café.",
    "short": "Shape the sentences",
    "lesson": 5,
    "optional": true,
    "minutes": 12,
    "group": "Optional · repair · rewrite · pitch",
    "intro": "Turn the group-chat chaos into clear sentences, then pitch the funniest plan that could actually work.",
    "teacher": {
      "pages": "Lesson 5 · school-festival café crisis · sentence level",
      "goal": "Control word class, adverb position and there was / were agreement, then use the patterns to describe an original rescue plan.",
      "actions": [
        "0–2 min · Compare the welcome model. Identify the adjective, noun, verb and adverb.",
        "2–5 min · Repair three sentences. Students explain a change before comparing the suggested answers.",
        "5–8 min · Rewrite three moments from the crisis. Accept natural alternatives that preserve the actor and meaning.",
        "8–12 min · Pairs invent a rescue plan with no extra budget or food waste. Take turns pitching for 30 seconds; the listener asks one practical question. Imagine the plan happened and write two past-tense sentences."
      ],
      "say": "Your idea made us laugh. Now tell us: who will do what, and why would students join in?",
      "look": "There was an unexpected delivery. Ece explained the problem confidently. There were enormous piles of simit by the door. Rewrites keep the actor: a dramatic reaction from Deniz; Ece announced the plan confidently; a generous response from nearby stallholders.",
      "support": "Offer reaction/reacted, announcement/announced, response/responded. For pitching: We could… People would join because… We would need…",
      "extend": "Challenge partners to identify the weakest part of a plan and improve it without adding a budget.",
      "ready": "Students have accurate sentence patterns and a rescue plan of their own. Their mini-report becomes the starting point for the paragraph."
    }
  },
  {
    "title": "Write the ending nobody saw coming.",
    "short": "Write a funny report",
    "lesson": 5,
    "optional": true,
    "minutes": 18,
    "group": "Optional · invent · write · revise",
    "intro": "Imagine your rescue plan has happened. Write an 80–100-word school blog report with a funny but believable outcome.",
    "teacher": {
      "pages": "Lesson 5 · student-created ending · paragraph level",
      "goal": "Combine descriptive grammar into a coherent, humorous past-tense report that explains a problem, a response and an invented outcome.",
      "actions": [
        "0–3 min · Plan the original problem, your own rescue action and its result. Choose one comic detail or short quotation.",
        "3–12 min · Write 80–100 words: include there was / were + adjective–noun, two past actions with manner adverbs, and one further adjective–noun phrase.",
        "12–16 min · Partners check clarity, grammar and whether the solution respects the brief. Students working alone reread aloud.",
        "16–18 min · Improve at least one sentence, record the change, and save or export the PDF for Notability."
      ],
      "say": "Can a reader picture the chaos, follow your plan and smile at the ending?",
      "look": "A clear problem–response–outcome sequence; a student-created solution; purposeful humour; correct agreement and adverb position. The ending may be a success or a harmless comic setback. Completion checks do not grade the writing.",
      "support": "Let students reuse their mini-report. A short quotation or an exaggerated description is enough; they do not need to write a stand-up routine.",
      "extend": "Add a separate two-sentence prediction about the next festival. Use there might be + adjective–noun and a verb + adverb to explain how to avoid another simit invasion.",
      "ready": "Students have solved the fictional problem in their own way and revised a complete report. Save or export their work for later study."
    }
  }
];

export const extensionWords = [
  {
    "prompt": "The team expected one tray, but 100 arrived: an ___ delivery.",
    "cue": "EXPECT",
    "answer": "unexpected",
    "why": "Unexpected describes delivery and means not expected. Add un- to show the surprise."
  },
  {
    "prompt": "Deniz opened every order message in a panic. He searched ___.",
    "cue": "FRANTIC",
    "answer": "frantically",
    "why": "Frantically describes how he searched. Notice the spelling: frantic → frantically."
  },
  {
    "prompt": "“Let’s build a simit tower taller than the school!” What a ___ suggestion.",
    "cue": "RIDICULE",
    "answer": "ridiculous",
    "why": "Ridiculous describes suggestion: the idea is absurd. The adjective form is ridiculous."
  },
  {
    "prompt": "Despite the chaos, Ece sounded sure of herself. She spoke ___.",
    "cue": "CONFIDENT",
    "answer": "confidently",
    "why": "Confidently describes the action spoke, not the person Ece."
  },
  {
    "prompt": "The team needs an original way to rescue the café: a ___ solution.",
    "cue": "CREATE",
    "answer": "creative",
    "why": "Creative describes solution: it involves a new or imaginative idea."
  },
  {
    "prompt": "A nearby stall offers to lend tables for free: a ___ offer.",
    "cue": "GENEROSITY",
    "answer": "generous",
    "why": "Generous describes the noun offer. Generosity is the related noun."
  }
];

export const extensionRepairs = [
  {
    "prompt": "There was an unexpectedly delivery.",
    "model": "There was an unexpected delivery.",
    "why": "Unexpected is the adjective describing delivery; unexpectedly is an adverb."
  },
  {
    "prompt": "Ece explained confidently the problem.",
    "model": "Ece explained the problem confidently.",
    "why": "Put the manner adverb after the object, or before the verb: Ece confidently explained the problem."
  },
  {
    "prompt": "There was enormous piles of simit by the door.",
    "model": "There were enormous piles of simit by the door.",
    "why": "Piles is plural, so use there were. Enormous is already a correct adjective."
  }
];

export const extensionRewrites = [
  {
    "prompt": "Deniz reacted dramatically to the delivery.",
    "instruction": "Begin with There was. Keep Deniz and the delivery in your sentence.",
    "model": "There was a dramatic reaction from Deniz to the delivery.",
    "why": "Reacted becomes reaction; dramatically becomes dramatic. From Deniz keeps the actor."
  },
  {
    "prompt": "There was a confident announcement from Ece about the plan.",
    "instruction": "Begin with Ece. Use announced and a manner adverb.",
    "model": "Ece announced the plan confidently.",
    "why": "Announcement becomes announced; confident becomes confidently."
  },
  {
    "prompt": "Nearby stallholders responded generously to the request.",
    "instruction": "Begin with There was. Keep the stallholders and the request.",
    "model": "There was a generous response from nearby stallholders to the request.",
    "why": "Responded becomes response; generously becomes generous. The sentence still tells us who responded."
  }
];

const eventLog = `<div class="l5-event-log"><div><strong>15:45 · The delivery</strong><p>The school festival café opens in 15 minutes. A voice-typing mix-up changed “one tray of simit” into “one hundred trays”. Nobody checked the message. Now the boxes are here.</p><p><em>Deniz: “I ordered snacks, not a simit planet.”</em></p></div><div><strong>15:47 · The group chat</strong><p>Deniz checks every message in a panic. Someone suggests building a tower taller than the school. Ece sounds sure they can rescue the café. A nearby stall offers spare tables for free.</p><p><em>Deniz: “If anyone asks, this is an art installation.”</em></p></div><div><strong>16:00 · Your move</strong><p>The festival opens. Returning the delivery today is not an option. You have no extra budget. The team needs a plan that avoids food waste and gives people a reason to join in.</p><p><strong>There is no official ending. Your team writes it.</strong></p></div></div>`;
const reviewPoints=['My report explains the mix-up, my own rescue plan and its invented outcome.', 'I use there was / were + adjective + noun, with correct agreement and a/an where needed.', 'I include two past actions with manner adverbs and one more adjective–noun phrase.', 'My funny ending fits the no-extra-budget, no-food-waste brief, and I revise at least one sentence.'];

export function makeExtensionActivities({state,field,input,checklist,escape,normalizeAnswer,wordCount,showFeedback}) {
  const recap=()=>`<details class="details"><summary>Reopen the crisis brief</summary><div>${eventLog}</div></details>`;
  const solutions=(group,items)=>`<details class="details"><summary>After trying: compare suggested answers</summary><div>${items.map((q,i)=>`<p><strong>${i+1}. ${q.model}</strong><br>${q.why}</p>`).join('')}<p>Other natural versions may work. Ask your teacher or partner to check that the meaning stays the same.</p></div></details>`;
  function words(){return `<section class="card l5-intro"><span class="card-label">LESSON 5 · OPTIONAL EXTENSION · 40 MINUTES</span><h2>The Great Simit Glitch</h2><p>One tiny message. One enormous delivery. You are on the festival team: can you turn a simit disaster into the event everyone remembers?</p><p><strong>Your route:</strong> words (10 min) → sentences (12 min) → report (18 min).</p>${eventLog}<p class="hint">Glitch: a small technical fault. Stall: a small stand selling food or other items. This school-festival disaster is fictional; the rescue plan is yours.</p></section>
  <section class="card" data-activity="l5simitwords"><span class="card-label">WORD LEVEL · CHOOSE THE FORM AND THE MEANING</span><h2>Build a useful word bank.</h2><p>Complete each gap with the correct form of the word in capitals. You may need a prefix or a different word ending. Then explain which noun or action it describes.</p><p class="hint">A different example: a <strong>polite request</strong> / asked <strong>politely</strong>. Ask “What kind?” or “How?”</p>${extensionWords.map((q,i)=>`<div class="checkpoint">${input('l5-simit-word-'+i,`${i+1}. ${q.prompt} (${q.cue})`,'One word')}</div>`).join('')}<button class="button primary" data-check="l5simitwords">Check word forms</button><div id="l5simitwords-feedback" class="feedback" role="status"></div></section>
  <section class="card"><span class="card-label">MAKE THE WORDS YOUR OWN</span><h2>Choose details worth reporting.</h2>${field('l5-simit-bank','Write two adjective + noun phrases and one verb + adverb phrase for this event.','','Reuse words above or choose other suitable words. Use one phrase to describe the chaos and another to suggest how the team could respond. Tell your partner why each fits.',3)}</section>`;}
  function sentences(){return `<section class="card"><span class="card-label">SENTENCE LEVEL · 12 MINUTES</span><h2>Describe an action, then introduce the event.</h2>${recap()}<div class="note green"><strong>A different example:</strong><br>The guide welcomed us warmly.<br>There was a warm welcome from the guide.</div><p>The focus changes from the person’s action to the event. Keep the actor when it matters. Some phrases do not have a natural matching verb form.</p></section>
  <section class="card"><span class="card-label">01 / REPAIR · THEN EXPLAIN</span><h2>Find one problem in each sentence.</h2>${extensionRepairs.map((q,i)=>field('l5-simit-repair-'+i,`${i+1}. ${q.prompt}`,'Write the corrected sentence.','Explain your change to a partner.',2)).join('')}${solutions('repairs',extensionRepairs)}</section>
  <section class="card"><span class="card-label">02 / KEEP THE MEANING</span><h2>Rewrite three possible moments from the crisis.</h2>${extensionRewrites.map((q,i)=>field('l5-simit-rewrite-'+i,`${i+1}. ${q.prompt}`,'Write your new sentence.',q.instruction,2)).join('')}${solutions('rewrites',extensionRewrites)}</section>
  <section class="card"><span class="card-label">03 / YOUR RESCUE PITCH</span><h2>Make us laugh. Make it work.</h2><p>With a partner, invent a rescue plan. You have <strong>no extra budget</strong> and must <strong>avoid food waste</strong>. Give people a reason to join in.</p><details class="details"><summary>Need a spark?</summary><div><p>Could you turn the café into a “Simit Museum” with ridiculous exhibit names, combine simit with a free riddle challenge, or trade help with other festival stalls? Change an idea or invent a completely different one.</p></div></details><ol class="steps-list"><li>Pitch your plan for 30 seconds: what will happen, and why will students join?</li><li>Your partner asks one practical question: who, where, how, or what if?</li><li>Improve the plan. Then imagine it happened and write the two-sentence mini-report below.</li></ol>${field('l5-simit-mini-report','Describe the chaos and your team’s first rescue action in two connected past-tense sentences.','','Use there was / were + adjective + noun, then a past action with a manner adverb. This is your own invented action.',3)}</section>`;}
  function paragraph(){return `<section class="card"><span class="card-label">PARAGRAPH LEVEL · PLAN 3 MIN · WRITE 9 MIN · REVIEW 4 MIN · REVISE 2 MIN</span><h2>Your café. Your rescue. Your ending.</h2><p>Imagine your rescue plan has happened. Write an <strong>80–100-word report for the school blog</strong>. Keep the original mix-up, then invent what your team did and how it ended. Include one funny detail or short quotation. Your plan should cost nothing extra and avoid food waste; it can end in success or a harmless comic setback.</p>${recap()}<ol class="steps-list"><li>Include <strong>there was / were + adjective + noun</strong>.</li><li>Describe at least <strong>two past actions with manner adverbs</strong>.</li><li>Add <strong>one further adjective + noun phrase</strong> and connect your ideas.</li></ol>${field('l5-simit-plan','Plan: order mix-up → your rescue action → your funny ending','','Decide what your team actually did, why others joined in and what happened next. You can adapt your mini-report.',3)}<details class="details"><summary>Need a starting point?</summary><div>Fifteen minutes before our school festival, …<br>There was / were …<br>At first, … However, … because …<br>In the end, …</div></details></section>
  <section class="card" data-activity="l5simitreport"><h2>The report your class will want to read</h2>${field('l5-simit-report','Write your report, then improve it after feedback.','','Aim for 80–100 words. Your teacher or partner will check the language and meaning.',8)}<p id="l5-simit-word-count" class="word-count" aria-live="polite">${wordCount(state.drafts['l5-simit-report']||'')} words · suggested 80–100</p>${input('l5-simit-noun-evidence','Copy your there was / were + adjective + noun construction.')}${input('l5-simit-action-evidence','Copy your two past actions with manner adverbs.')}${checklist(reviewPoints,'l5-simit-review')}${field('l5-simit-revision','Which sentence did you improve, and why?','','Name a specific change that improved the grammar, made the plan clearer or made the ending funnier.',2)}<button class="button primary" data-check="l5simitreport">Review my completion</button><div id="l5simitreport-feedback" class="feedback" role="status"></div><p class="hint">This checks length and task completion, not grammar accuracy. Working alone? Read your paragraph aloud and use the checklist.</p></section>
  <section class="card"><span class="card-label">FINISHED EARLY AGAIN?</span><h2>Prevent the next simit invasion.</h2>${field('l5-simit-stretch','Optional: add two future sentences outside your report.','','Use there might be + adjective + noun and a verb + adverb to predict how the next festival might run more smoothly. Give one practical improvement, not just “check the phone”.',3)}<p>Save progress for another visit, or choose <strong>PDF for Notability</strong> at the top to keep your work.</p></section><div id="extension-finish-message"></div>`;}
  function checkWords(){
    const missing=extensionWords.filter((_,i)=>!normalizeAnswer(state.drafts['l5-simit-word-'+i]||'')).length;
    if(missing){showFeedback('l5simitwords-feedback',`Complete ${missing} more ${missing===1?'gap':'gaps'} before checking.`,true);return;}
    state.checked.l5simitwords=true;let correct=0;
    const lines=extensionWords.map((q,i)=>{const ok=normalizeAnswer(state.drafts['l5-simit-word-'+i])===q.answer;if(ok)correct++;return `<p><strong>${i+1}. ${ok?'✓':'Revisit:'} ${q.answer}</strong> · ${q.why}</p>`;}).join('');
    showFeedback('l5simitwords-feedback',`<p><strong>${correct} of ${extensionWords.length} correct.</strong> Revise any errors, then explain a choice.</p>${lines}`,correct<extensionWords.length);
  }
  function checkReport(){
    state.checked.l5simitreport=true;
    const count=wordCount(state.drafts['l5-simit-report']||'');
    const checks=reviewPoints.filter((_,i)=>state.drafts['l5-simit-review-'+i]===true).length;
    const evidence=['l5-simit-noun-evidence','l5-simit-action-evidence','l5-simit-revision'].filter(k=>String(state.drafts[k]||'').trim()).length;
    showFeedback('l5simitreport-feedback',`<strong>${count} words; ${checks} of 4 review points checked.</strong> ${count>=80&&count<=100?'Your length is in the suggested range.':'Aim for 80–100 words.'} ${evidence===3?'Your pattern examples and revision note are recorded.':'Add your pattern examples and a revision note.'} Ask your teacher or partner to check accuracy and whether the report makes sense.`,count<80||count>100||checks<4||evidence<3);
  }
  return {renderers:[words,sentences,paragraph],checks:{l5simitwords:checkWords,l5simitreport:checkReport},restore(){if(state.step===8&&state.checked.l5simitwords)checkWords();if(state.step===10&&state.checked.l5simitreport)checkReport();}};
}


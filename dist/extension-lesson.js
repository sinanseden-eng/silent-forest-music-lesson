// Optional transfer practice. App helpers keep saving, feedback and printing consistent.
export const extensionSteps = [
  {
    title: 'A night at the observatory.', short: 'Build a new word bank', lesson: 5, optional: true, minutes: 10,
    group: 'Optional · read · choose · explain',
    intro: 'For fast-finishing classes: use familiar grammar in a new situation. Start with words, build sentences, then write a short report.',
    teacher: {
      pages: 'Lesson 5 · original rooftop-observatory scenario · word level',
      goal: 'Choose adjectives and manner adverbs that fit both the meaning and the grammatical role in a new context.',
      actions: ['0–2 min · Read the event log. Ask what went wrong, how the team responded, and what changed.', '2–7 min · Students form six words independently, compare with a partner, then check. Ask which noun or action each answer describes.', '7–10 min · Build two adjective–noun phrases and one verb–adverb phrase for the event. Partners explain their choices.'],
      say: 'What does this word describe, and which detail in the event log supports your choice?',
      look: 'abrupt interruption; worked efficiently; patient explanation; spoke confidently; curious visitors; enthusiastic response. Students should connect grammar to meaning.',
      support: 'Clarify observatory (a place for observing space), cable, interruption and queue. Let students say the phrase aloud before writing it.',
      extend: 'Invite a different plausible adjective or adverb and ask how it changes the reader’s impression. A stronger word is not automatically a better word.',
      ready: 'Students have six checked word forms and a small personal word bank. Continue to sentence building. This entire lesson is optional; Lessons 1–4 can stand alone.'
    }
  },
  {
    title: 'Same event. A different sentence.', short: 'Shape the sentences', lesson: 5, optional: true, minutes: 12,
    group: 'Optional · repair · transform · create',
    intro: 'Use your observatory word bank to describe what existed or happened and how people acted.',
    teacher: {
      pages: 'Lesson 5 · rooftop-observatory scenario · sentence level',
      goal: 'Control word class, adverb position and there was / were agreement, then rewrite events without losing the actor or meaning.',
      actions: ['0–2 min · Compare the welcome model. Identify the verb, adverb, noun and adjective; notice the phrase that keeps the actor.', '2–6 min · Repair three sentences. Students explain the change before opening the suggested corrections.', '6–10 min · Rewrite three event descriptions. Compare the action and event focus; accept natural alternatives that keep the meaning.', '10–12 min · Write an original two-sentence mini-report: one there was / were sentence and one action sentence.'],
      say: 'Does your rewrite tell us who acted, and does it keep the same meaning?',
      look: 'There was an abrupt interruption. The technician repaired the telescope efficiently. There were curious visitors. Suggested rewrites: There was an efficient repair of the telescope by the technician; Ada responded confidently to a visitor; There was an enthusiastic reaction from the visitors.',
      support: 'Offer noun families: repair / repaired; response / responded; reaction / reacted. Prompt: one countable noun, uncountable noun, or plural?',
      extend: 'Ask students to keep the actor in each rewrite. Compare a description of an event with a sentence about the person carrying out the action.',
      ready: 'Students can explain their repairs and produce two connected sentences in the target patterns. Continue to the report.'
    }
  },
  {
    title: 'Report the night. Make every detail count.', short: 'Write a short report', lesson: 5, optional: true, minutes: 18,
    group: 'Optional · plan · draft · revise',
    intro: 'Write an 80–100-word report for your school website, explaining the problem, the response and the outcome.',
    teacher: {
      pages: 'Lesson 5 · original scenario · paragraph level',
      goal: 'Combine accurate descriptive patterns into a coherent past-tense paragraph for readers who were not at the event.',
      actions: ['0–3 min · Plan the problem, response and outcome. Select useful words from the earlier stages.', '3–12 min · Write 80–100 words. Require one there was / were + adjective–noun construction, two manner-adverb action sentences and one further adjective–noun phrase.', '12–16 min · Partners check meaning and the four review points. Students working alone reread aloud and self-review.', '16–18 min · Revise at least one sentence, explain the improvement, and save progress or export the PDF for Notability.'],
      say: 'Could a reader who was not there understand what went wrong and why the evening still succeeded?',
      look: 'An intelligible report with a beginning, response and outcome; meaningful details; there was / were agreement; accurate manner adverbs; and a useful revision. Completion checks do not grade writing.',
      support: 'Allow the plan and optional starters. Students may reuse a well-formed sentence from the previous stage, adapting it to fit their paragraph.',
      extend: 'After finishing, add a separate two-sentence prediction for the next event with there might be and a verb + adverb. Keep this outside the 80–100-word report.',
      ready: 'Students have transferred the grammar to a fresh context and revised a complete paragraph. Save or export their work for later study.'
    }
  }
];

export const extensionWords = [
  {prompt:'The telescope stopped without warning: an ___ interruption.', cue:'ABRUPT', answer:'abrupt', why:'Abrupt describes the noun interruption: the stop was sudden.'},
  {prompt:'The technician solved the problem in five minutes. She worked ___.', cue:'EFFICIENT', answer:'efficiently', why:'Efficiently describes how she worked: she solved the problem without wasting time.'},
  {prompt:'Ada explained the situation without getting annoyed: a ___ explanation.', cue:'PATIENT', answer:'patient', why:'Patient describes explanation. Do not put patiently directly before this noun.'},
  {prompt:'Ada sounded sure of what to do. She spoke ___ to the queue.', cue:'CONFIDENT', answer:'confidently', why:'Confidently describes the action spoke. To the queue can follow the manner adverb.'},
  {prompt:'The visitors wanted to learn more about the Moon: ___ visitors.', cue:'CURIOSITY', answer:'curious', why:'Curious is the adjective for people who want to know more; it describes visitors.'},
  {prompt:'The visitors clapped and thanked the team: an ___ response.', cue:'ENTHUSIASM', answer:'enthusiastic', why:'Enthusiastic describes response. Use an before its opening vowel sound.'}
];
export const extensionRepairs = [
  {prompt:'There was an abruptly interruption.', model:'There was an abrupt interruption.', why:'The adjective abrupt describes the noun interruption.'},
  {prompt:'The technician repaired efficiently the telescope.', model:'The technician repaired the telescope efficiently.', why:'Put this manner adverb after the object, or before the verb: The technician efficiently repaired the telescope.'},
  {prompt:'There was curious visitors on the roof.', model:'There were curious visitors on the roof.', why:'Visitors is plural, so use there were. Curious is already the correct adjective.'}
];
export const extensionRewrites = [
  {prompt:'The technician repaired the telescope efficiently.', instruction:'Begin with There was. Keep the technician in your sentence.', model:'There was an efficient repair of the telescope by the technician.', why:'Repaired becomes repair; efficiently becomes efficient. By the technician keeps the actor.'},
  {prompt:'There was a confident response from Ada to a visitor.', instruction:'Begin with Ada. Use responded and a manner adverb.', model:'Ada responded confidently to a visitor.', why:'Response becomes responded; confident becomes confidently.'},
  {prompt:'The visitors reacted enthusiastically.', instruction:'Begin with There was. Keep the visitors in your sentence.', model:'There was an enthusiastic reaction from the visitors.', why:'Reacted becomes reaction; enthusiastically becomes enthusiastic. From the visitors keeps the actor.'}
];

const eventLog = `<div class="l5-event-log"><div><strong>19:00 · The problem</strong><p>At the school’s rooftop stargazing evening, the telescope stopped turning. Eighteen visitors were waiting. Two worried they would miss their turn to see the Moon.</p></div><div><strong>19:05 · The response</strong><p>Ada listened to their questions and explained the delay without getting annoyed. The technician found a loose cable and reconnected it in five minutes. Ada knew what to do and organised the queue.</p></div><div><strong>19:15 · The outcome</strong><p>Everyone had a turn at the telescope. Visitors asked more questions about the Moon, clapped and thanked the team.</p></div></div>`;
const reviewPoints=['My report explains the problem, the response and the outcome.', 'I use there was / were + adjective + noun, with correct agreement and a/an where needed.', 'I include two past actions with manner adverbs and one more adjective–noun phrase.', 'I connect ideas, keep the time reference clear and revise at least one sentence.'];

export function makeExtensionActivities({state,field,input,checklist,escape,normalizeAnswer,wordCount,showFeedback}) {
  const recap=()=>`<details class="details"><summary>Reopen the event log</summary><div>${eventLog}</div></details>`;
  const solutions=(group,items)=>`<details class="details"><summary>After trying: compare suggested answers</summary><div>${items.map((q,i)=>`<p><strong>${i+1}. ${q.model}</strong><br>${q.why}</p>`).join('')}<p>Other natural versions may work. Ask your teacher or partner to check that the meaning stays the same.</p></div></details>`;
  function words(){return `<section class="card l5-intro"><span class="card-label">LESSON 5 · OPTIONAL EXTENSION · 40 MINUTES</span><h2>A night at the observatory</h2><p>A telescope, a queue and one loose cable. You are the school reporter: how would you describe what happened?</p><p><strong>Your route:</strong> words (10 min) → sentences (12 min) → report (18 min).</p>${eventLog}<p class="hint">Observatory: a place for observing space. This is a fictional event created for language practice.</p></section>
  <section class="card" data-activity="l5words"><span class="card-label">WORD LEVEL · CHOOSE THE FORM AND THE MEANING</span><h2>Build a useful word bank.</h2><p>Complete each gap with the correct form of the word in capitals. The word may stay the same. Then explain which noun or action it describes.</p><p class="hint">A different example: a <strong>polite request</strong> / asked <strong>politely</strong>. Ask “What kind?” or “How?”</p>${extensionWords.map((q,i)=>`<div class="checkpoint">${input('l5word-'+i,`${i+1}. ${q.prompt} (${q.cue})`,'One word')}</div>`).join('')}<button class="button primary" data-check="l5words">Check word forms</button><div id="l5words-feedback" class="feedback" role="status"></div></section>
  <section class="card"><span class="card-label">MAKE THE WORDS YOUR OWN</span><h2>Choose details worth reporting.</h2>${field('l5-bank','Write two adjective + noun phrases and one verb + adverb phrase for this event.','','Reuse words above or choose other suitable words. Tell a partner which detail supports each phrase.',3)}</section>`;}
  function sentences(){return `<section class="card"><span class="card-label">SENTENCE LEVEL · 12 MINUTES</span><h2>Describe an action, then introduce the event.</h2>${recap()}<div class="note green"><strong>A different example:</strong><br>The guide welcomed us warmly.<br>There was a warm welcome from the guide.</div><p>The focus changes from the person’s action to the event. Keep the actor when it matters. Some phrases do not have a natural matching verb form.</p></section>
  <section class="card"><span class="card-label">01 / REPAIR · THEN EXPLAIN</span><h2>Find one problem in each sentence.</h2>${extensionRepairs.map((q,i)=>field('l5repair-'+i,`${i+1}. ${q.prompt}`,'Write the corrected sentence.','Explain your change to a partner.',2)).join('')}${solutions('repairs',extensionRepairs)}</section>
  <section class="card"><span class="card-label">02 / KEEP THE MEANING</span><h2>Rewrite three event descriptions.</h2>${extensionRewrites.map((q,i)=>field('l5rewrite-'+i,`${i+1}. ${q.prompt}`,'Write your new sentence.',q.instruction,2)).join('')}${solutions('rewrites',extensionRewrites)}</section>
  <section class="card"><span class="card-label">03 / YOUR MINI-REPORT</span><h2>Connect two original sentences.</h2>${field('l5-mini-report','Describe another detail from the event in two connected sentences.','','Include there was / were + adjective + noun, then a past action with a manner adverb. Use a connector such as because, but or so.',3)}</section>`;}
  function paragraph(){return `<section class="card"><span class="card-label">PARAGRAPH LEVEL · PLAN 3 MIN · WRITE 9 MIN · REVIEW 4 MIN · REVISE 2 MIN</span><h2>Tell the school what happened.</h2><p>Write an <strong>80–100-word report for your school website</strong>. Your readers were not at the event. Explain the problem, what people did and the outcome. Use the event log; you may add one plausible detail that fits it.</p>${recap()}<ol class="steps-list"><li>Include <strong>there was / were + adjective + noun</strong>.</li><li>Describe at least <strong>two past actions with manner adverbs</strong>.</li><li>Add <strong>one further adjective + noun phrase</strong> and connect your ideas.</li></ol>${field('l5-plan','Plan: problem → response → outcome','','Write brief notes and choose useful words from your bank. You can adapt your mini-report.',3)}<details class="details"><summary>Need a starting point?</summary><div>At the school’s rooftop event, …<br>There was / were …<br>At first, … However, … because …<br>In the end, …</div></details></section>
  <section class="card" data-activity="l5report"><h2>Your school report</h2>${field('l5-report','Write your report, then improve it after feedback.','','Aim for 80–100 words. Your teacher or partner will check the language and meaning.',8)}<p id="l5-word-count" class="word-count" aria-live="polite">${wordCount(state.drafts['l5-report']||'')} words · suggested 80–100</p>${input('l5-noun-evidence','Copy your there was / were + adjective + noun construction.')}${input('l5-action-evidence','Copy your two past actions with manner adverbs.')}${checklist(reviewPoints,'l5-review')}${field('l5-revision','Which sentence did you improve, and why?','','Name a specific change to word form, agreement, clarity or the link between ideas.',2)}<button class="button primary" data-check="l5report">Review my completion</button><div id="l5report-feedback" class="feedback" role="status"></div><p class="hint">This checks length and task completion, not grammar accuracy. Working alone? Read your paragraph aloud and use the checklist.</p></section>
  <section class="card"><span class="card-label">FINISHED EARLY AGAIN?</span><h2>Look ahead to the next event.</h2>${field('l5-stretch','Optional: add two future sentences outside your report.','','Use there might be + adjective + noun and a verb + adverb to predict one improvement next time. Explain why it could help.',3)}<p>Save progress for another visit, or choose <strong>PDF for Notability</strong> at the top to keep your work.</p></section><div id="extension-finish-message"></div>`;}
  function checkWords(){
    const missing=extensionWords.filter((_,i)=>!normalizeAnswer(state.drafts['l5word-'+i]||'')).length;
    if(missing){showFeedback('l5words-feedback',`Complete ${missing} more ${missing===1?'gap':'gaps'} before checking.`,true);return;}
    state.checked.l5words=true;let correct=0;
    const lines=extensionWords.map((q,i)=>{const ok=normalizeAnswer(state.drafts['l5word-'+i])===q.answer;if(ok)correct++;return `<p><strong>${i+1}. ${ok?'✓':'Revisit:'} ${q.answer}</strong> · ${q.why}</p>`;}).join('');
    showFeedback('l5words-feedback',`<p><strong>${correct} of ${extensionWords.length} correct.</strong> Revise any errors, then explain a choice.</p>${lines}`,correct<extensionWords.length);
  }
  function checkReport(){
    state.checked.l5report=true;
    const count=wordCount(state.drafts['l5-report']||'');
    const checks=reviewPoints.filter((_,i)=>state.drafts['l5-review-'+i]===true).length;
    const evidence=['l5-noun-evidence','l5-action-evidence','l5-revision'].filter(k=>String(state.drafts[k]||'').trim()).length;
    showFeedback('l5report-feedback',`<strong>${count} words; ${checks} of 4 review points checked.</strong> ${count>=80&&count<=100?'Your length is in the suggested range.':'Aim for 80–100 words.'} ${evidence===3?'Your pattern examples and revision note are recorded.':'Add your pattern examples and a revision note.'} Ask your teacher or partner to check accuracy and whether the report makes sense.`,count<80||count>100||checks<4||evidence<3);
  }
  return {renderers:[words,sentences,paragraph],checks:{l5words:checkWords,l5report:checkReport},restore(){if(state.step===8&&state.checked.l5words)checkWords();if(state.step===10&&state.checked.l5report)checkReport();}};
}

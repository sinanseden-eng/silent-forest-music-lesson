export const formQuestions = [
  {
    "before": "Eva plays the flute",
    "after": ".",
    "options": [
      "soft",
      "softly"
    ],
    "answer": 1,
    "why": "Softly describes how she plays. With an object, place it after the object: plays the flute softly."
  },
  {
    "before": "The narrator uses a",
    "after": "voice.",
    "options": [
      "quietly",
      "quiet"
    ],
    "answer": 1,
    "why": "Quiet describes the noun voice. The adjective comes before the noun here."
  },
  {
    "before": "The group listens",
    "after": "to the soundtrack.",
    "options": [
      "carefully",
      "careful"
    ],
    "answer": 0,
    "why": "Carefully modifies the action listens."
  },
  {
    "before": "They choose a",
    "after": "melody for the final scene.",
    "options": [
      "gentle",
      "gently"
    ],
    "answer": 0,
    "why": "Gentle describes the noun melody."
  }
];

export const moods = [
  {
    "id": "hopeful",
    "name": "Hopeful",
    "symbol": "♫",
    "description": "Light notes, a rising phrase, room to breathe."
  },
  {
    "id": "mysterious",
    "name": "Mysterious",
    "symbol": "♩",
    "description": "Spaced notes and an uncertain direction."
  },
  {
    "id": "unsettling",
    "name": "Unsettling",
    "symbol": "♬",
    "description": "Close notes that do not quite settle."
  }
];

export const phrases = [
  {
    "text": "silent forest",
    "source": "Story wording · page 2",
    "answer": "an",
    "why": "Silent describes the noun forest: what kind of forest?"
  },
  {
    "text": "beautiful music",
    "source": "Story wording · page 5",
    "answer": "an",
    "why": "Beautiful describes the noun music. Music is uncountable, so this phrase does not need “a”."
  },
  {
    "text": "listens carefully",
    "source": "Teaching caption · page 7",
    "answer": "va",
    "why": "Carefully tells us how Tom listens. It modifies the verb listens."
  },
  {
    "text": "heavy rains",
    "source": "Story wording · page 10",
    "answer": "an",
    "why": "Heavy describes the plural noun rains."
  },
  {
    "text": "celebrated joyfully",
    "source": "Teaching caption · page 12",
    "answer": "va",
    "why": "Joyfully tells us how the villagers celebrated."
  },
  {
    "text": "plays softly",
    "source": "Teaching caption · page 14",
    "answer": "va",
    "why": "Softly tells us how Eva plays."
  }
];

export const scenes = [
  {
    "title": "The Silence",
    "pages": "Story pages 1–3",
    "range": "The Noisy Forest → The Town Worries",
    "image": "silence.jpg",
    "alt": "An empty forest path in the illustrated storybook",
    "recap": "Eva notices that the familiar animal sounds have disappeared. The town worries, but nobody has an explanation yet.",
    "question": "Why does the silence matter to Eva?",
    "choices": [
      "She misses the living creatures and the sounds that made the forest familiar.",
      "She wants a quieter place to practise her flute.",
      "She has already discovered what polluted the river."
    ],
    "answer": 0,
    "explain": "The missing sounds signal that something is wrong and reveal Eva’s attachment to the creatures.",
    "pause": "Compare pages 1 and 2. What do you expect to hear in each picture?"
  },
  {
    "title": "The Investigation",
    "pages": "Story pages 4–12",
    "range": "Tom Arrives → The Celebration",
    "image": "river.jpg",
    "alt": "Tom and Eva investigating the discoloured river",
    "recap": "Tom and Eva trace the problem to polluted water. The towns agree to remove the causes and repair the river; music alone cannot make the habitat safe.",
    "question": "Why does Tom tell Eva to wait before using the flute?",
    "choices": [
      "He wants to make a louder instrument.",
      "The reason the animals left needs to be addressed first.",
      "The animals have forgotten what music sounds like."
    ],
    "answer": 1,
    "explain": "The animals need suitable water. Calling them back before addressing the pollution would leave the original problem unresolved.",
    "pause": "Stop at pages 6, 8, and 11. What new evidence explains the silence?"
  },
  {
    "title": "The Return",
    "pages": "Story pages 13–15",
    "range": "The River Runs Clear → Not Silent Anymore",
    "image": "return.jpg",
    "alt": "Eva playing her flute as woodland creatures return",
    "recap": "Once the river has recovered, Eva plays. The creatures reappear, and the forest’s sounds return. Practical repair and musical reconnection have different roles.",
    "question": "Which explanation best matches the ending?",
    "choices": [
      "The flute removes the pollution by itself.",
      "The animals return before the river recovers.",
      "Clean water makes a return possible; the music calls the animals back."
    ],
    "answer": 2,
    "explain": "Keep the two roles distinct: habitat repair addresses the cause, and Eva’s music renews the connection.",
    "pause": "Compare the end with page 2. What has changed in the setting and in Eva’s feelings?"
  }
];

export const steps = [
  {
    "title": "Can music speak without words?",
    "short": "Listen & predict",
    "lesson": 1,
    "minutes": 5,
    "group": "Think · pair · share",
    "intro": "Begin with music, sound, and connection. Later, consider how technology might change these experiences.",
    "teacher": {
      "pages": "Before the Story; then pages 1–2",
      "goal": "Activate ideas about sound, emotion, and connection before teaching the language forms.",
      "actions": [
        "0–1 min · Ask for ten seconds of quiet listening. What can students hear in the classroom?",
        "1–3 min · Read the big question. Students choose an initial position and explain it to a partner.",
        "3–5 min · Collect two different opinions. Introduce Eva’s flute. Keep Sound words OFF in the storybook."
      ],
      "say": "What might music communicate when we do not share a language?",
      "look": "A position supported by a reason. Accept contrasting interpretations of the same sound.",
      "support": "Offer: Music can communicate ___ because ___. Students can give an oral answer before writing.",
      "extend": "Ask whether silence can communicate a message too.",
      "ready": "Students have a reasoned opinion and a story prediction. The final application will concern the future of music on page 9."
    }
  },
  {
    "title": "Follow the silence.",
    "short": "Read & investigate",
    "lesson": 1,
    "minutes": 15,
    "group": "Read · pause · discuss",
    "intro": "Read the embedded illustrated storybook in three stages. Use its numbered story pages, not the screen counter.",
    "teacher": {
      "pages": "1–3 · 4–12 · 13–15",
      "goal": "Understand the cause of the silence and distinguish environmental repair from musical connection.",
      "actions": [
        "0–3 min · Read pages 1–3. Pause after The Town Worries. Ask students what the missing sounds suggest.",
        "3–10 min · Read pages 4–12. Pause at Not Yet (6), The Sick River (8), and Fixing the Real Problem (11).",
        "10–15 min · Read pages 13–15. Students explain why the animals can return and what the music does."
      ],
      "say": "Which problem needs practical action? Which connection does music help restore?",
      "look": "The pollution drives the creatures away. Repairing the water allows a return; the flute calls them back.",
      "support": "Use the embedded reader and its fullscreen button. Select a checkpoint to open the named story page; allow extra reading time where needed.",
      "extend": "Compare Eva’s animal audience on page 5 with the town’s audience on page 12. Does the same music reach everyone?",
      "ready": "Students can explain the sequence: problem → investigation → repair → reconnection."
    }
  },
  {
    "title": "Describe the scene. Describe the action.",
    "short": "Notice the language",
    "lesson": 1,
    "minutes": 10,
    "group": "Discover · sort · explain",
    "intro": "Return to familiar pages. Find what a word describes before deciding which pattern it belongs to.",
    "teacher": {
      "pages": "Sound words ON · pages 2, 5, 7, 8, 12, 14, 15",
      "goal": "Distinguish adjective + noun from verb + adverb, then build past descriptions with there was / there were.",
      "actions": [
        "0–3 min · Compare highlighted story phrases and teaching captions. Ask “What kind?” and “How?”",
        "3–6 min · Build There was a joyful celebration. Contrast beautiful music (uncountable) and loud voices (plural).",
        "6–10 min · Students sort the six phrases. Ask them to turn one noun phrase into a complete there was / were sentence."
      ],
      "say": "Are we describing an action, or introducing something that existed or happened?",
      "look": "There was + a/an + adjective + singular countable noun; there was + adjective + uncountable noun; there were + adjective + plural noun.",
      "support": "Underline the noun first. Ask: one countable thing, an uncountable amount, or more than one?",
      "extend": "Keep carefully/careful distinct. Save adverbs modifying adjectives and linking-verb exceptions for students who are ready.",
      "ready": "Students can distinguish the phrase patterns and build a complete there was / were description."
    }
  },
  {
    "title": "Give your sentences a little direction.",
    "short": "Practise & transform",
    "lesson": 1,
    "minutes": 10,
    "group": "Choose · rewrite · check",
    "intro": "Choose the right word form, check there was / were, and describe the same event in two ways.",
    "teacher": {
      "pages": "Revisit pages 8, 12, 15 · teaching practice",
      "goal": "Use there was + adjective–noun phrases accurately and preserve meaning in action-to-event rewrites.",
      "actions": [
        "0–3 min · Complete the four adjective/adverb choices.",
        "3–5 min · Check was/were and a/an with three short examples.",
        "5–8 min · Model the investigation pair, then complete three there was rewrites.",
        "8–10 min · Students write a description and an action about a musical moment."
      ],
      "say": "What happened? How can we introduce that event with there was and a noun phrase?",
      "look": "There was a joyful celebration; there was a happy smile; there was a soft whisper. Plural nouns take there were.",
      "support": "Give the full frame: There was a ___ celebration in town. Choose joyful, not joyfully, before the noun.",
      "extend": "Compare There was a careful investigation with Tom investigated carefully. The event is similar, but the sentence focuses on a different element.",
      "ready": "Students can use there was / were for the past. In Lesson 2 they will change the time reference to make predictions."
    }
  },
  {
    "title": "One scene. Three different feelings.",
    "short": "Explore the soundtrack",
    "lesson": 2,
    "minutes": 8,
    "group": "Listen · compare · justify",
    "intro": "Keep the glade picture the same. Change the sound and notice how your interpretation changes.",
    "teacher": {
      "pages": "The Same Glade · Three Soundtracks (after page 15)",
      "goal": "Use descriptive language to explain an interpretation of music rather than assuming a single universal response.",
      "actions": [
        "0–2 min · Recall adjective–noun, verb–adverb, and there was / were.",
        "2–5 min · Listen to the three audio sketches with the same glade image.",
        "5–8 min · Students describe what they heard with There was… and explain one action with an adverb."
      ],
      "say": "What changed your interpretation: pitch, pace, pauses, your memories, or the picture?",
      "look": "A description plus a reason. The mood names suggest intentions; students may hear them differently.",
      "support": "Offer gentle melody, slow notes, unsettling sound; plays softly, moves slowly, listens carefully.",
      "extend": "Ask whether a cheerful soundtrack could make the polluted-river scene seem ironic or uncomfortable.",
      "ready": "Students can describe a past listening experience. Ask how a new instrument or technology could change the experience next time."
    }
  },
  {
    "title": "From Eva’s flute to music’s future.",
    "short": "Bridge: past → future",
    "lesson": 2,
    "minutes": 12,
    "group": "Recall · explore · predict",
    "intro": "Use the language you know, change the time reference, and get ready for the page 9 discussion.",
    "teacher": {
      "pages": "Story pages 12–15 → Unit 1, printed page 9, Exercise 6",
      "goal": "Bridge story descriptions to future predictions and clarify the eight music topics before discussion.",
      "actions": [
        "0–3 min · Recall the town celebration and Eva’s flute. Ask how the experience might change with a new way to make or hear music.",
        "3–6 min · Compare past there was / celebrated with future there will be / will celebrate. Use may or might for uncertainty.",
        "6–9 min · Read the eight topic cards. Clear up unfamiliar words, especially hologram popstars and virtual reality.",
        "9–12 min · Complete two paired predictions. Decide exactly what is expected to rise or fall: sales, use, attendance, or popularity."
      ],
      "say": "The story gave us a way to describe an event. Which time expression and verb form do we need to imagine the next one?",
      "look": "There was describes a past event; there will/may/might be predicts an event. Rise or fall needs a clear measure, such as attendance or use.",
      "support": "Model: Use will increase gradually → There will be a gradual increase in use. Give the word pair gradual/gradually.",
      "extend": "Ask whether popularity could stay steady, or grow for one audience and decline for another. Predictions need reasons, not invented statistics.",
      "ready": "Students know the eight topics and can make one prediction with a verb–adverb structure and one with there will/may be + adjective–noun."
    }
  },
  {
    "title": "How will music develop?",
    "short": "Page 9: music futures",
    "lesson": 2,
    "minutes": 12,
    "group": "Pairs · compare · justify",
    "intro": "Discuss the eight topics from page 9. Predict a direction, name what is changing, and explain your reasoning.",
    "teacher": {
      "pages": "Unit 1, printed page 9, Exercise 6 (page 6 of the uploaded PDF)",
      "goal": "Apply the story-taught grammar to the coursebook’s music-futures discussion without graph analysis.",
      "actions": [
        "0–3 min · Partners scan all eight topics and choose an initial direction for each.",
        "3–8 min · Each partner develops two predictions. Across the pair, include verb + adverb and there will/may be + adjective + noun.",
        "8–10 min · Compare one disagreement and give reasons. Staying steady and uncertainty are valid answers.",
        "10–12 min · Add one other musical trend or technology and explain how it might change the experience of music."
      ],
      "say": "What exactly might rise or fall, for whom, and over what time period? Why do you think so?",
      "look": "An explicit subject or measure, an appropriate future form, accurate adjective/adverb choices, and a reason. There are no factual answer keys for predictions.",
      "support": "Offer: Over the next five years, ___ may increase gradually because ___. There may be a gradual increase in ___.",
      "extend": "Ask for a condition or counterargument: unless, if, or however. A format can survive among enthusiasts even if overall use falls.",
      "ready": "Each pair has considered all eight topics, developed four predictions, and suggested one additional idea."
    }
  },
  {
    "title": "Write your music forecast.",
    "short": "Reflect & finish",
    "lesson": 2,
    "minutes": 8,
    "group": "Individual exit response",
    "intro": "Predict how music may change over the next five years. Use the three language structures deliberately.",
    "teacher": {
      "pages": "Page 9, Exercise 6 · individual transfer",
      "goal": "Assess the shift from past descriptions to justified future predictions, with accurate noun and verb constructions.",
      "actions": [
        "0–5 min · Students write 80–120 words about at least two page 9 topics and one new idea. Include a short story reference using there was.",
        "5–7 min · Students identify their past description, future noun construction, and verb–adverb prediction.",
        "7–8 min · Review the checklist and record one language point to revisit. Print notes if needed."
      ],
      "say": "Which sentence looks back at the story, and which sentences predict the future?",
      "look": "There was + adjective–noun in a past story reference; there will/may/might be + adjective–noun for a prediction; a future verb + adverb; reasons and a clear time frame.",
      "support": "Offer a brief story sentence, then Over the next five years… Keep uncertainty explicit with may or might.",
      "extend": "Add a condition or alternative outcome. Check that a prediction is not presented as verified current data.",
      "ready": "Use the response to identify whether students need more practice with agreement, word class, time reference, or reasons."
    }
  }
];

export const transformations = [
  {
    "original": "The villagers celebrated joyfully.",
    "before": "There was a",
    "after": "celebration in town.",
    "answer": "joyful",
    "why": "Joyfully describes celebrated. Joyful describes celebration. There was introduces the event; celebration is singular and needs a."
  },
  {
    "original": "Eva smiled happily.",
    "before": "There was a",
    "after": "smile on Eva’s face.",
    "answer": "happy",
    "why": "Happily becomes happy before the noun smile. There was a introduces one smile."
  },
  {
    "original": "The narrator whispered softly.",
    "before": "There was a",
    "after": "whisper from the narrator.",
    "answer": "soft",
    "why": "Softly describes whispered; soft describes whisper. The noun construction begins There was a."
  }
];

export const existenceQuestions = [
  {
    "prompt": "There ___ beautiful music at the celebration.",
    "options": [
      "was",
      "were"
    ],
    "answer": 0,
    "why": "Music is uncountable. Use there was, without a/an before beautiful music."
  },
  {
    "prompt": "There ___ loud voices in the town.",
    "options": [
      "was",
      "were"
    ],
    "answer": 1,
    "why": "Voices is plural, so use there were."
  },
  {
    "prompt": "There was ___ unusual sound in the forest.",
    "options": [
      "a",
      "an"
    ],
    "answer": 1,
    "why": "Sound is singular and countable. Use an before the vowel sound at the start of unusual."
  }
];

export const futureQuestions = [
  {
    "prompt": "Use of wireless earbuds may increase gradually. → There may be a ___ increase in their use.",
    "options": [
      "gradual",
      "gradually"
    ],
    "answer": 0,
    "why": "Gradual describes the noun increase. May marks this as a prediction, not a measured fact."
  },
  {
    "prompt": "There will be a steady rise in attendance. → Attendance will rise ___.",
    "options": [
      "steady",
      "steadily"
    ],
    "answer": 1,
    "why": "Steadily describes how attendance will rise. Both versions refer to the same hypothetical future change."
  }
];

export const musicTopics = [
  {
    "name": "CDs",
    "meaning": "Physical discs that store recorded digital audio.",
    "measure": "sales of CDs",
    "icon": "◉"
  },
  {
    "name": "Hologram popstars",
    "meaning": "Performers shown as projected or digital stage images.",
    "measure": "popularity of shows with digital performers",
    "icon": "✧"
  },
  {
    "name": "Live concerts",
    "meaning": "Performances experienced as musicians play for an audience.",
    "measure": "attendance at live concerts",
    "icon": "♫"
  },
  {
    "name": "Music festivals",
    "meaning": "Events featuring a programme of different musical performances.",
    "measure": "attendance at music festivals",
    "icon": "♬"
  },
  {
    "name": "Streaming music",
    "meaning": "Listening to music delivered through an internet service.",
    "measure": "use of music streaming services",
    "icon": "▷"
  },
  {
    "name": "Vinyl records",
    "meaning": "Discs with grooves, played on a record player.",
    "measure": "sales of vinyl records",
    "icon": "◎"
  },
  {
    "name": "Virtual reality",
    "meaning": "Computer-created environments, often experienced through a headset.",
    "measure": "interest in virtual-reality music experiences",
    "icon": "◇"
  },
  {
    "name": "Wireless earbuds",
    "meaning": "Small earphones that connect to a device without an audio cable.",
    "measure": "use of wireless earbuds",
    "icon": "♪"
  }
];

export function normalizeAnswer(value){return String(value).trim().toLowerCase().replace(/[.!?]+$/,'').trim();}
export function wordCount(value){return (String(value).trim().match(/\S+/g)||[]).length;}
export function parseStep(hash){const m=String(hash).match(/^#step-([1-8])$/);return m?Number(m[1])-1:0;}
export function formatTime(value){return `${String(Math.floor(Math.max(0,value)/60)).padStart(2,'0')}:${String(Math.max(0,value)%60).padStart(2,'0')}`;}

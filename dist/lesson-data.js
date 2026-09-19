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
    "pause": "Stop at pages 6 and 8 to collect evidence. On page 10, discuss Tom’s next move below before continuing to pages 11–12."
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
      "ready": "Students have a reasoned opinion and a story prediction."
    }
  },
  {
    "title": "Follow the silence.",
    "short": "Read & investigate",
    "lesson": 1,
    "minutes": 35,
    "group": "Read · pause · discuss",
    "intro": "Read the story in three stages. Record only the most important evidence so that discussion—not form filling—remains central.",
    "teacher": {
      "pages": "1–3 · 4–12 · 13–15",
      "goal": "Explain the cause of the silence, propose one persuasive action, and distinguish environmental repair from musical connection.",
      "actions": [
        "0–6 min · Read pages 1–3. Discuss the first comprehension question orally.",
        "6–15 min · Read pages 4–10. Pause briefly at pages 6 and 8, then stop at page 10. Do not read page 11 yet.",
        "15–23 min · Complete the persuasion task: think, develop one strong idea, role-play Tom and a hesitant inhabitant, then share.",
        "23–31 min · Read pages 11–15. Answer the remaining comprehension questions and compare the ending with students’ proposals.",
        "31–35 min · Contrast practical repair with musical connection. Retell the problem, investigation, action, and return."
      ],
      "say": "What could Tom do to persuade more inhabitants to help clean up the river?",
      "look": "One clear proposal supported by a reason or story evidence. Music may connect people, but practical action must address the pollution.",
      "support": "Offer: Tom could ___ because ___. This might persuade people who worry about ___. Allow paired reading and oral responses.",
      "extend": "Ask what objection a hesitant inhabitant might raise and how Tom could answer it.",
      "ready": "Students can retell the story, justify one persuasion idea, and explain the different roles of repair and music."
    }
  },
  {
    "title": "Describe the scene. Describe the action.",
    "short": "Notice the language",
    "lesson": 2,
    "minutes": 12,
    "group": "Discover · sort · explain",
    "intro": "Recall the story, revisit familiar language, and decide whether a word describes a noun or an action.",
    "teacher": {
      "pages": "Sound words ON · pages 2, 5, 7, 8, 12, 14, 15",
      "goal": "Distinguish adjective + noun from verb + adverb, then build past descriptions with there was / there were.",
      "actions": [
        "0–3 min · Pairs recall one setting and one action from the story.",
        "3–7 min · Compare adjective–noun and verb–adverb examples. Ask What kind? or How?",
        "7–10 min · Introduce there was / were with singular, uncountable, and plural nouns.",
        "10–12 min · Begin the six-phrase sort and explain at least two choices aloud."
      ],
      "say": "Are we describing a person or thing, or are we describing how an action happens?",
      "look": "Students identify the word being described before naming its grammatical form.",
      "support": "Underline the noun or verb first. Then ask What kind? or How?",
      "extend": "Discuss why not every -ly word describes an action.",
      "ready": "Students can distinguish the two patterns and build a basic there was / were description."
    }
  },
  {
    "title": "Give your sentences a little direction.",
    "short": "Practise & report",
    "lesson": 2,
    "minutes": 20,
    "group": "Choose · rewrite · speak",
    "intro": "Practise the forms briefly, then use them orally in the Story Scene Reporter challenge.",
    "teacher": {
      "pages": "Revisit pages 8, 12, 15 · teaching practice",
      "goal": "Use the target patterns accurately and describe a remembered story scene fluently enough for a partner to identify it.",
      "actions": [
        "0–4 min · Complete the four adjective/adverb choices.",
        "4–7 min · Check was/were and a/an with the three examples.",
        "7–12 min · Complete and compare the three action-to-event rewrites.",
        "12–20 min · Story Scene Reporter: study a scene, hide it, describe it with both target patterns, and let a partner identify it. Swap roles."
      ],
      "say": "Can your partner identify the scene from your description alone?",
      "look": "There was / were + adjective–noun and a past verb + adverb used meaningfully in oral speech.",
      "support": "Offer: There was a/an ___. There were ___. Eva/Tom/the villagers ___-ed ___.",
      "extend": "Ask the listener to request one extra detail before guessing.",
      "ready": "Students can use both patterns orally, not only recognise them in an exercise."
    }
  },
  {
    "title": "One scene. Three different feelings.",
    "short": "Explore the soundtrack",
    "lesson": 2,
    "minutes": 8,
    "group": "Listen · compare · justify",
    "intro": "Use sound to reinterpret the same scene. Different answers are welcome when students explain what they heard.",
    "teacher": {
      "pages": "Glade image · three original audio sketches",
      "goal": "Use the target patterns to describe sound and justify an interpretation.",
      "actions": [
        "0–2 min · Choose a story moment and recall one description.",
        "2–5 min · Listen to the three audio sketches while viewing the same image.",
        "5–8 min · Describe one version with both target patterns and justify the interpretation."
      ],
      "say": "What changed your interpretation: pitch, tempo, melody, pauses, memory, or the picture?",
      "look": "A description and an audible reason. Encourage reuse of music vocabulary such as melody, pitch, tempo, soundtrack, and track.",
      "support": "Offer gentle melody, slow notes, unsettling sound; plays softly, moves slowly, listens carefully.",
      "extend": "Ask whether a cheerful soundtrack could create irony in the polluted-river scene.",
      "ready": "Students can describe and justify one soundtrack interpretation using both target patterns."
    }
  },
  {
    "title": "From Eva’s flute to music’s future.",
    "short": "Bridge: past → future",
    "lesson": 3,
    "minutes": 10,
    "group": "Recall · explore · predict",
    "intro": "Keep the language pattern, change the time reference, and prepare for the page 9 discussion.",
    "teacher": {
      "pages": "Story pages 12–15 → Unit 1, printed page 9, Exercise 6",
      "goal": "Bridge past story descriptions to future predictions and clarify the eight music topics.",
      "actions": [
        "0–2 min · Retrieve one Lesson 2 sentence about Eva’s music.",
        "2–4 min · Compare there was / celebrated with there will be / will celebrate. Add may or might for uncertainty.",
        "4–7 min · Read the eight topic cards and clarify unfamiliar terms.",
        "7–10 min · Check two prediction patterns and name the measure that may change."
      ],
      "say": "Which time expression and verb form do we need to move from the story into the future?",
      "look": "A clear shift from past to future and an explicit measure such as use, sales, attendance, or popularity.",
      "support": "Model: Use will increase gradually → There will be a gradual increase in use.",
      "extend": "Ask whether a trend could rise for one audience but fall for another.",
      "ready": "Students understand the eight topics and can make one supported future prediction."
    }
  },
  {
    "title": "How will music develop?",
    "short": "Page 9: music futures",
    "lesson": 3,
    "minutes": 30,
    "group": "Scan · focus · exchange",
    "intro": "Consider all eight topics quickly, then develop two predictions carefully. Depth wins this round.",
    "teacher": {
      "pages": "Unit 1, printed page 9, Exercise 6",
      "goal": "Apply the target grammar in a focused, reasoned discussion and prepare ideas for the writing workshop.",
      "actions": [
        "0–5 min · Partners scan all eight topics and select a likely direction for each.",
        "5–17 min · Each pair chooses two focus topics and develops two detailed predictions with reasons.",
        "17–25 min · Exchange ideas with another pair. Ask a follow-up question and record one useful alternative.",
        "25–30 min · Add one original trend or technology and choose the strongest ideas to carry into Lesson 4."
      ],
      "say": "What exactly might change, for whom, and why?",
      "look": "Two developed predictions rather than eight repeated claims. Across the pair, include both target future patterns and at least two music words.",
      "support": "Offer: Over the next five years, ___ may increase gradually because ___. There may be a gradual increase in ___.",
      "extend": "Add a condition or counterargument using if, unless, or however.",
      "ready": "Each pair has two well-supported coursebook predictions, one original idea, and useful notes for Lesson 4."
    }
  },
  {
    "title": "Write, review, and improve your music forecast.",
    "short": "Forecast workshop",
    "lesson": 4,
    "minutes": 40,
    "group": "Model · plan · draft · revise",
    "intro": "Turn the previous lesson’s discussion into a polished 80–100-word forecast through planning, peer feedback, and revision.",
    "teacher": {
      "pages": "Page 9, Exercise 6 · process-writing workshop",
      "goal": "Produce and improve an 80–100-word forecast using the unit’s grammar, vocabulary, and supporting reasons.",
      "actions": [
        "0–5 min · Retrieve and classify three past/future model sentences.",
        "5–12 min · Read the model paragraph and locate its story reference, predictions, target patterns, and reasons.",
        "12–18 min · Plan two page 9 topics, one additional idea, useful vocabulary, and supporting reasons.",
        "18–30 min · Write an individual 80–100-word draft.",
        "30–36 min · Exchange drafts and use the peer checklist.",
        "36–40 min · Make at least two revisions, complete the self-check, and save or print the final version."
      ],
      "say": "Which revision makes your prediction clearer or more convincing?",
      "look": "A clear time frame, two coursebook topics, one additional idea, reasons, and accurate use of the three target constructions.",
      "support": "Allow students to adapt the model structure and use sentence starters. Prioritise clarity over elaborate vocabulary.",
      "extend": "Add a condition, counterargument, or contrast without exceeding 100 words.",
      "ready": "Students submit a revised 80–100-word forecast and can identify the language choices they used."
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

export const lessonTitles = ["Story & persuasion", "Grammar & sound", "The future of music", "Forecast workshop"];

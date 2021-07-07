//-------------------------- Ecological Updating
var eco_updating_task = {
  timeline: [
    {
      type: 'html-button-response',
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['Start'],
      data: jsPsych.timelineVariable('data1'),
    },
    {
      type: 'animation',
      stimuli: jsPsych.timelineVariable('sequence'),
      frame_time: 1000,
      frame_isi: 500,
      choices: -1,
      data: jsPsych.timelineVariable('data2'),
    },
    {
      type: 'survey-likert',
      data: jsPsych.timelineVariable('data3'),
      button_label: 'Next',
      questions: [
        {prompt: eco_updating_questions[0], labels: eco_updating_answers, required: true},
        {prompt: eco_updating_questions[1], labels: eco_updating_answers, required: true},
        {prompt: eco_updating_questions[2], labels: eco_updating_answers, required: true},
      ]
    }
  ],
  timeline_variables: [
    {
      stimulus: eco_updating_start_01,
      data1: {variable: "round1_start", task: "eco_updating"},
      sequence: eco_updating_seq_01,
      data2: {variable: "round1_animation", task: "updating_ecological"},
      data3: {variable: "round1_answers"  , correct: eco_updating_key_01, task: "eco_updating"}
    },
    {
      stimulus: eco_updating_start_02,
      data1: {variable: "round2_start", task: "eco_updating"},
      sequence: eco_updating_seq_02,
      data2: {variable: "round2_animation", task: "eco_updating"},
      data3: {variable: "round2_answers"  , correct: eco_updating_key_02, task: "eco_updating"}
    },
    {
      stimulus: eco_updating_start_03,
      data1: {variable: "round3_start", task: "eco_updating"},
      sequence: eco_updating_seq_03,
      data2: {variable: "round3_animation", task: "eco_updating"},
      data3: {variable: "round3_answers"  , correct: eco_updating_key_03, task: "eco_updating"}
    },
    {
      stimulus: eco_updating_start_04,
      data1: {variable: "round4_start", task: "eco_updating"},
      sequence: eco_updating_seq_04,
      data2: {variable: "round4_animation", task: "eco_updating"},
      data3: {variable: "round4_answers"  , correct: eco_updating_key_04, task: "eco_updating"}
    },
    {
      stimulus: eco_updating_start_05,
      data1: {variable: "round5_start", task: "eco_updating"},
      sequence: eco_updating_seq_05,
      data2: {variable: "round5_animation", task: "eco_updating"},
      data3: {variable: "round5_answers"  , correct: eco_updating_key_05, task: "eco_updating"}
    }
  ]
};
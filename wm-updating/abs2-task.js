//-------------------------- Standard Updating
var abs_updating_task = {
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
        {prompt: abs_updating_questions[0], labels: abs_updating_answers, required: true},
        {prompt: abs_updating_questions[1], labels: abs_updating_answers, required: true},
        {prompt: abs_updating_questions[2], labels: abs_updating_answers, required: true},
      ]
    }
  ],
  timeline_variables: [
    {
      stimulus: abs_updating_start_01,
      data1: {variable: "round1_start", task: "abs_updating"},
      sequence: abs_updating_seq_01,
      data2: {variable: "round1_animation", task: "abs_updating"},
      data3: {variable: "round1_answers"  , correct: abs_updating_key_01, task: "abs_updating"}
    },
    {
      stimulus: abs_updating_start_02,
      data1: {variable: "round2_start", task: "abs_updating"},
      sequence: abs_updating_seq_02,
      data2: {variable: "round2_animation", task: "abs_updating"},
      data3: {variable: "round2_answers"  , correct: abs_updating_key_02, task: "abs_updating"}
    },
    {
      stimulus: abs_updating_start_03,
      data1: {variable: "round3_start", task: "abs_updating"},
      sequence: abs_updating_seq_03,
      data2: {variable: "round3_animation", task: "abs_updating"},
      data3: {variable: "round3_answers"  , correct: abs_updating_key_03, task: "abs_updating"}
    },
    {
      stimulus: abs_updating_start_04,
      data1: {variable: "round4_start", task: "abs_updating"},
      sequence: abs_updating_seq_04,
      data2: {variable: "round4_animation", task: "abs_updating"},
      data3: {variable: "round4_answers"  , correct: abs_updating_key_04, task: "abs_updating"}
    },
    {
      stimulus: abs_updating_start_05,
      data1: {variable: "round5_start", task: "abs_updating"},
      sequence: abs_updating_seq_05,
      data2: {variable: "round5_animation", task: "abs_updating"},
      data3: {variable: "round5_answers"  , correct: abs_updating_key_05, task: "abs_updating"}
    }
  ]
};
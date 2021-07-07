// Abstract Symmetry Span
var abs_capacity_task = {
  timeline: [
    {
      type: 'html-button-response',
      stimulus: jsPsych.timelineVariable('start'),
      choices: ['Start'],
      data: jsPsych.timelineVariable('data0'),
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('sym1'),
     choices: ['Symmetric', "Not Symmetric"],
     data: jsPsych.timelineVariable('data1a'),
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('letter1'),
     trial_duration: 1000,
     choices: -1,
     data: jsPsych.timelineVariable('data1b')
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('sym2'),
     choices: ['Symmetric', "Not Symmetric"],
     data: jsPsych.timelineVariable('data2a'),
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('letter2'),
     trial_duration: 1000,
     choices: -1,
     data: jsPsych.timelineVariable('data2b')
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('sym3'),
     choices: ['Symmetric', "Not Symmetric"],
     data: jsPsych.timelineVariable('data3a'),
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('letter3'),
     trial_duration: 1000,
     choices: -1,
     data: jsPsych.timelineVariable('data3b')
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('sym4'),
     choices: ['Symmetric', "Not Symmetric"],
     data: jsPsych.timelineVariable('data4a'),
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('letter4'),
     trial_duration: 1000,
     choices: -1,
     data: jsPsych.timelineVariable('data4b')
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('sym5'),
     choices: ['Symmetric', "Not Symmetric"],
     data: jsPsych.timelineVariable('data5a'),
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('letter5'),
     trial_duration: 1000,
     choices: -1,
     data: jsPsych.timelineVariable('data5b')
    },
    {
     type: 'html-button-response',
     stimulus: jsPsych.timelineVariable('sym6'),
     choices: ['Symmetric', "Not Symmetric"],
     data: jsPsych.timelineVariable('data6'),
    },
    {
      type: 'survey-html-form',
      preamble: capacity_grid,
      html: "<p>1st letter: <input type='text' id='response1' name='response1' size='10'/></p>" +
            "<p>2nd letter: <input type='text' id='response2' name='response2' size='10'/></p>" +
            "<p>3rd letter: <input type='text' id='response3' name='response3' size='10'/></p>" +
            "<p>4th letter: <input type='text' id='response4' name='response4' size='10'/></p>" +
            "<p>5th letter: <input type='text' id='response5' name='response5' size='10'/></p>",
      autofocus: 'response1',
      data: jsPsych.timelineVariable('data5')
    }
  ],
  timeline_variables: [
    {
      start: abs_symspan_start_01,
      stimulus: abs_symspan_start_01,
      letter1: abs_symspan_seq_01[0],
      letter2: abs_symspan_seq_01[1],
      letter3: abs_symspan_seq_01[2],
      letter4: abs_symspan_seq_01[3],
      letter5: abs_symspan_seq_01[4],
      sym1: abs_symspan_sym_01[0],
      sym2: abs_symspan_sym_01[1],
      sym3: abs_symspan_sym_01[2],
      sym4: abs_symspan_sym_01[3],
      sym5: abs_symspan_sym_01[4],
      sym6: abs_symspan_sym_01[5],
      data0:  {round: "round1", variable: "start", task: "abs_symspan"},
      data1a: {round: "round1", variable: "sym1",    task: "abs_symspan"},
      data1b: {round: "round1", variable: "letter1", task: "abs_symspan"},
      data2a: {round: "round1", variable: "sym2",    task: "abs_symspan"},
      data2b: {round: "round1", variable: "letter2", task: "abs_symspan"},
      data3a: {round: "round1", variable: "sym3",    task: "abs_symspan"},
      data3b: {round: "round1", variable: "letter3", task: "abs_symspan"},
      data4a: {round: "round1", variable: "sym4",    task: "abs_symspan"},
      data4b: {round: "round1", variable: "letter4", task: "abs_symspan"},
      data5a: {round: "round1", variable: "sym5",    task: "abs_symspan"},
      data5b: {round: "round1", variable: "letter5", task: "abs_symspan"},
      data6:  {round: "round1", variable: "sym6",    task: "abs_symspan"},
      data5:  {round: "round1", variable: "answers", correct: abs_symspan_key_01, task: "abs_symspan"}
    },
    {
      start: abs_symspan_start_02,
      stimulus: abs_symspan_start_02,
      letter1: abs_symspan_seq_02[0],
      letter2: abs_symspan_seq_02[1],
      letter3: abs_symspan_seq_02[2],
      letter4: abs_symspan_seq_02[3],
      letter5: abs_symspan_seq_02[4],
      sym1: abs_symspan_sym_02[0],
      sym2: abs_symspan_sym_02[1],
      sym3: abs_symspan_sym_02[2],
      sym4: abs_symspan_sym_02[3],
      sym5: abs_symspan_sym_02[4],
      sym6: abs_symspan_sym_02[5],
      data0:  {round: "round2", variable: "start", task: "abs_symspan"},
      data1a: {round: "round2", variable: "sym1",    task: "abs_symspan"},
      data1b: {round: "round2", variable: "letter2", task: "abs_symspan"},
      data2a: {round: "round2", variable: "sym2",    task: "abs_symspan"},
      data2b: {round: "round2", variable: "letter2", task: "abs_symspan"},
      data3a: {round: "round2", variable: "sym3",    task: "abs_symspan"},
      data3b: {round: "round2", variable: "letter3", task: "abs_symspan"},
      data4a: {round: "round2", variable: "sym4",    task: "abs_symspan"},
      data4b: {round: "round2", variable: "letter4", task: "abs_symspan"},
      data5a: {round: "round2", variable: "sym5",    task: "abs_symspan"},
      data5b: {round: "round2", variable: "letter5", task: "abs_symspan"},
      data6:  {round: "round2", variable: "sym6",    task: "abs_symspan"},
      data5:  {round: "round2", variable: "answers", correct: abs_symspan_key_02, task: "abs_symspan"}
    }
  ]
};
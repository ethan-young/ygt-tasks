// Instructions
var eco_updating_instructions = {
    type: 'instructions',
    pages: [
        "<p style = 'text-align: left; padding: 0 20% 0 20%;'>"+ 
        "You will now play a <strong>Counting</strong> game.<br><br>" + 
        "In this game, you will see a series of pictures ($5 bill, UTA bus, and a face) one at a time." +
        " Your job is to keep a MENTAL count for each object. " +
        " You can keep count out loud or in your head, but please DO NOT use your fingers or a pencil/pen and paper to count." + 
        "<br><br>" +
        "After you see each object series, you will be asked to report the number of each type of object you saw in the series.<br><br>" +
        "Click 'continue' to see an example.</p>",
        "<div style='text-align:left;'>" + 
        "In this example, let's say you see the following series of objects:<br><br>" +
        eco_example_sequence + "<br><br>" +
        "In this example, the correct count number for each object would be:<br><br>" +
        "<strong>Bills: 2<br>Buses: 2<br>Faces: 1</strong><br><br>" +
        "Click the 'continue' button to practice the <strong>Counting</strong> game.<br></div>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "continue",
    button_label_previous: "go back",
    data: {variable: "instructions", task: "eco_updating"}
};

var eco_updating_practice_start = {
  type: 'html-button-response',
  stimulus: "You are about to start the practice round.<br><br><strong>Click start when you are ready!<strong><br><br>",
  choices: ['Start'],
  data: {variable: "practice_start", task: "eco_updating"}
};

var eco_updating_practice = {
    type: 'animation',
    stimuli: eco_updating_practice_seq,
    frame_time: 1000,
    frame_isi: 500,
    choices: -1,
    data: {variable: "practice", task: "eco_updating"}
};

var eco_updating_practice_answers = {
  type: 'survey-likert',
  data: {variable: "practice_answers", task: "eco_updating"},
  button_label: 'continue',
  questions: [
    {prompt: eco_updating_questions[0], labels: eco_updating_answers, required: true},
    {prompt: eco_updating_questions[1], labels: eco_updating_answers, required: true},
    {prompt: eco_updating_questions[2], labels: eco_updating_answers, required: true},
    ]
};

var eco_updating_practice_feedback = {
  type: 'html-button-response',
  stimulus: function() {
    var feedbackData = jsPsych.data.getLastTrialData().values()[0].response;
    console.log(feedbackData);
    var bills = feedbackData.Q0;
    var buses = feedbackData.Q1;
    var faces = feedbackData.Q2;
    return "The the correct number of each object was:<br><br>" + 
    "<strong>Bills: 2<br>Buses: 2<br>Faces: 1</strong><br><br>" + 
    "Your answers: <br><br><span style='color: blue;'>" +
    "<strong>Bills: " + bills + "<br>Buses: " + buses + "<br>Faces: " + faces + "</strong></span><br><br>";
    },
  choices: ['continue'],
  data: {variable: "practice_feedback", task: "eco_updating"}
};

var eco_updating_practice_confirm = {
  type: 'html-button-response',
  stimulus: "<p>Would you like to practice the <strong>Counting</strong> game again?</p>",
  choices: ['No, I am ready to continue', 'Yes, practice again'],
  prompt: "",
  data: {variable: "practice_confirm", task: "eco_updating"}
};

var eco_updating_practice_loop = {
  timeline: [
    eco_updating_practice_start,
    eco_updating_practice,
    eco_updating_practice_answers,
    eco_updating_practice_feedback,
    eco_updating_practice_confirm
  ],
  loop_function: function(data){
    if(jsPsych.data.getLastTrialData().values()[0].response == 1){
      return true;
    } else {
      return false;
    }
  }
};

var eco_updating_practice_finish = {
  type: 'html-button-response',
  stimulus: "<div style = 'text-align: left;'>" +
  "Great job!<br><br>" +
  "You are now finished practicing the <strong>Object Counting</strong> game.<br><br>" +
  "Next, you will play the actual game.<br><ul>" +
  "<li><strong>The series will be longer in the real game than in the practice round</strong>.</li>" +
  "<li>Remember to keep a running count of each picture you see.</li></ul><br>" +
  "You will play <b>5 rounds of the game</b>. From now on you will not receive feedback after each round.<br><br>" +
  "Click the button below to begin. <br><br></div>",
  choices: ['Start'],
  data: {variable: "practice_finish", task: "eco_updating"}
};
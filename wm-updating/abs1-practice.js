//------------------------- Objects to hold practice trials

// Instructions
var abs_updating_instructions = {
    type: 'instructions',
    pages: [
        "<p style = 'text-align: left; padding: 0 20% 0 20%;'>"+ 
        "Now you will play a <strong>Shape Counting</strong> game.<br><br>" + 
        "You will see a series of shapes (squares, triangles, and circles) one at a time." +
        " Your job is to keep a MENTAL count for each type of shape. " +
        " You can keep count out loud or in your head, but please DO NOT use your fingers or a pencil/pen and paper to count." + 
        "<br><br>" +
        "After you see each shape series, you will be asked how many of each type of shape you saw.<br><br>" +
        "Click 'continue' to see an example.</p>",
        "<div style='text-align:left;'>" + 
        "In this example, let's say you see the following series of shapes:<br><br>" +
        abs_example_sequance + "<br><br>" +
        "In this example, the correct count number for each shape would be:<br><br>" +
        "<strong>Squares: 2<br>Triangles: 3<br>Circles: 1</strong><br><br>" +
        "Click the 'continue' button to practice the <strong>Shape Counting</strong> game.<br></div>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "continue",
    button_label_previous: "go back",
    data: {variable: "instructions", task: "abs_updating"}
};

// Practice trial
var abs_updating_practice_start = {
  type: 'html-button-response',
  stimulus: "You are about to start the practice round.<br><br><strong>Click start when you are ready!<strong><br><br>",
  choices: ['Start'],
  data: {variable: "practice_start", task: "abs_updating"}
};

var abs_updating_practice =  {
    type: 'animation',
    stimuli: abs_updating_practice_seq,
    frame_time: 1000,
    frame_isi: 500,
    choices: -1,
    data: {variable: "practice_animation", task: "abs_updating"}
};

// Practice recall

var abs_updating_practice_answers = {
  type: 'survey-likert',
  data: {variable: "practice_answers", task: "abs_updating"},
  button_label: 'continue',
  questions: [
    {prompt: abs_updating_questions[0], labels: abs_updating_answers, required: true},
    {prompt: abs_updating_questions[1], labels: abs_updating_answers, required: true},
    {prompt: abs_updating_questions[2], labels: abs_updating_answers, required: true},
    ]
};

// Practice feedback
var abs_updating_practice_feedback = {
  type: 'html-button-response',
  stimulus: function() {
    var feedbackData = jsPsych.data.getLastTrialData().values()[0].response;
    console.log(feedbackData);
    var squares  = feedbackData.Q0;
    var triangles = feedbackData.Q1;
    var circles   = feedbackData.Q2;
    return "The the correct number of each shape was:<br><br>" + 
    "<strong>Squares: 3<br>Triangles: 1<br>Circles: 1</strong><br><br>" + 
    "Your answers: <br><br><span style='color: blue;'>" +
    "<strong> Squares: " + squares + "<br>Triangles: " + triangles + "<br>Circles: " + circles + "</strong></span><br><br>";
    },
  choices: ['continue'],
  data: {variable: "practice_feedback", task: "abs_updating"}
};

// Do practice trials again?
var abs_updating_practice_confirm = {
  type: 'html-button-response',
  stimulus: "<p>Would you like to practice the <strong>Shape Counting</strong> game again?</p>",
  choices: ['No, I am ready to continue', 'Yes, practice again'],
  prompt: "",
  data: {variable: "practice_confirm", task: "abs_updating"}
};

var abs_updating_practice_loop = {
  timeline: [
    abs_updating_practice_start,
    abs_updating_practice,
    abs_updating_practice_answers,
    abs_updating_practice_feedback,
    abs_updating_practice_confirm
  ],
  loop_function: function(data){
    if(jsPsych.data.getLastTrialData().values()[0].response == 1){
      return true;
    } else {
      return false;
    }
  }
};

// Finish Practice trials
var abs_updating_practice_finish = {
  type: 'html-button-response',
  stimulus: "<div style = 'text-align: left;'>" +
  "Great job!<br><br>" +
  "You are now finished practicing the <strong>Shape Counting</strong> game.<br><br>" +
  "Next, you will play the actual game.<br><ul>" +
  "<li><strong>The series will be longer in the real game than in the practice round</strong>.</li>" +
  "<li>Remember to keep a running count of each type of shape you see.</li></ul><br>" +
  "You will play <b>5 rounds of the game</b>. From now on you will not receive feedback after each round.<br><br>" +
  "Click the button below to begin. <br><br></div>",
  choices: ['Start'],
  data: {variable: "practice_finish", task: "abs_updating"}
};
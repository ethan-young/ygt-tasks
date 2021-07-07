//------------------------- Shape stimuli
var circle     = "img/updating-abs/circle.png";
var triangle   = "img/updating-abs/triangle.png";
var square     = "img/updating-abs/square.png";

//------------------------- Example sequence
var abs_example_sequance = "<div><img src='" + circle + "'height = '100' width = '100'>" + 
                           "<img src='" + square + "'height = '100' width = '100'>" + 
                           "<img src='" + triangle + "'height = '100' width = '100'>" +
                           "<img src='" + triangle + "'height = '100' width = '100'>" +
                           "<img src='" + square + "'height = '100' width = '100'>" +
                           "<img src='" + triangle + "'height = '100' width = '100'>" +
                           "</div>";

var abs_updating_practice_seq = [square,triangle,square,circle,square];

//------------------------- Set up response questions and options
var abs_updating_questions = [
  "How many <strong>squares</strong> did you count?",
  "How many <strong>triangles</strong> did you count?",
  "How many <strong>circles</strong> did you count?"
];

// define response options
var abs_updating_answers = [0,1,2,3,4,5,6,7];

//-------------------------- Set up updating rounds
var abs_updating_start_01 = "You are about to start <b>round 1</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var abs_updating_start_02 = "You are about to start <b>round 2</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var abs_updating_start_03 = "You are about to start <b>round 3</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var abs_updating_start_04 = "You are about to start <b>round 4</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var abs_updating_start_05 = "You are about to start <b>round 5</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";

// declare variable to hold sequence of shapes
var abs_updating_seq_01 = [circle,square,circle,triangle,circle,square,circle,triangle,triangle];
var abs_updating_seq_02 = [square,triangle,circle,circle,triangle,square,circle,triangle,square];
var abs_updating_seq_03 = [circle,triangle,circle,triangle,square,triangle,circle,square,circle];
var abs_updating_seq_04 = [triangle,square,circle,square,square,circle,square,square,triangle];
var abs_updating_seq_05 = [triangle,square,triangle,circle,square,triangle,square,triangle,circle];

// answer keys - squares, trianlges, circles
var abs_updating_key_01 = JSON.stringify({"Q0": 2, "Q1": 3, "Q2": 4,});
var abs_updating_key_02 = JSON.stringify({"Q0": 3, "Q1": 3, "Q2": 3,});
var abs_updating_key_03 = JSON.stringify({"Q0": 2, "Q1": 3, "Q2": 4,});
var abs_updating_key_04 = JSON.stringify({"Q0": 5, "Q1": 2, "Q2": 2,});
var abs_updating_key_05 = JSON.stringify({"Q0": 3, "Q1": 4, "Q2": 2,});

//-------------------- Start the Task
var abs_updating_welcome = {
  type: 'instructions',
  pages: [
    "Welcome to the <b>Shape Counting</b> game!"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'welcome', task: "abs_updating"}
};
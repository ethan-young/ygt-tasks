//------------------------- Prepare Stimuli

// define shapes
var bill  = "img/updating-eco/fivedollarbill.jpg";
var bus   = "img/updating-eco/uta_bus.png";
var angry = "img/updating-eco/angry.png";

// example sequence
var eco_example_sequence = "<div><img src='" + bill  + "'height = '75' style='vertical-align: middle;'>" + 
                            "<img src='" + bus   + "'width  = '150' style='vertical-align: middle;'>" + 
                            "<img src='" + angry + "'height = '75' style='vertical-align: middle;'>" +
                            "<img src='" + bus   + "'width  = '150' style='vertical-align: middle;'>" +
                            "<img src='" + bill  + "'height = '75' style='vertical-align: middle;'>" +
                       "</div>";

// define questions
var eco_updating_questions = [
  "How many <strong>bills</strong> did you count?",
  "How many <strong>buses</strong> did you count?",
  "How many <strong>faces</strong> did you count?"
];

// define response options
var eco_updating_answers = [0,1,2,3,4,5,6,7];

// define practice sequence
var eco_updating_practice_seq = [bill,bus,angry,bill,bus];

//-------------------------- Set up updating rounds
var eco_updating_start_01 = "You are about to start <b>round 1</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var eco_updating_start_02 = "You are about to start <b>round 2</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var eco_updating_start_03 = "You are about to start <b>round 3</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var eco_updating_start_04 = "You are about to start <b>round 4</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var eco_updating_start_05 = "You are about to start <b>round 5</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";

// declare variable to hold sequence of objects
var eco_updating_seq_01 = [bus,bill,bus,angry,bus,bill,bus,angry,angry];
var eco_updating_seq_02 = [bill,angry,bus,bus,angry,bill,bus,angry,bill];
var eco_updating_seq_03 = [bus,angry,bus,angry,bill,angry,bus,bill,bus];
var eco_updating_seq_04 = [angry,bill,bus,bill,bill,bus,bill,bill,angry];
var eco_updating_seq_05 = [angry,angry,bus,bill,bill,bill,angry,angry,bus];

var eco_updating_key_01 = JSON.stringify({"Q0": 2, "Q1": 4, "Q2": 3});
var eco_updating_key_02 = JSON.stringify({"Q0": 3, "Q1": 3, "Q2": 3});
var eco_updating_key_03 = JSON.stringify({"Q0": 2, "Q1": 4, "Q2": 3});
var eco_updating_key_04 = JSON.stringify({"Q0": 5, "Q1": 2, "Q2": 2});
var eco_updating_key_05 = JSON.stringify({"Q0": 3, "Q1": 2, "Q2": 4});

//-------------------- Start the Task
var eco_updating_welcome = {
  type: 'instructions',
  pages: [
    "Welcome to the <b>Object Counting</b> game!"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'welcome', task: "eco_updating"}
};
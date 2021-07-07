/**
 * jspsych-survey-matrix
 * a jspsych plugin for measuring items on a likert scale into a matrix
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

jsPsych.plugins['survey-matrix'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'survey-matrix',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {type: jsPsych.plugins.parameterType.STRING,
                     pretty_name: 'Prompt',
                     default: undefined,
                     description: 'Questions that are associated with the slider.'},
          required: {type: jsPsych.plugins.parameterType.BOOL,
                     pretty_name: 'Required',
                     default: false,
                     description: 'Makes answering questions required.'}
        }
      },
      labels: {type: jsPsych.plugins.parameterType.STRING,
         array: true,
         pretty_name: 'Labels',
         default: undefined,
         description: 'Labels to display for all questions in the matrix.'},
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'String to display at top of the page.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      },
      id: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Participant ID',
        default: 'xxx',
        description: 'ID of the current participant.'
      },
      questionnaire_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Name of Questionnaire',
        default: 'measure',
        description: 'Name of the questionnaire.'
      },
      screenshot: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Screenshot',
        default: false,
        description: 'Take a screenshot of the participant responses?'
    }
  }
  }

  plugin.trial = function(display_element, trial) {

    var html = "";
    // inject CSS for trial
    html += '<style id="jspsych-survey-matrix-css">';
    html += ".jspsych-survey-matrix-statement { display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px; }"+
            "table, tr, td{border-spacing: 0; text-align: center;}"+
            "th, td {border-bottom: 0 solid #ddd; padding: 15px 0 15px 0; vertical-align: middle; text-align: center;line-height: 1.2rem;}"+
            "tr:hover {background-color: #f5f5f5;}"+
            ".label-column {vertical-align: bottom; font-size: 16px; font-weight: normal;}"+
            ".question-column{text-align: left; padding-left: 15px;font-size: 16px;line-height: 1em;";
    html += '</style>';

    // show preamble text
    if(trial.preamble !== null){
      html += '<div style="text-align: left;">'+trial.preamble+'</div><br>';
    }

    // build the header of the matrix
    html += '<form id="jspsych-survey-matrix-form">';
    html += '<table><tr><th></th>';
    for(var i = 0; i < trial.labels.length; i++){
      //var width = 100 / trial.labels.length;
      html += '<th class="label-column">' + trial.labels[i] + '</th>';
    }
    html += '</tr>';

    // build the rest of the table
    for(var x = 0; x < trial.questions.length; x++){
      var width = 60 / trial.labels.length;
      // question prompt as the first cell in the row defining a question
      html += '<tr><td class="question-column">' + trial.questions[x].prompt + '</td>';
      for(j = 0; j < trial.labels.length; j++){
        html += '<td  style="width:' + width + '%" class="jspsych-survey-matrix-opts" data-radio-group="Q' + x + '"><input type="radio" name="Q' + x + '" value="' + j + '"';
        if(trial.questions[x].required){
          html += ' required';
        }
        html += '></td>';
      }
      html += '</tr>';
    }

    html += '</table>';

    // add submit button
    html += '<br><br><input type="submit" id="jspsych-survey-matrix-next" class="jspsych-survey-matrix jspsych-btn" value="'+trial.button_label+'"></input>';

    html += '</form>';

    display_element.innerHTML = html;
    
    if(trial.screenshot){
      display_element.querySelector('#jspsych-survey-matrix-form').addEventListener('submit', function(e){
        html2canvas(document.body).then(function(canvas) {
            var subjID = JSON.parse(jsPsych.data.get().filter({variable: "ID"}).last(1).values()[0].responses).Q0;
            var a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download =   subjID + "_" + trial.questionnaire_name + ".png";
            a.click();
        });
      });
    }

    display_element.querySelector('#jspsych-survey-matrix-form').addEventListener('submit', function(e){
      e.preventDefault();
      
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;
      
      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll('#jspsych-survey-matrix-form .jspsych-survey-matrix-opts');
      for(var index = 0; index < matches.length; index++){
        var id = matches[index].dataset['radioGroup'];
        var el = display_element.querySelector('input[name="' + id + '"]:checked');
        if (el === null) {
          var response = "";
        } else {
          var response = parseInt(el.value);
        }
        var obje = {};
        obje[id] = response;
        Object.assign(question_data, obje);
      }

      // save data
      var trial_data = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      display_element.innerHTML = '';
      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
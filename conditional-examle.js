// Shifting then Updating, Standard first
var counter_balance_01 = {
  timeline: [
      shape_instructions,                  //-----------------
      shape_practice_loop,                 // 
      color_instructions,                  // 
      color_practice_loop,                 // 
      shifting_instructions,               // 
      shifting_01,                         // Standard Shifting
      shifting_02,                         // 
      shifting_03,                         // 
      shifting_04,                         // 
      shifting_end,                        //-----------------
      gender_instructions,                 //
      gender_practice_loop,                //
      emotion_instructions,                //
      emotion_practice_loop,               //
      face_shifting_instructions,          // Ecological Shifting
      face_shifting_01,                    //
      face_shifting_02,                    //
      face_shifting_03,                    //
      face_shifting_04,                    //
      face_shifting_end,                   //-----------------
      updating_standard_instructions,      //
      updating_standard_practice_loop,     // Standard Updating
      updating_standard_practice_finish,   //
      updating_standard,                   //
      updating_standard_end,               //----------------
      updating_ecological_instructions,    //
      updating_ecological_practice_loop,   //
      updating_ecological_practice_finish, // Ecological Updating
      updating_ecological,                 //
      updating_ecological_end,             //----------------
      end
  ],
  conditional_function: function(){
        var code = jsPsych.data.get().select("counter_balance").values[0];
        if(JSON.parse(code) === 0){
            return true;
        } else {
            return false;
        }
    },
};
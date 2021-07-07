//------------------------- Letter stimuli
var letter_f = "<span style='font-size: 28px; text-transform: uppercase;'>f</span>";
var letter_h = "<span style='font-size: 28px; text-transform: uppercase;'>h</span>";
var letter_j = "<span style='font-size: 28px; text-transform: uppercase;'>j</span>";
var letter_k = "<span style='font-size: 28px; text-transform: uppercase;'>k</span>";
var letter_l = "<span style='font-size: 28px; text-transform: uppercase;'>l</span>";
var letter_n = "<span style='font-size: 28px; text-transform: uppercase;'>n</span>";
var letter_p = "<span style='font-size: 28px; text-transform: uppercase;'>p</span>";
var letter_q = "<span style='font-size: 28px; text-transform: uppercase;'>q</span>";
var letter_r = "<span style='font-size: 28px; text-transform: uppercase;'>r</span>";
var letter_s = "<span style='font-size: 28px; text-transform: uppercase;'>s</span>";
var letter_t = "<span style='font-size: 28px; text-transform: uppercase;'>t</span>";
var letter_y = "<span style='font-size: 28px; text-transform: uppercase;'>y</span>";

//------------------------- Memory Grid
var letters = [letter_f,letter_h,letter_j,letter_k,letter_l,letter_n,letter_p,letter_q,letter_r,letter_s,letter_t,letter_y];

var capacity_grid_cells = "";

for (let i = 0; i < letters.length; i++) {
  if(i == 0 | i == 3 | i == 6 | i == 9){
    capacity_grid_cells += "<tr >" + "<td style = 'padding: 15px;'>" + letters[i] + "</td>";
  } else if(i == 2 | i == 5 | i == 8 | i == 11){
    capacity_grid_cells += "<td style = 'padding: 15px;'>" + letters[i] + "</td>" + "</tr>";
  } else{
    capacity_grid_cells += "<td style = 'padding: 15px;'>" + letters[i] + "</td>";
  }
}

var capacity_grid = "<div style = 'display: flex; justify-content: center;'><table style='text-align: center;'>" + 
                     capacity_grid_cells + 
                     "</table></div><br><br>";


//------------------------- Symmetry Images
var sym01 = "img/capacity-symmetry/SYM01.png";
var sym02 = "img/capacity-symmetry/SYM02.png";
var sym03 = "img/capacity-symmetry/SYM03.png";
var sym04 = "img/capacity-symmetry/SYM04.png";
var sym05 = "img/capacity-symmetry/SYM05.png";
var sym06 = "img/capacity-symmetry/SYM06.png";
var sym07 = "img/capacity-symmetry/SYM07.png";
var sym08 = "img/capacity-symmetry/SYM08.png";
var sym09 = "img/capacity-symmetry/SYM09.png";
var sym10 = "img/capacity-symmetry/SYM10.png";
var sym11 = "img/capacity-symmetry/SYM11.png";
var sym12 = "img/capacity-symmetry/SYM12.png";
var sym13 = "img/capacity-symmetry/SYM13.png";
var sym14 = "img/capacity-symmetry/SYM14.png";
var sym15 = "img/capacity-symmetry/SYM15.png";
var sym16 = "img/capacity-symmetry/SYM16.png";

var autofocus_trial = {
  type: 'survey-html-form',
  preamble: capacity_grid,
  html: '<p>My favorite bird is <input type="text" id="test-resp-box" name="response" size="10" /></p>',
  autofocus: 'test-resp-box'
};
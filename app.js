(function() {

angular.
module('app', []).
controller('ChartController', function() {
   this.fingerings = fingerings;
   this.notes = notes;
   this.scaleNotes = scaleNotes;
   this.scales = scales;

   this.scale = "Cmaj";
})
.directive('ocarina', function() {
   return {
      templateUrl: "ocarina.html",
      scope: {
         note: '@'
      },
      link: function($scope) {
         $scope.fingerings = notes[$scope.note];
      }
   };
});

var fingerings = [
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //A 4
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1], //A#
   [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], //B
   [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1], //C
   [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1], //C#
   [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1], //D
   [1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1], //D#
   [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1], //E
   [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1], //F
   [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1], //F#
   [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1], //G
   [1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1], //G#
   [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1], //A 5
   [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1], //A#
   [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1], //B
   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1], //C
   [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], //C#
   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], //D
   [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], //D#
   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], //E
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //F
];

var notes = {
   "A4":  fingerings[0],
   "A#4": fingerings[1],  "Bb4": fingerings[1],
   "B4":  fingerings[2],
   "C5":  fingerings[3],
   "C#5": fingerings[4],  "Db5": fingerings[4],
   "D5":  fingerings[5],
   "D#5": fingerings[6],  "Eb5": fingerings[6],
   "E5":  fingerings[7],
   "F5":  fingerings[8],
   "F#5": fingerings[9],  "Gb5": fingerings[9],
   "G5":  fingerings[10],
   "G#5": fingerings[11], "Ab5": fingerings[11],
   "A5":  fingerings[12],
   "A#5": fingerings[13], "Bb5": fingerings[13],
   "B5":  fingerings[14],
   "C6":  fingerings[15],
   "C#6": fingerings[16], "Db6": fingerings[16],
   "D6":  fingerings[17],
   "D#6": fingerings[18], "Eb6": fingerings[18],
   "E6":  fingerings[19],
   "F6":  fingerings[20]
};

var scaleNotes = [
   //chromatic
   [ "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6" ],
   //major
   ["C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"], //no accidentals
   ["G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5", "A5", "B5", "C6", "D6", "E6", "F#6", "G6"], //one sharp
   ["F5", "G5", "A5", "Bb5", "C6", "D6", "E6", "F6"] // one flat
];

var scales = {
   "chromatic": scaleNotes[0],
   "Cmaj": scaleNotes[1],
   "Gmaj": scaleNotes[2],
   "Fmaj": scaleNotes[3]
};

})();

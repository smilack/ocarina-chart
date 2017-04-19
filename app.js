angular.
module('app', ['ngSanitize', 'ngRoute']).
config(function($routeProvider, $locationProvider) {
   $routeProvider.when('/:scale', {
      controller: 'ChartController'
   });
}).
run(function($rootScope) {
   $rootScope.pprintNote = function(name) {
      return name[0].toUpperCase() +
             name.substring(1)
                 .replace(/\d/g, '<span class="octave">$&</span>')
                 .replace("sharp", '&#9839;')
                 .replace("flat", '&#9837;')
                 .replace("-", '/')
                 .replace("maj", ' major');
   }
}).
controller('ChartController', function($scope, $routeParams) {
   this.fingerings = fingerings;
   this.notes = notes;
   this.scales = scales;
   this.menu = menu;

   this.scale = "Cmaj";

   var ctrl = this;
   $scope.$on('$routeChangeSuccess', function() {
      ctrl.scale = $routeParams.scale;
   });
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
   "A4":      fingerings[0],
   "Asharp4": fingerings[1],  "Bflat4":  fingerings[1],  "Asharp4-Bflat4": fingerings[1],
   "B4":      fingerings[2],  "Cflat5":  fingerings[2],
   "C5":      fingerings[3],  "Bsharp4": fingerings[3],
   "Csharp5": fingerings[4],  "Dflat5":  fingerings[4],  "Csharp5-Dflat5": fingerings[4],
   "D5":      fingerings[5],
   "Dsharp5": fingerings[6],  "Eflat5":  fingerings[6],  "Dsharp5-Eflat5": fingerings[6],
   "E5":      fingerings[7],  "Fflat5":  fingerings[7],
   "F5":      fingerings[8],  "Esharp5": fingerings[8],
   "Fsharp5": fingerings[9],  "Gflat5":  fingerings[9],  "Fsharp5-Gflat5": fingerings[9],
   "G5":      fingerings[10],
   "Gsharp5": fingerings[11], "Aflat5":  fingerings[11], "Gsharp5-Aflat5": fingerings[11],
   "A5":      fingerings[12],
   "Asharp5": fingerings[13], "Bflat5":  fingerings[13], "Asharp5-Bflat5": fingerings[13],
   "B5":      fingerings[14], "Cflat6":  fingerings[14],
   "C6":      fingerings[15], "Bsharp5": fingerings[15],
   "Csharp6": fingerings[16], "Dflat6":  fingerings[16], "Csharp6-Dflat6": fingerings[16],
   "D6":      fingerings[17],
   "Dsharp6": fingerings[18], "Eflat6":  fingerings[18], "Dsharp6-Eflat6": fingerings[18],
   "E6":      fingerings[19],
   "F6":      fingerings[20], "Esharp6": fingerings[20]
};

var scales = {
   //notes
   "A4":             ["A4"],
   "Asharp4-Bflat4": ["Asharp4-Bflat4"],
   "B4":             ["B4"],
   "C5":             ["C5"],
   "Csharp5-Dflat5": ["Csharp5-Dflat5"],
   "D5":             ["D5"],
   "Dsharp5-Eflat5": ["Dsharp5-Eflat5"],
   "E5":             ["E5"],
   "F5":             ["F5"],
   "Fsharp5-Gflat5": ["Fsharp5-Gflat5"],
   "G5":             ["G5"],
   "Gsharp5-Aflat5": ["Gsharp5-Aflat5"],
   "A5":             ["A5"],
   "Asharp5-Bflat5": ["Asharp5-Bflat5"],
   "B5":             ["B5"],
   "C6":             ["C6"],
   "Csharp6-Dflat6": ["Csharp6-Dflat6"],
   "D6":             ["D6"],
   "Dsharp6-Eflat6": ["Dsharp6-Eflat6"],
   "E6":             ["E6"],
   "F6":             ["F6"],
   //stuff
   "chromatic":   [ "A4", "Asharp4-Bflat4", "B4", "C5", "Csharp5-Dflat5", "D5", "Dsharp5-Eflat5", "E5", "F5", "Fsharp5-Gflat5", "G5", "Gsharp5-Aflat5", "A5", "Asharp5-Bflat5", "B5", "C6", "Csharp6-Dflat6", "D6", "Dsharp6-Eflat6", "E6", "F6" ],
   "naturals":    [ "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6", "D6", "E6", "F6" ],
   "accidentals": [ "Asharp4-Bflat4", "Csharp5-Dflat5", "Dsharp5-Eflat5", "Fsharp5-Gflat5", "Gsharp5-Aflat5", "Asharp5-Bflat5", "Csharp6-Dflat6", "Dsharp6-Eflat6" ],
   //no accidentals
   "Cmaj": ["C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"],
   //sharps
   "Gmaj":      ["G4", "A4", "B4", "C5", "D5", "E5", "Fsharp5", "G5", "A5", "B5", "C6", "D6", "E6", "Fsharp6", "G6"],
   "Dmaj":      ["D5", "E5", "Fsharp5", "G5", "A5", "B5", "Csharp6", "D6"],
   "Amaj":      ["A4", "B4", "Csharp5", "D5", "E5", "Fsharp5", "Gsharp5", "A5"],
   "Emaj":      ["E5", "Fsharp5", "Gsharp5", "A5", "B5", "Csharp6", "Dsharp6", "E6"],
   "Bmaj":      ["B4", "Csharp5", "Dsharp5", "E5", "Fsharp5", "Gsharp5", "Asharp5", "B5"],
   "Fsharpmaj": ["Fsharp5", "Gsharp5", "Asharp5", "B5", "Csharp6", "Dsharp6", "Esharp6", "Fsharp6"],
   "Csharpmaj": ["Csharp5", "Dsharp5", "Esharp5", "Fsharp5", "Gsharp5", "Asharp5", "Bsharp5", "Csharp6"],
   //flats
   "Fmaj":     ["F5", "G5", "A5", "Bflat5", "C6", "D6", "E6", "F6"],
   "Bflatmaj": ["Bflat4", "C5", "D5", "Eflat5", "F5", "G5", "A5", "Bflat5"],
   "Eflatmaj": ["Eflat5", "F5", "G5", "Aflat5", "Bflat5", "C6", "D6", "Eflat6"],
   "Aflatmaj": ["Aflat4", "Bflat4", "C5", "Dflat5", "Eflat5", "F5", "G5", "Aflat5", "Bflat5", "C6", "Dflat6", "Eflat6", "F6", "G6", "Aflat6"],
   "Dflatmaj": ["Dflat5", "Eflat5", "F5", "Gflat5", "Aflat5", "Bflat5", "C6", "Dflat6"],
   "Gflatmaj": ["Gflat4", "Aflat4", "Bflat4", "Cflat5", "Dflat5", "Eflat5", "F5", "Gflat5", "Aflat5", "Bflat5", "Cflat6", "Dflat6", "Eflat6", "F6", "Gflat6"],
   "Cflatmaj": ["Cflat5", "Dflat5", "Eflat5", "Fflat5", "Gflat5", "Aflat5", "Bflat5", "Cflat6"]
};

var menu = {
   "Notes": [
      [ "A4", "Asharp4-Bflat4", "B4" ],
      [ "C5", "Csharp5-Dflat5", "D5", "Dsharp5-Eflat5", "E5", "F5", "Fsharp5-Gflat5", "G5", "Gsharp5-Aflat5", "A5", "Asharp5-Bflat5", "B5" ],
      [ "C6", "Csharp6-Dflat6", "D6", "Dsharp6-Eflat6", "E6", "F6" ],
      [ "chromatic", "naturals", "accidentals" ]
   ],
   "Major Scales": [
      [ "Cmaj" ],
      [ "Gmaj", "Dmaj", "Amaj", "Emaj", "Bmaj", "Fsharpmaj", "Csharpmaj" ],
      [ "Fmaj", "Bflatmaj", "Eflatmaj", "Aflatmaj", "Dflatmaj", "Gflatmaj", "Cflatmaj" ]
   ]
}

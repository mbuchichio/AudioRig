// Import stylesheets
import './style.css';

// Write Javascript code!

const appDiv = document.getElementById('app');
/*
appDiv.innerHTML = '\
<label for="TT">Bandeja: </label>\
\
<select name="Bandeja" id="Bandeja">\
  <option value="volvo">Volvo</option>\
  <option value="saab">Saab</option>\
  <option value="mercedes">Mercedes</option>\
  <option value="audi">Audi</option>\
</select>';
*/

// Console tests...
const place = 'World';
const greeting = 'Hello';
console.log('%s, %s', greeting, place);
console.log(`${greeting}, ${place}`);
console.log(greeting + ", " + place);
let pi = 3.1415;
console.log('Pi = ' + pi);
if(true){
  let world = 'Hello World';
  console.log(world);
}
const mario = 'Mario';
console.log(mario);
let pi2 = Math.PI
console.log(pi2);
//------------------------------------>


// ------------------------------------
// Components definitions
// TODO: comparar con definiciones del proyecto XOJO, falta por ejemplo la consola Pioneer DJM-250


const Turntables = [
    { Label:'Akai AP-Q55',               ID:'APQ55',       Rate:1.0,      Overhang:15 },
    { Label:'Technics SL-BD22',          ID:'SLBD22',      Rate:0.0,      Overhang:15 },
    { Label:'Audio-Technica AT-LP60XBT', ID:'ATLP60X',     Rate:0.986344, Overhang:0  },
    { Label:'Audio-Technica AT-LP140XP', ID:'ATLP140XP',   Rate:1.0,      Overhang:16 },
    { Label:'Pro-Ject Primary E Phono',  ID:'PJPEP',       Rate:0.996127, Overhang:22 }
];
const Cartridges = [
  { Label:'Shure M44-7',                 ID:'M447',        Gain:-9,  VTF:2.0,  Parents:['APQ55'] },
  { Label:'Ortofon Super OM10',          ID:'OM10',        Gain:0,   VTF:1.5,  Parents:['ATLP140XP','APQ55'] },
  { Label:'Ortofon OM5e',                ID:'OM5e',        Gain:0,   VTF:1.75, Parents:['PJPEP'] },
  { Label:'Audio Technica ATN3600L',     ID:'ATN3600L',    Gain:4,   VTF:3.5,  Parents:['ATLP60X'] },
  { Label:'Audio Technica ATXP3',        ID:'ATXP3',       Gain:-6,  VTF:3.0,  Parents:['ATLP140XP'] },
  { Label:'Audio Technica AT85EP',       ID:'AT85EP',      Gain:0,   VTF:1.25, Parents:['SLBD22'] },
  { Label:'Technics P24',                ID:'TP24',        Gain:-4,  VTF:1.25, Parents:['SLBD22'] },
  { Label:'Stanton L-700E',              ID:'SL700E',      Gain:0,   VTF:1.25, Parents:['SLBD22'] }
];
const Styli = [
  { Label:'Shure M44-7',                 ID:'SN447',       Gain:-9,  VTF:2.0,  Parents:['M447'] },
  { Label:'N44E generica',               ID:'N44E',        Gain:-6,  VTF:1.5,  Parents:['M447'] }
];
const Preamps = [
  { Label:'Pioneer DJM-250 MK2',          ID:'PDJ250MK2' },
  { Label:'Rega Phono Mini A2D',          ID:'RPMA2D' },
  { Label:'Pro-Ject Phono Box II',        ID:'PJPB2' },
  { Label:'Pro-Ject Primary E Phono Line',ID:'PJPEP' },
  { Label:'Audio-Technica AT-LP60X Line', ID:'ATLP60X' },
  { Label:'Behringer PP400',              ID:'PP400' },
  { Label:'Bellari VP129',                ID:'VP129' },
  { Label:'TL072',                        ID:'TL072' }
];
const Selectors = [
  { Label:'none',                         ID:'none'},
  { Label:'Switchbox',                    ID:'Switchbox'}
];
const Gain = [
  { Label:'none',                         ID:'none'},
  { Label:'Console Behringer UB1204-Pro', ID:'UB1204'}
];
const ADC = [
  { Label:'Mac mini line input',          ID:'Macmini'},
  { Label:'M-Audio Audiophile Firewire',  ID:'MAFW'},
  { Label:'Line 6 UX2',                   ID:'UX2'},
  { Label:'Rega Phono Mini A2D USB',      ID:'RPMA2D'},
  { Label:'Pioneer DJM-250 MK2',          ID:'PDJ250MK2' }
];
const Host = [
  { Label:'Mac mini 2010',                ID:'Macmini'},
  { Label:'PC Monstruo',                  ID:'PC MONSTRUO'}
];

// Fill GUI elements
let s = '\
<label for="TT">Bandeja: </label>\
<select name="Bandeja" id="Bandeja">'
Turntables.forEach(function(Label, ID) {
  s += "<option value='" + ID.toString + "'>" + Label.toString + "</option>"
});
s += "</select>'";

appDiv.innerHTML = s


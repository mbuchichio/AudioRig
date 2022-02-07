// Import stylesheets
import './style.css';

// Write Javascript code!

const appDiv = document.getElementById('app');

// Console tests...
/*
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
*/
//------------------------------------>

// ------------------------------------
// Components definitions
// TODO: comparar con definiciones del proyecto XOJO, falta por ejemplo la consola Pioneer DJM-250

const Rig = {
  Turntable: 
  [
    {
      Label: 'Akai AP-Q55',
      ID: 'APQ55',
      SpeedRate: 1.0,
      Overhang: 15,
      Cartridge: 
      [
        {
          Label: 'Shure M44-7',
          ID: 'M447',
          Gain: -9,
          VTF: 2.0,
          Stylus: 
          [
            {
              Label: 'Shure N44-7',
              ID: 'SN447',
              Gain: -9,
              VTF: 2.0,
            },
            {
              Label: 'N44E Bliss',
              ID: 'N44EBliss',
              Gain: -6,
              VTF: 1.5,
            },
          ],
        },
        {
          Label: 'Ortofon Super OM10',
          ID: 'OM10',
          Gain: 0,
          VTF: 1.5,
        },
      ],
    },
    { 
      Label: 'Technics SL-BD22', 
      ID: 'SLBD22', 
      SpeedRate: 0.0, 
      Overhang: 15 ,
      Cartridge: 
      [
        {
        Label: 'Audio Technica AT85EP',
        ID: 'AT85EP',
        Gain: 0,
        VTF: 1.25,
        Parents: ['SLBD22'],
        },
        {
          Label: 'Technics P24',
          ID: 'TP24',
          Gain: -4,
          VTF: 1.25,
          Parents: ['SLBD22'],
        },
        {
          Label: 'Stanton L-700E',
          ID: 'SL700E',
          Gain: 0,
          VTF: 1.25,
          Parents: ['SLBD22'],
        },
      ],
    },
    {
      Label: 'Audio-Technica AT-LP60XBT',
      ID: 'ATLP60X',
      SpeedRate: 0.986344,
      Overhang: 0,
      Cartridge:
        {
          Label: 'Audio Technica ATN3600L',
          ID: 'ATN3600L',
          Gain: 4,
          VTF: 3.5,
        },
    },
    {
      Label: 'Audio-Technica AT-LP140XP',
      ID: 'ATLP140XP',
      SpeedRate: 1.0,
      Overhang: 16,
      Cartridge:
      {
        Label: 'Audio Technica ATXP3',
        ID: 'ATXP3',
        Gain: -6,
        VTF: 3.0,
      },
    },
    {
      Label: 'Pro-Ject Primary E Phono',
      ID: 'PJPEP',
      SpeedRate: 0.996127,
      Overhang: 22,
      Cartridge:
      {
        Label: 'Ortofon OM5e',
        ID: 'OM5e',
        Gain: 0,
        VTF: 1.75,
      },
    },
  ],


  Preamp: [
    { Label: 'Pioneer DJM-250 MK2', ID: 'PDJ250MK2' },
    { Label: 'Rega Phono Mini A2D', ID: 'RPMA2D' },
    { Label: 'Pro-Ject Phono Box II', ID: 'PJPB2' },
    { Label: 'Pro-Ject Primary E Phono Line', ID: 'PJPEP' },
    { Label: 'Audio-Technica AT-LP60X Line', ID: 'ATLP60X' },
    { Label: 'Behringer PP400', ID: 'PP400' },
    { Label: 'Bellari VP129', ID: 'VP129' },
    { Label: 'TL072', ID: 'TL072' },
  ],
  Switchbox: [
    { Label: 'none', ID: 'none' },
    { Label: 'Switchbox', ID: 'Switchbox' },
  ],
  GainStage: [
    { Label: 'none', ID: 'none' },
    { Label: 'Console Behringer UB1204-Pro', ID: 'UB1204' },
  ],
  AudioInterface: [
    { Label: 'Mac mini line input', ID: 'Macmini' },
    { Label: 'M-Audio Audiophile Firewire', ID: 'MAFW' },
    { Label: 'Line 6 UX2', ID: 'UX2' },
    { Label: 'Rega Phono Mini A2D USB', ID: 'RPMA2D' },
    { Label: 'Pioneer DJM-250 MK2', ID: 'PDJ250MK2' },
  ],
  HostComputer: [
    { Label: 'Mac mini 2010', ID: 'Macmini' },
    { Label: 'PC Monstruo', ID: 'PC MONSTRUO' },
  ],
};

// Fill GUI elements
let s =
  '\
<label for="TT">Bandeja: </label>\
<select name="Bandeja" id="SelectBandeja">';
for (let i in Rig.Turntable) {
  s += "<option value='" + Rig.Turntable[i].ID + "'>" + Rig.Turntable[i].Label + '</option>';
}
s += '</select><br>';

s +=
  '\
<label for="TT">Cartridge: </label>\
<select name="Cartridge" id="SelectCartridge">';
for (let i in Rig.Turntable[0].Cartridge) {
  s += "<option value='" + Rig.Turntable[0].Cartridge[i].ID + "'>" + Rig.Turntable[0].Cartridge[i].Label + '</option>';
}
s += '</select><br>';

s +=
  '\
<label for="TT">Stylus: </label>\
<select name="Stylus" id="SelectStylus">';
for (let i in Rig.Turntable[0].Cartridge[0].Stylus) {
  s += "<option value='" + Rig.Turntable[0].Cartridge[0].Stylus[i].ID + "'>" +  Rig.Turntable[0].Cartridge[0].Stylus[i].Label + '</option>';
}
s += '</select><br>';



appDiv.innerHTML = s;


/*
const selectBandeja = document.getElementById("SelectBandeja");
console.log(selectBandeja.selectedIndex);
const selectBandejaIndex = selectBandeja.options[selectBandeja.selectedIndex].value;
*/
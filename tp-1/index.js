import {suma, resta, promedio, diametro} from './src/modules/matematica.js'
import {alumnos} from './src/models/alumno.js'
import {parsearURL} from './src/modules/url.js'
import {getAllInfoByISO} from 'iso-country-currency'
// ejercicio 1
let ghostspider1 = "Gwen Stacy was born in Forest Hills to George and Helen Stacy. Following her mother's death, she was raised by George alone. Gwen's free spirit and artistic inclinations often put her at odds with the type of ethics her father worked to instill. As a result of this contrast with her father, Gwen would often retreat into quiet seclusion and play the drums. Over time, she developed a friendship with her neighbor and fellow introvert Peter Parker, sharing their love for music.[24] At Midtown High School, Gwen developed relationships with other students, a group of girls with whom she formed the band, The Mary Janes,[25] and rebellious affluent student Harry Osborn.[20]";
let ghostspider2 = "After being bitten by a genetically-engineered spider, Gwen was granted arachnid-like super-powers, and started a career as a crimefighter, dubbed by the media as Spider-Woman. She was given a costume and a set of web-shooters by retired crimefighter Janet van Dyne. Gwen spent most of her early adventures focused on exploiting and maintaining her newfound attention more than helping those in need; however, Gwen's behavior changed after her father expressed he believed Spider-Woman could easily help people.[25] Spider-Woman's influence also caused one of the biggest tragedies in Gwen's life. The bullied Peter Parker, desperate to be special like his idol Spider-Woman, conducted an experiment that turned him into a Lizard-like creature. Parker crashed the Midtown Senior Prom, where Gwen fought him. Despite his pleas for de-escalation, Gwen did not pull any punches. Following Gwen’s beatdown, Peter returned to his human form but, due to the injuries sustained at Gwen's attacks, he died.[26] With no evidence or link to his transformation, Spider-Woman was blamed by the media for Peter's death and branded a criminal.[27] Haunted by Peter's death, Gwen doubled her efforts to fight crime to redeem herself. Additionally, Gwen's father George was tasked with conducting the NYPD investigation to capture Spider-Woman. This drew the attention of Matt Murdock - a corrupt lawyer, leader of the Hand ninja, and the right hand and successor to New York's Kingpin of crime - who sent hitman Aleksei Sytsevich to kill George in an attempt to make an ally of Spider-Woman. After thwarting the murder attempt, Gwen found herself held at gunpoint by her father, and she was forced to reveal her double identity. She pleaded her innocence, and swore to never rest until criminals like the Kingpin were stopped. Captain Stacy told her to leave the scene before he changed his mind ";
let ambos = ghostspider1 + ghostspider2;
let text = `${ambos}`;
console.log(text);

// ejercicio 2
console.log(suma(13, 7));

// ejercicio 3
console.log(alumnos("Miles Morales", 3));

//ejercicio 4
/*var fs = require('fs');
fs.rename('jb.txt', 'flop.txt', () => {
    console.log("JB FLOP");
     
  });*/
  let objeto = parsearURL("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
  console.log(objeto);

  //ejercicio 7 - instalar npm install iso-country-currency

  let moneda = getAllInfoByISO('BE');
  console.log(` ${moneda.currency}`);
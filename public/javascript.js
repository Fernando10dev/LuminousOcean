var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var size = window.innerWidth;
var dpr = window.devicePixelRatio;

canvas.width = "1600"
canvas.height = "2400"
var alto = "2000"



var palettes = [
  paleta1 = {
    fondo: "#66ccff",
    esferas: "#ff80ff",
    sombra: "black"
  },
  paleta2 =
  {
    fondo: "#ff8080",
    esferas: "aqua",
    sombra: "black"
  },
  paleta3 =
  {
    fondo: "#ff80ff",
    esferas: "white",
    sombra: "black"
  },
  paleta4 =
  {
    fondo: "#00997a",
    esferas: "#ff6666",
    sombra: "black"
  },
  paleta5 =
  {
    fondo: "#002e4d",
    esferas: "#ff1a66",
    sombra: "#ff1a66"
  }
]
var paletarandom = palettes[Math.floor(Math.random() * palettes.length)]
var fondodepaletalegida = paletarandom.fondo;
var sombradepaletalegida = paletarandom.sombra;
var esferadepaletalegida = paletarandom.esferas;


var background;
var colourEsfera;

function propiedadesFondo() {
  switch (fondodepaletalegida) {
    case "#66ccff":
      background = "Sky Blue"
      break;
    case "#ff8080":
      background = "Coral"
      break;
    case "#ff80ff":
      background = "Violet"
      break;
    case "#00997a":
      background = "Teal Light"
      break;
    case "#002e4d":
      background = "Dark Ocean"
  }
}
function propiedadesEsfera() {
  switch (esferadepaletalegida) {
    case "#ff80ff":
      colourEsfera = "Violet Light"
      break;
    case "aqua":
      colourEsfera = "Aqua"
      break;
    case "white":
      colourEsfera = "White"
      break;
    case "#ff6666":
      colourEsfera = "Salmon"
      break;
    case "#ff1a66":
      colourEsfera = "Red Light"
  }
}
propiedadesFondo()
propiedadesEsfera()

var numerosal;

var color;
var colorEsfera = ["#ffffcc", "#ffff99", "#ffff4d", "#ff80ff", "#d2ff4d", "#99ff99", "#00ffbf", "#1aff66", "#66ffff", "#00ffff", "#ff5050", "#ff3385", "#4dffdb"]
color = colorEsfera[Math.floor(Math.random() * colorEsfera.length)]

var s = Math.random() * 0.01;
var a = Math.random() * 0.01;
console.log(a, s)
var numbers1 = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.1", "1,2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2"]


var colordefaultesfera;
function propiedadesferacomun() {
  switch (color) {
    case "#ffffcc":
      colordefaultesfera = "Creamlight Yellow"
      break;
    case "#ffff99":
      colordefaultesfera = "Cream Yellow"
      break;
    case "#ffff4d":
      colordefaultesfera = "Yellow"
      break
    case "#ff80ff":
      colordefaultesfera = "Violet Light"
      break;
    case "#d2ff4d":
      colordefaultesfera = "Lime"
      break;
    case "#99ff99":
      colordefaultesfera = "Lime Light"
      break;
    case "#00ffbf":
      colordefaultesfera = "Aquamarine Strong"
      break;
    case "#1aff66":
      colordefaultesfera = "Green Light"
      break;
    case "#66ffff":
      colordefaultesfera = "AquaLight"
      break;
    case "#00ffff":
      colordefaultesfera = "Aqua"
      break;
    case "#ff5050":
      colordefaultesfera = "Red Light"
      break;
    case "#ff3385":
      colordefaultesfera = "Deep Pink"
      break;
    case "#4dffdb":
      colordefaultesfera = "Aquamarine Light"
      break;
  }
}
propiedadesferacomun()
var aleatorioparagray = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.1", "1,2", "1.3", "1.4", "1.5"]
var coloraleatorio = aleatorioparagray[Math.floor(Math.random() * aleatorioparagray.length)]
var fondo;
var marco;
var sombra;
var colorLineas;
var randomnumero = Math.floor((Math.random() * (50 - 1)) + 1);

console.log(randomnumero)

var sizedefinitivo;

function printmulticolor() {

  for (i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var size = Math.floor((Math.random() * (30 - 5)) + 5);
    var multicolores = ["#0a89cd", "#c52e44", "#fae557"]
    var paletamulticolor = multicolores[Math.floor(Math.random() * multicolores.length)]

    ctx.beginPath()
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    ctx.shadowBlur = 35;
    ctx.shadowColor = "black"
    ctx.strokeStyle = paletamulticolor
    ctx.lineWidth = 2
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.stroke()
  }
  for (i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var size = Math.floor((Math.random() * (30 - 5)) + 5);
    var multicolores = ["#0a89cd", "#c52e44", "#fae557"]
    var paletamulticolor = multicolores[Math.floor(Math.random() * multicolores.length)]

    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 35;
    ctx.shadowColor = "black"
    ctx.fillStyle = paletamulticolor
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fill()
  }
  return sizedefinitivo = "Medium"
}

var finalsize;
var descripcion;


var printSmall = () => {
  for (i = 0; i < 200; i++) {

    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeS = Math.floor((Math.random() * (10 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.arc(x, y, sizeS, 0, 2 * Math.PI)
    ctx.stroke()
  }
  for (i = 0; i < 150; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeS = Math.floor((Math.random() * (20 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
    ctx.shadowColor = color
    ctx.fillStyle = color
    ctx.arc(x, y, sizeS, 0, 2 * Math.PI)
    ctx.fill()
  }
  sizedefinitivo = "Small"
}

var printdefaulmulticolor = () => {
  for (i = 0; i < 100; i++) {

    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM = Math.floor((Math.random() * (30 - 5)) + 5);
    var colorm;
    var colorEsferam = ["#ffffcc", "#ffff99", "#ffff4d", "#ff80ff", "#d2ff4d", "#99ff99", "#00ffbf", "#1aff66", "#66ffff", "#00ffff", "#ff5050", "#ff3385", "#4dffdb"]
    colorm = colorEsferam[Math.floor(Math.random() * colorEsferam.length)]

    ctx.beginPath()
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    ctx.shadowBlur = 25;
    ctx.shadowColor = colorm
    ctx.strokeStyle = colorm
    ctx.lineWidth = 2
    ctx.arc(x, y, sizeM, 0, 2 * Math.PI)
    ctx.stroke()
  }
  for (i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM = Math.floor((Math.random() * (30 - 5)) + 5);
    var colorm;
    var colorEsferam = ["#ffffcc", "#ffff99", "#ffff4d", "#ff80ff", "#d2ff4d", "#99ff99", "#00ffbf", "#1aff66", "#66ffff", "#00ffff", "#ff5050", "#ff3385", "#4dffdb"]
    colorm = colorEsferam[Math.floor(Math.random() * colorEsferam.length)]

    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
    ctx.shadowColor = colorm
    ctx.fillStyle = colorm
    ctx.arc(x, y, sizeM, 0, 2 * Math.PI)
    ctx.fill()
  }
  sizedefinitivo = "Medium"
}

var printdefaulmulticolorSmall = () => {
  for (i = 0; i < 250; i++) {

    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random()* (2000) + 1));
    var sizeM = Math.floor((Math.random() * (20 - 5)) + 5);
    var colorm;
    var colorEsferam = ["#ffffcc", "#ffff99", "#ffff4d", "#ff80ff", "#d2ff4d", "#99ff99", "#00ffbf", "#1aff66", "#66ffff", "#00ffff", "#ff5050", "#ff3385", "#4dffdb"]
    colorm = colorEsferam[Math.floor(Math.random() * colorEsferam.length)]

    ctx.beginPath()
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    ctx.shadowBlur = 25;
    ctx.shadowColor = colorm
    ctx.strokeStyle = colorm
    ctx.lineWidth = 2
    ctx.arc(x, y, sizeM, 0, 2 * Math.PI)
    ctx.stroke()
  }
  for (i = 0; i < 250; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random()* (2000) + 1));
    var sizeM = Math.floor((Math.random() * (20 - 5)) + 5);
    var colorm;
    var colorEsferam = ["#ffffcc", "#ffff99", "#ffff4d", "#ff80ff", "#d2ff4d", "#99ff99", "#00ffbf", "#1aff66", "#66ffff", "#00ffff", "#ff5050", "#ff3385", "#4dffdb"]
    colorm = colorEsferam[Math.floor(Math.random() * colorEsferam.length)]

    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
    ctx.shadowColor = colorm
    ctx.fillStyle = colorm
    ctx.arc(x, y, sizeM, 0, 2 * Math.PI)
    ctx.fill()
  }
  sizedefinitivo = "Small"
}

var printMedium = () => {
  for (i = 0; i < 150; i++) {

    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM = Math.floor((Math.random() * (20 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 20;
    ctx.shadowColor = color
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.arc(x, y, sizeM, 0, 2 * Math.PI)
    ctx.stroke()
  }
  for (i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM = Math.floor((Math.random() * (30 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
    ctx.shadowColor = color
    ctx.fillStyle = color
    ctx.arc(x, y, sizeM, 0, 2 * Math.PI)
    ctx.fill()
  }
  sizedefinitivo = "Medium"
}

function printesferaelegida() {

  for (i = 0; i < 200; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM2 = Math.floor((Math.random() * (15 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 25;
    ctx.shadowColor = sombradepaletalegida
    ctx.strokeStyle = esferadepaletalegida
    ctx.lineWidth = 2
    ctx.arc(x, y, sizeM2, 0, 2 * Math.PI)
    ctx.stroke()
  }
  for (i = 0; i < 200; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM2 = Math.floor((Math.random() * (20 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
    ctx.shadowColor = sombradepaletalegida
    ctx.fillStyle = esferadepaletalegida
    ctx.arc(x, y, sizeM2, 0, 2 * Math.PI)
    ctx.fill()
  }
  sizedefinitivo = "Small"
}

function printesferaelegidamedium() {

  for (i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM2 = Math.floor((Math.random() * (30 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    ctx.shadowBlur = 25;
    ctx.shadowColor = sombradepaletalegida
    ctx.strokeStyle = esferadepaletalegida
    ctx.lineWidth = 2
    ctx.arc(x, y, sizeM2, 0, 2 * Math.PI)
    ctx.stroke()
  }
  for (i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * (1600) + 1));
    var y = Math.floor((Math.random() * (2000) + 1));
    var sizeM2 = Math.floor((Math.random() * (30 - 5)) + 5);
    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
    ctx.shadowColor = sombradepaletalegida
    ctx.fillStyle = esferadepaletalegida
    ctx.arc(x, y, sizeM2, 0, 2 * Math.PI)
    ctx.fill()
  }
  sizedefinitivo = "Medium"
}



switch (randomnumero) {

  case 11:
    fondo = "white",
      colorLineas = "gray",
      numerosal = coloraleatorio
    break;
  case 20:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 21:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 22:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 23:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 24:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 25:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 26:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 27:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 28:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 29:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 30:
    fondo = fondodepaletalegida,
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
    break;
  case 44:
    fondo = "white",
      colorLineas = "gray",
      numerosal = coloraleatorio
    break;
  default:
    fondo = "Black",
      colorLineas = "white",
      numerosal = numbers1[Math.floor(Math.random() * numbers1.length)]
}


console.log(numerosal)
ctx.beginPath()
ctx.fillStyle = fondo;
ctx.fillRect(0, 0, canvas.width, canvas.height);

var backgrounddefinitivo;
var coloresferadefinitivo;
var tamañodefinito;

switch (randomnumero) {
  case 1:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 2:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 3:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 4:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 5:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 13:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 6:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 7:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 8:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 9:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 10:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 12:
    printMedium()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera
    break
  case 11:
    printmulticolor(),
      backgrounddefinitivo = "White",
      coloresferadefinitivo = "Multicolor"
    break;
  case 13:
    printdefaulmulticolor()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = "Shiny Multicolor"
    break
  case 14:
    printdefaulmulticolorSmall()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = "Shiny Multicolor"
    break
  case 15:
    printdefaulmulticolorSmall()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = "Shiny Multicolor"
    break
  case 16:
    printdefaulmulticolor()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = "Shiny Multicolor"
    break
  case 17:
    printdefaulmulticolorSmall()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = "Shiny Multicolor"
    break
  case 18:
    printdefaulmulticolor()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = "Shiny Multicolor"
    break
  case 19:
    printdefaulmulticolorSmall()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = "Shiny Multicolor"
    break
  case 20:
    printesferaelegidamedium(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 21:
    printesferaelegida(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 22:
    printesferaelegida(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 23:
    printesferaelegidamedium(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 24:
    printesferaelegida(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 25:
    printesferaelegidamedium(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 26:
    printesferaelegida(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 27:
    printesferaelegida(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 28:
    printesferaelegidamedium(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 29:
    printesferaelegida(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 30:
    printesferaelegidamedium(),
      backgrounddefinitivo = background,
      coloresferadefinitivo = colourEsfera
    break;
  case 44:
    printmulticolor(),
      backgrounddefinitivo = "White",
      coloresferadefinitivo = "Multicolor"
    break;
  default:
    printSmall()
    backgrounddefinitivo = "Black",
      coloresferadefinitivo = colordefaultesfera

}



var negativoopositivo = Math.random() >= 0.5
var randomnegativoopositivo;
console.log(negativoopositivo)

if (negativoopositivo) {
  randomnegativoopositivo = numerosal
} else { randomnegativoopositivo = -numerosal }

console.log(randomnegativoopositivo)
//////////////
var count = 100000
ctx.lineWidth = 0.25;

for (var i = 0; i < count; i++) {
  var x = Math.floor((Math.random() * (1600) +1)),
    y = Math.floor((Math.random() * (2400) + 1));

  var value = getValue(x, y);

  ctx.save();
  ctx.translate(x, y);
  render(value);
  ctx.restore();
}

function getValue(x, y) {
  return (Math.sin(x * a) + Math.sin(y * s)) * Math.PI *numerosal;
}

function render(value) {
  ctx.rotate(value);
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
  ctx.beginPath();
  ctx.strokeStyle = colorLineas
  ctx.moveTo(0,0);
  ctx.lineTo(Math.random() * 33 + 33, 1);
  ctx.stroke();
}
function marcodefault() {
  ctx.beginPath()
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 0;
  ctx.lineWidth = 30
  ctx.strokeStyle = "black"
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 2400)
  ctx.moveTo(0, 2400)
  ctx.lineTo(1600, 2400)
  ctx.moveTo(1600, 2400)
  ctx.lineTo(1600, 0)
  ctx.moveTo(1600, 0)
  ctx.lineTo(0, 0)
  ctx.stroke()
}
function marcoGray() {


  ctx.beginPath()
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 0;
  ctx.lineWidth = 100
  ctx.strokeStyle = "rgba(0,0,0,0.3)"
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 2400)
  ctx.moveTo(0, 2400)
  ctx.lineTo(1600, 2400)
  ctx.moveTo(1600, 2400)
  ctx.lineTo(1600, 0)
  ctx.moveTo(1600, 0)
  ctx.lineTo(0, 0)
  ctx.stroke()

  ctx.beginPath()
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 0;
  ctx.lineWidth = 50
  ctx.strokeStyle = "black"
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 2400)
  ctx.moveTo(0, 2400)
  ctx.lineTo(1600, 2400)
  ctx.moveTo(1600, 2400)
  ctx.lineTo(1600, 0)
  ctx.moveTo(1600, 0)
  ctx.lineTo(0, 0)
  ctx.stroke()
}
marcodefault()
   




window.$fxhashFeatures = {

  "Background": backgrounddefinitivo,

  "Sphere and Ring color": coloresferadefinitivo,
  "Sphere and Ring size": sizedefinitivo,
}




var download = function () {
  var img = document.createElement('a')
  img.download = 'LuminousOcean.png';
  img.href = document.getElementById('canvas').toDataURL()
  img.click()
}

document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  if (code === 'KeyS') {
    this.download();
  }
}, false);

fxpreview()




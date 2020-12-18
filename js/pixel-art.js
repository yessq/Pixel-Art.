var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];

var colorPersonalizado = document.getElementById("color-personalizado");

colorPersonalizado.addEventListener("change", function() {
  colorActual = colorPersonalizado.value;

  colorSeleccionado = colorActual;
  $("#indicador-de-color").css("background-color", colorActual);
  $(".pixelGrilla").click(function() {
    $(this).css("background-color", colorActual);
  });
});

var paleta = document.getElementById(".paleta");

var grilla = document.getElementById("grilla-pixeles");

for (var i = 0; i < nombreColores.length; i++) {
  $("#paleta").append(
    $("<div>")
      .css("background-color", nombreColores[i])
      .addClass("color-paleta")
  );
}

for (var i = 0; i <= 1750; i++) {
  $("#grilla-pixeles").append($("<div>").addClass("pixelGrilla"));
}

$(".color-paleta").click(function() {
  colorSeleccionado = $($(this)).css("background-color");
  $("#indicador-de-color")
    .fadeOut(250)
    .css("background-color", colorSeleccionado)
    .fadeIn(250);
});

$(".pixelGrilla").click(function() {
  $(this).css("background-color", colorSeleccionado);
});

$(document).mousedown(function() {
  mousePresionado = true;
});

$(document).mouseup(function() {
  mousePresionado = false;
});

$("#grilla-pixeles div").mouseover(function() {
  if (mousePresionado) {
    $(this).css("background-color", colorSeleccionado);
  }
});

$("#borrar").click(function() {
  $("#grilla-pixeles div").animate({ "background-color": "white" }, 1200);
});

$("#batman").click(function() {
  cargarSuperheroe(batman);
});

$("#flash").click(function() {
  cargarSuperheroe(flash);
});

$("#wonder").click(function() {
  cargarSuperheroe(wonder);
});

$("#invisible").click(function() {
  cargarSuperheroe(invisible);
});

$("#guardar").click(function() {
  guardarPixelArt();
});

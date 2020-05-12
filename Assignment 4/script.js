(function (window) {
  var names = [
    "Asiri",
    "Keshan",
    "Janith",
    "Janka",
    "Randika",
    "Chamara",
    "Kasun",
    "Nimal",
    "Yashoda",
    "Jayantha",
  ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter == "j") {
      window.byeSpeaker.speak(names[i]);
    } else {
      window.helloSpeaker.speak(names[i]);
    }
  }
})(window);

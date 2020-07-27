const Buttons = {
  setColor: function (color) {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons.item(i).style.color = color;
    }

    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links.item(i).style.color = color;
    }
  },

  setBgColor: function (color) {
    var buttons = document.querySelectorAll('button');
    for (var k = 0; k < buttons.length; k++) {
      buttons.item(k).style.backgroundColor = color;
    }
  }
}

var Body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  }
}

function lightDarkHandler(self) {
  var target = document.querySelector('body');
  var pre_type = self.value;

  if (pre_type === 'DARK') {
    Body.setColor('lightgrey');
    document.body.style.backgroundImage = "url('bg_dark.jpg')";
    Buttons.setColor('rgb(214, 206, 206)');
    Buttons.setBgColor('grey');
    self.value = 'LIGHT';
  }
  else {
    Body.setColor('rgb(123, 200, 226)');
    document.body.style.backgroundImage = "url('bg_light.jpg')";
    Buttons.setColor('rgb(123, 200, 226)');
    Buttons.setBgColor('white');
    self.value = 'DARK';
  }
}
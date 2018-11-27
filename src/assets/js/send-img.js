var SERVER = 'http://localhost:5474/save-image';

function sendCanvasImg() {
  var dataURL = can.toDataURL();
  var req = new XMLHttpRequest();
  req.open('POST', SERVER);
  req.setRequestHeader('Content-Type', 'text/plain');
  req.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
    }
  };
  req.send(dataURL);
}

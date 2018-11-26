  var xCoord,yCoord="";
document.body.onload = function() {
  console.log('asdf');
  var clic=false;
  var canvas=document.getElementById("can");
  var cntx=canvas.getContext("2d");
  cntx.strokeStyle="#000";
  cntx.lineWidth=2;
  cntx.lineCap="round";
  cntx.fillStyle="#fff";
  cntx.fillRect(0,0,canvas.width,canvas.height);

  canvas.onmousedown = function(event) {
    console.log('1');
    clic=true;
    cntx.save();
    xCoord=event.clientX-canvas.getBoundingClientRect().left;
    yCoord=event.clientY-canvas.getBoundingClientRect().top;
  };

  document.onmouseup = function() {
    console.log('2');
    clic=false
  };

  document.onclick = function() {
    console.log('3');
    clic=false
  };

  canvas.onmousemove = function(event){
    console.log('4');
    if(clic==true) {
      cntx.beginPath();
      cntx.moveTo(event.clientX-canvas.getBoundingClientRect().left,event.clientY-canvas.getBoundingClientRect().top);
      cntx.lineTo(xCoord,yCoord);
      cntx.stroke();
      cntx.closePath();
      xCoord=event.clientX-canvas.getBoundingClientRect().left;
      yCoord=event.clientY-canvas.getBoundingClientRect().top;
    }
  };
};

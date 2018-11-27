document.body.onload = function() {
  var xCoord,yCoord="";
  var clic=false;
  var canvas=document.getElementById("can");
  var cntx=canvas.getContext("2d");
  cntx.strokeStyle="#000";
  cntx.lineWidth=2;
  cntx.lineCap="round";
  cntx.fillStyle="#fff";
  cntx.fillRect(0,0,canvas.width,canvas.height);

  canvas.onmousedown = canvas.ontouchstart = function(event) {
    if (event.target == canvas) {
      event.preventDefault();
    }
    clic=true;
    cntx.save();
    if(event.type == 'mousedown') {
      xCoord=event.clientX-canvas.getBoundingClientRect().left;
      yCoord=event.clientY-canvas.getBoundingClientRect().top;
    } else if(event.type == 'touchstart') {
      xCoord=event.changedTouches[0].clientX-canvas.getBoundingClientRect().left;
      yCoord=event.changedTouches[0].clientY-canvas.getBoundingClientRect().top;
    }
  };

  document.onmouseup = document.ontouchend = canvas.ontouchend= function(event) {
    if (event.target == canvas) {
      event.preventDefault();
    }
    clic=false;
  };

  canvas.onmousemove = canvas.ontouchmove = function(event){
    if (event.target == canvas) {
      event.preventDefault();
    }
    if(clic==true) {
      cntx.beginPath();
      if(event.type == 'mousemove') {
        cntx.moveTo(event.clientX-canvas.getBoundingClientRect().left,event.clientY-canvas.getBoundingClientRect().top);
      } else if(event.type == 'touchmove') {
        cntx.moveTo(event.changedTouches[0].clientX-canvas.getBoundingClientRect().left,event.changedTouches[0].clientY-canvas.getBoundingClientRect().top);
      }
      cntx.lineTo(xCoord,yCoord);
      cntx.stroke();
      cntx.closePath();
      if(event.type == 'mousemove') {
        xCoord=event.clientX-canvas.getBoundingClientRect().left;
        yCoord=event.clientY-canvas.getBoundingClientRect().top;
      } else if(event.type == 'touchmove') {
        xCoord=event.changedTouches[0].clientX-canvas.getBoundingClientRect().left;
        yCoord=event.changedTouches[0].clientY-canvas.getBoundingClientRect().top;
      }
    }
  };
}

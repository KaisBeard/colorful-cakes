let candleFlicker = document.getElementById("hover");
let candles = document.getElementById("candle2");

const candleHoverEffect = (a) => {
    if (a.classList.contains("off")) {
        a.classList.remove("off");
    } else { 
        a.classList.add("off");
    }
}

candleFlicker.addEventListener("mouseOver", candleHoverEffect(candles));

/*
    setInterval(candleHoverEffect()
    , 500);*/


/*

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


// This handler will be executed only once when the cursor
// moves over the unordered list
candleFlicker.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  function( event ) {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
  */
window.onload = function () {

  let mouseTooltip = document.querySelector("#main-div");
  let tooltipElem;

  mouseTooltip.addEventListener("mouseover", mouseOver);
  mouseTooltip.addEventListener("mouseout", mouseOut);

  function mouseOver (e) {

    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement("div");
    tooltipElem.style.border = "1px solid black";
    tooltipElem.style.width = "100px";
    tooltipElem.style.borderRadius = "10px";
    tooltipElem.style.textAlign = "center";
    tooltipElem.style.backgroundColor = "aliceblue";
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
  };

  function mouseOut (e) {
    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }
  }

};

document.addEventListener("DOMContentLoaded", function () {
  var MoneyCheckbox = document.querySelector(".money-slider");
  var DistanceCheckbox = document.querySelector(".distance-slider");

  // Change system
  MoneyCheckbox.addEventListener("change", function () {
    if (MoneyCheckbox.checked) {
      $(document).ready(function () {
        $(".money").addClass("burgers");
        $(".money").removeClass("metric");
        MoneyConvert(0);
      });
    } else {
      $(".money").removeClass("burgers");
      $(".money").addClass("metric");
      MoneyConvert(1);
    }
  });
  DistanceCheckbox.addEventListener("change", function () {
    if (DistanceCheckbox.checked) {
      $(document).ready(function () {
        $(".distance").addClass("burgers");
        $(".distance").removeClass("metric");
        DistanceConvert(0);
      });
    } else {
      $(".distance").removeClass("burgers");
      $(".distance").addClass("metric");
      DistanceConvert(1);
    }
  });
});

function MoneyConvert(convert) {
  if (convert == 0) {
    let tempMoney = document.getElementById("huidige-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney * 1.02;
      document.getElementById("huidige-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("geschatte-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney * 1.02;
      document.getElementById("geschatte-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney * 1.02;
      document.getElementById("kosten").innerHTML = tempMoney;
    }
  } else if (convert == 1) {
    let tempMoney = document.getElementById("huidige-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney / 1.02;
      document.getElementById("huidige-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("geschatte-kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney / 1.02;
      document.getElementById("geschatte-kosten").innerHTML = tempMoney;
    }

    tempMoney = document.getElementById("kosten").innerHTML;
    if (tempMoney != 0) {
      tempMoney = tempMoney / 1.02;
      document.getElementById("kosten").innerHTML = tempMoney;
    }
  }
}
function DistanceConvert(convert) {
  if (convert == 0) {
    let tempDistance = document.getElementById("total-distance").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance * 0.621371192;
      document.getElementById("total-distance").innerHTML = tempDistance;
    }

    tempDistance = document.getElementById("huidige-distance").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance * 0.621371192;
      document.getElementById("huidige-distance").innerHTML = tempDistance;
    }

    tempDistance = document.getElementById("afgelegde-distance").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance * 0.621371192;
      document.getElementById("afgelegde-distance").innerHTML = tempDistance;
    }

    tempDistance = document.getElementById("afstand").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance * 0.621371192;
      document.getElementById("afstand").innerHTML = tempDistance;
    }
  } else if (convert == 1) {
    let tempDistance = document.getElementById("total-distance").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance / 0.621371192;
      document.getElementById("total-distance").innerHTML = tempDistance;
    }

    tempDistance = document.getElementById("huidige-distance").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance / 0.621371192;
      document.getElementById("huidige-distance").innerHTML = tempDistance;
    }

    tempDistance = document.getElementById("afgelegde-distance").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance / 0.621371192;
      document.getElementById("afgelegde-distance").innerHTML = tempDistance;
    }

    tempDistance = document.getElementById("afstand").innerHTML;
    if (tempDistance != 0) {
      tempDistance = tempDistance / 0.621371192;
      document.getElementById("afstand").innerHTML = tempDistance;
    }
  }
}

(function () {
    var $b = $('body');

    // Radio
    $b.on('change', '.formui-radio input[type="radio"]', function () {
        var $opt = $(this);
        $opt.parent('.option').addClass('checked').siblings('.option').removeClass('checked');
    });
    // Checkbox
    $b.on('change', '.formui-checkbox input[type="checkbox"]', function () {
        var $opt = $(this);
        $opt.parent('.option').toggleClass('checked');
    });
})();


function cuteAlert({
    type,
    title,
    message,
    buttonText = "OK",
    confirmText = "OK",
    cancelText = "Cancel",
    closeStyle,
  }) {
    return new Promise((resolve) => {
      setInterval(() => {}, 5000);
      const body = document.querySelector("body");
  
      const scripts = document.getElementsByTagName("script");
      let currScript = "";
  
      for (let script of scripts) {
        if (script.src.includes("check.js")) {
          currScript = script;
        }
      }
  
      let src = currScript.src;
  
      src = src.substring(0, src.lastIndexOf("/"));
  
      let closeStyleTemplate = "alert-close";
      if (closeStyle === "circle") {
        closeStyleTemplate = "alert-close-circle";
      }
  
      let btnTemplate = `
      <button class="alert-button ${type}-bg ${type}-btn">${buttonText}</button>
      `;
      if (type === "question") {
        btnTemplate = `
        <div class="question-buttons">
          <button class="confirm-button ${type}-bg ${type}-btn">${confirmText}</button>
          <button class="cancel-button error-bg error-btn">${cancelText}</button>
        </div>
        `;
      }
  
      const template = `
      <div class="alert-wrapper">
        <div class="alert-frame">
          <div class="alert-header ${type}-bg">
            <span class="${closeStyleTemplate}">X</span>
            <img class="alert-img" src="${src}/../images/img/${type}.svg" />
          </div>
          <div class="alert-body">
            <span class="alert-title">${title}</span>
            <span class="alert-message">${message}</span>
            ${btnTemplate}
          </div>
        </div>
      </div>
      `;
  
      body.insertAdjacentHTML("afterend", template);
  
      const alertWrapper = document.querySelector(".alert-wrapper");
      const alertFrame = document.querySelector(".alert-frame");
      const alertClose = document.querySelector(`.${closeStyleTemplate}`);
  
      if (type === "question") {
        const confirmButton = document.querySelector(".confirm-button");
        const cancelButton = document.querySelector(".cancel-button");
  
        confirmButton.addEventListener("click", () => {
          alertWrapper.remove();
          resolve("confirm");
        });
  
        cancelButton.addEventListener("click", () => {
          alertWrapper.remove();
          resolve();
        });
      } else {
        const alertButton = document.querySelector(".alert-button");
  
        alertButton.addEventListener("click", () => {
          alertWrapper.remove();
          resolve();
        });
      }
  
      alertClose.addEventListener("click", () => {
        alertWrapper.remove();
        resolve();
      });
  
      alertWrapper.addEventListener("click", () => {
        alertWrapper.remove();
        resolve();
      });
  
      alertFrame.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  }
  
  function cuteToast({ type, message, timer = 5000 }) {
    return new Promise((resolve) => {
      if (document.querySelector(".toast-container")) {
        document.querySelector(".toast-container").remove();
      }
      const body = document.querySelector("body");
  
      const scripts = document.getElementsByTagName("script");
      let currScript = "";
  
      for (let script of scripts) {
        if (script.src.includes("check.js")) {
          currScript = script;
        }
      }
  
      let src = currScript.src;
  
      src = src.substring(0, src.lastIndexOf("/"));
  
      const template = `
      <div class="toast-container ${type}-bg">
        <div>
          <div class="toast-frame">
            <img class="toast-img" src="${src}/../images/img/${type}.svg" />
            <span class="toast-message">${message}</span>
            <div class="toast-close">X</div>
          </div>
          <div class="toast-timer ${type}-timer" style="animation: timer ${timer}ms linear;"/>
        </div>
      </div>
      `;
  
      body.insertAdjacentHTML("afterend", template);
  
      const toastContainer = document.querySelector(".toast-container");
  
      setTimeout(() => {
        toastContainer.remove();
        resolve();
      }, timer);
  
      const toastClose = document.querySelector(".toast-close");
  
      toastClose.addEventListener("click", () => {
        toastContainer.remove();
        resolve();
      });
    });
  }
  
  function getCloseStyle(){
    return document.getElementById('chCircle').checked ? 'circle': ''
  }
  document.getElementById('bnSuccess').addEventListener('click', function(){
    cuteAlert({
        type: 'success',
        title: 'Chúc mừng cậu!',
        message: 'Đúng cmnr',
        buttonText: 'Làm nháy nữa?',
        closeStyle: getCloseStyle()
    })
  })
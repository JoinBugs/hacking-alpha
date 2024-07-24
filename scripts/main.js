const qcss_dialog = '.z-modal[role="dialog"]';
const qcss_body   = 'scrollLock';

(function checkForDialog(){
  setTimeout(function(){
    const dialog = document.querySelector(qcss_dialog);

    if(dialog) {
      const body = document.body;
      body.classList.remove(qcss_body);
      body.style.overflow='scroll';
      dialog.style.display='none';
    }
    checkForDialog();
  }, 500);
})()


const qcss_dialog = '.z-modal[role="dialog"]',
      qcss_body   = 'scrollLock',
      qcss_content= 'content';

(function checkForDialog(){
  setTimeout(function(){
    const dialog = document.querySelector(qcss_dialog);

    if(dialog) {
      const body    = document.body,
            content = document.getElementById(qcss_content);

      content.removeAttribute('inert');
      body.classList.remove(qcss_body);
      body.style.overflow='scroll';
      dialog.style.display='none';
    }
    checkForDialog();
  }, 500);
})()


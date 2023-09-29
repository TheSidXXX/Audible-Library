(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content-script.08c7c955.js")
    );
  })().catch(console.error);

})();

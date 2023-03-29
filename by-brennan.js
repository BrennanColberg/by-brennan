(function() {
  document.body.insertAdjacentHTML('beforeend', `
    <style>
      #by-brennan {
        position: fixed;
        bottom: 0;
        right: 0;
        font-size: 12px;
        font-family: Arial, sans-serif;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 4px 8px;
        border: 1px solid #ccc;
        border-radius: 0 0 0 4px;
        z-index: 9999;
      }
      #by-brennan a {
        color: inherit;
        text-decoration: none;
      }
      #by-brennan a:hover {
        text-decoration: underline;
      }
    </style>
    <div id="by-brennan"><a href="https://brennancolberg.com" target="_blank">by Brennan</a></div>
  `);
})();

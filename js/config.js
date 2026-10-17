/* Optional hooks. Leave empty to run fully in the browser.
   turnstileSiteKey: Cloudflare Turnstile site key (replaces the built-in code check).
   voteApi: your endpoint. GET ?id=<app> returns {score}; POST {id, value, token} records a vote and returns {score}.
   Real bot protection needs the server to verify the Turnstile token before it counts the vote. */
window.SPRUCE_CONFIG={turnstileSiteKey:'',voteApi:''};

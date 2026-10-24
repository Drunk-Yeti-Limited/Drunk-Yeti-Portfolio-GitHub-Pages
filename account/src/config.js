// Enable only after completing account/SETUP.md and real end-to-end checks.
// UI release gates are not backend security controls.
export const launch = Object.freeze({
  registration: false,
  emailCallbacks: false,
  providerCallbacks: false,
  oauthServer: false
});

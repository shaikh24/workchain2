export function initPi() {
  const { PI_API_KEY, PI_APP_ID, PI_PRIVATE_SEED, PI_USE_SANDBOX } = process.env;
  return {
    apiKey: PI_API_KEY,
    appId: PI_APP_ID,
    seed: PI_PRIVATE_SEED,
    network: PI_USE_SANDBOX === 'true' ? 'sandbox' : 'mainnet'
  };
}

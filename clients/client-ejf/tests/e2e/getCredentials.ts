export const getCredentials = () => {
  const { USERNAME, PASSWORD, CERT_PATH, CERT_PASSPHRASE } = process.env;

  if (!USERNAME || !PASSWORD || !CERT_PATH || !CERT_PASSPHRASE) {
    throw new Error('Missing credentials');
  }

  return {
    username: USERNAME,
    password: PASSWORD,
    path: CERT_PATH,
    passphrase: CERT_PASSPHRASE,
  };
};

require('dotenv-extended').load({
  includeProcessEnv: true,
  errorOnExtra: true,
  errorOnMissing: true,
  errorOnRegex: true,
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

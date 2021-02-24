export const environment = {
  production: true,
  /*baseUrl: '',*/
  baseUrl: 'http://localhost:8000',
  clientId: '',
  secret: '',
  tokenWhitelistedDomains: [ new RegExp('http://localhost:8000') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token')]

};

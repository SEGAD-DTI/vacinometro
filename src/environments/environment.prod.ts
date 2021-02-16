export const environment = {
  production: true,
  /*baseUrl: 'http://vacinas.thiagoalopes.dev.br',*/
  baseUrl: 'http://localhost:8000',
  clientId: '1',
  secret: '0NPfkA18gfs2b2sxfiQKmInNzcnzvIgcdbhpFe6y',
  tokenWhitelistedDomains: [ new RegExp('http://localhost:8000') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token')]

};

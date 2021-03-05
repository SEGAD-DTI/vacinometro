export const environment = {
  production: true,
  baseUrl: 'https://www.saude.rr.gov.br/sisconvac',
  clientId: '1',
  secret: 'hpg28mwM9sVP5Lj6zzTg8Pm8yOwBIs2rAnEMtq50',
  tokenWhitelistedDomains: [ new RegExp('https://www.saude.rr.gov.br/sisconvac') ],
  /*baseUrl: 'https://vacinas.thiagoalopes.dev.br',
  clientId: '1',
  secret: 'hpg28mwM9sVP5Lj6zzTg8Pm8yOwBIs2rAnEMtq50',
  tokenWhitelistedDomains: [ new RegExp('https://vacinas.thiagoalopes.dev.br') ],*/
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token')]

};

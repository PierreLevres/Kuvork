export const EU_API_HOST = { 'H':'prd.eu-ccapi.hyundai.com:8080','K':'prd.eu-ccapi.kia.com:8080'};
export const EU_BASE_URL = { 'H':`https://${EU_API_HOST['H']}`,'K':`https://${EU_API_HOST['K']}`};
export const EU_CLIENT_ID = { 'H':'6d477c38-3ca4-4cf3-9557-2a1929a94654','K':'fdc85c00-0a2f-4c64-bcb4-2cfb1500730a'}

export const EU_ENDPOINTS = {'H': {
  session: `${EU_BASE_URL['H']}/api/v1/user/oauth2/authorize?response_type=code&state=test&client_id=${EU_CLIENT_ID['H']}&redirect_uri=${EU_BASE_URL['H']}/api/v1/user/oauth2/redirect`,
  login: `${EU_BASE_URL['H']}/api/v1/user/signin`,
  language: `${EU_BASE_URL['H']}/api/v1/user/language`,
  redirectUri: `${EU_BASE_URL['H']}/api/v1/user/oauth2/redirect`,
  token: `${EU_BASE_URL['H']}/api/v1/user/oauth2/token`,
}, 'K': {
  session: `${EU_BASE_URL['K']}/api/v1/user/oauth2/authorize?response_type=code&state=test&client_id=${EU_CLIENT_ID['K']}&redirect_uri=${EU_BASE_URL['K']}/api/v1/user/oauth2/redirect`,
  login: `${EU_BASE_URL['K']}/api/v1/user/signin`,
  language: `${EU_BASE_URL['K']}/api/v1/user/language`,
  redirectUri: `${EU_BASE_URL['K']}/api/v1/user/oauth2/redirect`,
  token: `${EU_BASE_URL['K']}/api/v1/user/oauth2/token`,
}};

export const EU_CONSTANTS = { 'H': {
  basicToken:
    'Basic NmQ0NzdjMzgtM2NhNC00Y2YzLTk1NTctMmExOTI5YTk0NjU0OktVeTQ5WHhQekxwTHVvSzB4aEJDNzdXNlZYaG10UVI5aVFobUlGampvWTRJcHhzVg==',
  GCMSenderID: '199360397125',
}, 'K': {
  basicToken:
    'Basic ZmRjODVjMDAtMGEyZi00YzY0LWJjYjQtMmNmYjE1MDA3MzBhOnNlY3JldA==',
  GCMSenderID: '199360397125',
}};

export const EU_APP_ID = { 'H': '99cfff84-f4e2-4be8-a5ed-e5b755eb6581', 'K':'693a33fa-c117-43f2-ae3b-61a02d24f417'};

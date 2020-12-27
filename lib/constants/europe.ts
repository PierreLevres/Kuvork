export const EU_API_HOST = 'prd.eu-ccapi.kia.com:8080';
export const EU_BASE_URL = `https://${EU_API_HOST}`;

export const EU_CLIENT_ID = 'fdc85c00-0a2f-4c64-bcb4-2cfb1500730a'

export const EU_ENDPOINTS = {
  session: `${EU_BASE_URL}/api/v1/user/oauth2/authorize?response_type=code&state=test&client_id=${EU_CLIENT_ID}&redirect_uri=${EU_BASE_URL}/api/v1/user/oauth2/redirect`,
  login: `${EU_BASE_URL}/api/v1/user/signin`,
  language: `${EU_BASE_URL}/api/v1/user/language`,
  redirectUri: `${EU_BASE_URL}/api/v1/user/oauth2/redirect`,
  token: `${EU_BASE_URL}/api/v1/user/oauth2/token`,
};

export const EU_CONSTANTS = {
  basicToken:
    'Basic ZmRjODVjMDAtMGEyZi00YzY0LWJjYjQtMmNmYjE1MDA3MzBhOnNlY3JldA==',
  GCMSenderID: '199360397125',
};

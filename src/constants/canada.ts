export const CA_API_HOST = { 'H':'mybluelink.ca','K':'myuvo.ca'};
export const CA_BASE_URL = { 'H':`https://${CA_API_HOST['H']}`,'K':`https://${CA_API_HOST['K']}`};
export const CLIENT_ORIGIN = 'SPA';

export const CA_ENDPOINTS = { 'H': {
  login: `${CA_BASE_URL['H']}/tods/api/lgn`,
  logout: `${CA_BASE_URL['H']}/tods/api/lgout`,
  // Vehicle
  vehicleList: `${CA_BASE_URL['H']}/tods/api/vhcllst`,
  vehicleInfo: `${CA_BASE_URL['H']}/tods/api/sltvhcl`,
  status: `${CA_BASE_URL['H']}/tods/api/lstvhclsts`,
  remoteStatus: `${CA_BASE_URL['H']}/tods/api/rltmvhclsts`,
  // Car commands with preauth (PIN)
  lock: `${CA_BASE_URL['H']}/tods/api/drlck`,
  unlock: `${CA_BASE_URL['H']}/tods/api/drulck`,
  start: `${CA_BASE_URL['H']}/tods/api/evc/rfon`,
  stop: `${CA_BASE_URL['H']}/tods/api/evc/rfoff`,
  locate: `${CA_BASE_URL['H']}/tods/api/fndmcr`,
  hornlight: `${CA_BASE_URL['H']}/tods/api/hornlight`,
  // System
  verifyAccountToken: `${CA_BASE_URL['H']}/tods/api/vrfyacctkn`,
  verifyPin: `${CA_BASE_URL['H']}/tods/api/vrfypin`,
  verifyToken: `${CA_BASE_URL['H']}/tods/api/vrfytnc`,
},'K':{
  login: `${CA_BASE_URL['K']}/tods/api/lgn`,
  logout: `${CA_BASE_URL['K']}/tods/api/lgout`,
  // Vehicle
  vehicleList: `${CA_BASE_URL['K']}/tods/api/vhcllst`,
  vehicleInfo: `${CA_BASE_URL['K']}/tods/api/sltvhcl`,
  status: `${CA_BASE_URL['K']}/tods/api/lstvhclsts`,
  remoteStatus: `${CA_BASE_URL['K']}/tods/api/rltmvhclsts`,
  // Car commands with preauth (PIN)
  lock: `${CA_BASE_URL['K']}/tods/api/drlck`,
  unlock: `${CA_BASE_URL['K']}/tods/api/drulck`,
  start: `${CA_BASE_URL['K']}/tods/api/evc/rfon`,
  stop: `${CA_BASE_URL['K']}/tods/api/evc/rfoff`,
  locate: `${CA_BASE_URL['K']}/tods/api/fndmcr`,
  hornlight: `${CA_BASE_URL['K']}/tods/api/hornlight`,
  // System
  verifyAccountToken: `${CA_BASE_URL['K']}/tods/api/vrfyacctkn`,
  verifyPin: `${CA_BASE_URL['K']}/tods/api/vrfypin`,
  verifyToken: `${CA_BASE_URL['K']}/tods/api/vrfytnc`,
}}

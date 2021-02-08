export const CA_API_HOST = ['mybluelink.ca','myuvo.ca'];
export const CA_BASE_URL = [`https://${CA_API_HOST[0]}`,`https://${CA_API_HOST[1]}`];
export const CLIENT_ORIGIN = 'SPA';

export const CA_ENDPOINTS = [{
  login: `${CA_BASE_URL[0]}/tods/api/lgn`,
  logout: `${CA_BASE_URL[0]}/tods/api/lgout`,
  // Vehicle
  vehicleList: `${CA_BASE_URL[0]}/tods/api/vhcllst`,
  vehicleInfo: `${CA_BASE_URL[0]}/tods/api/sltvhcl`,
  status: `${CA_BASE_URL[0]}/tods/api/lstvhclsts`,
  remoteStatus: `${CA_BASE_URL[0]}/tods/api/rltmvhclsts`,
  // Car commands with preauth (PIN)
  lock: `${CA_BASE_URL[0]}/tods/api/drlck`,
  unlock: `${CA_BASE_URL[0]}/tods/api/drulck`,
  start: `${CA_BASE_URL[0]}/tods/api/evc/rfon`,
  stop: `${CA_BASE_URL[0]}/tods/api/evc/rfoff`,
  locate: `${CA_BASE_URL[0]}/tods/api/fndmcr`,
  hornlight: `${CA_BASE_URL[0]}/tods/api/hornlight`,
  // System
  verifyAccountToken: `${CA_BASE_URL[0]}/tods/api/vrfyacctkn`,
  verifyPin: `${CA_BASE_URL[0]}/tods/api/vrfypin`,
  verifyToken: `${CA_BASE_URL[0]}/tods/api/vrfytnc`,
},{
  login: `${CA_BASE_URL[1]}/tods/api/lgn`,
  logout: `${CA_BASE_URL[1]}/tods/api/lgout`,
  // Vehicle
  vehicleList: `${CA_BASE_URL[1]}/tods/api/vhcllst`,
  vehicleInfo: `${CA_BASE_URL[1]}/tods/api/sltvhcl`,
  status: `${CA_BASE_URL[1]}/tods/api/lstvhclsts`,
  remoteStatus: `${CA_BASE_URL[1]}/tods/api/rltmvhclsts`,
  // Car commands with preauth (PIN)
  lock: `${CA_BASE_URL[1]}/tods/api/drlck`,
  unlock: `${CA_BASE_URL[1]}/tods/api/drulck`,
  start: `${CA_BASE_URL[1]}/tods/api/evc/rfon`,
  stop: `${CA_BASE_URL[1]}/tods/api/evc/rfoff`,
  locate: `${CA_BASE_URL[1]}/tods/api/fndmcr`,
  hornlight: `${CA_BASE_URL[1]}/tods/api/hornlight`,
  // System
  verifyAccountToken: `${CA_BASE_URL[1]}/tods/api/vrfyacctkn`,
  verifyPin: `${CA_BASE_URL[1]}/tods/api/vrfypin`,
  verifyToken: `${CA_BASE_URL[1]}/tods/api/vrfytnc`,
}]

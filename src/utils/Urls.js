const herokuUrl = "https://silo-be.herokuapp.com";
const loginUrl = `${herokuUrl}/auth/`;
const silosUrl = `${herokuUrl}/silo/`;
const notificationsUrl = `${herokuUrl}/notification/`;
const measurementsGraphUrl = `${herokuUrl}/measurement/graph/`
const csvExportUrl = `${herokuUrl}/measurement/export/`

const timestampUrlSuffix = (startDateIso, startTimeIso, endDateIso, endTimeIso) =>{
  return `${startDateIso}T${startTimeIso}/${endDateIso}T${endTimeIso}`
}

export { herokuUrl, loginUrl, silosUrl, notificationsUrl, measurementsGraphUrl, csvExportUrl , timestampUrlSuffix};

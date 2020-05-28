const env = process.env.NODE_ENV;
const protocol = 'http://';
let baseHost = '';

if (env === 'development') {
  baseHost = '112.60.42.22:8302/v2/api-docs'
} else if (env === 'production') {
  baseHost = 'api.gzinternetcourt.gov.cn'
}
export const baseUrl = protocol + baseHost;
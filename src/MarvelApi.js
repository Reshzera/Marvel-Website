import md5 from 'md5'

const publicAPI = 'c3c28d08b6b09ece61a3d608ab67b69b';
const privateAPI = '5916141215ee7fb521fa66d0933ab8c2410fae6e'
const ts = Number(new Date());
const hash = md5(ts + privateAPI + publicAPI);

export const GetComicList = `https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=lastWeek&format=comic&formatType=comic&noVariants=false&orderBy=modified&limit=50&ts=${ts}&apikey=${publicAPI}&hash=${hash}`
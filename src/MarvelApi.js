import md5 from 'md5'

const publicAPI = 'c3c28d08b6b09ece61a3d608ab67b69b';
const privateAPI = '5916141215ee7fb521fa66d0933ab8c2410fae6e'
const ts = Number(new Date());
const hash = md5(ts + privateAPI + publicAPI);

function AtribuirRaro(len, array){
    for(let i=0; i < len*0.1; i++){
      const number = Math.floor(Math.random() * len)
      console.log(number)
      array[number].raro = true
    }
    return array
  }

export function GetComicList(functionset){
    fetch(`https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=lastWeek&format=comic&formatType=comic&noVariants=false&orderBy=modified&limit=50&ts=${ts}&apikey=${publicAPI}&hash=${hash}`)
    .then(response => response.json())
    .then(data => data.data.results.filter(comic => comic.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"))
    .then(filtred => AtribuirRaro(filtred.length, filtred))
    .then(list => functionset(list))
}
export const DescriptionTemplate = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
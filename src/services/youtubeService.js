import axios from 'axios';

export function getYoutubeVideo() {
    const promise = axios.get('http://www.youtube.com/api').then( res => console.log(res.data.items[0]) );
    return promise;
}

export default function getRecommendations(){
    const promise = axios.get('');
    return promise;
}
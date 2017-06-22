import axios from 'axios';

export function getMoreVideos() {
    const promise = axios.get('http://www.youtube.com/api').then( res => console.log(res.data.items) );
    return promise;
}

export default function getRecommendations(){
    const promise = axios.get('');
    return promise;
}
import axios from 'axios';

export function getVideoInfo() {
    const promise = axios.get('http://www.youtube.com/api').then( res => console.log(res.data.items) );
    return promise;
}

export default function getRecommendations(){
    const promise = axios.get('');
    return promise;
}


// 'https://www.googleapis.com/youtube/v3/videos?id=i9MHigUZKEM&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet'
import axios from 'axios';

export function getYoutubeVideo() {
    const promise = axios.get('http://www.youtube.com/api').then( res => console.log(res.data ) );
    
}
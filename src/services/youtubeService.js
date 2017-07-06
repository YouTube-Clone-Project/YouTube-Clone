import axios from 'axios';

// export function getVideoInfo(videoId) {
//     const promise = axios.get('https://www.googleapis.com/youtube/v3/videos?id=i9MHigUZKEM&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet').then( function(res){
//          console.log(res.data.items) 
//     });
//     return promise;
// }

export default function getRecommendations(){
    const promise = axios.get('');
    return promise;
}


// 'https://www.googleapis.com/youtube/v3/videos?id=i9MHigUZKEM&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet'
import axios from 'axios';

import getRecommendations from './../services/youtubeService.js';


 const SUBSCRIPTIONS = 'SUBSCRIPTIONS'

const initialState = {
  loading: false,
  videoId: '0tuK0sk_D1M',
  subscriptions: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIPTIONS:
      return {
        subscriptions:action.payload,
      }
    default:
      return state;
    }
}


export function handleSubscription(){
    return{
      type: SUBSCRIPTIONS,
      payload: true
      }
        
    }

// export function getVideoInfo(videoId){
//   return {
//     type: GET_VIDEO_INFO,
//     payload: axios.get('https://www.googleapis.com/youtube/v3/videos?id=i9MHigUZKEM&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet')
//       .then( function(res){
//         return res.data.items
//       })
//   }
// }



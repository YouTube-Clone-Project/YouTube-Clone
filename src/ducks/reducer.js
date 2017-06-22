import axios from 'axios';

// import { getVideoInfo } from './../services/youtubeService.js';
import getRecommendations from './../services/youtubeService.js';

const GET_VIDEO_INFO = 'GET_VIDEO_INFO';
const GET_VIDEO_INFO_PENDING = 'GET_VIDEO_INFO_PENDING';
const GET_VIDEO_INFO_FULFILLED = 'GET_VIDEO_INFO_FULFILLED';
const GET_VIDEO_INFO_REJECTED = 'GET_VIDEO_INFO_REJECTED';


const initialState = {
  loading: false,
  videoId: '0tuK0sk_D1M'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case GET_VIDEO_INFO_PENDING:
    //   return {
    //     loading: true,
    //     videoId: ''
    //   }
    // case GET_VIDEO_INFO_FULFILLED:
    //   return {
    //     loading: false,
    //     videoId: action.payload
    //   }
    default:
      return state;
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



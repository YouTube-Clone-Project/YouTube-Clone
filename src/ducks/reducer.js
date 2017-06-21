const GET_YOUTUBE_VIDEO = 'GET_YOUTUBE_VIDEO';
const GET_YOUTUBE_VIDEO_PENDING = 'GET_YOUTUBE_VIDEO_PENDING';
const GET_YOUTUBE_VIDEO_FULFILLED = 'GET_YOUTUBE_VIDEO_FULFILLED';
const GET_YOUTUBE_VIDEO_REJECTED = 'GET_YOUTUBE_VIDEO_REJECTED';


const initialState = {
  loading: false,
  videoId: '',
  testId: '0tuK0sk_D1M'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_YOUTUBE_VIDEO_PENDING:
      return {
        loading: true,
        videoId: ''
      }
    case GET_YOUTUBE_VIDEO_FULFILLED:
      return {
        loading: false,
        videoId: action.payload.videoId
      }
    default:
      return state;
    }
}

export function getYoutubeVideo(promise){
  return {
    type: GET_YOUTUBE_VIDEO,
    payload: promise
  }
}



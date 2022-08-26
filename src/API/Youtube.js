import axios from 'axios';

const KEY = 'AIzaSyDaSstyR2UT_qTV0ChwggJQeczQse4j3Xk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
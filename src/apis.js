const API = 'https://simplesurvey-8d9e3.firebaseio.com/survey.json';

export const fetchApis = () => (
    fetch(API)
        .then( response => response.json())
        .catch( err => new Error(err))
);

export const filterDataApisCount = (data, count, names) => {
    return Object.values(data).filter(el => el.answers[count] === names).length;
};

export const config = {
    apiKey: "AIzaSyB0A5GZSO2KKLV9L1w1Gl1U39wBp2VQSn0",
    authDomain: "simplesurvey-8d9e3.firebaseapp.com",
    databaseURL: "https://simplesurvey-8d9e3.firebaseio.com",
    projectId: "simplesurvey-8d9e3",
    storageBucket: "simplesurvey-8d9e3.appspot.com",
    messagingSenderId: "14399663105"
};
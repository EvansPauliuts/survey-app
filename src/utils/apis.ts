const API = 'https://simplesurvey-8d9e3.firebaseio.com/survey.json';

export const fetchApis = () => (
    fetch(API)
        .then( response => response.json())
        .catch( err => new Error(err))
);

export const filterDataApisCount = (data: any, count: string, names: string) => {
    return Object.values(data).filter((el: any) => el.answers[count] === names).length;
};

export const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSASING_SENDER_ID
};
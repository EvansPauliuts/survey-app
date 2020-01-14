const API = 'https://simplesurvey-8d9e3.firebaseio.com/survey.json';

export const fetchApis = () => (
    fetch(API)
        .then( response => response.json())
        .catch( err => console.log( 'Error', err ))
);

export const filterDataApisCount = (data, count, names) => {
    return Object.values(data).filter(el => el.answers[count] === names).length;
};
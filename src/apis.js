export const API = 'https://simplesurvey-8d9e3.firebaseio.com/survey.json';

export const fetchApis = () => (
    fetch( 'https://simplesurvey-8d9e3.firebaseio.com/survey.json' )
        .then( response => response.json())
        .catch( err => console.log( 'Error', err ))
);

export const filterDataApisCount = (data, count, names) => {
    return data.filter(el => el.answers[count] === names).length;
};
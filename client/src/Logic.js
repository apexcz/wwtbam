export function getCurrentLocation() {
    return window.location.pathname
}

export function getQuestion(questionID) {
    return `/question/${questionID}`;
}

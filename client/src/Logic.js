export function getCurrentPath() {
    return window.location.pathname
}

export function getHomePath() {
    return '/'
}

export function getQuestionPath(questionID) {
    return `/question/${questionID}`;
}

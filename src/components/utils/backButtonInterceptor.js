let cbf = null;

const intercept = (e) => {
    e.stopPropagation();
    cbf()
    return
}

const interceptorRemover = () => {
    document.getElementById('back-button').removeEventListener('click', intercept)
    return
}

const backButtonInterceptor = (func) => {
    let button = document.getElementById('back-button')
    button.addEventListener('click', intercept)
    cbf = func
    return
}

export {
    backButtonInterceptor,
    interceptorRemover
} 
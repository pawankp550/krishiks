const loadingInProgress = () => {
    return {
        type: 'LOADING_IN_PROGRESS'
    }
}

const loadingDone = () => {
    return {
        type: 'LOADING_DONE'
    }
}

export default {
    loadingInProgress,
    loadingDone
}
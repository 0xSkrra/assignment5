import API from "./API"

export const getAll = async () => {
    return (await API.get('/translations')).data
}

export const getOrCreateUserByUserName = async (username) => {
    const userData = (await API.get(`/translations?username=${username}`)).data

    if(Object.keys(userData).length === 0){
        const postData = {"username": username}
        return (await API.post('/translations', postData)).data.id
    }
    return userData.id
}

export const getTranslationsByUserId = async (id) =>{
    return (await API.get(`/translations/${id}`)).data.translations
}

export const addTranslationById = async (id, translation) =>{
    const existingTranslations = await getTranslationsByUserId(id)
    const allTranslations = [...existingTranslations, translation]

    return (await API.patch(`/translations/${id}`, {"translations": allTranslations})).status === 200
}


import { UserObject } from "../../interface/userObject"
import API from "./api"

export const getAll = async (): Promise<Array<UserObject>> => {
    return (await API.get('/translations')).data
}

export const getOrCreateUserByUserName = async (username: string): Promise<number> => {
    const userData = (await API.get(`/translations?username=${username}`)).data

    if(Object.keys(userData).length === 0){
        const postData = {"username": username, "translations": []}
        return (await API.post('/translations', postData)).data.id
    }
    return userData.id
}

export const getTranslationsByUserId = async (id: number): Promise<Array<string>> =>{
    return (await API.get(`/translations/${id}`)).data.translations
}

export const addTranslationById = async (id: number, translation: string) =>{
    const existingTranslations = await getTranslationsByUserId(id)
    const allTranslations = [...existingTranslations, translation]

    return (await API.patch(`/translations/${id}`, {"translations": allTranslations})).status === 200
}


import { UserObject } from "../../interface/userObject";
import API from "./api";

export const getAll = async (): Promise<UserObject[]> => {
    return (await API.get("/translations")).data;
};

export const getOrCreateUserByUserName = async (
    username: string
): Promise<number> => {
    const userData: UserObject = (await API.get(`/translations?username=${username}`))
        .data[0]
    

    if (typeof userData === 'undefined') {
        const postData = { username: username, translations: [] };
        const result: UserObject = (await API.post("/translations", postData)).data;
        return result.id
    }
    return userData.id;
};

export const getTranslationsByUserId = async (
    id: number
): Promise<Array<string>> => {
    const result = (await API.get(`/translations/${id}`)).data
    return result.translations
};

export const addTranslationById = async (id: number, translation: string) => {
    const existingTranslations = await getTranslationsByUserId(id);
    const allTranslations = [...existingTranslations, translation];

    return (
        (await API.patch(`/translations/${id}`, { translations: allTranslations }))
            .status === 200
    );
};
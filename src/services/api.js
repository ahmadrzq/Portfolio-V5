import axios from "axios";

export const getUser = async () => {
    const response = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/user');
    return response.data.data[0];
}

export const getLinks = async () => {
    const response = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/links');
    return response.data.data;
}

export const getEducation = async () => {
    const response = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/educations');
    return response.data.data;
}

export const getExperience = async () => {
    const response = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/experiences');
    return response.data.data;
}

export const getSkills = async () => {
    const response = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/skills');
    return response.data.data;
}
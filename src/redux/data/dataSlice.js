// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const userResponse = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/user');
    const linksResponse = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/links');
    const educationResponse = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/educations');
    const experienceResponse = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/experiences');
    const projects = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/projects');
    const skillsResponse = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/skills');

    return {
        user: userResponse.data.data[0],
        links: linksResponse.data.data,
        education: educationResponse.data.data,
        experience: experienceResponse.data.data,
        projects: projects.data.data,
        skills: skillsResponse.data.data
    };
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        user: null,
        links: null,
        education: null,
        experience: null,
        projects: null,
        skills: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.links = action.payload.links;
                state.education = action.payload.education;
                state.experience = action.payload.experience;
                state.projects = action.payload.projects;
                state.skills = action.payload.skills;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default dataSlice.reducer;
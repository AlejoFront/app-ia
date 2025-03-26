import {createSlice} from '@reduxjs/toolkit';
import {apiService} from 'store/service';

const initialState = {
    isLoading: false,
    response: []
}

export const apiSlice = createSlice({
    name: 'apiIA',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
          },
          setResponse(state, action) {
            state.response = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                apiService.endpoints.getData.matchPending,
                (state) => {
                    state.isLoading = true;
                    state.response = []
                }
            )
            .addMatcher(
                apiService.endpoints.getData.matchFulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.response = action.payload.data || []
                }
            )
    }
});
export const {
    setLoading,
    setResponse
} = apiSlice.actions;
export const {
    useLazyGetDataQuery
} = apiService;
export default apiSlice.reducer;
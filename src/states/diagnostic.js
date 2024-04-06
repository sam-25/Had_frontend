import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diagnostics: [], // Array to hold diagnostic data
  selectedPatient: null, // To store the selected patient for further diagnostics
};

export const diagnosticsSlice = createSlice({
  name: 'diagnostics',
  initialState,
  reducers: {
    setDiagnostics(state, action) {
      state.diagnostics = action.payload;
    },
    selectPatient(state, action) {
      state.selectedPatient = action.payload;
    },
  },
});

export const { setDiagnostics, selectPatient } = diagnosticsSlice.actions;
export default diagnosticsSlice.reducer;

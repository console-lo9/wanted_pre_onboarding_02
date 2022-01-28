const { configureStore, createSlice } = require("@reduxjs/toolkit");

const periodInitialState = {
  exposure: { radio: "제한 없음", calendar: "YYYY.MM.DD YY:MM" },
  sales: { radio: "제한 없음", calendar: "YYYY.MM.DD YY:MM" },
};

const setPeriodSlice = createSlice({
  name: "period",
  initialState: periodInitialState,
  reducers: {
    exposureRadio(state, action) {
      state.exposure.radio = action.payload;
    },
    salesRadio(state, action) {
      state.sales.radio = action.payload;
    },
  },
});

const store = configureStore({
  reducer: setPeriodSlice.reducer,
});

export const setPeriodActions = setPeriodSlice.actions;
export default store;

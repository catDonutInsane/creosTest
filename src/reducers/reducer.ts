import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CommentTypes } from "../types/commetsType";
import type { DesignerType, DesignerResultType } from "../types/designerType";
import type { PieGraphType } from "../types/pieGraphType";
export interface MedianType extends DesignerResultType {

  median: number
}
type IS = {
  designers: DesignerType<number | null>
  topComment: Array<CommentTypes>
  topDesigners: DesignerResultType[]
  topDesignersFilteredByMedian: MedianType[]
  pieGraphData: PieGraphType[]
}
const initialState: IS = {
  designers: {
    count: null,
    next: "",
    previous: "",
    results: []
  },
  topComment: [],
  topDesigners: [],
  topDesignersFilteredByMedian: [],
  pieGraphData: []
};

const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    getDesignersList(state, action) {
      state.designers = action.payload
    },
    getTopComment(state, action) {
      state.topComment = action.payload
    },
    getTopDesigners(state, action) {
      state.topDesigners = [...state.topDesigners, ...action.payload]
    },
    getFilteredDesigners(state, action) {
      state.topDesignersFilteredByMedian = action.payload
    },
    setPieGraphData(state, action) {
      state.pieGraphData = action.payload
    }
  },
});

export const {
  getDesignersList,
  getTopComment,
  getTopDesigners,
  getFilteredDesigners,
  setPieGraphData,
} = reducer.actions;
export default reducer.reducer;
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBook } from "../../../interfaces/types";
import type { RootState } from "../../store";

interface InitialState {
    tasks: IBook[]
}

const initialState: InitialState = {
    tasks: []

}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<IBook>) => {
            // const id = Math.random();
            // const taskData = {
            //     ...action.payload, id
            // }
            state.tasks.push(action.payload)
        }
    },
})

export const selectTasks = (state: RootState) => {
    return state.books.tasks
}

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
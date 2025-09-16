import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;





// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// // Types for use in components
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;






// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );




// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import type { RootState, AppDispatch } from "../../app/store";
// import { increment, decrement, incrementByAmount } from "./counterSlice";

// const Counter: React.FC = () => {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch<AppDispatch>();

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Count: {count}</h1>
//       <div className="flex gap-2 mt-2">
//         <button
//           className="px-3 py-1 bg-blue-500 text-white rounded"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <button
//           className="px-3 py-1 bg-red-500 text-white rounded"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//         <button
//           className="px-3 py-1 bg-green-500 text-white rounded"
//           onClick={() => dispatch(incrementByAmount(5))}
//         >
//           Add 5
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Counter;





// import React from "react";
// import Counter from "./features/counter/Counter";

// const App: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <Counter />
//     </div>
//   );
// };

// export default App;




// Now you have a Redux + TypeScript + React counter app.

// store.ts = central state container.

// slice.ts = defines logic & actions.

// Provider = gives access to Redux.

// useSelector = read state.

// useDispatch = trigger actions.






import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

// const initStore = {
//   contacts: {
//     items: [
//       {
//         id: 1,
//         name: "qwe",
//         number: 123123,
//       },
//       {
//         id: 2,
//         name: "asd",
//         number: 222,
//       },
//     ],
//     filter: "",
//   },
// };
export const store = createStore(rootReducer, {}, composeWithDevTools());

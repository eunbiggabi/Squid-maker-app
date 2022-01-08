export function userReducer(state, action) {
  switch (action.type) {
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
      };
    }
    case "setToken": {
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.data,
        },
      };
    }
  }
}


// export function cardReducer(state, action) {
//     switch (action.type) {
//         case "addCard" : {
//             return {

//             }
//         }

//         case "updateCard" : {
//             return {

//             }
//         }

//         case "deleteCard" : {
//             return {

//             }
//         }
//     }
// }

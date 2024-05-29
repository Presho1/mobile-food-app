// let defaultState = {
//     selectedItems: {items: [], restaurantName: '' }
// }

// let cartReducer = (state = defaultState, action) => {
//     switch (action.type){
//         case 'ADD_TO_CART': {
//             let newState = {...state};
//             newState.selectedItems = {
//                 items: [...newState.selectedItems.items, action.payload],
//                 restaurantName: action.payload.restaurantName,
//             };

//             console.log(newState, "👉🏾");
//             return newState;
//         }

//         default: 
//         return state;
//     }
// };

// export default cartReducer;




// const initialState = {
//     items: [],
//     totalAmount: 0,
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           items: [...state.items, action.payload],
//           totalAmount: state.totalAmount + action.payload.price,
//         };
//       case 'REMOVE_FROM_CART':
//         return {
//           ...state,
//           items: state.items.filter(item => item.id !== action.payload.id),
//           totalAmount: state.totalAmount - action.payload.price,
//         };
//       default:
//         return state;
//     }
//   };
  
// export default cartReducer;




let initialState = {
    selectedItems: {items: [], restaurantName: '', }
    
};
  
let cartReducer = (state = initialState, action) => {
switch (action.type) {
    case 'ADD_TO_CART':
    {
        let newState = { ...state };

        if (action.payload.checkboxValue) {
            console.log('ADD_TO_CART');
            
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurantName: action.payload.restaurantName ,
            };
        
        } else { 
            console.log('REMOVE_FROM_CART');
            newState.selectedItems = {
                items: [
                    ...newState.selectedItems.items.filter(
                        (item) => item.title !== action.payload.title
                    ),
                ],
                restaurantName: action.payload.restaurantName,
            };
        } 
        console.log(newState, '👉🏾');
        return newState; 
    } 

    default:
        return state;
    
}
};

export default cartReducer;



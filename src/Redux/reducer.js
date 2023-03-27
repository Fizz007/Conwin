
import { ADD, DELETE, DELETEALL, EDIT } from "./actionType";

const intialvalue = [];

export const reducer = (state= intialvalue, action)=> {
    switch(action.type){
              case ADD:
          
              return  [...state, action.payload];

              case DELETEALL:  
              return [];

              case DELETE:
                const filterData = state.filter((e,i)=> i!== action.payload)
                return filterData;

                case EDIT:
                  // state.map((e,i)=> {
                  //   if(i === action.payload.id){
                  //    return  {...e,

                       
                  //       title : action.payload.editItem.title,
                  //     categories: action.payload.editItem.categories,
                  //    content: action.payload.editItem.content}
                  //   }
                
                  // })

                  state.map((e,i)=> {
                    if(i === action.payload.edit.id){
                      return [...e, action.payload.edit.editItem]
                    }
                  })
                 
                  // return [...state, action.payload.note]
              default: return state;
            
    }
}
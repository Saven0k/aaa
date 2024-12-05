import { act } from "react";
import { ADD_POST, CHANGE_POST, DELETE_POST, SEARCH_POST } from "./actions";
import { readJSON } from "../../../server/src/readJson";
import { writeJson } from "../../../server/src/writeToJson";


const postReducer = (state = readJSON(), action) => {
	switch (action.type) {
		case ADD_POST:
			return state.push({id: new Date(), name: action.payload.name, text: action.payload.text});
			// return writeJson(payload.action.data)
        case DELETE_POST:
            return state.filter((post) => post.id !== action.payload.id);
        case CHANGE_POST:
            return state.map((post) => 
                post.id === action.payload.id ? {...post, name: action.payload.name, text: action.payload.text}: post );
		case SEARCH_POST:
			let searchItem = action.payload.searchItem; 
			if (!searchItem){
				return state;
			}
			// if (searchItem.lenth > 1) {
			// 	const regex = new RegExp("^${pattern}");
			// 	return state.filter (({name}) => {
			// 		regex.test(name)
			// 	})
			// }
			// const regex = new RegExp(`\b${searchItem}`);
			// return state.filter (({name}) => {
			// 	regex.test(name)
			// })
			// return state.filter((post) => 
			// 	post.name.toLowerCase().includes(searchItem.toLowerCase())
			// ); 
			const regex = new RegExp(`^${text}`, 'i')
			    //     posts.filter(({ name }) =>
    //         console.log(name.split(' ').map((pr) => regex.test(pr.toLowerCase())))
    //     )
			return state.filter(({ name }) =>
				regex.test(name.split(' ').map((pr) => regex.test(pr.toLowerCase())))
			)
		default:
			return state;
	}
};

export default postReducer;
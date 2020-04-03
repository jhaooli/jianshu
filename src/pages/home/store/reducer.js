
import {fromJS} from 'immutable';

const defaultState =fromJS({
    topicList : [],
    articleList : [],
    recommendList:[]

}) ;

export default(state = defaultState,action) =>{
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topicList : fromJS(action.topicList),
                articleList : fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)

            })
        // case 'load_more':
        //     return state.get('articleList').concat(action.data);
        default :
            return state;
    }
  
}
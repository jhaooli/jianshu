import React,{Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {HomeWrapper,
        HomeLeft,
        HomeRight,
        BackTop
    } from './style';

import {connect} from 'react-redux';
import pics from '../../statics/111.png';


class Home extends Component{

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <HomeWrapper>

                <HomeLeft>
                    <img  
                    className="banner-img" 
                    src="https://upload-images.jianshu.io/upload_images/6171276-3304c2681c7b7995.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp"
                    alt=''
                    ></img>
                    <Topic />
                    <List />
                </HomeLeft>    
                <HomeRight>
                    <Recommend />
                    <img src={pics} alt=''></img>
                    <Writer />
                   
                </HomeRight>
                <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            </HomeWrapper>
        )
    }

    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = {
                type:'change_home_data',
                topicList : result.topicList,
                articleList: result.articleList,
                recommendList : result.recommendList
            }
            this.props.changeHomeData(action);
        })
    }
}

const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
})

export default connect(null,mapDispatch)(Home);
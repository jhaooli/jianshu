import React,{Component} from 'react';
import { ListInfo,ListItem,LoadMore} from '../style';
import {connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { fromJS } from 'immutable';
import {Link} from 'react-router-dom';



class List extends Component{
    render(){
        return (
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')} >
                            <ListItem >
                                <img className='pic' src={item.get('imgUrl')} alt=''></img>
                                <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>  
                            </ListItem>
                            </Link>
                        )
                        
                    })
                }
                <LoadMore onClick={this.props.getMoreList}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state)=>({
    list : state.getIn(['home','articleList'])
})

const mapDispatch = (dispatch)=>({
    getMoreList(){
        axios.get('/api/homeList.json').then((res)=>{
          const result = res.data.data;
          const action = {
            type:'load_more',
            data: fromJS(result)
        };
        dispatch(action);
        })

    }
})
export default connect(mapState,mapDispatch)(List);


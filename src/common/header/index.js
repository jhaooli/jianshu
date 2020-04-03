import React,{Component} from 'react';
import {HeaderWrapper,
    Logo, 
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
    } from './style';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';





class Header extends Component{


    getListArea(){
        if(this.props.focus){
            return(
                <SearchInfo>
                                <SearchInfoTitle>
                                    热门搜索
                                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                                </SearchInfoTitle>                                <SearchInfoList>
                                    {
                                        this.props.list.map((item)=>{
                                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                            }
                                        )
                                    }
                                    
                                    
                                </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        return(
            <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className='left'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>Aa
                        
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.props.focus}
                                timeout={200}
                                classNames='slide'
                            >
    
                            <NavSearch 
                            className={this.props.focus? 'focus' : ''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}>
                            </NavSearch>
                            </CSSTransition>
                            <span className={this.props.focus? 'focus iconfont' : 'iconfont'}>&#xe636;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                       
                    </Nav>
                    <Addition>
                        <Button className='reg'>注册</Button>
                        <Button className='writting'>写文章</Button>
                    </Addition>
                </HeaderWrapper>
        )
    }

}






const mapStateToProps  = (state) =>{
    return {
        focus : state.get('header').get('focus'),
        list : state.get('header').get('list'),
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus()); 
        },
        handleInputBlur(){
            
            dispatch(actionCreators.searchBlur()); 
        },
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
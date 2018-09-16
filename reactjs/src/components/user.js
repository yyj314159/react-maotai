import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
export default class User extends Component{
    constructor(){
        super();
        this.state={
            userdata:[],
            password:'',
            username:'',
            user:{}
        }
        this.login=this.login.bind(this);
        this.reg = this.reg.bind(this);
        this.change=this.change.bind(this)
        fetch(
            'http://localhost:3000/user_read'
        ).then(
            res=>res.json()
        ).then(
            data=>{
              // 保留原始数据
                this.setState({
                    userdata:data
                })
                // 将原始数据的json格式变为对象键值对格式并保存到user对象中
                for(var i = 0;i<this.state.userdata.length;i++){
                    for(var name in this.state.userdata[i]){
                        this.state.user[name]=this.state.userdata[i][name]
                    }
                }
            }
        )
    };
    render(){
        return(
        <div className="login">
            <form className="Frame" >
                <NavLink to="/maotai">返回首页</NavLink>
                账户&nbsp;<input type="text"  id="Frame_user" name="username"  value={this.state.username} onChange={this.change}/><br />
                密码&nbsp;<input type="text"  id="Frame_pass" name="password"  value={this.state.password} onChange={this.change}/><br />
                <input type="button"  value="登陆" onClick={this.login}/>&nbsp;&nbsp;
                <input type="button"  value="注册" onClick={this.reg}/>               
            </form>  	
        </div>
        )
    };
    change(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    login(){
        if (this.state.user[this.state.username]) {
            if (this.state.user[this.state.username]===this.state.password) {
                alert('{error:0,msg:"登陆成功"}');                       
            } else {
                alert('{error:0,msg:"密码或用户名不正确"}')                       
            }
        }else{
            alert('{error:1,msg:"用户名不存在"}')
        }                                                               
    };
    reg(){
        if (this.state.user[this.state.username]) {
            alert('用户名已存在')
        } else {
            fetch(
                'http://localhost:3000/user_add?username='+this.state.username+'&password='+this.state.password
            ).then(           
                res=>res.text()
            ).then(
                data=>alert(data)
            )                
        }              
    };
}
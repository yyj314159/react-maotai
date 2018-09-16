import React,{Component} from 'react';
import $ from '../assets/js/jquery'
export default class MaoTai extends Component{
   constructor(){
       super()
       this.state={
        list:[]
       }
       
        fetch(
            "http://localhost:3000/index_read"
        ).then(
            res=>res.json()
        ).then(
            data=>
            {
                this.setState({
                    list:data
                })
                var str1 = '';
                var str2 = '';
                var str3 = '';
                var str4 = '';
                    for (var i = 0;i<5;i++) {
                        str1 += "<div id='lq' myid = '"+data[i].GoodID+"'>"+
                            "<img src='"+data[i].src+"' />"+
                            "<p>"+data[i].price+"</p>"+
                            "<p>"+data[i].name+"</p>"+
                            "<em class='EM'>加入购物车</em>"+
                        "</div>";
                    };
                    $("#lq1").html(str1);
                    for (var i = 5;i<10;i++) {
                        str2 += "<div id='lq' myid = '"+data[i].GoodID+"'>"+
                            "<img src='"+data[i].src+"' />"+
                            "<p>"+data[i].price+"</p>"+
                            "<p>"+data[i].name+"</p>"+
                            "<em class='EM'>加入购物车</em>"+
                        "</div>";
                    };
                    $("#lq2").html(str2);
                    for (var i = 10;i<15;i++) {
                        str3 += "<div id='lq' myid = '"+data[i].GoodID+"'>"+
                            "<img src='"+data[i].src+"' />"+
                            "<p>"+data[i].price+"</p>"+
                            "<p>"+data[i].name+"</p>"+
                            "<em class='EM'>加入购物车</em>"+
                        "</div>";
                    };
                    $("#lq3").html(str3);
                    for (var i = 15;i<20;i++) {
                        str4 += "<div id='lq' myid = '"+data[i].GoodID+"'>"+
                            "<img src='"+data[i].src+"' />"+
                            "<p>"+data[i].price+"</p>"+
                            "<p>"+data[i].name+"</p>"+
                            "<em class='EM'>加入购物车</em>"+
                        "</div>";
                    };
                    $("#lq4").html(str4);
            }
        )

   }

    render(){
        return(
            <div className='MaoTai'>
                {/* maotai lq start */}
                <div className="text w-100">
                    
                <div className="hotProdoct_T">
                    <p>习酒馆</p>&nbsp;窖藏系列&nbsp; 金质系列&nbsp; 习酱系列&nbsp; 浓香系列
                    <a href="">&gt;&gt;更多......</a>
                </div>
                <div id="lq1"></div>

                <div className="hotProdoct_T">
                    <p>UMEET(悠蜜)专场</p>
                    <a href="">&gt;&gt;更多......</a>
                </div>
                <div id="lq2"></div>

                <div className="hotProdoct_T">
                    <p>葡萄酒庄</p>&nbsp;干红系列 &nbsp;干白系列
                    <a href="">&gt;&gt;更多......</a>
                </div>
                <div id="lq3"></div>

                <div className="hotProdoct_T">
                    <p>技术开发公司</p>&nbsp;茅台醇
                    <a href="">&gt;&gt;更多......</a>
                </div>
                <div id="lq4"></div>
                </div>
                {/* maotai lq over */}
            </div>
        )
    }
} 


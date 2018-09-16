import React, { Component } from 'react';

class ShopMarket extends Component{
    render(){
        return(
            <div id="shoppingCart">
            {/* shoppingCart_title start */}
            <div className="shoppingCart_title d-flex justify-content-around align-items-center">
                <span>购物车</span>
                <p>欢迎&nbsp;杨艳杰先生</p>
                <a href="./maotai.html">返回首页</a>
            </div>
            {/* shoppingCart_title over */}
    
            {/* shoppingCart_Content start */}
            <table border="1" className="shoppingCart_content">
                <thead>
                    <tr>
                        <th>产品编号</th>
                        <th>产品名称</th>
                        <th>产品图片</th>
                        <th>产品价格</th>
                        <th>产品数量</th>
                        <th>产品管理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>D</td>
                        <td>茅台酒</td>
                        <td>Data</td>
                        <td>￥222</td>
                        <td>2</td>
                        <td><span>删除</span></td>
                    </tr>
                </tbody>	
            </table>
            {/* shoppingCart_Content over*/}
        </div>            
        )
    }
}

export default ShopMarket;
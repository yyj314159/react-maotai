import React,{Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div className='Footer'>
            
                <div className="profooter">
                    <div className="F1">
                        <ul className="F11 d-flex">
                            <li>400&nbsp;1000&nbsp;799&nbsp;服务热线</li>
                            <li>点击在线咨询(9:00--22:00)</li>
                            <li>cuijie@emaotai.cn&nbsp;精品入住&nbsp;商务联系</li>
                        </ul>
                        <div id="F12">
                            <ul>
                                <li>服务中心</li>
                                <li>常见问题</li>
                                <li>邮件订阅</li>
                                <li>领取优惠券</li>
                            </ul>
                            <ul>
                                <li>支付方式</li>
                                <li>银行汇款</li>
                                <li>支付宝</li>
                                <li>银联支付</li>
                            </ul>
                            <ul>
                                <li>物流配送</li>
                                <li>配送费用</li>
                                <li>配送方式</li>
                                <li>配送方式</li>
                            </ul>
                            <ul>
                                <li>商城指南</li>
                                <li>购物流程</li>
                                <li>订购方式</li>
                                <li>积分政策</li>
                            </ul>
                        </div>
                    </div>
                    <div id="F2">
                        <div className="F21 d-flex justify-content-between align-items-center">
                        </div>
                    </div>
                </div>
                <footer>
                    <div id="f1"></div>
                    <div className="f2">
                        <ul className="d-flex justify-content-between align-items-center">
                            <li><a href="">商城首页</a></li>
                            <li><a href="">关于我们</a></li>
                            <li><a href="">公司资质</a></li>
                            <li><a href="">联系我们</a></li>
                            <li><a href="">经销商网络</a></li>
                            <li><a href="">自提货网点</a></li>
                        </ul>
                        <p>未满18岁禁止饮酒！</p>
                    </div>
                </footer>
           
            </div>
        )
    }
}
import React,{Component} from 'react';
import Contact from '../assets/js/contactUs'

export default class ContactUs extends Component{
    componentDidMount(){
        Contact()
    }
    render(){
        return(
            <div>           
             {/* mtContact start */}
                <div class="mtContact_title">
                    茅台是著名三大蒸馏酒之一，誉称国酒，在国内外享有盛名！
                </div>

                <div class="mtContact_text">
                    <div class="mtContact_text_1">
                        <p>CONNECT&nbsp;US</p>
                        <span>联系我们</span>
                    </div>
                    <div class="mtContact_text_2 d-flex justify-content-between align-items-center">
                        <ul>
                            <li>企业在线QQ:800083967</li>
                            <li>售前咨询： &nbsp;400 &nbsp;1000&nbsp; 799</li>
                            <li>地址：贵州省贵阳市观山湖区湖滨路10号翔明大厦10楼</li>
                        </ul>
                        <ul>
                            <li>您对店铺的意见或建议：xliang@emaotai.cn</li>
                            <li>售前、售中、售后服务：xliang@emaotai.cn</li>
                            <li>企业客户咨询服务：xliang@emaotai.cn</li>
                            <li>商务合作:xliang@emaotai.cn</li>
                        </ul>
                    </div>
                </div>
                {/* map start */}
                <div id="container"></div>
                {/* map over */}
            </div>
        )
    }
} 
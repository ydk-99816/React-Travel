import React from 'react';
import {Carousel} from 'antd';

var ShareCss=require('./share.css');
export default class SharePage extends React.Component{
    render(){
        return(
            <div className={ShareCss.share}>
            <div>
                 <Carousel autoplay>
        <div>
        <img src={require('../picture/41.jpg')} width={1050} height={400}/>
      </div>
      <div>
      <img src={require('../picture/42.jpg')} width={1050} height={400}/>
      </div>
      <div>
      <img src={require('../picture/43.jpg')} width={1050} height={400}/>
      </div>
      <div>
      <img src={require('../picture/44.jpg')} width={1050} height={400}/>
      </div>
      <div>
      <img src={require('../picture/45.jpg')} width={1050} height={400}/>
      </div>
      <div>
      <img src={require('../picture/46.jpg')} width={1050} height={400}/>
      </div>
    </Carousel>
            </div>
            <div className={ShareCss.sharebody}>
                <ul className={ShareCss.sharebodyA}>
                    <li className={ShareCss.sharebodyAtop}>
                        <div className={ShareCss.shareface}>
                        <img src={require('../picture/21.jpg')}width={60} height={60} />
                        <h1>成都，一个美食爱好者首选的城市</h1>
                        </div>
                    </li>
                    <li>
                        <h2>前言</h2>
                    </li>
                    <li>
                        <h3>说说这次旅行</h3>
                    </li>
                    <div className={ShareCss.shareoutline}>
                        <p4>如果说中国有美食家蔡澜老先生，那韩国就有白钟元白大叔。
                            白钟元是韩国最为知名的美食家，出过的美食综艺数不胜数，
                            比如《白钟元的三大天王》、《白钟元的快餐车》、《白钟元的小巷餐厅》，
                            他的另一档节目《吃睡吃》还完成了吃货的终极梦想。
                            他自己本人更是一个餐饮大亨，旗下有26家连锁餐厅，1000多家分店。
                            《尹餐厅》中罗PD，李瑞镇都要向白老师拜师学艺。
                            所以跟着白大叔吃准没有错。
                        </p4>
                            <p></p>
                            <p></p>
                        <p4>成都，这一天府之国，吃货圣地这次首先被这档韩国中综艺选中，
                            成为白大叔出发的第一站。
                        </p4>
                    </div>
                    <div className={ShareCss.sharehappy}>
                        <div className={ShareCss.sharehappy1}>
                            <h5>辣味之都，川菜的中心，白大叔也是真的有勇气……直接喝掉一勺麻辣锅底</h5>
                            <li><img  src={require('../picture/51.gif')} width={800} height={500}/></li>
                            <li><img  src={require('../picture/52.gif')} width={800} height={500}/></li>
                            <h6>这酸爽……肉眼就可估测。</h6>
                        </div>
                    </div>
                    <div className={ShareCss.shareone}>
                        <h6>
                            第一站
                        </h6>
                        <p>
                            奇味烧烤
                        </p>
                        <li><img src={require('../picture/53.gif')} width={800} height={500}/></li>
                        <li><img src={require('../picture/54.gif')} width={800} height={500}/></li>
                        <h5>这用炭火烤制的羊肉串谁不想来一把呢？而且独树一格的烤法令我们白大叔啧啧称奇。
                        这家烤串并不是直接将鲜羊肉串烤制，而是先将羊肉串抹上一层厚厚的辣椒面，再上炭火烤制。
                        </h5>
                        <li><img src={require('../picture/55.gif')} width={800} height={500}/></li>
                    </div>
                </ul>
            </div>
            </div>
        )
    }
}
document.getElementById('container');

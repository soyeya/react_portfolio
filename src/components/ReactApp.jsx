import React , { useState, useEffect } from 'react';
import banna01 from '../assets/img/banapresso01.png';
import banna02 from '../assets/img/banapresso02.png';
import banna03 from '../assets/img/banapresso03.png';
import banna04 from '../assets/img/banapresso04.png';
import banna05 from '../assets/img/banapresso05.png';
import ezpz01 from '../assets/img/ezpz01.png';
import ezpz02 from '../assets/img/ezpz02.png';
import ezpz03 from '../assets/img/ezpz03.png';
import ezpz04 from '../assets/img/ezpz04.png';
import ezpz05 from '../assets/img/ezpz05.png';
import ezpz06 from '../assets/img/ezpz06.png';
import info01 from '../assets/img/banapresso_info.png';
import info02 from '../assets/img/ezpz_info.png';

const ReactApp = () => {

    const [project01, setProject01] = useState(true);
    const [project02, setProject02] = useState();

    useEffect(() => {

        window.addEventListener("scroll" , () => {
    
            const scrollY = window.scrollY;
        
            if(scrollY > 0){
               setProject01(true)
            }else{
               setProject01(false)
            }
            if(scrollY > 2000){
               setProject02(true)
            }else{
               setProject02(false)
            }
        
        })

    },[])

     return(
        <div className="reactContainer">
        <h3 className="title">React Project</h3>
        <div className={ project01 ? 'projectContent up' : 'projectContent'}>
            <ul>
               <span style={{"color" : "#f017de"}}>Banapresso</span><a href="https://soyeya.github.io/banapresso/" target="_blank" rel="noreferrer noopener" className="site"> go to site</a>
               <li><p><strong>Info</strong> 인기있는 커피숍 서비스를 구현 _ 배달앱</p></li>
               <li><p><strong>Skills</strong> React.js, Webpack, Babel, Database : msw</p></li>
               <li><p><strong>요구사항 분석</strong></p>
                   <img src={info01} alt="infoImg"/>
               </li>
            </ul>
            <div className="imgscroller">
               <strong>Web, App 구성</strong>
               <ul className="slider02">
                   <li><img src={banna01} alt="banapresso01"/></li>
                   <li><img src={banna02} alt="banapresso02"/></li>
                   <li><img src={banna03} alt="banapresso03"/></li>
                   <li><img src={banna04} alt="banapresso04"/></li>
                   <li><img src={banna05} alt="banapresso05"/></li>

               </ul>
            </div>
        </div>
         <div className={ project02 ? 'projectContent up' : 'projectContent'}>
             <ul>
                <span>이모저모 ezpz</span><a href="https://soyeya.github.io/ezpz_app/" className="site" target="_blank" rel="noreferrer noopener"> go to site</a>
                <li><p><strong>Info</strong> 일상에 필요한 생활 꿀팁을 모은 서울정보앱</p></li>
                <li><p><strong>Skills</strong> React.js, Webpack, Babel, 오픈 API 사용</p></li>
                <li><p><strong>요구사항 분석</strong></p>
                    <img src={info02} alt="infoImg"/>
                </li>
             </ul>
             <div className="imgscroller">
                <strong>Web, App 구성</strong>
                <ul className="slider01">
                    <li><img src={ezpz01} alt="ezpz01"/></li>
                    <li><img src={ezpz02} alt="ezpz02"/></li>
                    <li><img src={ezpz03} alt="ezpz03"/></li>
                    <li><img src={ezpz04} alt="ezpz04"/></li>
                    <li><img src={ezpz05} alt="ezpz05"/></li>
                    <li><img src={ezpz06} alt="ezpz06"/></li>
                </ul>
             </div>
         </div>
     </div>
     )
}

export default ReactApp;
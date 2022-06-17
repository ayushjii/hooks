import React from "react";
import SectionTitle from "./SectionTitle";
import SocialIcon from "./SocialMediaicons";
import {IoLogoInstagram} from 'react-icons/io';
import {RiFacebookLine, RiLinkedinLine} from 'react-icons/ri';
import {TbBrandTwitter} from 'react-icons/tb'
import styled from "styled-components";

const SocialStyle = styled.div`
.icons{
  padding: 10rem 60rem;
 display:flex;
 column-gap:45px;
}

.s-icon{
width:60px;
height: 60px;
display: inline-flex;
align-items: center;
justufy-content: center;
text-decoration: none;
font-size: 26px;
color: #fff;
border-radius: 50%;
outline: 2px solid #fff;
transition-property: outline-offset, outline-color, background-color;
transition-duration: .25s ;
}
.s-icon:hover{
    outline-offset: 4px;
}

.s-icon:hover,
 .icon{
 animation: shake .50s;
}
.icon--twitter:hover {
    background-color: #1fa1f2;
    outline-color: #1fa1f2;
}

.icon--linkedin:hover {
    background-color: #0077b5;
    outline-color: #0077b5;
}

.icon--facebook:hover {
    background-color: #ff4500;
    outline-color: #ff4500;
}

.icon--instagram:hover {
    background-image: radial-gradient(circle at 30% 107%,
            #fdf497 0%, #fdf497 5%,
            #fd5949 45%, #d6249f 60%,
            #285AEB 90%);
    outline-color: #a02d76;
}
@keyframes shake {
  10%{transform: rotate(15 deg);}
  20%{transform: rotate(-15 deg);}
  30%{transform: rotate(15 deg);}
  40%{transform: rotate(-15 deg);}
}
`;

export default function Socialmedia(){
    return(
    <>
      <SocialStyle>
         <SectionTitle 
            heading="Our Social Media Handles"
            subheading=" " />
         <div className="icons">
            <div className="s-icon icon--instagram">
             <SocialIcon 
               links={[
               {
                icon:<IoLogoInstagram />,
                path: 'http://instagram.com',
               },
             ]}/>
         </div>
            <div className="s-icon icon--facebook">
             <SocialIcon  
               links={[
               {
                icon:<RiFacebookLine />,
                path: 'http://facebook.com',
               },
             ]}/>
         </div>
            <div className="s-icon icon--linkedin">
             <SocialIcon 
               links={[
               {
                icon:<RiLinkedinLine />,
                path: 'http://linkedin.com',
               },
              ]}/>
         </div>
            <div className="s-icon icon--twitter">
             <SocialIcon
               links={[
               {
                icon:<TbBrandTwitter />,
                path: 'http://twitter.com',
               },
              ]}/>
         </div>
       </div>
      </SocialStyle>
    </>
    );
}

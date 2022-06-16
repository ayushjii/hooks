import React from "react";
import SectionTitle from "./SectionTitle";
import SocialIcon from "./SocialMediaicons";
import {IoLogoInstagram} from 'react-icons/io';
import {RiFacebookLine, RiLinkedinLine} from 'react-icons/ri';
import {TbBrandTwitter} from 'react-icons/tb'
import styled from "styled-components";


const SocialStyle = styled.div`

    display: flex;
    gap: 3rem;
    font-family: 'Poppins', sans-serif;
    background-color: #242329;
    display: grid;
    place-items: center;
    height: 100vh;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.icon--instagram,
.icon--twitter,
.icon--linkedin,
.icon--facebook{
flex:3rem;
}
.social-container{
    display: flex;
    column-gap: 25px;
}
${'' /* .icon--twitter:hover {
    background-color: #1da1f2;
    outline-color: #1da1f2;
}

.icon--linkedin:hover {
    background-color: #0077b5;
    outline-color: #0077b5;
}

.icon--facebook:hover {
    background-color: #2ea44f;
    outline-color: #2ea44f;
}

.icon--instagram:hover {
    background-image: radial-gradient(circle at 30% 107%,
            #fdf497 0%, #fdf497 5%,
            #fd5949 45%, #d6249f 60%,
            #285AEB 90%);
    outline-color: #a02d76;
} */}

`;

export default function Socialmedia(){
    return(
     <div>
     <div className="social-container">
    <SocialStyle>
         <SectionTitle 
            heading="Our Social Media Handles"
            subheading=" " />
         <div class="icons">
         <div>
         <SocialIcon className="icon--instagram"
           links={[
              {
                icon:<IoLogoInstagram />,
                path: 'http://instagram.com',
              },
           ]}/>
         </div>
         <div>
         <SocialIcon  className="icon--facebook"
         links={[
              {
                icon:<RiFacebookLine />,
                path: 'http://facebook.com',
              },
           ]}/>
         </div>
         <div>
         <SocialIcon className="icon--linkedin"
          links={[
              {
                icon:<RiLinkedinLine />,
                path: 'http://linkedin.com',
              },
           ]}/>
         </div>
         <div>
         <SocialIcon className="icon-twitter"
           links={[
              {
                icon:<TbBrandTwitter />,
                path: 'http://twitter.com',
              },
           ]}/>
         </div>

    {/* <a href="www.instagram.com" className="icon icon--instagram">
      <i class="ri-instagram-line"></i>
    </a>
    <a href="www.instagram.com" className="icon icon--twitter">
      <i class="ri-twitter-line"></i>
    </a>
    <a href="www.instagram.com" className="icon icon--linkedin">
      <i class="ri-linkedin-line"></i>
    </a>
    <a href="www.facebook.com" className="icon icon--github">
      <i class="ri-github-line"></i>
    </a> */}
  </div>
    </SocialStyle>
       </div>
     </div>
    );
}

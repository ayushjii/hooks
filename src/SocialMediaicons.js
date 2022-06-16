import React from "react";
import {IoLogoInstagram} from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const IconStyle=styled.div`
.
    width: 60px;
    height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 26px;
    color: #fff;
    border-radius: 50%;
    outline: 2px solid #fff;
    transition-property:outline-offset, outline-color, background-color;
    transition-duration: .25s;

IconStyle:hover {
    outline-offset: 4px;
}

IconStyle:hover,
.icon {
    animation: shake .25s;
}
`;

export default function SocialIcon({
    links = [
        {
          type: 'Link',
          icon: <IoLogoInstagram />,
          path: 'www.instgram.com',
        }
    ],
}) {   
    return (
        <IconStyle className="s-icon">
            <ul>
               {links.map((item, index) => (
                <li key={index}>
                  {item.type === 'Link' ? (
                  <Link to={item.path}>{item.icon} </Link>
                ) : (
                <a href={item.path} target="_blank" rel="noreferrer">
                 {item.icon}
                </a>
                )}
                </li>
                ))}
            </ul>    
        </IconStyle>
    );
}
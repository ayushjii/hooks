import React from "react";
import {IoLogoInstagram} from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function SocialIcon({
    links = [
        {
          type: 'Link',
          icon: <IoLogoInstagram />,
          path: 'https://instagram.com',
        }
    ],
}) {   
    return (
        <div className="s-icon">
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
        </div>
    );
}
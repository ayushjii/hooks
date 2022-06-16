import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const d = new Date();
  let year = d.getFullYear();

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Ayush Goyal</h1>
          <PText>
          Hey!
          Ayush here,
          Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum,
          a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, 
          added, and removed to make it nonsensical and improper Latin.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                type: 'Link',
                path: '',
              },
              {
                type: 'Link',
                title: 'About Us',
                path: '',
              },
              {
                type: 'Link',
                title: 'Blog',
                path: '',
              },
              {
                type: 'Link',
                title: 'Contact Us',
                path: '',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '9771818711',
                path: 'tel:+9771818711',
              },
              {
                title: 'motivation@gmail.com',
                path: 'mailto:pawangoyal6789@gmail.com',
              },
              {
                title: 'Rohini, New Delhi, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
              {
                title: 'LinkedIn',
                path: 'http://linkedin.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © {year} - Ayush Goyal | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="#">
            KRPKG
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

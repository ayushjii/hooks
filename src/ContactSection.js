import styled from "styled-components";
import ContactInfoItem from "./Contactinfoitem";
import SectionTitle from './SectionTitle';


export default function ContactSection()  {
    const ContactSectionStyles = styled.div`
    padding: 10rem 0;
    `;
    return(
<ContactSectionStyles>

    <div className="container">
        <SectionTitle 
        heading="Contact"
            subheading="Get in touch" />
            <div className="contactSection__wrapper">
              <div className="left">
               <ContactInfoItem />
              </div>
              <div className="right">
                contact from
              </div>

            </div>
    </div>
</ContactSectionStyles>

    );
}
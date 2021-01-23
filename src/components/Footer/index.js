import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
FaFacebook,
FaInstagram,
FaYoutube,
FaTwitter,
FaTelegram
} from 'react-icons/fa'


import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/" >How it works</FooterLink>
                            <FooterLink to="/" >Testimonials</FooterLink>
                            <FooterLink to="/" >Careers</FooterLink>
                            <FooterLink to="/" >Investors</FooterLink>
                            <FooterLink to="/" >Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/" >Contact</FooterLink>
                            <FooterLink to="/" >Support</FooterLink>
                            <FooterLink to="/" >Destinations</FooterLink>
                            <FooterLink to="/" >Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/" >Submit Video</FooterLink>
                            <FooterLink to="/" >Ambassadors</FooterLink>
                            <FooterLink to="/" >Agency</FooterLink>
                            <FooterLink to="/" >Infuencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/" >Instagram</FooterLink>
                            <FooterLink to="/" >Facebook</FooterLink>
                            <FooterLink to="/" >You tube</FooterLink>
                            <FooterLink to="/" >Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}> shakh</SocialLogo>
                        <WebsiteRights>shakh @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                                <FaTelegram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

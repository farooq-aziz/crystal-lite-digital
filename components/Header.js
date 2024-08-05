import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Header.module.css'
//
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaBars, FaRegWindowClose, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
//
import Navbar from 'react-bootstrap/Navbar';
//
import logo from '../public/images/logo.svg'

const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const router = useRouter();

    return (
        <>
            <Link href='/' className='navbar-brand'>
                <Image className={`${styles.logo} img-fluid`}
                    src={logo}
                    alt="logo"
                />
            </Link>
            <FaBars className={styles.openMenu} onClick={handleMenu} />
            <Navbar className={isActive ? `${styles.navBar} ${styles.active}` : `${styles.navBar}`} expand="md">
                <FaRegWindowClose className={styles.closeMenu} onClick={handleMenu} />
                <Container>
                    <Row className={`${styles.navRow} w-100`}>
                        <Col md={4}>
                            <ul className={styles.menu}>
                                <li>
                                    <Link href="/" onClick={handleMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career/" onClick={handleMenu}>
                                        Career
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us/" onClick={handleMenu}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us/" onClick={handleMenu}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul className={`${styles.menu} ${styles.secMenu}`}>
                                <li>
                                    <Link href="/digital-marketing/" onClick={handleMenu}>
                                        Digital Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/social-media-marketing/" onClick={handleMenu}>
                                        Social Media Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/seo/" onClick={handleMenu}>
                                        Seo Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/content-writing-services/" onClick={handleMenu}>
                                        Content Writing Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/managed-it/" onClick={handleMenu}>
                                        Managed IT Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dedicated-hosting/" onClick={handleMenu}>
                                        Dedicated Hosting
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/transcription/" onClick={handleMenu}>
                                        Transcription
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/business-intelligence/" onClick={handleMenu}>
                                        Business Intelligence
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <div className={styles.info}>
                                <h5>GET IN TOUCH</h5>
                                <ul className={styles.subMenu}>
                                    <li>
                                        <div className={styles.infoLinks}>
                                            <Link href="mailto:info@crystallitedigital.com">
                                                <FaEnvelope className={styles.icon} />
                                                info@crystallitedigital.com
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.infoLinks}>
                                            <Link href="tel:021-111 22 55 77">
                                                <FaPhoneAlt className={styles.icon} />
                                                021-111 22 55 77
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.address}>
                                            <Link href="https://maps.app.goo.gl/QQwp1pN4BrHFPUk56" target={'_blank'}>
                                                <FaBuilding className={`${styles.icon}`} />
                                                1210,1212 , National IT Park, Main Shahrah-e-Faisal, 74200, Karachi-Pakistan.
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.sociLinks}>
                                            <Link href="https://www.facebook.com/CrystallitePakistan" target={'_blank'}>
                                                <FaFacebookSquare className={`${styles.icon}`} />
                                            </Link>
                                            <Link href="https://www.instagram.com/crystallitepakistan/" target={'_blank'}>
                                                <FaInstagramSquare className={`${styles.icon}`} />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/crystallitepakistan/" target={'_blank'}>
                                                <FaLinkedin className={`${styles.icon}`} />
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
import React, {useState} from 'react';
import MainUnauthorized from "../pageComponents/MainUnauthorized/MainUnauthorized";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Divider, Layout, Typography } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import '../shared/lib/i18n/config';

import classes from './homepage.module.scss';
import useMediaQuery from "../shared/lib/hooks/useMediaQuery";
import Pricing from "../pageComponents/Pricing/Pricing";
import OurProducts from "../pageComponents/OurProducts/OurProducts";
import LoginPage from "../pageComponents/LoginPage/LoginPage";
import SignUpPage from "../pageComponents/SignUpPage/SignUpPage";
import ForgotPasswordPage from "../pageComponents/ForgotPasswordPage/ForgotPasswordPage";
import { ModalWindow } from "../shared/ui/ModalWindow";
import Login from "../features/Login/Login";
import SignUp from "../features/SignUp/SignUp";
import ForgotPassword from "../features/ForgotPassword/ForgotPassword";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export const HomePage = () => {
    const isDesktop = useMediaQuery('m', true);
    const { t } = useTranslation();
    const isAuthorized = false; //Needs to be changed
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [isOpenedModalLogin, setIsOpenedModalLogin] = useState<boolean>(false);
    const [isOpenedModalSignup, setIsOpenedModalSignup] = useState<boolean>(false);
    const [isOpenedModalForgotPassword, setIsOpenedModalForgotPassword] = useState<boolean>(false);

    const handleGoToLogin = () => {
        setIsOpenedModalSignup(false);
        setIsOpenedModalForgotPassword(false);
        setIsOpenedModalLogin(true);
    }

    const handleGoToSignUp = () => {
        setIsOpenedModalLogin(false);
        setIsOpenedModalForgotPassword(false);
        setIsOpenedModalSignup(true);
    }

    const handleGoToForgotPassword = () => {
        setIsOpenedModalLogin(false);
        setIsOpenedModalSignup(false);
        setIsOpenedModalForgotPassword(true);
    }

    const onLinkClick = () => setIsMenuActive(false)

    return (
        <>
            <Layout className="layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Header className={classes.header}>
                    <div style={{width: '100%', maxWidth: '1440px', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                            <Link to={'/'} style={{display: 'flex', alignItems: 'center'}}>
                                <img className={classes.logo} alt={'logo'} src={'logo.png'} onClick={onLinkClick}/>
                                <Typography className={classes.headline}>
                                    <Title level={3} className={classes.headlineText} style={{ color: 'white', margin: 0, fontWeight: 700 }}>{t('header.deepfaker')}</Title>
                                </Typography>
                            </Link>
                        </div>
                        {((isMenuActive && !isDesktop) || isDesktop) &&
                            <div className={classes.sandwichMenu}>
                                <div className={classes.pagesLinks}>
                                    <Link className={classes.link} to="/" onClick={onLinkClick}>{t('header.main')}</Link>
                                    <Link className={classes.link} to="/pricing" onClick={onLinkClick}>{t('header.pricing')}</Link>
                                    <Link className={classes.link} to="/our_products" onClick={onLinkClick}>{t('header.products')}</Link>
                                </div>
                                <div className={classes.loginSignupBlock}>
                                    <Button onClick={() => setIsOpenedModalLogin(true)} size='large' type='text'
                                            className={clsx(classes.firstButton, classes.button)}>{t('header.login')}
                                    </Button>
                                    <Button onClick={() => setIsOpenedModalSignup(true)}
                                        className={clsx(classes.secondButton, classes.button)}>{t('header.signup')}</Button>
                                </div>
                            </div>}
                        {!isDesktop && <div className={classes.sandwich} onClick={() => setIsMenuActive(!isMenuActive)}>
                            <img width={!isMenuActive ? '27px' : '20px'}
                                 height={!isMenuActive ? '19px' : '20px'}
                                 alt={'sandwich menu'}
                                 style={{cursor: 'pointer'}}
                                 src={!isMenuActive ? 'pictures/mobile_menu.png' : 'pictures/mobile_menu_close.png'}/>
                        </div>}
                    </div>
                </Header>
                <Content className={classes.body}>
                    {!isAuthorized && <div className={classes.promotionRow}>
                        <div style={{maxWidth: '1440px', display: 'flex', width: '100%'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between',gap: '15px', alignItems: 'center', width: '100%'}}>
                                {isDesktop && <Typography className={classes.desktopText}>
                                    <Text className={clsx(classes.text, classes.blackText)}>{t('mainUnauthorized.promotion.left')}</Text>
                                </Typography>}
                                <Typography>
                                    <Text className={clsx(classes.radiusText,classes.text)}>{t('mainUnauthorized.promotion.center')}</Text>
                                </Typography>
                                <Typography>
                                    { isDesktop ? <Text className={clsx(classes.text, classes.blackText)}>{t('mainUnauthorized.promotion.right')}</Text> :
                                    <Text className={clsx(classes.text, classes.blackText)}>{t('mainUnauthorized.promotion.rightMobile')}</Text>
                                }
                                </Typography>
                            </div>
                        </div>
                    </div>}
                    <div className={classes.content}>
                        <Routes>
                            <Route path="/">
                                <Route index element={<MainUnauthorized />} />
                                <Route path="/pricing" element={<Pricing />} />
                                <Route path="/our_products" element={<OurProducts />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/signup" element={<SignUpPage />} />
                                <Route path="/reset_password" element={<ForgotPasswordPage />} />
                            </Route>
                        </Routes>
                    </div>
                </Content>
                <Footer className={classes.footerWrapper}>
                    <div className={classes.footer}>
                        <Typography>
                            <Text className={classes.textLight}>{t('footer.copyright')}</Text>
                        </Typography>
                        <div className={classes.footerButtons}>
                            <Link className={classes.footerLink} to="/">{t('footer.termsOfUse')}</Link>
                            {!isDesktop && <Divider className={classes.footerDivider} type='vertical' />}
                            <Link className={classes.footerLink} to="/privacy_policy">{t('footer.privacyPolicy')}</Link>
                            {!isDesktop && <Divider className={classes.footerDivider} type='vertical' />}
                            <Link className={classes.footerLink} to="/contact_us">{t('footer.contactUs')}</Link>
                        </div>
                    </div>
                </Footer>

            </Layout>
            <ModalWindow isOpenedModal={isOpenedModalLogin} width={isDesktop ? '996px' : '100%'}
                         onCancel={() => setIsOpenedModalLogin(false)}
            >
                <Login onCancel={() => setIsOpenedModalLogin(false)}
                   onGoToSignUp={handleGoToSignUp}
                   onGoToForgotPassword={handleGoToForgotPassword}/>
            </ModalWindow>
            <ModalWindow isOpenedModal={isOpenedModalSignup} width={isDesktop ? '996px' : '100%'}
                         onCancel={() => setIsOpenedModalSignup(false)}
            >
                <SignUp onCancel={() => setIsOpenedModalSignup(false)} onGoToLogin={handleGoToLogin}/>
            </ModalWindow>
            <ModalWindow isOpenedModal={isOpenedModalForgotPassword} width={isDesktop ? '996px' : '100%'}
                         onCancel={() => setIsOpenedModalForgotPassword(false)}
            >
                <ForgotPassword onCancel={() => setIsOpenedModalForgotPassword(false)} onGoToLogin={handleGoToLogin}/>
            </ModalWindow>
        </>
    );
}

export default HomePage;

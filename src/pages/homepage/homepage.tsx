import React from 'react';
import MainUnauthorized from "../../pageComponents/MainUnauthorized/MainUnauthorized";
import { Routes, Route, Link } from "react-router-dom";
import PersonComponent from "../../pageComponents/PersonComponent/PersonComponent";
import { Button, Layout, Typography } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import '../../../src/lib/i18n/config';

import classes from './homepage.module.scss';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export const HomePage = () => {
    const { t } = useTranslation();

    return (
        <Layout className="layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Header className={classes.header}>
                <Content style={{maxWidth: '1440px', display: 'flex'}}>
                    <Content style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                        <img className={classes.logo} src={'logo.png'}/>
                        <Typography className={classes.headline}>
                            <Title level={3} className={classes.headlineText} style={{ color: 'white', margin: 0, fontWeight: 700 }}>{t('header.deepfaker')}</Title>
                        </Typography>
                    </Content>
                    <Content className={classes.sandwichMenu}>
                        <Link className={classes.link} to="/">{t('header.main')}</Link>
                        <Link className={classes.link} to="/pricing">{t('header.pricing')}</Link>
                        <Link className={classes.link} to="/our_products">{t('header.products')}</Link>
                    </Content>
                    <Content style={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '48px'}}>
                        <Button size='large' type='text' className={clsx(classes.firstButton, classes.button)}>{t('header.login')}</Button>
                        <Button className={clsx(classes.secondButton, classes.button)}>{t('header.signup')}</Button>
                    </Content>
                </Content>
            </Header>
            <Content className={classes.body}>
                <Content className={classes.promotionRow}>
                    <Content style={{maxWidth: '1440px', display: 'flex'}}>
                        <Content style={{display: 'flex', justifyContent: 'space-between',gap: '15px', alignItems: 'center'}}>
                            <Typography>
                                <Text className={classes.text}>{t('mainUnauthorized.promotion.left')}</Text>
                            </Typography>
                            <Typography>
                                <Text className={clsx(classes.radiusText,classes.text)}>{t('mainUnauthorized.promotion.center')}</Text>
                            </Typography>
                            <Typography>
                                <Text className={classes.text}>{t('mainUnauthorized.promotion.right')}</Text>
                            </Typography>
                        </Content>
                    </Content>
                </Content>
                <div className={classes.content}>
                    <Routes>
                        <Route path="/">
                            <Route index element={<MainUnauthorized />} />
                            <Route path="/person/:id" element={<PersonComponent />} />
                        </Route>
                    </Routes>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>footer</Footer>
        </Layout>
    );
}

export default HomePage;

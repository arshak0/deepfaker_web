import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../shared/lib/i18n/config';

import classes from './Login.module.scss';
import { Button, Divider, Input, Typography } from "antd";
import {Link} from "react-router-dom";

const { Text } = Typography;

type Props = {
    onCancel?: () => void;
    page?: boolean;
    onGoToSignUp?: () => void;
    onGoToForgotPassword?: () => void;
}

export const Login = ({onCancel, page, onGoToSignUp, onGoToForgotPassword}: Props) => {
    const { t } = useTranslation();
    const [valueEmail, setValueEmail] = useState<string>('');
    const [valuePassword, setValuePassword] = useState<string>('');

    const currentOnCancel = onCancel ? onCancel : () => {}
    const handleCancel = () => currentOnCancel();

    return (
        <div className={page ? classes.bodyPage : classes.bodyModal}>
            <div className={classes.content}>
                {!page && <>
                    <img width='36px' height='36px' onClick={handleCancel}
                         className={classes.closeIcon} src={'/pictures/icon_close.png'} alt={'Close Icon'} />
                </>}
                <Typography className={classes.modalHeadlineWrapper}>
                    <Text className={classes.modalHeadline}>{t('loginPage.headline')}</Text>
                </Typography>
                <Input className={classes.inputField} type={'email'} placeholder={t('loginPage.email')}
                       value={valueEmail} onChange={(e) => setValueEmail(e.target.value)}
                />
                <Input className={classes.inputField} type={'password'}
                       placeholder={t('loginPage.password')} style={{marginTop: '14px'}}
                       value={valuePassword} onChange={(e) => setValuePassword(e.target.value)}
                />
                <Button className={classes.button}>{t('loginPage.button')}</Button>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '14px'}}>
                    {!page && <Button onClick={onGoToSignUp} size='large' type='text'
                            className={classes.plainButton}>{t('loginPage.signUp')}
                    </Button>}
                    {page &&
                        <Link to={'/signup'}>
                            <Button onClick={onGoToSignUp} size='large' type='text'
                                    className={classes.plainButton}>{t('loginPage.signUp')}
                            </Button>
                        </Link>}
                    {!page && <Button onClick={onGoToForgotPassword} size='large' type='text'
                            className={classes.plainButton}>{t('loginPage.forgotPassword')}
                    </Button>}
                    {page &&
                        <Link to={'/reset_password'}>
                            <Button onClick={onGoToForgotPassword} size='large' type='text'
                                    className={classes.plainButton}>{t('loginPage.forgotPassword')}
                            </Button>
                        </Link>}
                </div>
                <Divider type='horizontal' className={classes.divider}/>
                <Button onClick={() => {}} style={{fontSize: '16px', background: '#1877F2', color: '#FFFFFF'}}
                    className={classes.externalServicesButton}
                >
                    <img style={{transform: 'translateY(5px)', marginRight: '12px', width: '20px', height: '20px'}} src={'/pictures/logo_fb.png'} />
                    {t('loginPage.fb')}
                </Button>
                <Button onClick={() => {}} style={{fontSize: '16px', background: '#FFFFFF', color: '#000000'}}
                    className={classes.externalServicesButton}
                >
                    <img style={{transform: 'translateY(5px)', marginRight: '12px', width: '20px', height: '20px'}} src={'/pictures/logo_google.png'} />
                    {t('loginPage.google')}
                </Button>
                <Button onClick={() => {}} style={{fontSize: '16px', background: '#000000', color: '#FFFFFF'}}
                    className={classes.externalServicesButton}
                >
                    <img style={{transform: 'translateY(5px)', marginRight: '12px', width: '20px', height: '20px'}} src={'/pictures/logo_apple.png'} />
                    {t('loginPage.apple')}
                </Button>
            </div>
        </div>
    );
}

export default Login;

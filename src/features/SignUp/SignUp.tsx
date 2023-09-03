import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../shared/lib/i18n/config';

import classes from './SignUp.module.scss';
import {Button, Checkbox, Divider, Input, Typography} from "antd";
import clsx from "clsx";
import {Link} from "react-router-dom";

const { Text } = Typography;

type Props = {
    onCancel?: () => void;
    page?: boolean;
    onGoToLogin?: () => void;
}

export const SignUp = ({onCancel, page, onGoToLogin}: Props) => {
    const { t } = useTranslation();
    const [valueEmail, setValueEmail] = useState<string>('');
    const [valuePassword, setValuePassword] = useState<string>('');
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const currentOnCancel = onCancel ? onCancel : () => {}
    const handleCancel = () => currentOnCancel();

    const handleSendCode = () => {
        console.log('handle Send Verification Code');
    }

    return (
        <div className={page ? classes.bodyPage : classes.bodyModal}>
            <div className={classes.content}>
                {!page && <>
                    <img width='36px' height='36px' onClick={handleCancel}
                        className={classes.closeIcon} src={'/pictures/icon_close.png'} alt={'Close Icon'} />
                </>}
                <Typography className={classes.modalHeadlineWrapper}>
                    <Text className={classes.modalHeadline}>{t('signupPage.headline')}</Text>
                </Typography>
                <Input className={classes.inputField} type={'email'} placeholder={t('signupPage.email')}
                       value={valueEmail} onChange={(e) => setValueEmail(e.target.value)}
                />
                <Input className={classes.inputField} type={'password'}
                                placeholder={t('signupPage.password')} style={{marginTop: '14px'}}
                                value={valuePassword} onChange={(e) => setValuePassword(e.target.value)}
                />
                <Input className={clsx(classes.inputSendCode, classes.inputField)} type={'text'}
                       placeholder={t('signupPage.verificationCode')} style={{marginTop: '14px'}}
                       value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}
                       suffix={<Button className={classes.sendCodeButton} onClick={handleSendCode}>{t('signupPage.sendCodeButton')}</Button>}
                />
                <div style={{display: 'flex', width: '100%', marginTop: '10px', marginBottom: '2px', gap: '8px'}}>
                    <Checkbox className={classes.checkbox}
                        onChange={(e) => {setIsChecked(e.target.checked)}}/>
                    <Typography >
                        <Text className={classes.agreementText}>{t('signupPage.agreement.textFirst')}</Text>
                        <Link to={'/terms_of_service'} className={clsx(classes.agreementText,classes.agreementLinks)}>{t('signupPage.agreement.termsOfService')}</Link>
                        <Text className={classes.agreementText}>{t('signupPage.agreement.textSecond')}</Text>
                        <Link to={'/privacy_policy'} className={clsx(classes.agreementText,classes.agreementLinks)}>{t('signupPage.agreement.privacyPolicy')}</Link>
                    </Typography>
                </div>
                <Button className={classes.button}>{t('signupPage.button')}</Button>
                {!page && <Button onClick={onGoToLogin} size='large' type='text' style={{marginTop: '10px'}}
                        className={classes.plainButton}>{t('signupPage.login')}
                </Button>}
                {page &&
                    <Link to={'/login'}>
                        <Button onClick={onGoToLogin} size='large' type='text' style={{marginTop: '10px'}}
                                className={classes.plainButton}>{t('signupPage.login')}
                        </Button>
                    </Link>
                }
                <Divider type='horizontal' className={classes.divider}/>
                <Button onClick={() => {}} style={{fontSize: '16px', background: '#1877F2', color: '#FFFFFF'}}
                        className={classes.externalServicesButton}
                >
                    <img style={{transform: 'translateY(5px)', marginRight: '12px', width: '20px', height: '20px'}} src={'/pictures/logo_fb.png'} />
                    {t('signupPage.fb')}
                </Button>
                <Button onClick={() => {}} style={{fontSize: '16px', background: '#FFFFFF', color: '#000000'}}
                        className={classes.externalServicesButton}
                >
                    <img style={{transform: 'translateY(5px)', marginRight: '12px', width: '20px', height: '20px'}} src={'/pictures/logo_google.png'} />
                    {t('signupPage.google')}
                </Button>
                <Button onClick={() => {}} style={{fontSize: '16px', background: '#000000', color: '#FFFFFF'}}
                        className={classes.externalServicesButton}
                >
                    <img style={{transform: 'translateY(5px)', marginRight: '12px', width: '20px', height: '20px'}} src={'/pictures/logo_apple.png'} />
                    {t('signupPage.apple')}
                </Button>
            </div>
        </div>
    );
}

export default SignUp;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../shared/lib/i18n/config';

import classes from './ForgotPassword.module.scss';
import { Button, Checkbox, Divider, Input, Typography } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";

const { Text } = Typography;

type Props = {
    onCancel?: () => void;
    page?: boolean;
    onGoToLogin?: () => void;
}

export const ForgotPassword = ({onCancel, page, onGoToLogin}: Props) => {
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
                    <Text className={classes.modalHeadline}>{t('resetPasswordPage.headline')}</Text>
                </Typography>
                <Input className={classes.inputField} type={'email'} placeholder={t('signupPage.email')}
                       value={valueEmail} onChange={(e) => setValueEmail(e.target.value)}
                />
                <Input className={classes.inputField} type={'password'}
                       placeholder={t('resetPasswordPage.password')} style={{marginTop: '14px'}}
                       value={valuePassword} onChange={(e) => setValuePassword(e.target.value)}
                />
                <Input className={clsx(classes.inputSendCode, classes.inputField)} type={'text'}
                       placeholder={t('resetPasswordPage.verificationCode')} style={{marginTop: '14px'}}
                       value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}
                       suffix={<Button className={classes.sendCodeButton} onClick={handleSendCode}>{t('signupPage.sendCodeButton')}</Button>}
                />
                <Button className={classes.button}>{t('resetPasswordPage.button')}</Button>
                {!page &&
                    <Button onClick={onGoToLogin} size='large' type='text' style={{marginTop: '10px'}}
                        className={classes.plainButton}>{t('resetPasswordPage.backToLogin')}
                    </Button>}
                {page &&
                    <Link to={'/login'}>
                        <Button onClick={onGoToLogin} size='large' type='text' style={{marginTop: '10px'}}
                                className={classes.plainButton}>{t('resetPasswordPage.backToLogin')}
                        </Button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default ForgotPassword;

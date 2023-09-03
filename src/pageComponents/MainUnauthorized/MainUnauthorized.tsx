import React from 'react';
import { Typography, Button} from 'antd';
import classes from './MainUnauthorized.module.scss';
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../shared/lib/hooks/useMediaQuery";

const { Text } = Typography;

const IconCheckMark = () => {
    return <img width='13px' height='10px' src={'pictures/icon_checkmark.png'} alt={''}/>
}

const CheckMarkRow = ({text} : {text: string}) => {
    return (
        <div style={{display: 'flex', gap: '8px', alignItems: 'center', paddingTop: '8px', paddingBottom: '8px'}}>
            <IconCheckMark />
            <Typography>
                <Text style={{color: 'white', fontSize: '16px', fontWeight: 500}}>{text}</Text>
            </Typography>
        </div>
    )
}

export const MainUnauthorized = () => {
    const isDesktop = useMediaQuery('m', true);
    const { t } = useTranslation();
    return (
        <div className={classes.body}>
            <div className={classes.content}>
                <Typography className={classes.headlineWrapper} style={{marginBottom: '16px'}}>
                    <Text className={classes.headline} >{t('mainUnauthorized.headline')}</Text>
                </Typography>
                <div>
                    <CheckMarkRow text={t('mainUnauthorized.bulletedList.first')} />
                    <CheckMarkRow text={t('mainUnauthorized.bulletedList.second')} />
                    <CheckMarkRow text={t('mainUnauthorized.bulletedList.third')} />
                    <CheckMarkRow text={t('mainUnauthorized.bulletedList.forth')} />
                </div>
                <Button className={classes.button}>{t('mainUnauthorized.button')}</Button>
            </div>
            <div className={classes.imgColumn}>
                <img className={classes.phoneWithGirl} src={'pictures/phone_with_girl.png'} alt={''}/>
                {isDesktop ?
                    <img className={classes.arrow} src={'pictures/arrow.png'} alt={''}/> :
                    <img className={classes.arrowMobile} src={'pictures/arrow_mobile.png'}alt={''}/>
                }
                <img className={classes.faceAvatar} src={'pictures/girl_avatar.png'} alt={''}/>
                <img className={classes.backgroundFace} src={'pictures/background_face.png'} alt={''}/>
            </div>
        </div>
    );
}

export default MainUnauthorized;

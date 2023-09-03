import React from 'react';
import { Typography, Button} from 'antd';
import classes from './OurProducts.module.scss';
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../shared/lib/hooks/useMediaQuery";
import clsx from "clsx";

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

export const OurProducts = () => {
    const isDesktop = useMediaQuery('m', true);
    const { t } = useTranslation();
    return (
        <div className={classes.body}>
            {isDesktop && <Typography className={clsx(classes.headlineWrapper, classes.noWrap)} style={{marginBottom: '16px'}}>
                <Text className={classes.mainHeadline} >{t('ourProductsPage.headline')}</Text>
            </Typography>}
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <Typography className={classes.headlineWrapper} style={{marginBottom: '16px'}}>
                        <Text className={classes.headline} >{t('ourProductsPage.try')}</Text>
                    </Typography>
                    <div>
                        <CheckMarkRow text={t('ourProductsPage.bulletedList.first')} />
                        <CheckMarkRow text={t('ourProductsPage.bulletedList.second')} />
                        <CheckMarkRow text={t('ourProductsPage.bulletedList.third')} />
                        <CheckMarkRow text={t('ourProductsPage.bulletedList.forth')} />
                    </div>
                    <Button className={classes.button}>{t('ourProductsPage.button')}</Button>
                </div>
                <div className={classes.imgColumn}>
                    <div className={classes.backgroundFace}
                         style={{backgroundImage: isDesktop ?
                                 'url(pictures/background_face.png)' :
                                 'url(pictures/background_face_mob.png)'}}>
                    </div>
                </div>
            </div>
            <div className={classes.alsoAvailable}>
                <Typography className={classes.alsoAvailableHeadline} style={{marginBottom: '16px'}}>
                    <Text className={classes.headline} >{t('ourProductsPage.alsoAvailable')}</Text>
                </Typography>
                <div className={classes.alsoAvailableLinks}>
                    <img style={{width: '120px', borderRadius: '7px'}} className={classes.alsoAvailableImg} src='/pictures/link_app_store.png' alt={'Download on the App Store'}/>
                    <img style={{width: '135px', borderRadius: '5px'}} className={classes.alsoAvailableImg} src='/pictures/link_google_play.png' alt={'Get it on Google Play'}/>
                    <img style={{width: '158px', borderRadius: '7px'}} className={classes.alsoAvailableImg} src='/pictures/link_telegram_bot.png' alt={'Use Telegram Bot'}/>
                </div>
            </div>
        </div>
    );
}

export default OurProducts;

import React from 'react';
import { Typography, Button} from 'antd';
import classes from './Pricing.module.scss';
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import {PRICE_YEAR_OFF, PRICE_YEAR, PRICE_MONTH, PRICE_PER_MONTH} from "../../shared/lib/constants";
import useMediaQuery from "../../shared/lib/hooks/useMediaQuery";

const { Text } = Typography;

type IconProps = {
    toAlign?: boolean;
}

type CheckMarkRowProps = {
    text: string;
    cross?: boolean;
    toAlignIcon?: boolean;
}

const PackageHeadline = ({text} : {text: string}) => {
    return (
        <Typography className={classes.headlineWrapper} style={{marginBottom: '16px', textAlign: 'center'}}>
            <Text className={classes.headline} >{text}</Text>
        </Typography>
    )
}

const IconCheckMark = ({toAlign} : IconProps) => {
    return <img className={toAlign ? classes.toAlignIcon : classes.icon} height='10px' src={'pictures/icon_checkmark.png'} alt={'icon checkmark'}/>
}

const IconRedCross = ({toAlign} : IconProps) => {
    return <img className={toAlign ? classes.toAlignIcon : classes.icon} height='13px' src={'pictures/icon_red_cross.png'} alt={'red cross'}/>
}

const CheckMarkRow = ({text, cross, toAlignIcon} : CheckMarkRowProps) => {
    return (
        <div style={{display: 'flex', gap: '8px', alignItems: 'center', paddingTop: '2px', paddingBottom: '2px'}}>
            { cross ? <IconRedCross toAlign={toAlignIcon}/> : <IconCheckMark toAlign={toAlignIcon} />}
            <Typography>
                <Text style={{color: 'white', fontSize: '16px', fontWeight: 500}}>{text}</Text>
            </Typography>
        </div>
    )
}

type PriceRowProps = {
    month: string;
    year?: string;
    off?: string;
    type: string;
}

const PriceRow = ({month, year, off, type}: PriceRowProps) => {
    return (
        <div className={classes.priceRow}>
            <div>
                <Typography>
                    <Text className={classes.priceRowFirst} >{type==='year' ? '1 ' + year : '1 ' + month}</Text>
                </Typography>
                { type==='year' && <Typography>
                    <Text className={classes.priceRowSecond} >{PRICE_YEAR_OFF + ' ' + off}</Text>
                </Typography>}
            </div>
            <div>
                <Typography style={{textAlign: 'end'}}>
                    <Text className={classes.priceRowThird} >{type==='year' ? PRICE_YEAR : PRICE_MONTH}</Text>
                </Typography>
                { type==='year' && <Typography>
                    <Text className={classes.priceRowForth} >{PRICE_PER_MONTH + ' / ' + month}</Text>
                </Typography> }
            </div>
        </div>
    )
}

export const Pricing = () => {
    const isDesktop = useMediaQuery('m', true);
    const { t } = useTranslation();
    return (
        <div className={classes.body}>
            <Typography className={classes.headlineWrapper} style={{marginBottom: '16px'}}>
                <Text className={classes.headline} >{t('pricingPage.headline')}</Text>
            </Typography>
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <div>
                        <PackageHeadline text={t('pricingPage.free.headline')} />
                        <div>
                            <CheckMarkRow text={t('pricingPage.free.bulletedList.first')}/>
                            <CheckMarkRow text={t('pricingPage.free.bulletedList.second')} cross toAlignIcon/>
                            <CheckMarkRow text={t('pricingPage.free.bulletedList.third')} cross/>
                            <CheckMarkRow text={t('pricingPage.free.bulletedList.forth')} cross/>
                        </div>
                    </div>
                    <Button className={classes.button}>{t('pricingPage.free.button')}</Button>
                </div>
                <div className={classes.content}>
                    { isDesktop ?
                        <img className={classes.gradientFrame} src='/pictures/gradient_frame.png' alt={''}/> :
                        <img className={classes.gradientFrame} src='/pictures/gradient_frame_mob.png' alt={''}/>
                    }
                    <div>
                        <PackageHeadline text={t('pricingPage.premium.headline')} />
                        <div>
                            <CheckMarkRow text={t('pricingPage.premium.bulletedList.first')} toAlignIcon={!isDesktop}/>
                            <CheckMarkRow text={t('pricingPage.premium.bulletedList.second')} toAlignIcon/>
                            <CheckMarkRow text={t('pricingPage.premium.bulletedList.third')}/>
                            <CheckMarkRow text={t('pricingPage.premium.bulletedList.forth')}/>
                        </div>
                    </div>
                    <div style={{marginTop: '20px', width: '100%'}}>
                        <PriceRow
                            type='month'
                            month={t('pricingPage.premium.pricingOptions.month')}
                        />
                    </div>
                    <div style={{marginTop: '10px', width: '100%'}}>
                        <PriceRow
                            type='year'
                            month={t('pricingPage.premium.pricingOptions.month')}
                            year={t('pricingPage.premium.pricingOptions.year')}
                            off={t('pricingPage.premium.pricingOptions.off')}
                        />
                    </div>
                    <Button className={clsx(classes.button, classes.yellowBackground)}>{t('pricingPage.premium.button')}</Button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;

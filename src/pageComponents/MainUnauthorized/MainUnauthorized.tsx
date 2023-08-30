import React, {useEffect, useState} from 'react';
import { Pagination, Input, Spin, Typography } from 'antd';
import { API_URL} from "../../shared/lib/constants";
import PersonCard from "../../features/PersonCard/PersonCard";
import classes from './MainUnauthorized.module.scss';
import { Content } from "antd/lib/layout/layout";
import { useFetchPeople } from "../../shared/lib/hooks/useFetch";
import { Person } from "../../shared/lib/types/Person";
import { getPersonId, mapData } from "../../shared/lib/utils/allUtils";
import { useUnit } from "effector-react";
import { $allData, $peopleData, addDataEvent, fetchPeopleDataFx } from "../../shared/api/model";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

export const MainUnauthorized = () => {
    const { t } = useTranslation();

    const { allData, peopleData, addData, fetchPeopleData } = useUnit({
        allData: $allData,
        peopleData: $peopleData,
        addData: addDataEvent,
        fetchPeopleData: fetchPeopleDataFx
    });

    const [searchValue, setSearchValue] = useState<string>("");
    const [paginationValue, setPaginationValue] = useState<number>(1);
    const [fetchUrl, setFetchUrl] = useState<string>(`${API_URL}/people/?page=1`);
    const { fetchData, error, isLoading, dataCount } = useFetchPeople(fetchUrl);
    const [data, setData] = useState<Person[]>()

    fetchPeopleData(`${API_URL}/people/?page=1`)

    useEffect(()=> {
        if ( fetchData ) {
            addData( fetchData );
            setData( mapData( fetchData, allData ) );
        }
    },[ fetchData ])

    useEffect(()=> {
        console.log(peopleData)
    })

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onSearch = (value: string) => {
        setPaginationValue(1);
        setFetchUrl(`${API_URL}/people/?search=${value}&page=1`);
    };

    const handlePaginationClick = (value: number) => {
        setPaginationValue(value);
        setFetchUrl(`${API_URL}/people/?search=${searchValue}&page=${value}`);
    }

    return (
        <Content className={classes.body}>
            <Content className={classes.content}>
                <Content style={{padding: '72px', width: '380px'}}>
                    <Typography>
                        <Title level={2} style={{margin: 0, color: 'white', fontSize: '44px', fontWeight: '700'}}>{t('mainUnauthorized.headline')}</Title>
                    </Typography>
                </Content>

            </Content>
        </Content>
    );
}

export default MainUnauthorized;

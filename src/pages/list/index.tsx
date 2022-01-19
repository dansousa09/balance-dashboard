import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listOfMonths from '../../utils/months';

import * as C from "./styles";
import formatDate from "../../utils/formatDate";
import formatCurrency from "../../utils/formatCurrency"; 

import { IData, IRouteParams } from "./interfaces";


const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState<string[]>(['recorrente', 'eventual'])


  const balanceType = match.params.type;

  const balanceParams = useMemo(() => {
    return balanceType === "entry-balance"
      ? { title: "Entradas", lineColor: "#E44c4e", repo: gains }
      : { title: "Saídas", lineColor: "#4e41f0", repo: expenses };
  }, [balanceType]);

  const { repo } = balanceParams;

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    repo.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year
      }
    })

  }, [repo])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(item => item !== frequency);
      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  }

  const handleSelectedDate = {
    month: (month: string) => {
      try {
        const parsedMonth = +month;
        setMonthSelected(parsedMonth);
      } catch (error) {
        console.log(error);
      }
    },
    year: (year: string) => {
      try {
        const parsedYear = +year;
        setYearSelected(parsedYear);
      } catch (error) {
        console.log(error);
      }
    }
  }


  useEffect(() => {
    const filteredResponse = repo.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear()

      return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
    })

    const formattedData = filteredResponse.map((item) => {
      return {
        id: uuid(),
        description: item.description,
        formattedAmount: formatCurrency(item.amount),
        type: item.type,
        frequency: item.frequency,
        formattedDate: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });

    setData(formattedData);
  }, [repo, monthSelected, yearSelected, frequencyFilterSelected]);

  return (
    <C.Container>
      <ContentHeader
        title={balanceParams.title}
        lineColor={balanceParams.lineColor}
      >
        <SelectInput options={months} onChange={(event) => handleSelectedDate.month(event.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={(event) => handleSelectedDate.year(event.target.value)} defaultValue={yearSelected} />
      </ContentHeader>
      <C.Filters>
        <button type="button"
          className={`tag-filter tag-filter-recurrent ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recorrente')}>
          Recorrentes
        </button>
        <button type="button"
          className={`tag-filter tag-filter-eventual ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}>
          Eventuais
        </button>
      </C.Filters>
      <C.Content>
        {data.map((item) => {
          return (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.formattedDate}
              amount={item.formattedAmount}
            />
          );
        })}
      </C.Content>
    </C.Container>
  );
};

export default List;

import React, { useMemo, useState } from "react";
import * as C from "./styles";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from '../../utils/months';
import MessageBox from "../../components/MessageBox";

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import currentDate from "../../utils/currentDate";


const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())


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

    [...expenses, ...gains].forEach((item) => {
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

  }, [])

  const balance = {
    totalGains: useMemo(() => {
      let total: number = 0;

      gains.forEach((item) => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        if (month === monthSelected && year === yearSelected) {
          try {
            total += +item.amount;
          } catch (error) {
            console.log(error)
          }
        }
      })
      return total;

    }, [monthSelected, yearSelected]),

    totalExpenses: useMemo(() => {
      let total: number = 0;

      expenses.forEach((item) => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (month === monthSelected && year === yearSelected) {
          try {
            total += +item.amount;
          } catch (error) {
            console.log(error)
          }
        }
      })
      return total;
    }, [monthSelected, yearSelected]),
  }

  const totalBalance = balance.totalGains - balance.totalExpenses;

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

  return (
    <C.Container>

      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={months} onChange={(event) => handleSelectedDate.month(event.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={(event) => handleSelectedDate.year(event.target.value)} defaultValue={yearSelected} />
      </ContentHeader>

      <C.Content>
        <WalletBox title="saldo" amount={totalBalance} footerLabel="Atualizado com base nas entradas e saídas" icon="dolar" color="#4e41f0" />
        <WalletBox title="entradas" amount={balance.totalGains} footerLabel={`Última atualização em ${currentDate()}`} icon="arrowUp" color="#f7931b" />
        <WalletBox title="saídas" amount={balance.totalExpenses} footerLabel={`Última atualização em ${currentDate()}`} icon="arrowDown" color="#e44c4e" />
      </C.Content>
      {totalBalance > 0 ? (
        <MessageBox title="Muito Bem !" description="Sua carteira está positiva" footerText="Continue assim e considere investir o seu saldo" icon={happyImg} />
      ) : (
        <MessageBox title="Que pena" description="Sua carteira está negativa" footerText="Tente equilibrar suas contas antes de considerar novos gastos" icon={sadImg} />
      )}

    </C.Container>
  );
};

export default Dashboard;

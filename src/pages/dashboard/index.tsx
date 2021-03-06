import React, { useCallback, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import * as C from "./styles";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieGraphic from "../../components/PieGraphic";
import HistoryBox from "../../components/HistoryBox";
import BarGraphic from "../../components/BarGraphic";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

import currentDate from "../../utils/currentDate";
import listOfMonths from '../../utils/months';


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

  const totalBalance = useMemo(() => {
    return balance.totalGains - balance.totalExpenses;
  }, [balance.totalExpenses, balance.totalGains])

  const message = useMemo(() => {
    if (totalBalance > 0) {
      return {
        title: "Muito Bem !",
        description: "Sua carteira est?? positiva",
        footerText: "Continue assim e considere investir o seu saldo",
        icon: happyImg
      }
    } else if (totalBalance === 0 && balance.totalGains !== 0 && balance.totalExpenses !== 0) {
      return {
        title: "Por pouco !",
        description: "Voc?? gastou exatamente o que ganhou",
        footerText: "Tente equilibrar suas contas antes de considerar novos gastos",
        icon: sadImg
      }
    } else if (balance.totalGains === 0 && balance.totalExpenses === 0 && totalBalance === 0) {
      return {
        title: "Ops!",
        description: "Ainda sem registros...",
        footerText: "Adicione os registros de ganhos e/ou despesas a serem calculados",
      }
    } else {
      return {
        title: "Que pena",
        description: "Sua carteira est?? negativa",
        footerText: "Tente equilibrar suas contas antes de considerar novos gastos",
        icon: sadImg
      }
    }
  }, [balance.totalExpenses, balance.totalGains, totalBalance])

  const relationExpensesVsGains = useMemo(() => {
    const total = balance.totalGains + balance.totalExpenses

    const gainsPercentual = Number(((balance.totalGains / total) * 100).toFixed(1));
    const expensesPercentual = Number(((balance.totalExpenses / total) * 100).toFixed(1));
    const data = [
      {
        id: uuid(),
        name: "Entradas",
        value: balance.totalGains,
        percent: gainsPercentual,
        color: '#e44c4e'
      },
      {
        id: uuid(),
        name: "Sa??das",
        value: balance.totalExpenses,
        percent: expensesPercentual,
        color: '#f7931b'
      },
    ]
    return data;


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalBalance])

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, index) => {

        let amountEntry = 0;
        gains.forEach((item) => {
          const date = new Date(item.date);
          const month = date.getMonth();
          const year = date.getFullYear();

          if (month === index && year === yearSelected) {
            try {
              amountEntry += +item.amount
            } catch (error) {
              console.log(error)
            }
          }
        });
        let amountOutput = 0;
        expenses.forEach((item) => {
          const date = new Date(item.date);
          const month = date.getMonth();
          const year = date.getFullYear();

          if (month === index && year === yearSelected) {
            try {
              amountOutput += +item.amount
            } catch (error) {
              console.log(error)
            }
          }
        });

        return {
          monthNumber: index,
          month: listOfMonths[index].substring(0, 3),
          amountEntry: +amountEntry,
          amountOutput: +amountOutput
        }

      })
      .filter(item => {
        const currentMonth = new Date('2022-11-01').getMonth(); //Mostrando at?? outubro apenas
        const currentYear = new Date().getFullYear();

        return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
      })
  }, [yearSelected])

  const relationExpensesRecurrentVsEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter(expense => {
        const date = new Date(expense.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear()

        return month === monthSelected && year === yearSelected;
      })
      .forEach(expense => {
        if (expense.frequency === 'recorrente') {
          return amountRecurrent += +expense.amount;
        } else {
          return amountEventual += +expense.amount;

        }
      });

    const total = amountRecurrent + amountEventual;

    return [
      {
        id: uuid(),
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: +((amountRecurrent / total) * 100).toFixed(1),
        color: "#f7931b"
      },
      {
        id: uuid(),
        name: 'Eventuais',
        amount: amountEventual,
        percent: +((amountEventual / total) * 100).toFixed(1),
        color: "#e44c4e"
      }
    ]

  }, [monthSelected, yearSelected])

  const relationGainsRecurrentVsEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter(gain => {
        const date = new Date(gain.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear()

        return month === monthSelected && year === yearSelected;
      })
      .forEach(gain => {
        if (gain.frequency === 'recorrente') {
          return amountRecurrent += +gain.amount;
        } else {
          return amountEventual += +gain.amount;

        }
      });

    const total = amountRecurrent + amountEventual;

    return [
      {
        id: uuid(),
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: +((amountRecurrent / total) * 100).toFixed(1),
        color: "#f7931b"
      },
      {
        id: uuid(),
        name: 'Eventuais',
        amount: amountEventual,
        percent: +((amountEventual / total) * 100).toFixed(1),
        color: "#e44c4e"
      }
    ]

  }, [monthSelected, yearSelected])

  const handleSelectedDate = {
    month: useCallback((month: string) => {
      try {
        const parsedMonth = +month;
        setMonthSelected(parsedMonth);
      } catch (error) {
        console.log(error);
      }
    }, []),
    year: useCallback((year: string) => {
      try {
        const parsedYear = +year;
        setYearSelected(parsedYear);
      } catch (error) {
        console.log(error);
      }
    }, [])
  }

  return (
    <C.Container>

      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={months} onChange={(event) => handleSelectedDate.month(event.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={(event) => handleSelectedDate.year(event.target.value)} defaultValue={yearSelected} />
      </ContentHeader>

      <C.Content>
        <WalletBox title="saldo" amount={totalBalance} footerLabel="Atualizado com base nas entradas e sa??das" icon="dolar" color="#4e41f0" />
        <WalletBox title="entradas" amount={balance.totalGains} footerLabel={`??ltima atualiza????o em ${currentDate()}`} icon="arrowUp" color="#f7931b" />
        <WalletBox title="sa??das" amount={balance.totalExpenses} footerLabel={`??ltima atualiza????o em ${currentDate()}`} icon="arrowDown" color="#e44c4e" />
        <MessageBox title={message.title} description={message.description} footerText={message.footerText} icon={message.icon} />
        <PieGraphic data={relationExpensesVsGains} />
        <HistoryBox data={historyData} lineColorEntry="#f7931b" lineColorOutput="#e44c4e" />
        <BarGraphic data={relationGainsRecurrentVsEventual} title="Entradas" />
        <BarGraphic data={relationExpensesRecurrentVsEventual} title="Sa??das" />
      </C.Content>
    </C.Container>
  );
};

export default Dashboard;

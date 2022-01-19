import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const SignIn: React.FC = () => {
  const options = [
    {
      value: "Ana",
      label: "Ana",
    },
    {
      value: "Rodrigo",
      label: "Rodrigo",
    },
    {
      value: "Joaquina",
      label: "Joaquina",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#E44c4e">
        <SelectInput options={options} onChange={() => console.log('Aqui')} />
      </ContentHeader>
    </Container>
  );
};

export default SignIn;


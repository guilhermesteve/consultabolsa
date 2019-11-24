import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

import {
  Title,
  Container,
  Button,
  ContextCenter,
  Form,
  ListItem
} from "../../styles";
import useForm from "./../../hooks/useForm";
import { toast } from "react-toastify";
import CompanyService from "./../../service/companyService";

function Home() {
  const [data, setData] = useState({});
  const [schema, setSchema] = useState({});
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setData({ search: "" });
    setSchema({
      search: Joi.string()
        .required()
        .label("pesquisa")
    });
  }, []);

  const [{ values, errors }, handleChange, handleSubmit] = useForm(
    data,
    schema
  );

  const handleCompanies = async () => {
    const resp = await CompanyService.getCompanies(values.search);
    setCompanies([...resp]);

    console.log(companies);
  };

  const doSubmit = () => {
    //call Api companies
    console.log("companie", values);

    handleCompanies();
  };
  return (
    <div>
      <Container>
        <Title> Pesquisar Empresas</Title>
        <ContextCenter>
          <Form onSubmit={handleSubmit(doSubmit)}>
            <input
              onChange={handleChange}
              type="text"
              name="search"
              placeholder="Ex.: Microsoft"
            />
            <Button primary type="submit">
              {"Pesquisar"}
            </Button>
          </Form>
          <div style={{ display: "none" }}>
            {errors["search"] ? toast.error(errors["search"]) : ""}
          </div>
        </ContextCenter>
      </Container>
      <ListItem>
        {companies.map(company => (
          <article key={company["1. symbol"]}>
            <strong>{company["2. name"]}</strong>
            <p>{`País: ${company["4. region"]}
               Abertura: ${company["5. marketOpen"]}
               Fechamento: ${company["6. marketClose"]}
               Moeda: ${company["8. currency"]}`}</p>

            <Link to={`/company/${company["1. symbol"]}`}>Acessar</Link>
          </article>
        ))}
      </ListItem>
    </div>
  );
}

export default Home;

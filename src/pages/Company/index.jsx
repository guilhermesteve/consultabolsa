import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
  Title,
  Container,
  Button,
  ContextCenter,
  Form,
  ListItem,
  TitleSub
} from "../../styles";
import useForm from "./../../hooks/useForm";
import { toast } from "react-toastify";
import CompanyService from "./../../service/companyService";

function Company({ id }) {
  const { id: CompanyId } = useParams();

  const [data, setData] = useState({});

  const [cards, setCards] = useState([]);

  useEffect(async () => {
    setData({ datinit: new Date(), datend: new Date() });
    const resp = await CompanyService.getCards(CompanyId);

    setCards(Object.entries(resp));
    localStorage.setItem(
      "@consultabolsa/cards",
      JSON.stringify(Object.entries(resp))
    );
  }, []);

  useEffect(() => {
    setData({ datinit: new Date(), datend: new Date() });
  }, []);

  useEffect(() => {
    let auxCards = [];
    auxCards = JSON.parse(localStorage.getItem("@consultabolsa/cards"));
    const { datinit, datend } = data;

    if (datinit) {
      const inicio = `${datinit.getFullYear()}/${datinit.getMonth() +
        1}/${datinit.getDate()}`;
      const fim = `${datend.getFullYear()}/${datend.getMonth() +
        1}/${datend.getDate() + 1}`;

      console.log("inicio", inicio);
      console.log("fim", fim);

      const cards = auxCards.filter(card => CompareDate(card[0], inicio, fim));

      setCards(cards);
    }
  }, [data]);

  const CompareDate = (date, init, end) => {
    const d = new Date(date);
    const i = new Date(init);
    const e = new Date(end);

    if (d > i && d < e) return true;

    return false;
  };

  const handleData = date => {
    console.log(date);
    const d = new Date(date);
    console.log(d.getDay());

    const dataformat = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} `;
    return dataformat;
  };

  const handleChange = (e, event) => {
    switch (event) {
      case "init":
        setData({ ...data, datinit: e });
        break;
      case "end":
        setData({ ...data, datend: e });
        break;
      default:
    }
  };

  return (
    <div>
      <Container>
        <Title> Empresa : {CompanyId}</Title>

        <ContextCenter>
          <Form>
            <TitleSub>Data inicial:</TitleSub>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              name="datinit"
              selected={data.datinit}
              onChange={e => handleChange(e, "init")}
            />
            <TitleSub>Data Final:</TitleSub>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              name="datend"
              selected={data.datend}
              onChange={e => handleChange(e, "end")}
            />
          </Form>
        </ContextCenter>
      </Container>
      <ListItem>
        {cards.map(card => (
          <article key={card[0]}>
            <strong>{handleData(card[0])}</strong>
            <p>{`
               Abertura: ${card[1]["1. open"]}
               Fechamento: ${card[1]["4. close"]}
               High: ${card[1]["2. high"]}
               Low: ${card[1]["3. low"]}
               Ações Transacionadas ${card[1]["5. volume"]} `}</p>

            <Link to={`/company/graph/${CompanyId}`}>Gráfico</Link>
          </article>
        ))}
      </ListItem>
    </div>
  );
}

export default Company;

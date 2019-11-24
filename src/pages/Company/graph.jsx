import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chart } from "react-charts";

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

function Graph({ id }) {
  const { id: CompanyId } = useParams();

  const [dados, setDados] = useState({});

  const [c, setC] = useState([]);

  useEffect(async () => {
    const resp = await CompanyService.getGraph(CompanyId);

    console.log(Object.entries(resp));

    setDados(Object.entries(resp));

    const chart = { label: "variação High", data: [] };

    Object.entries(resp).map(d => {
      chart.data.push({
        x: new Date(d[0]),
        //   d[0].split(" ")[1].split(":")[0] +
        //   "." +
        //   d[0].split(" ")[1].split(":")[1],
        y: d[1]["2. high"]
      });
    });
    console.log(chart);
    setC(chart);
  }, []);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );

  return (
    <div>
      <Container>
        <Title> Empresa : {CompanyId}</Title>

        <ContextCenter></ContextCenter>
      </Container>

      <div
        style={{
          width: "1000px",
          height: "300px",
          padding: "14px"
        }}
      >
        <Chart data={[c]} axes={axes} />
      </div>
    </div>
  );
}

export default Graph;

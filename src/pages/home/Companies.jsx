import React, { useState, useEffect } from "react";

export default function Companies(Companies) {
  return (
    Array.isArray(Companies) &&
    Companies.map(company => (
      <article key={company.symbol}>
        <strong>{company.name}</strong>
        <p>{`País: ${company.region}
               Abertura: ${company.marketOpen}
               Fechamento: ${company.marketClose}
               Moeda: ${company.currency}`}</p>

        <a to={`/companie/${company.symbol}`}>Acessar</a>
      </article>
    ))
  );
}

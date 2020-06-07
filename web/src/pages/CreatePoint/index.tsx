import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import "./styles.css";

const CreatePonint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>

      <form>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="field">
              <label htmlFor="name">Whatsapp</label>
              <input type="text" name="Whatsapp" id="Whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma Cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
        </fieldset>

        <ul className="items-grid">
          <li>
            <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            <span>Oleo de cozinha</span>
          </li>

          <li>
            <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            <span>Oleo de cozinha</span>
          </li>
          <li>
            <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            <span>Oleo de cozinha</span>
          </li>
          <li>
            <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            <span>Oleo de cozinha</span>
          </li>
          <li>
            <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            <span>Oleo de cozinha</span>
          </li>
          <li>
            <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            <span>Oleo de cozinha</span>
          </li>
        </ul>

        <button type="submit">
          Cadastrar ponto de coleta
        </button>
      </form>
    </div>
  );
};

export default CreatePonint;

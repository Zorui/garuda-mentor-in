import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';

import NavBarIconButton from './NavBarIconButton';
import { UserContext } from '../context/UserContext';

export function Top({ children }) {
  let [logState, setLogState] = useContext(UserContext);
  console.log("nav context",logState);

  return (
    <>
      <div className={styles.navbar}>
        <NavLink to="/" className={styles.navbar_brand}>
          <img src="/raw/logo.png" className={styles.brand}></img>
          <div className={styles.brand_desc}>
            <p className={styles.desch1}>
              MENTOR<span className={styles.desch2}>.IN</span>
            </p>
            <p className={styles.desc}>Mentor Indonesia</p>
          </div>
        </NavLink>

        <input
          placeholder="Search Class"
          className={styles.input}
          type="text"
        ></input>
        <button className={styles.search_button}>
          <img src="/raw/search.svg" width="22px" height="22px"></img>
        </button>

        <div className={styles.navbar_container}>
          <NavLink to="/" className={styles.navbar_container_items}>
            Home
          </NavLink>
          <NavLink
            to="/joincommunity"
            className={styles.navbar_container_items}
          >
            Join Community
          </NavLink>
          <NavLink to="/partners" className={styles.navbar_container_items}>
            Partners
          </NavLink>
          {logState ? (
            <>
              <NavLink to="/createclass" className={styles.navbar_create_class}>
                + Create Class
              </NavLink>
              <NavBarIconButton />
            </>
          ) : (
            <button
              className={styles.logButton}
              onClick={() => setLogState(true)}
            >
              Login/Register
            </button>
          )}
        </div>
      </div>
      {children}
    </>
  );
}

const styles = {
  navbar_container_items: css`
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    transition: filter 300ms;
    &:hover {
      text-decoration: none;
      color: white;
      filter: brightness(1.2);
    }
  `,
  navbar_create_class: css`
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    transition: filter 300ms;
    background-color: lightgray;
    padding: 0.5rem;
    border-radius: 5px;
    &:hover {
      text-decoration: none;
      color: white;
      filter: brightness(1.2);
    }
  `,
  navbar: css`
    background-color: #c85051;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    margin: 0;
    padding: 0 3rem 0 5rem;
    width: 100%;
    height: 4rem;
    z-index: 1024;
    @media (max-width: 960px) {
      justify-content: space-between;
    }
  `,
  navbar_brand: css`
    height: 70%;
    max-width: 20%;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    &:hover {
      text-decoration: none;
    }
  `,
  brand: css`
    height: 100%;
  `,
  brand_desc: css`
    margin: 0 0 0 10px;
  `,
  desc: css`
    margin: 0;
    color: white;
    font-size: 0.8rem;
  `,
  desch1: css`
    margin: 0;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
  `,
  desch2: css`
    margin: 0;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  `,
  navbar_container: css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 1rem;
    flex: 1 0 auto;
    @media (max-width: 960px) {
      display: none;
    }
  `,
  input: css`
    border: none;
    max-width: 12rem;
    flex: 1 0 auto;
    padding: 1rem;
    height: 60%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    &:focus {
      outline: none;
    }
    @media (max-width: 960px) {
      display: none;
    }
  `,
  search_button: css`
    border: none;
    height: 60%;
    min-width: 2.5rem;
    flex: 0 0 auto;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: white;
    &:focus {
      outline: none;
    }
    @media (max-width: 960px) {
      display: none;
    }
  `,
  logButton: css`
    border: none;
    border-radius: 12px;
    transition: filter 300ms;
    padding: 0.3rem 0.6rem;
    &:hover {
      background-color: white;
      color: black;
      filter: brightness(1.2);
    }
    &:focus {
      outline: none;
    }
  `
};

export default { Top };

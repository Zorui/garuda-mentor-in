import React, { useState, useContext } from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavBarDropdown = () => {
  let [logState, setLogState] = useContext(UserContext);

  return (
    <div className={styles.dropdown}>
      <NavLink to="/profile/" className={styles.dropdown_items}>
        Profile
      </NavLink>
      <NavLink to="/myclass" className={styles.dropdown_items}>
        My Class
      </NavLink>
      <NavLink
        to="/"
        onClick={() => setLogState(false)}
        className={styles.dropdown_items}
      >
        Logout
      </NavLink>
    </div>
  );
};

const NavBarIconButton = () => {
  let [open, setOpen] = useState(false);

  const clickHandle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <button className={styles.icon} onClick={clickHandle}></button>
      {open && <NavBarDropdown openstate={setOpen} />}
    </div>
  );
};

const styles = {
  container: css`
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    position: relative;
  `,
  icon: css`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-image: url('/raw/user.svg');
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: cover;
    border: none;
    transition: filter 300ms;
    &:hover {
      filter: brightness(1.2);
    }
    &:focus {
      outline: none;
    }
  `,
  dropdown: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: 0 6px 5px 1px rgba(0,0,0,0.5);
    align-items: center;
    position: absolute;
    top: 3rem;
    right: 0rem;
    width: 6rem;
    height: 7rem;
    padding: 1rem;
    background-color: white;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  `,
  dropdown_items: css`
    width: 100%;
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: black;
    &:hover{
      text-decoration: none;
    }
  `,
};

export default NavBarIconButton;

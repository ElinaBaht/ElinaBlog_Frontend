import React from 'react'
import { Link } from 'react-router-dom';

import styles from "./Header.module.scss"
import Container from "@mui/material/Container"
import Button from '@mui/material/Button';

const Header = () => {

  const isAuth = false;
  const onClickLogot = () => {}

  return (
    <div className={styles.root}>
        <Container maxWidth="lg">
            <div className={styles.inner}>
                <Link className={styles.logo} to="/">
                    Elina Blog
                </Link>
                <div className={styles.buttons}>
                    {isAuth ? (
                        <>
                        <Link to="/posts/create">
                            <Button variant='contained'>Ceate post</Button>
                        </Link>
                        <Button onClick={onClickLogot} variant='contained'>
                            Log out
                        </Button>
                        </>
                    ) : (
                        <>
                        <Link to="/login">
                            <Button variant='contained'>Log in</Button>
                        </Link>
                        <Link to="/register">
                            <Button variant='contained'>Create an account</Button>
                        </Link>
                        </>
                    )}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header
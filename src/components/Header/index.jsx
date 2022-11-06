import React from 'react'

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
                <a className={styles.logo} href="">
                    Elina Blog
                </a>
                <div className={styles.buttons}>
                    {isAuth ? (
                        <>
                        <a href="">
                            <Button variant='contained'>Ceate post</Button>
                        </a>
                        <Button onClick={onClickLogot} variant='contained'>
                            Log out
                        </Button>
                        </>
                    ) : (
                        <>
                        <a href="">
                            <Button variant='contained'>Log in</Button>
                        </a>
                        <a href="">
                            <Button variant='contained'>Create an account</Button>
                        </a>
                        </>
                    )}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header
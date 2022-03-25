import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavbarClient.module.scss'
import { BsPencilSquare } from 'react-icons/bs'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import Everylogopf from '../../../Assets/Images/Everylogopf.png'
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        height: '450px',
        width: '600px',
        borderRadius: '5px',
        backgroundColor: 'white',
        border: '2px solid #23263b',
        boxShadow: theme.shadows[5],
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }
}))

export const NavbarClient = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const [modal,setModal]=useState(false)

    const Home = () => {
        navigate('/')
    }

    const body = (
        <div className={classes.modal}>
            Adrian cabezon
        </div>
    )
    const openCloseModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <div className={styles.containerInfo1}>
                <div className={styles.homeImg}>
                    <img src={Everylogopf} alt="img" width="150px" height="100px" onClick={Home} />
                </div>
                <div className={styles.homeFLC}>
                    <BsPencilSquare className={styles.btn} onClick={() => openCloseModal()}/>
                    <RiLogoutBoxRLine className={styles.btn} />
                </div>
            </div>
            <Modal open={modal} onClose={openCloseModal}>
                {body}
            </Modal>
        </>
    )
}

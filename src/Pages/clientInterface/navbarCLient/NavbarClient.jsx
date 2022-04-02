import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NavbarClient.module.scss'
import Everylogopf from '../../../Assets/Images/Everylogopf.png'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../Redux/Actions/userActions';
import { Menu, MenuItem, Modal, IconButton } from '@material-ui/core';
import EditUser from '../editUser/EditUser'
import Fade from '@material-ui/core/Fade';
import { ImHome } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { FiLogOut } from 'react-icons/fi'
import { FaPencilAlt, FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { addProductToCartDb, removeProductToCartDb, removeToLocalStorageIds } from '../../../Utils/shoppingBag'

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        height: '400px',
        width: '600px',
        borderRadius: '5px',
        backgroundColor: '#23263B',
        border: '2px solid #23263b',
        boxShadow: theme.shadows[5],
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    container: {
        display: 'flex',
        // flexDirection:'row',
        justifyContent: 'space-between',
        width: '100vw',
        alignItems: 'center',
        cursor: 'pointer',
    },
    title: {
        height: '30px',
        padding: '20px',
        fontFamily: 'ABeeZee',
        fontSize: '16px'
    },
    menuItem: {
        color: '#23263B',
        fontFamily: 'ABeeZee',
        fontSize: '15px',
        '&:hover': {
            color: 'white',
            backgroundColor: '#23263B'
        }
    },
    emoticon: {
        fontSize: '20px',
        color: '#23263B',
    }

}))

export const NavbarClient = ({ user, setUser }) => {


    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const open = Boolean(anchorEl);
    const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
    const userId = useSelector((store) => store.userReducer.currentUser);

    const body = (
        <div className={classes.modal}>
            <EditUser user={user} setUser={setUser} setModal={setModal}/>
        </div>
    )
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const openCloseModal = () => {
        setModal(!modal)
    }
    const logout=()=>{
        let userId=user.id
        console.log(userId)
        if(bagProducts.length)
        addProductToCartDb(userId, bagProducts);
        else removeProductToCartDb("all",userId.userId)
        
        removeToLocalStorageIds()
        dispatch(logoutUser());
        navigate('/');
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className={styles.containerInfo1}>
                <div className={classes.container}>
                    <button onClick={handleClick} className={styles.btn}><HiMenu className={classes.emoticon} /></button>
                    <img src={Everylogopf} alt="img" width="150px" height="100px" onClick={() => navigate('/products/all')} />
                </div>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <h2 className={classes.title}><FaUserCircle className={classes.emoticon} />  {user.name} {user.lastName}</h2>

                    <Link to='/products/all'><MenuItem className={classes.menuItem}> <ImHome className={classes.emoticon} /> Home</MenuItem></Link>

                    <MenuItem className={classes.menuItem} onClick={() => openCloseModal()}> <FaPencilAlt className={classes.emoticon} /> Edit my profile</MenuItem>

                    <MenuItem className={classes.menuItem} onClick={logout}><FiLogOut className={classes.emoticon} /> Logout</MenuItem>

                    <h2 className={classes.title}>Social media</h2>

                    <a href="https://github.com/E-commerce-pf" target="_blank"><MenuItem className={classes.menuItem}> <IoLogoGithub className={classes.emoticon} /> Git-Hub</MenuItem></a>

                    <a href='https://respaldo-everyones-store.vercel.app/ ' target="_blank"><MenuItem className={classes.menuItem}> <IoLogoVercel className={classes.emoticon} /> Link deploy</MenuItem></a>
                </Menu>
            </div>
            <Modal open={modal} onClose={openCloseModal}>
                {body}
            </Modal>
        </>
    )
}

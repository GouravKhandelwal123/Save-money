import React from 'react'
import './home-styles.css'
import moneyTransfer from '../../assets/image/moneyTransfer.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="image-container">
                <img src={moneyTransfer} alt="" />
            </div>
            <div className="button-container">
                <div className='heading'>Online Money Transfer Anywhere Anytime</div>
                <div className='sub-heading'>helping you Make Smart Financially</div>
                <NavLink type="button" exact to='/accounts' className="mt-10 btn btn-primary">Accounts</NavLink>
                <NavLink type="button" exact to='/transactions' className="mt-10 mx-3 btn btn-primary">Transactions</NavLink>
                <NavLink type="button" exact to='/transfer' className="mt-10 btn btn-primary">Transfer Money</NavLink>
                {/* <button className='accounts-btn'>accounts</button>
                <button className='transaction-btn'>Transaction</button>
                <button className='transfer-btn'>Transfer Money</button> */}
            </div>
        </div>
    )
}

export default Home
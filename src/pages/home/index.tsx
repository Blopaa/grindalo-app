import React, { useContext } from 'react'
import NavlinkAtom from '../../components/atoms/navlink'
import { AuthContext } from '../../contexts'

const HomePage: React.FC<any> = (props) => {

    return (
        <div>
            Home
            <NavlinkAtom href="/home" {...props}>home</NavlinkAtom>
            <NavlinkAtom href="/about" {...props}>about</NavlinkAtom>
        </div>
    )
}

export default HomePage

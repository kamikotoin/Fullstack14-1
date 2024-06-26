/* eslint-disable react/prop-types */

import Eth from "../../../assets/icons/Etherium.png"

function User(props) {
    // const props = {
    //   name: "Perperzon",
    //   number: 1
    //   balance: 9.421,
    //   picture: Person1
    // }
    const style ={
        // background: URL(`{props.picture}`),
    }
    return (
        <div className="user-l">
        <div className="pfp" style={{backgroundImage: `url(${props.picture})`}}>
        <span className="number">#{props.number}</span>
            {/* <img className="picture" src={props.picture} alt="Picture" /> */}
        </div>
            <div className="info">
                <h3>{props.name}</h3>
                <p className="crypto-balance">
                    <img src={Eth} alt="Eth" width={12} height={20} />
                    {props.balance}
                </p>
            </div>
        </div>
    )
}

export default User;
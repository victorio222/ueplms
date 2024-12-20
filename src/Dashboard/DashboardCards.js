import React from "react";
import { card } from "../Constants/Const";

const Cards = () => {
    return (
        <div className="card grid grid-cols-3 gap-4">
            {card.map((cardItem) => (
                <div>
                    <div className="card-item bg-white px-10 pb-4 pt-3 shadow relative overflow-hidden">
                        <div className='circle'>
                            <span className={cardItem.icon}></span>
                        </div>
                        <h4 className="text-xs font-medium text-blue-600 text-right">{cardItem.cardName}</h4>
                        <p className='font-medium text-right text-4xl'>{cardItem.total}</p>
                        <div className='flex items-center font-medium pt-3'>
                            <div className={cardItem.icon} id='sub-icon'>
                            </div>
                            <p className="pl-2 text-xs text-left text-gray-600">{cardItem.info}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;
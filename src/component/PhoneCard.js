import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const PhoneCard = ({data}) => {

  return (
      <div className={"phoneCard"}>
          <div className={"icon-img"} style={{
              backgroundImage : `url(${data.image})` ,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'}}> </div>
          <span>이름 : {data.name}</span>
          <div className={"hovering-number"}><span>전화번호 : {data.number}</span></div>
      </div>
  );
}

export default PhoneCard;
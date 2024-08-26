import React from 'react';
import {useDispatch} from "react-redux";

const LeftContent = () => {

    const dispatcher = useDispatch();

    const onClickSubmitButton = (event) => {
        event.preventDefault();
        const phoneNumberPattern = /^\d{3}-\d{3,4}-\d{4}$/;
        if( phoneNumberPattern.test(event.target[1].value)){
            dispatcher({type : "ADD-PHONE",payload : {name : event.target[0].value , number : event.target[1].value}});
        }else{
            alert("휴대폰 번호 형식에 맞춰주세요 ex) 000-0000-0000")
            return false;
        }

    }

  return (
      <div className={"left-content"}>
          <form onSubmit={onClickSubmitButton}>
              <span>이름</span>
              <input type={"text"}/>
              <span>전화번호</span>
              <input type={"text"}/>
              <button type={"submit"}>클릭</button>
          </form>
      </div>
  );
}

export default LeftContent;
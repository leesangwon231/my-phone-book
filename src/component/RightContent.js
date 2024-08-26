import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhoneCard from "./PhoneCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const RightContent = () => {
    const dispatcher = useDispatch();
    const phoneOriginList = useSelector(state => state.phone);
    const [keyword,setKeyword] = useState("");
    const [data,setData] = useState([]);




    const getKeyword = (event) => {
        dispatcher({type : "KEYWORD" , payload : {keyword : event.target.value}})
        setKeyword(event.target.value);
    }


    useEffect(() => {
        if(keyword !== ""){
            setData(phoneOriginList.filter((phone)=> (phone.name.includes(keyword))));
        }else{
            setData(phoneOriginList);
        }
    }, [keyword,phoneOriginList]);


  return (
      <div>
          <div className={"search-area"}>
              <FontAwesomeIcon icon={faSearch}/>
              <input type={"text"} onKeyUp={getKeyword}/>
          </div>
          <div className={"right-content"}>
              {data?.map((data) => (
                  <PhoneCard data={data}/>
              ))}
          </div>
      </div>

  );
}

export default RightContent;
import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

const LeftContent = () => {

    const dispatcher = useDispatch();
    const imagesUrl = [
        "https://tse1.mm.bing.net/th?id=OIP.__u1-HktWFqyC5dUviL1uwHaHa&pid=Api&P=0&h=220",
        "https://i.namu.wiki/i/FSs6sRr9Qil-29enzrEUqYcBtk3HJQ1lPN-52nzwLbVrMZpV-hv3D5yaBzQa9btVJbxz4W--rMJgi38XVdHFBA.webp",
        "https://i.namu.wiki/i/YEXFA_C4IHm3Va4CozKQ3neSw1PGcEAzxSTJuUk5pou8VFwLev6MhHhCQQoTjpqo5QJZ7aLb2vt573aBmeYNhHSiUHBgTLgzIAPQpPku2AG5wrei4uxIuPgKuuEyjuQe3anzM9kvr_x-h7m8mKYd_Q.webp",
        "https://i.namu.wiki/i/KCB8bNfg1b4hpGbhirLA3TuYcev4Fo_oXRMS5VkMoBrAIAPidyyj4mAuZxhIa1TTnMAdwCJhLpGp7CCaWI9HXjsgX2tc1o7ELl24gtLicy_rXi3tfaDvOqo0hd65vhB4Qrv_e-U-8eTcvytx9YdV1w.webp",
        "https://i.namu.wiki/i/eQRh_QCaVMM0HXR1lJ2ojdesFjrGe4RFX3GHps7bwQqNXcFFdxxFnMM9QKtbk2ExdcFR_yQAIEKaitdnHZQm6VfFP-Ct9UjbC9eIJhkz9V6cCr9KSl2QEAK3RnFVV0y103W2ioqIePVINBKGbjqN4g.webp",
        "https://opgg-com-image.akamaized.net/attach/images/20191102092010.991722.jpg",
    ];


    const [selectedIndex, setSelectedIndex] = useState(null);

    // 클릭 핸들러
    const clickImageIndex = (index) => {
        setSelectedIndex(index);

    };

    useEffect(() => {
        const selectedElements = document.querySelectorAll('.select-image');

        selectedElements.forEach((element, index) => {
            if (index === selectedIndex) {
                element.style.border = '2px solid rgba(11, 218, 111, 1)';
            } else {
                element.style.border = 'none';
            }
        });
    }, [selectedIndex]);

    const onClickSubmitButton = (event) => {
        event.preventDefault();
        const phoneNumberPattern = /^\d{3}-\d{3,4}-\d{4}$/;
        if( phoneNumberPattern.test(event.target[1].value)){
            dispatcher({type : "ADD-PHONE",payload : {name : event.target[0].value , number : event.target[1].value , image : imagesUrl[selectedIndex]}});
        }else{
            alert("휴대폰 번호 형식에 맞춰주세요 ex) 000-0000-0000")
            return false;
        }

    }

  return (
      <div className={"left-content"}>
          <form onSubmit={onClickSubmitButton}>
              <div className={"images-area"}>
                  {imagesUrl.map((data,index) => <div className={`select-image`}
                                                style={{
                                                    backgroundImage: `url(${data})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover'
                                                }} onClick={()=>clickImageIndex(index)}></div>)}
              </div>
              <span>이름</span>
              <input type={"text"} placeholder={"이름을 입력해 주세요"}/>
              <span>전화번호</span>
              <input type={"text"} placeholder={"010-0000-0000 형식을 맞춰서 입력해주세요"}/>
              <button type={"submit"}>추가</button>
          </form>
      </div>
  );
}

export default LeftContent;
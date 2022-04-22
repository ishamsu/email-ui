import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import ItemContent from "../../components/itemContent/itemContent";
import ListItem from "../../components/listItem/listItem";
import "./home.css";
import { clearEmailContent, getAllEmails, updateUnReadMail } from "../../actions/emailAction";
import { useDispatch, useSelector } from "react-redux";

const Home =()=>{
    const dispatch = useDispatch();
    let auth = useSelector((state) =>state.emails.all);
    let unRead = useSelector((state) =>state.emails.unRead);
    let readMail = useSelector((state) =>state.emails.readMail);
    let content = useSelector((state) =>state.emails.activeEmailContent);
    const [active, setActive]= useState(null)
    const [navbar, setNavbar]= useState("Unread")
    const [filterContent, setFilterContent]= useState([])
useEffect(()=>{
    console.log("render")
    dispatch(getAllEmails());
},[]);

useEffect(()=>{
    if(auth.length>0){
        dispatch(updateUnReadMail(active))
        setActive(null)
           
        dispatch(clearEmailContent(active))
        console.log("render",readMail )
        switch(navbar){
            case "Unread":
                setFilterContent( unRead )
                break;
                case "Read":
                    setFilterContent(readMail)
                break;
                case "Favourite":
                break;
                default:
                    break;
        }    
    }
   
},[navbar, auth]);
useEffect(()=>{
    console.log("render")
    setFilterContent( unRead )

},[unRead]);



    return <>
     <div className="App">
      <header className="App-header">
        <div className='ml-1 mr-1 mt-1'>
          <div className='d-flex flex-row gap-1 '>
            <div className='d-flex flex-col w-full'>
              <Filter
                item={["Unread","Read", "Favourite"]}
                defaultItem={"Unread"}
                handleOnClick={(item) => {
                    // console.log("Clicked item", item)
                    setNavbar(item)
                }}
              />
              {filterContent.length>0 && filterContent.map((item) => {
                return <> <ListItem
                active={item.id==active}
                foo={active}
                data={item}
                onCardClick={(item)=>{
                    console.log("Clicked itemssss", item, active)
                    if(active==item){
                        setActive(null)

                    }
                    else{
                        setActive(item)
                    }
                 
                    
                }}
                 /></>
              })}
            </div>
            {content !== false &&
            <ItemContent content={content} />
}
          </div>
        </div>
      </header>
    </div>
    </>
    }
    export default Home
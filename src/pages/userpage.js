import React, {useState, useEffect} from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";

export default function UserPage(props) {
    let navigate = useNavigate();
    const location = useLocation();

    const [isUser, setIsUser] = useState(true);
    // const [showCreateCampaign, setShowCreateCampaign] = useState(false);


    useEffect( () => {
        const userLoggedIn = location.state;
        console.log("userLoggedIn från userpage", userLoggedIn);
        // setIsUser(true);
    }, []);

    //Adjust Header - remove register+loginBtns. Print statisticIcon+Accountsettings

    const handleClick = () => {
        console.log("skapa ny kampanj");
        let campaignId = 'campaign-title-and-123abc';
        navigate(`/userpage/create-campaign/${campaignId}`); 
        // setShowCreateCampaign(true);
    };

  return (
    <>
        <Header isUser={setIsUser}/>
            <div id='userpage-main'>
                <div id='userpage-start'>
                    <div id='create-campaign-wrapper'>
                        <h4>Skapa ny kupongkampanj</h4>
                        <button onClick={handleClick}>Skapa ny kupongkampanj</button>
                    </div>
                    <div id='view-all-campaigns-wrapper'>
                        <h4>Alla kampanjer</h4>
                        <div id='campaign-card-wrapper'>
                            <div id='campaign-card1'>Kampanj1</div>
                            <div id='campaign-card2'>Kampanj2</div>
                            <div id='campaign-card3'>Kampanj3</div>
                            <div id='campaign-card4'>Kampanj4</div>
                            <div id='campaign-card5'>Kampanj5</div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}
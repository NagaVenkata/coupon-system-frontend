import React, {useState, useEffect} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

export default function UserPage() {

    //Adjust Header - remove register+loginBtns. Print statisticIcon+Accountsetting
    const [showCreateCampaign, setShowCreateCampaign] = useState(false);

    const handleClick = () => {
        console.log("skapa ny kampanj");
        setShowCreateCampaign(true);
    };

  return (
    <>
        <Header />
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

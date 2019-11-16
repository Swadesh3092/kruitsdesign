import React, { Component } from 'react';
import "./ContactUs.css"
class ContactUs extends Component {
    render() {
        return (
            <div className="IndividualPagesBodyContainer">
                <div className="IndividualPagesBodyContainerInner">
                <div className="IndividualPagesLinkSection">
                    <div className="IndividualPagesLinkSectionInner">
                    <ul className="IndividualPagesOuterList">
                        <a href="./AboutUs">
                         <li className="IndividualPagesList">
                         
                             <div className="ActiveListElement">
                             </div>    
                             <div className="IndividualPagesListItem">
                              <div className="IndividualPagesItemWord">   
                             About Us
                             </div>
                             </div>
                             
                         </li> 
                         </a>
                         <a href="./ContactUs">
                         <li className="IndividualPagesList1">
                         
                         <div className="ActiveListElement1">
                         </div>    
                         <div className="IndividualPagesListItem1">
                          <div className="IndividualPagesItemWord">   
                        Contact Us
                         </div>
                         </div>
                         
                     </li> 
                         </a>
                         <a href="./Blog">
                         <li className="IndividualPagesList">
                         <div className="ActiveListElement">
                             </div>
                             <div className="IndividualPagesListItem">
                             <div className="IndividualPagesItemWord">  
                             Blog
                             </div>
                             </div>
                         </li> 
                         </a>
                         <a href="./Cookie-Notice">
                         <li className="IndividualPagesList">
                         <div className="ActiveListElement">
                             </div>
                             <div className="IndividualPagesListItem">
                             <div className="IndividualPagesItemWord">  
                             Cookie Notice
                             </div>
                             </div>
                         </li> 
                         </a>
                         <a href="./Privacy-Policy">
                         <li className="IndividualPagesList">
                         <div className="ActiveListElement">
                             </div>
                             <div className="IndividualPagesListItem">
                             <div className="IndividualPagesItemWord">  
                             Privacy Policy
                             </div>
                             </div>
                         </li> 
                         </a>
                         <a href="./Terms-Of-Service">
                         <li className="IndividualPagesList">
                         <div className="ActiveListElement">
                             </div>
                             <div className="IndividualPagesListItem">
                             <div className="IndividualPagesItemWord">  
                             Terms of Service
                             </div>
                             </div>
                         </li>    
                         </a> 
                        </ul>
                    </div>    

                </div>
                <div className="IndividualPagesInfoSection">
                    
                </div>
                    

                </div>

                
            </div>
        );
    }
}

export default ContactUs;
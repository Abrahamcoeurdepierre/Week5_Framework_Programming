import React, { Component } from 'react';
import Item from './item';
import './HomePage.css';


class Homepage extends Component {
    render() {
        return (
           <div className="general">
               <div className="row">
                    <div className="itemList">
                        <Item  linkGambar='https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//90/MTA-4203485/nike_nike_air_jordan_1_retro_high_not_for_resale_varsity_red_sneaker_pria_full06_lex1rygf.jpg'
                                itemName = "Air Jordan"
                                itemPrice = "1.200.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://dynamic.zacdn.com/Zsu62Ip3PR1utFCgJrQoFjaaHgA=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/converse-3528-7839061-1.jpg'
                                itemName = "Converse"
                                itemPrice = "1.100.000 Rp"
                            />
                    </div>
               </div>

               <div className="row">
                    <div className="itemList">
                        <Item  linkGambar='https://static.nike.com/a/images/t_default/v5qlucvwx3lme7x3slhn/converse-chuck-taylor-all-star-high-top-unisex-shoe-xX439O.jpg'
                                itemName = "Cacahuette"
                                itemPrice = "1.700.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://cdn.shopify.com/s/files/1/0381/1793/products/CM100241M-1_grande.jpg?v=1571438692'
                                itemName = "Red Rosie"
                                itemPrice = "1.900.000 Rp"
                            />
                    </div>
               </div>

               <div className="row">
                    <div className="itemList">
                        <Item  linkGambar='https://assets.adidas.com/images/w_600,f_auto,q_auto/16216c130f5846ed8c9eabc600b3ea6f_9366/ZX_2K_Boost_Shoes_White_FX8835_01_standard.jpg'
                                itemName = "Addidas K"
                                itemPrice = "1.000.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://media.gq-magazine.co.uk/photos/5f2021ad0cf994bba567c374/master/w_1920,c_limit/20200728-nike-01.jpg'
                                itemName = "Nike Air Beta"
                                itemPrice = "900.000 Rp"
                            />
                    </div>
               </div>
               
           </div>

            
           
        )
    }
}

export default Homepage;
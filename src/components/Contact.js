const Contact = () =>{
    return (
        <div>
            <h2 className="ContactHeading">Contact us</h2>
            <div className="ContactFlex">
                <div className="ContactFlexLeft">
                    <img className="ContactFlexLeftImg" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNXvuQEMKL72L1UDPqTL7yEwoKaXi1Nlsig&usqp=CAU"/>
                    <p className="ContactFlexHead">Talk to a member of our Sales team</p>
                    <p className="ContactFlexTxt">We'll help you find the right products and pricing for your business</p>
                    <p className="ContactFlexBtn">Contact Sales</p>
                </div>
                <div className="ContactFlexRight">
                    <img className="ContactFlexLeftImg" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNXvuQEMKL72L1UDPqTL7yEwoKaXi1Nlsig&usqp=CAU"/>
                    <p className="ContactFlexHead">Product and account support</p>
                    <p className="ContactFlexTxt">Our help center is fresh and always open for business. If you can't find the answer you're looking for, we're here to lend a hand</p>
                    <p className="ContactFlexBtn">Go to the help center</p>
                </div>
            </div>
        </div>
    )
};

export default Contact;
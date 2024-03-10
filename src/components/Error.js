import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
            <section class="page_404">
                <div class="container">
                    <h1 class="text-center errtxt">404</h1>
                    <div class="row"> 
                    <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">
                    <div class="four_zero_four_bg">
                    
                    
                    
                    </div>
                    
                    <div class="contant_box_404">
                    <h3 class="h2">
                    Look like you're lost
                    </h3>
                    
                    <p>the page you are looking for not avaible!</p>
                    
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} class="link_404">Go to Home</Link>
                </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
    )
}
export default Error;
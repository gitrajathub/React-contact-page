import "../form/form.css";

const Form = () =>{
    return(
        <div class="main-div">
            <div class="form-main">
                <div class="form-buttons">
                    <button>VIA SUPPORT CHAT</button>
                    <button>VIA CALL</button>
                </div>
                <div class="form-button-3">
                    <button>VIA EMAIL FORM</button>
                </div>
                <div>
                    <form class="form" action="#">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" />
                        <button class="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div class="picture">
                <img src="/images/pic1.png" alt="picture" />
            </div>
        </div>
    );
}

export default Form;

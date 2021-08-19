import { useHistory } from "react-router-dom";

const ButtonContact = ({ page }) => {

    const history = useHistory();

    const handleToPage = (page) => {
        return history.push(page);
    }

    return(
        <div>
            <button onClick={ () => handleToPage(page)}>Contact Us</button>
        </div>      
    );
};

export default ButtonContact;
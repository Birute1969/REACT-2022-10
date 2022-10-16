//reikės importuoti buttonus iš Button folderio:

import {Button} from '../Button/Button';
import './header.css';

export const Header = () => {
    return ( //grąžinti gali tik 1-ą elementą (div)
        <div>
            <Button>Log in</Button>
            <Button>Register</Button>
        </div>
    )
}
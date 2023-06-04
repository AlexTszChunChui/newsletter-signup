import { createContext, useState } from 'react';

const EmailContext = createContext();

function Provider({ children }) {
    const [email, setEmail] = useState("");

    const value = {
        email,
        changeEmail: (email) => {
            setEmail(email);
        }
    };

    return (
    <EmailContext.Provider value={value}> 
    {children} 
    </EmailContext.Provider>
    )
}

export { Provider }
export default EmailContext
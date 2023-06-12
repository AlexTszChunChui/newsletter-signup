import { createContext, useState } from 'react';

const EmailContext = createContext();

function Provider({ children }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const value = {
        email,
        error,
        changeEmail: (email) => {
            setEmail(email);
        },
        changeError: (err) => setError(err)
    };

    return (
    <EmailContext.Provider value={value}> 
    {children} 
    </EmailContext.Provider>
    )
}

export { Provider }
export default EmailContext
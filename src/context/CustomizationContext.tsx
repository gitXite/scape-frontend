import { createContext, useContext, useState, type ReactNode } from 'react';


interface CustomizationContextType {
    frameType: string;
    setFrameType: (type: string) => void;
    passePartoutType: string;
    setPassePartoutType: (type: string) => void;
}

const CustomizationContext = createContext<CustomizationContextType | undefined>(undefined);

export function CustomizationProvider({ children }: { children: ReactNode }) {
    const [frameType, setFrameType] = useState<string>(() => localStorage.getItem('selectedFrame') || '');
    const [passePartoutType, setPassePartoutType] = useState<string>(() => localStorage.getItem('selectedPassePartout') || '');

    const updateFrameType = (type:string) => {
        setFrameType(type);
        localStorage.setItem('selectedFrame', type);
    };

    const updatePassePartoutType = (type: string) => {
        setPassePartoutType(type);
        localStorage.setItem('selectedPassePartout', type);
    };

    return (
        <CustomizationContext.Provider
            value={{
                frameType,
                setFrameType: updateFrameType,
                passePartoutType,
                setPassePartoutType: updatePassePartoutType,
            }}
        >
            {children}
        </CustomizationContext.Provider>
    );
}


export function useCustomization() {
    const context = useContext(CustomizationContext);
    if (!context) throw new Error('useCustomization must be used within a CustomizationProvider');
    return context;
}
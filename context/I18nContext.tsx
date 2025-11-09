import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '../i18n';

type Language = 'en' | 'ar';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): any => {
    try {
        const keys = key.split('.');
        let result = translations[language];
        for (const k of keys) {
            result = result[k];
        }
        return result !== undefined ? result : key;
    } catch (error) {
        return key; // Return key as fallback
    }
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

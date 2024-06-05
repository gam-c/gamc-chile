// src/components/LanguageSwitcher.js
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale, asPath } = router;

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={handleLocaleChange}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;

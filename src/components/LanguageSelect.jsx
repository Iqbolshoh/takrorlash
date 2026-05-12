import { useTranslation } from "react-i18next";

function LanguageSelect() {

    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select
            onChange={changeLanguage}
            value={i18n.language}
            className="
                bg-gray-800
                border
                border-gray-700
                text-white
                px-4
                py-2
                rounded-xl
                outline-none
                cursor-pointer
                hover:border-blue-500
                transition
                duration-300
            "
        >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O'zbek</option>
        </select>
    )
}

export default LanguageSelect;
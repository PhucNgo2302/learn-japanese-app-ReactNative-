import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./languages/english";
import Russian from "./languages/russian";
import German from "./languages/german";
import Spanish from "./languages/spanish";
import French from "./languages/french";
import Italian from "./languages/italian";
import Portuguese from "./languages/portuguese";
import VietNam from "./languages/vietnam";

const resources = {
	en: { translation: English },
	ru: { translation: Russian },
	de: { translation: German },
	es: { translation: Spanish },
	fr: { translation: French },
	it: { translation: Italian },
	pt: { translation: Portuguese },
	vn: { translation: VietNam },
};

i18n
	.use(initReactI18next)
	.init({
		compatibilityJSON: "v4",
		resources,
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		}
	});


export default i18n;
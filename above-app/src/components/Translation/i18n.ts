import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
	// .use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// we init with resources
		resources: {
			english: {
				translations: {
					Above: 'Above',
					Home: 'Home',
					'I/UFO': 'I/UFO',
					Auction: 'Auction',
					'Join us': 'Join us',
					'All in one dimension': 'All in one dimension',
					'--Browse - Buy - Auction--': '--Browse - Buy - Auction--',
					'Acquired Objects': 'Acquired Objects',
					Username: 'Username',
					Name: 'Name',
					Email: 'Email',
					Password: 'Password',
					'Sign up': 'Sign up',
					Login: 'Login'
				}
			},
			maori: {
				translations: {
					Above: 'Runga Ake',
					Home: 'Wā Kāinga',
					'I/UFO': 'I/UFO',
					Auction: 'Hoko Kairapu',
					'Join us': 'Pāhekoheko',
					'All in one dimension': 'Katoa i te waahanga kotahi',
					'--Browse - Buy - Auction--': '--whakaraparapa - hoko - māketePlay--',
					'Acquired Objects': 'taonga riro',
					Username: 'Ingoa Kaiwhakamahi',
					Name: 'Tūingoa Tangata',
					Email: 'Karere Rorohiko',
					Password: 'Kupu Muna',
					'Sign up': 'Hainatanga',
					Login: 'Takiuru'
				}
			}
		},
		fallbackLng: 'en',
		debug: true,

		// have a common namespace used around the full app
		ns: ['translations'],
		defaultNS: 'translations',

		keySeparator: false, // we use content as keys

		interpolation: {
			escapeValue: false
		}
	});

export default i18n;

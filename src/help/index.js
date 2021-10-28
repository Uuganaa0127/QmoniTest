import { Alert, PermissionsAndroid } from 'react-native';
// import Images from '/qmonitest/src/constants/images';
import Images from '../constants/Images';
export default class helper {
    static getBankIcon = (bankCode) => {
        switch (bankCode) {
            case 'GLMT':
                return Images.Banksgolomt;
            // return require('../assets/image/banks/golomt.png');
            case 'KHAN':
                return Images.Bankskhan;
            // return require('../assets/image/banks/khan.png');
            case 'TDBM':
                return Images.Banksgolomt;
            // return require('../assets/image/banks/tdb.png');
            case 'STATE':
                return Images.Bankstdb;
            // return require('../assets/image/banks/state.png');
            case 'CK':
                return Images.Bankschingis;
            // return require('../assets/image/banks/chingis.png');
            default:
                return Images.pointer;
            // return require('../assets/image/pointer.png');
        }
    }
    static showSimpleAlert = (title, body) =>
        Alert.alert(
            title,
            body,
            [{ text: 'Хаах' }],
            { cancelable: false }
        )

    static formatDatetime = (input) => {
        if (input) {
            var t = new Date(input);
            let month = ('00' + (t.getMonth() + 1)).slice(-2);
            let day = ('00' + t.getDate()).slice(-2);
            return t.getFullYear() + '/' + month + '/' + day;
        }
        return input;
    }
    static formatDatetimeT = (input) => {
        if (input) {
            input = input.split('+')[0];
            var t = new Date(Date.parse(input));
            let month = ('00' + (t.getMonth() + 1)).slice(-2);
            let day = ('00' + t.getDate()).slice(-2);
            let minutes = ('00' + (t.getMinutes() + 1)).slice(-2);
            let seconds = ('00' + t.getSeconds()).slice(-2);
            return `${t.getFullYear()}/${month}/${day}\n${t.getHours()}:${minutes}:${seconds}`;
        }
        return input;
    }
    static formatValue = (input) => {
        if (input) {
            input = Math.round(input);
            input = String(input).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return input;
    }
    formatValueReverse = (input) => {
        if (input) {
            input = String(input).replace(/,/g, '');
        }
        return input;
    }
    getHouseType = (id) => {
        switch (id) {
            case 1: return 'Амины сууц';
            case 2: return 'Орон сууц';
            case 3: return 'Байшин';
            case 4: return 'Гэр';
            case 5: return 'Бусад';
            default: return '';
        }
    }
    getHouseOwnerType = (id) => {
        switch (id) {
            case 1: return 'Өөрийн';
            case 2: return 'Эцэг/эхийн';
            case 3: return 'Түрээсийн';
            case 4: return 'Бусад';
            default: return '';
        }
    }
    getIncomeType = (id) => {
        switch (id) {
            case 1: return 'Цалин';
            case 2: return 'Бизнес';
            case 3: return 'Бусад';
            default: return '';
        }

    }

}
export const regs = [
    { value: null, label: "Сонгох" },
    { value: "А", label: "А" },
    { value: "Б", label: "Б" },
    { value: "В", label: "В" },
    { value: "Г", label: "Г" },
    { value: "Д", label: "Д" },
    { value: "Е", label: "Е" },
    { value: "Ё", label: "Ё" },
    { value: "Ж", label: "Ж" },
    { value: "З", label: "З" },
    { value: "И", label: "И" },
    { value: "Й", label: "Й" },
    { value: "К", label: "К" },
    { value: "Л", label: "Л" },
    { value: "М", label: "М" },
    { value: "Н", label: "Н" },
    { value: "О", label: "О" },
    { value: "Ө", label: "Ө" },
    { value: "П", label: "П" },
    { value: "Р", label: "Р" },
    { value: "С", label: "С" },
    { value: "Т", label: "Т" },
    { value: "У", label: "У" },
    { value: "Ү", label: "Ү" },
    { value: "Ф", label: "Ф" },
    { value: "Х", label: "Х" },
    { value: "Ц", label: "Ц" },
    { value: "Ч", label: "Ч" },
    { value: "Ш", label: "Ш" },
    { value: "Щ", label: "Щ" },
    { value: "Ъ", label: "Ъ" },
    { value: "Ь", label: "Ь" },
    { value: "Ы", label: "Ы" },
    { value: "Э", label: "Э" },
    { value: "Ю", label: "Ю" },
    { value: "Я", label: "Я" },
];

export const houseTypes = [
    { value: null, label: "Сонгох" },
    { value: 1, label: "Амины сууц" },
    { value: 2, label: "Орон сууц" },
    { value: 3, label: "Байшин" },
    { value: 4, label: "Гэр" },
    { value: 5, label: "Бусад" },
];
export const houseOwnerTypes = [
    { value: null, label: "Сонгох" },
    { value: 1, label: "Өөрийн" },
    { value: 2, label: "Эцэг/эхийн" },
    { value: 3, label: "Түрээсийн" },
    { value: 4, label: "Бусад" },
];
export const incomeTypes = [
    { value: null, label: "Сонгох" },
    { value: 1, label: "Цалин" },
    { value: 2, label: "Бизнес" },
    { value: 3, label: "Бусад" },
];
export const refRelations = [
    { value: null, label: "Сонгох" },
    { value: "Эцэг/Эх", label: "Эцэг/Эх" },
    { value: "Эхнэр/Нөхөр", label: "Эхнэр/Нөхөр" },
    { value: "Ах/Эгч/Дүү", label: "Ах/Эгч/Дүү" },
    { value: "Найз/Нөхөд", label: "Найз/Нөхөд" },
];
export const housedetails = [
    { value: null, label: "Орон сууц" },
    { value: "Хашаа байшан", label: "Хашаа байшан" }

]

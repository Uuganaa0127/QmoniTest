import { StyleSheet, Platform, Dimensions } from 'react-native';
import fonts from '/Qmonitest/src/constants/Font'
let { height } = Dimensions.get("window");
// const bodyContainerTopMargin = Platform.OS == 'ios' ? 70 : 50;
const bodyContainerTopMargin = (height >= 812 && Platform.OS == 'ios') ? 80 : 60;
const headerContainerHeight = (height >= 812 && Platform.OS == 'ios') ? 80 : 60;
const footerTabbarHeight = 70;

export default StyleSheet.create({
    leftFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    right: {
        justifyContent: 'center',
        textAlign: 'right',
        alignItems: 'flex-end',
    },
    centerFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
    },
    left: {
        justifyContent: 'center',
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    text: {

    },
    rightCenter: {
        left: 20,
        top: 10,
        alignItems: 'flex-end',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    columnMV10Center: {
        width: '100%',
        flexDirection: 'column',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontSemiBold17: {
        fontFamily: 'semibold',
        fontSize: 17,
        lineHeight: 24,
        color: '#12263F',
    },
    txtFormItemTitle: {
        paddingStart: 10,
        justifyContent: 'center',
    },
    leftFlexJustStartPH5: {

        paddingHorizontal: 5,
    },
    leftMR5: {
        marginStart: 20,

        textAlign: 'left',

        marginRight: 5,
    },
    rowCenter: {
        flexDirection: 'row',

    },
    /** Main Container */
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#ffffff',
    },
    mainContainerCenter: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    bgBlueContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
    },
    scrollContainer: {
        marginTop: bodyContainerTopMargin,
        paddingBottom: 20,
    },
    scrollContainerFull: {
        height: height - headerContainerHeight - footerTabbarHeight,
    },
    tblContainer: {
        top: 50,
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    bottomContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    /** Header */
    headerContainer: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        backgroundColor: '#ffffff',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        height: 50,
        alignItems: 'center',
        zIndex: 999,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.05,
        shadowRadius: 3.27,
        elevation: 2,
    },
    headerLeft: {
        width: 50,
        height: 50,
        paddingRight: 20,
        paddingVertical: 10,
        textAlign: 'left'
    },
    headerCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerRight: {
        width: 50,
        height: 50,
        paddingLeft: 30,
        paddingVertical: 18,
        textAlign: 'right'
    },
    headerText: {
        color: '#444444',
        fontWeight: '700',
        fontSize: 14,
    },
    headerTextGray: {
        color: '#e6e6e6',
        fontWeight: '700',
        fontSize: 14,
    },
    /** Logo Style */
    logo: {
        fontSize: 26,
        textAlign: 'center',
        color: '#111111',
        width: '100%',
        marginTop: 10
    },
    loader: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 70,

    },
    /* Button */
    btnContainer: {
        width: 240,
    },
    btnWidth50: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLight: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 10
    },
    buttonBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 20,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        marginBottom: 10
    },
    buttonPurple: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#f95e00',
        borderRadius: 20,
        color: '#fff',
        borderWidth: 0
    },
    btnTextDark: {
        fontFamily: "",
        justifyContent: 'center',
        alignItems: 'center',
        color: '#444',
        fontSize: 13,
        lineHeight: 38
    },
    btnTextLight: {
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 13,
        lineHeight: 38
    },
    btnTextGray: {
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#999999',
        fontSize: 13,
        lineHeight: 38
    },
    btnFinger: {
        position: 'absolute',
        right: -40,
        top: 5,
    },
    buttonicon: {
        display: 'flex',
        position: 'absolute',
        left: 20,
    },
    /* Input */
    inputbox: {
        marginStart: 10,
        marginEnd: 10,
        backgroundColor: '#fafafa',
        width: '100%',
        height: 44,
        paddingLeft: 20,
        color: '#444444',
        fontSize: 14,
        marginTop: 12,
    },
    pickerbox: {
        backgroundColor: '#fafafa',
        width: '100%',
        height: 44,
        paddingLeft: 15,
        color: 'black',
        marginTop: 12,
    },
    pickerboxReg: {
        backgroundColor: '#fafafa',
        width: 70,
        height: 44,
        paddingLeft: 8,
        color: 'black',
        marginTop: 12,
    },
    pickerbox2: {
        backgroundColor: 'transparent',
        lineHeight: 18,
        paddingVertical: 20,
        color: 'black',
        borderTopColor: '#ffffff'
    },
    inputicon: {
        color: '#cccccc',
        fontSize: 12,

    },
    inputiconCon: {
        display: 'flex',
        position: 'absolute',
        right: 20,
        bottom: 16,
    },
    inputBrBot: {
        borderBottomColor: '#c5ddec',
        borderBottomWidth: 2,
        width: 190,
        color: '#444444',
        fontSize: 20,
        textAlign: 'center'
    },
    inputBrBotFocused: {
        borderBottomColor: '#1877b3',
        borderBottomWidth: 2,
        width: 190,
        color: '#444444',
        fontSize: 20,
        textAlign: 'center'
    },
    uploadInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '50%'
    },
    uploading: {
        borderColor: '#f95e00',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '50%'
    },
    uploadingLoader: {
        borderColor: '#f95e00',
        borderWidth: 2,
    },
    /** Text Style */
    h1: {
        fontSize: 30,
        color: '#444444'
    },
    h2: {
        fontSize: 20,
        color: '#444444'
    },
    h2White: {
        fontSize: 20,
        color: '#ffffff'
    },
    h6: {
        color: '#999999',
        fontSize: 13,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    txtPurple: {
        color: '#1877b3',
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    txtWarnGray: {
        color: '#999999',
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },

    txtFormTitle: {

        color: '#999999',

        color: '#999999',
        fontSize: 11,
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginBottom: 20
    },
    txtTitle: {
        color: '#444444',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    txtSubTitle: {
        color: '#999999',
        fontSize: 11,
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginTop: 10
    },
    currencyBig: {
        fontSize: 18,
        color: '#444444',
        marginTop: 4,
        marginLeft: 2
    },
    currencySmall: {
        fontSize: 12,
        color: '#444444',
        marginTop: 3,
        marginLeft: 2,
        fontWeight: 'bold'
    },
    /** Icon Style */
    iconBack: {
        backgroundColor: '#ddebf4',
        height: 130,
        width: 130,
        borderRadius: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
    },
    iconBackground: {
        backgroundColor: '#1877b3',
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    icon: {
        color: '#ffffff',
        fontSize: 36,
    },
    iconDown: {
        position: 'absolute',
        right: 20,
        bottom: 17,
        color: "#999999",
        fontSize: 10
    },
    /** Form Style */
    formItem: {
        marginEnd: 10,
        marginStart: 15,
        marginBottom: 30

    },
    inputSection: {
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'center',
        // justifyContent: 'flex-start',
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    /** User Style */
    txtUser: {
        color: '#444444',
        fontSize: 13,
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    userAvatar: {
        height: 50,
        width: 50,
        borderRadius: Platform.OS == 'ios' ? 25 : 50,
        marginRight: 15,
    },
    /** Table Style */
    tblContainer: {
        width: '100%',
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tblHead: {
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    tblRowCon: {
        paddingHorizontal: 20,
        marginBottom: 25
    },
    tblRow: {
        paddingTop: 14,
        paddingBottom: 15,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    /** Зээл хүснэгт */
    tblHeadCol1: { width: '33%', fontSize: 13, color: '#999999' },
    tblHeadCol2: { width: '30%', fontSize: 13, color: '#999999' },
    // tblHeadCol1: { width: '50%', fontSize: 13, color: '#999999' },
    // tblHeadCol2: { width: '50%', fontSize: 13, color: '#999999' },
    ////////////////////////////////////////////////////////////////////
    tblHeadCol3: { width: '21%', fontSize: 13, color: '#999999' },
    tblHeadCol4: { width: '16%', fontSize: 13, color: '#999999' },

    tblContentCol1: { width: '33%', fontSize: 13 },
    tblContentCol2: { width: '30%', fontSize: 13 },
    // tblContentCol1: { width: '50%', fontSize: 13 },
    // tblContentCol2: { width: '50%', fontSize: 13 },

    tblContentCol3: { width: '21%', fontSize: 13 },
    tblContentCol4: { width: '16%', display: 'flex', alignItems: 'flex-end', },


    loanStatusNotApproved: {
        backgroundColor: '#fdeeee',
        // height: 24,
        // lineHeight: 24,
        borderRadius: 20,
        width: 70,
        // alignItems: 'center',
        // paddingVertical: 5
    },
    loanStatusNotApprovedText: {
        color: '#f08181',
        fontSize: 11,
        textAlign: 'center',
        // lineHeight: 24,
        // lineHeight: 13,
        // width: '90%',
        flexWrap: 'wrap',
        paddingVertical: 5
    },
    loanStatusApproved: {
        backgroundColor: '#dff7f6',
        height: 24,
        lineHeight: 24,
        borderRadius: 20,
        width: 70,
    },
    loanStatusApprovedText: {
        color: '#0ac4ba',
        fontSize: 11,
        textAlign: 'center',
        lineHeight: 24,
    },
    loanMoreBtn: {
        borderRadius: 50,
        height: 32,
        width: 32,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#f95e00',
        borderWidth: 0
    },
    loanMoreText: {
        lineHeight: 32
    },

    /** Данс баталгаажуулах хүснэгт */
    tblHead2Col1: { width: '45%', fontSize: 13, color: '#999999' },
    tblHead2Col2: { width: '40%', fontSize: 13, color: '#999999' },
    tblHead2Col3: { width: '15%', fontSize: 13, color: '#999999' },
    tblContent2Col1: { width: '45%', fontSize: 14, color: '#444444', flexDirection: 'row' },
    tblContent2Col2: { width: '40%', fontSize: 14, color: '#444444', },
    tblContent2Col3: { width: '15%', fontSize: 14, color: '#444444', },


    accountRow: {
        paddingVertical: 20,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },

    bankLogo: {
        marginRight: 10,
        height: 18,
        width: 18
    },

    accStatusNotApproved: {
        // justifyContent: "flex-end",

        height: 22,
        width: 22,

    },
    accStatusApproved: {
        height: 22,
        width: 22,
        // display: 'flex-end',
        justifyContent: "flex-end",

    },

    /** Info Style */
    infoMid: {
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        marginTop: 20
    },
    infoMidCon: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    infoLeftItem: {
        backgroundColor: '#ffffff',
        marginBottom: -8,
        paddingRight: 10,
        color: '#999999',
        fontSize: 13
    },
    infoRightItem: {
        backgroundColor: '#ffffff',
        marginBottom: -8,
        paddingLeft: 10,
        fontSize: 14
    },
    /** List Style */
    listContainer: {
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItemBr: {
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50
    },
    iconCon: {
        width: 30
    },
    iconBefore: {
        // transform: [{ rotate: '180deg' }],
        // tintColor: 'red',
        height: 20,
        width: 20,
        // marginRight: 17,
    },
    iconBefore1: {
        height: 15,
        width: 15,
    },
    iconAfter: {
        fontSize: 10,
        color: '#999999',
        lineHeight: 48
    },
    iconChecked: {
        fontSize: 15,
        color: '#f95e00',
        // backgroundColor: '#f95e00', 
        // borderRadius: 20,
        // height: 15,
        // width: 15,
    },

    // LOADER     
    loadingScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        zIndex: 999
    },
    loadingText: {
        marginTop: 20
    },
    /** Checkbox */
    checkboxStyle: {
        borderRadius: Platform.OS == 'ios' ? 0 : 60,
        width: 18,
        height: 18
    },
    /** Copy to Clipboard */
    copyBtn: {
        // alignItems: 'center',
        // backgroundColor: 'transparent',
        // borderRadius: 50,
        // paddingVertical: 4,
        // width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
        // height: 40,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderColor: '#f95e00',
        borderWidth: 1,
        borderRadius: 20,
        color: '#fff',
    },
    copyBtnText: {
        color: '#f95e00',
        fontSize: 12,
    },
});

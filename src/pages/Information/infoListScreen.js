import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import helper from '/qmonitest/src/help/index';
import MainStyle from '../../components/styles/MainStyle';
import Images from '/qmonitest/src/constants/Images';
import Loader from '/qmonitest/src/components/Loader/index';
import List from '/Qmonitest/src/components/infoListItems/index'
export default function InfoListScreen({ navigation }) {
    const [accessToken, setaccessToken] = useState(null);
    const [userId, setuserId] = useState(null);
    const [userInfo, setuserInfo] = useState(
        {
            name: '123123', regNum: 1231231,
        });
    const [fbUserImage, setfbUserImage] = useState('');
    const [isLoading, setisLoading] = useState(true);

    // componentWillMount() {
    //     SInfo.getItem('access_token', {}).then(value => {
    //         if (value) {
    //             SInfo.getItem('user_id', {}).then(value1 => {
    //                 if (value1 != '' && value1 != null) {
    //                     this.setState({ accessToken: value, userId: value1 }, () => { this.fetchUserInfo(); });
    //                 } else {
    //                     SInfo.deleteItem('access_token', {});
    //                     Actions.IndexMain();
    //                 }
    //             });
    //         } else {
    //             SInfo.deleteItem('access_token', {});
    //             Actions.IndexMain();
    //         }
    //     });
    // }
    const showLogoutAlert = () => {
        Alert.alert(
            'Анхааруулга',
            'Та гарахдаа итгэлтэй байна уу?',
            [
                { text: 'Болих', style: 'cancel' },
                { text: 'Гарах', onPress: () => { this.logout() } },
            ],
            { cancelable: false }
        )
    }
    const logout = () => {
        SInfo.deleteItem('access_token', {});
        Actions.IndexMain();
    }
    // fetchUserInfo() {
    //     BaseService.getUserInfo(this.state.userId)
    //         .then((responseJson) => {
    //             if (responseJson && responseJson.person) {
    //                 let userInfo = {
    //                     id: responseJson.id,
    //                     name: this.beautifyName(responseJson.person.lastName, responseJson.person.firstName),
    //                     regNum: responseJson.person.registerNumber,
    //                 };
    //                 let fbArray = responseJson.facebookId ? String(responseJson.facebookId).split(',') : [];
    //                 if (fbArray[0] != null) { this.getProfileInfo(fbArray[0]); }
    //                 this.setState({
    //                     userInfo: userInfo,
    //                     fbUserId: fbArray ? fbArray[0] : null,
    //                     fbUserName: fbArray ? fbArray[1] : null,
    //                     isLoading: false
    //                 });
    //             }
    //         })
    //         .catch((error) => {
    //             this.setState({ isLoading: false });
    //             Helper.showSimpleAlert('Алдаа', error);
    //             Actions.IndexMain();
    //         });
    // }
    const beautifyName = (lastName, firstName) => {
        return String(lastName).charAt(0) + '. ' + firstName;
    }
    const getProfileInfo = (fbId) => {
        this.setState({ fbUserImage: `https://graph.facebook.com/${fbId}/picture?type=large` });
    }
    return (
        <View style={MainStyle.mainContainer}>
            {/* <Loader isLoading={isLoading} /> */}
            {/* <MainHeader headerLabel={'Хэрэглэгчийн мэдээлэл'} showNotification={true} isGoBack={false} /> */}
            <View style={[MainStyle.scrollContainer]}>
                <ScrollView>
                    <View >
                        <View style={profile.profileContainer}>
                            <View>
                                <Image style={MainStyle.userAvatar} source={Images.usertag} />
                            </View>
                            <View>
                                <Text style={MainStyle.txtUser}>{userInfo.name}</Text>
                                <Text style={MainStyle.txtWarnGray}>{userInfo.regNum}</Text>
                            </View>
                        </View>
                        <View style={MainStyle.listContainer}>
                            <List
                                onPress={() => navigation.navigate('UserInfo')}
                                title={'Хувийн мэдээлэл'}
                                icon={Images.usertag}
                            />
                            <List
                                onPress={() => navigation.navigate('loanHistory')}
                                title={'Зээлийн түүхүүд'}
                                icon={Images.loanhistory}
                            />
                            <List
                                onPress={() => navigation.navigate('faq')}
                                title={'Асуулт, хариулт'}
                                icon={Images.QAico}
                            />
                            <List
                                onPress={() => navigation.navigate('settings')}
                                title={'Тохиргоо'}
                                icon={Images.settings}
                            />
                            <List
                                onPress={() => navigation.navigate('help')}
                                title={'Тусламж'}
                                icon={Images.helpico}
                            />
                            <View style={MainStyle.listItemBr}>
                                <TouchableOpacity style={MainStyle.listItem} onPress={() => showLogoutAlert()}>
                                    <View style={MainStyle.listItemContainer}>
                                        <View style={MainStyle.iconCon}>
                                            <Icon style={MainStyle.iconBefore} name="door-open" />
                                        </View>
                                        <Text style={MainStyle.txtTitle}>Гарах</Text>
                                    </View>
                                    <View>
                                        <Image style={MainStyle.iconBefore1} source={Images.rightarrow} resizeMode="contain" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


const profile = StyleSheet.create({
    profileContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
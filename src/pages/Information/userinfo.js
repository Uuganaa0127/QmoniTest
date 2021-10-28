import React, { useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MainStyle from '../../components/styles/MainStyle';

export default function UserInfo({ navigation }) {
    const [accessToken, setaccessToken] = useState(null);
    const [uderId, setuserId] = useState(null);
    const [userInfo, setuserInfo] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // componentWillMount() {
    //     SInfo.getItem('access_token', {}).then(value => {
    //         if (value) {
    //             SInfo.getItem('user_id', {}).then(value1 => {
    //                 if (value1 != '' && value1 != null) {
    //                     this.setState({ accessToken: value, userId: value1 });
    //                     this.fetchUserInfo();
    //                 } else {
    //                     SInfo.deleteItem('access_token', {});
    //                     Actions.IndexMain();
    //                 }
    //             });
    //         } else {
    //             Actions.IndexMain();
    //         }
    //     });
    // }
    // fetchUserInfo() {
    //     BaseService.getUserInfo(this.state.userId)
    //         .then((responseJson) => {
    //             if (responseJson && responseJson.person) {
    //                 let userInfo = {
    //                     id: responseJson.id,
    //                     lastName: responseJson.person.lastName,
    //                     firstName: responseJson.person.firstName,
    //                     regNum: responseJson.person.registerNumber,
    //                     mobileNum: responseJson.mobileNumber,
    //                     address: responseJson.person.addressText,

    //                     refRelation: responseJson.person.refRelation,
    //                     refName: responseJson.person.refName,
    //                     refMobileNumber: responseJson.person.refMobileNumber,
    //                 };
    //                 // this.setState({ userInfo: userInfo, isLoading: false });
    //                 this.setState({ userInfo: userInfo }, () => { this.fetchBankInfo() });
    //             }
    //         })
    //         .catch((error) => {
    //             this.setState({ isLoading: false });
    //             Helper.showSimpleAlert('Алдаа', error);
    //         });
    // }
    // fetchBankInfo() {
    //     BaseService.getUserBank(this.state.userId)
    //         .then((responseJson) => {
    //             if (responseJson[0]) {
    //                 this.setState({ userBankAccountNumber: responseJson[0].accountNumber, isLoading: false });
    //             } else {
    //                 // Хэрэглэгч банкны дансаа устгасан эвсэл үүсгээгүй
    //                 this.setState({ isLoading: false });
    //             }
    //         })
    //         .catch((error) => {
    //             this.setState({ isLoading: false });
    //             Helper.showSimpleAlert('Алдаа', error);
    //         });
    // }

    return (
        <View style={MainStyle.mainContainer}>
            {/* <Loader isLoading={isLoading} /> */}
            <View style={[MainStyle.scrollContainer, MainStyle.scrollContainerFull]}>
                <ScrollView>
                    <View >
                        <View style={MainStyle.listContainer}>
                            <View style={[MainStyle.listItemBr, { borderTopColor: '#e6e6e6', borderTopWidth: 1, }]}>
                                <TouchableOpacity style={MainStyle.listItem} onPress={() => navigation.navigate('infoMain')}>
                                    <View style={MainStyle.listItemContainer}>
                                        <View style={MainStyle.iconCon}>
                                            <Icon style={MainStyle.iconBefore} name="user" />
                                        </View>
                                        <Text style={MainStyle.txtTitle}>Үндсэн мэдээлэл</Text>
                                    </View>
                                    <View>
                                        <Icon style={MainStyle.iconAfter} name="chevron-right" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={MainStyle.listItemBr}>
                                <TouchableOpacity style={MainStyle.listItem} onPress={() => navigation.navigate('infoAdditional')}>
                                    <View style={MainStyle.listItemContainer}>
                                        <View style={MainStyle.iconCon}>
                                            <Icon style={MainStyle.iconBefore} name="file-alt" />
                                        </View>
                                        <Text style={MainStyle.txtTitle}>Нэмэлт мэдээлэл</Text>
                                    </View>
                                    <View>
                                        <Icon style={MainStyle.iconAfter} name="chevron-right" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={MainStyle.listItemBr}>
                                <TouchableOpacity style={MainStyle.listItem} onPress={() => navigation.navigate('infoAddress')}>
                                    <View style={MainStyle.listItemContainer}>
                                        <View style={MainStyle.iconCon}>
                                            <Icon style={MainStyle.iconBefore} name="map-marker-alt" />
                                        </View>
                                        <Text style={MainStyle.txtTitle}>Хаяг</Text>
                                    </View>
                                    <View>
                                        <Icon style={MainStyle.iconAfter} name="chevron-right" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={MainStyle.listItemBr}>
                                <TouchableOpacity style={MainStyle.listItem} onPress={() => navigation.navigate('infoOther')}>
                                    <View style={MainStyle.listItemContainer}>
                                        <View style={MainStyle.iconCon}>
                                            <Icon style={MainStyle.iconBefore} name="address-card" />
                                        </View>
                                        <Text style={MainStyle.txtTitle}>Бусад мэдээлэл</Text>
                                    </View>
                                    <View>
                                        <Icon style={MainStyle.iconAfter} name="chevron-right" />
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

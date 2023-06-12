import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import Ionicons from 'react-native-vector-icons/Ionicons';


const HeaderView = styled.View`
    flexDirection : row;
    gap: 20px;
    justifyContent: flex-end;

`
const Wrapper = styled.View`
    ${'' /* flex : 1; */}
    width : 100px;
    flexDirection : row;
    gap: 20px;
`

export const NavBarCom = ( {navigation }) => {
    return (
        
        <HeaderView>
        <Wrapper>
                <TouchableOpacity onPress ={ () => navigation.navigate('Notifications')}>
                    <Ionicons name="notifications-outline" size={'20px'} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity onPress ={ () => navigation.navigate('settings')}>
                    <Ionicons name="settings-outline" size={'20px'} color={'black'} />
                </TouchableOpacity>
            </Wrapper>
        </HeaderView>
    );
};
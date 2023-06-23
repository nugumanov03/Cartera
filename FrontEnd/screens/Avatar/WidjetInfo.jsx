import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'


const WidjetInfoView = styled.View`
flex-direction: column;
gap: 16px;
`

const Row = styled.View`
flex-direction : row;
gap:12px;
`

const LeftBox = styled.View`
    width: 141px;
    height: 61px;
    border-radius: 20px;
    border: 1px solid #936EE3;
    background: #FFF;

    justify-content: center;
align-items: center;
`

const LeftTitle = styled.Text`
color: #936EE3;
text-align: center;
font-size: 16px;
font-family: Quicksand;
font-weight: 700;
line-height: 40px;
letter-spacing: 1.6px;
text-transform: lowercase;



`
const RightTitle = styled.Text`
color: #936EE3;
text-align: center;
font-size: 16px;
font-family: Quicksand;
font-weight: 700;
line-height: 40px;
letter-spacing: 1.6px;
text-transform: lowercase;
`
const BottomTitle = styled.Text`
color: #FFF;
font-size: 16px;
font-family: Quicksand;
font-weight: 700;
`
const RightBox = styled.View`
    width: 191px;
    height: 61px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #5671FF;
    background: #FFF;

    justify-content: center;
align-items: center;
`

const BottomBox = styled.View`
width: 344px;
height: 46px;
flex-shrink: 0;
border-radius: 15px;
background: #2A48D4;

justify-content: center;
align-items: center;
`
export const WidjetInfo = ( {navigation }) => {
    return (
      <WidjetInfoView>
        <Row>
            <LeftBox>
                <LeftTitle>
                    14 lvl
                </LeftTitle>
            </LeftBox>
            <RightBox>
                <RightTitle>
                20236 pts
                </RightTitle>
            </RightBox>
        </Row>
        <BottomBox>
            <BottomTitle>
                Earn points
            </BottomTitle>
        </BottomBox>
      </WidjetInfoView>

    );
};
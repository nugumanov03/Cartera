import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'



const WidjetTasksView =  styled.View`
flexDirection: column;
${'' /* background: #2A48D4; */}
`
const TasksWrapper =  styled.View`

flexDirection: column;
${'' /* background: #2A48D4; */}

gap:23px;
`

const TaskWr =  styled.View`

width: 344px;
height: 71px;

border-radius: 20px;
background: #DFDFDF;



align-items: center;
justify-content: center;

`
const TaskInfo =  styled.View`

flexDirection: column;
justify-content: center;
${'' /* align-items: center; */}
gap: 3px;
`

const Row = styled.View`
width: 100%;
flex-direction: row;

align-items: center;
justify-content: space-between;
`

const InfoLeft = styled.View`
flex-direction: row;
justify-content: flex-start;
gap:7px;

margin-left: 15px;
`
const TaskLogo = styled.Image`
width: 50px;
height: 50px;
flex-shrink: 0;
border-radius: 50px;

`

const TaskTitile = styled.Text`
color: #000;
font-size: 16px;
${'' /* font-family: Quicksand; */}
font-weight: 600;
`
const TaskPoint = styled.Text`
color: #363853;
font-size: 16px;
${'' /* font-family: Quicksand; */}
font-weight: 500;
`

const InfoRight = styled.View`
    flex-direction : row;
    align-items: center;
    justify-content : center;

    padding-right: 27px;
`
const PlusBtn = styled.Image`
width: 24px;
height: 24px;
flex-shrink: 0;
`


const PlusBtnimg = require('../..//public/img/plus-btn.png')
const TaskLogoImg = require('../..//public/img/arthouse_logo.png')

export const WidjetTasks = ( {navigation }) => {
    return (
        <WidjetTasksView>
        <Text>Top Tasks</Text>

     <TasksWrapper>

         <TaskWr>
             <Row>
                 <InfoLeft>
                     <TaskLogo  source={TaskLogoImg}/>

                  
                     <TaskInfo>
                         <TaskTitile>
                         Volunteering
                         </TaskTitile>
                         <TaskPoint>
                         300p
                         </TaskPoint>
                     </TaskInfo>
                 </InfoLeft>
                 <InfoRight>
                     <PlusBtn source={PlusBtnimg} />
                 </InfoRight>
             </Row>
         </TaskWr>


         <TaskWr>
             <Row>
                 <InfoLeft>
                     <TaskLogo  source={TaskLogoImg}/>

                  
                     <TaskInfo>
                         <TaskTitile>
                         Volunteering
                         </TaskTitile>
                         <TaskPoint>
                         300p
                         </TaskPoint>
                     </TaskInfo>
                 </InfoLeft>
                 <InfoRight>
                     <PlusBtn source={PlusBtnimg} />
                 </InfoRight>
             </Row>
         </TaskWr>


     </TasksWrapper>

</WidjetTasksView>

    );
};
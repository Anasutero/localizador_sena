import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Inicial} from '../telas/Inicial'
import {Usuarios} from '../telas/Usuarios'
import {AmbientesEquipamentos} from '../telas/AmbientesEquipamentos'
import {House} from 'phosphor-react-native'
import {User} from 'phosphor-react-native'
import {ArrowsInCardinal} from 'phosphor-react-native'

const {Navigator,Screen} = createBottomTabNavigator()


export function RotasTab(){
    return(

        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#fff',
            tabBarInactiveTintColor:'#6c757d',
            tabBarStyle:{
                backgroundColor:'#4f030a',
                borderTopColor:0,
                paddingBottom:14,
                paddingTop:14
            }
            }}>

            <Screen
            name='inicial'
            component={Inicial}
            options={{
                tabBarIcon:({color, size}) => (
                    <House color={color} size={size}/>

                )
            }}
            />

            <Screen
            name='usuarios'
            component={Usuarios}
            options={{
                tabBarIcon:({color, size}) => (
                    <User color={color} size={size}/>

                )
            }}
            />

            <Screen
            name='ambiente'
            component={AmbientesEquipamentos}
            options={{
                tabBarIcon:({color, size}) => (
                    <ArrowsInCardinal color={color} size={size}/>

                )
            }}
            />


           
        </Navigator>

    )
}
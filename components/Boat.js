import React from 'react';
import { Text, View, Image,ScrollView,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor:'#d3d3d3',
        marginTop:30,
        paddingTop:40,
        paddingBottom:20,
        margin:10,
        borderWidth:1,
    },
    title:{
        flex:1,
        justifyContent:'center',
        flexDirection: 'row',
        backgroundColor:'#5d5c5c',
        paddingTop:5,
        paddingBottom:5,
        width:'100%',
    },
    description:{
        backgroundColor:'white',
        padding:5,
        borderWidth:1,
        marginLeft:20,
        marginRight:20,
    },
    image:{
        width:350,
        height:300,
    }

})
const Boats=({title, des, icon_name, poster})=>{
    return (
        <View style={[styles.container,{ marginTop: 20}]}>
            <View style={styles.title}>
                <Icon name={icon_name} size={30} color="whitesmoke" />
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color:"whitesmoke" }}>
                    {title}
                </Text>
            </View>
            <Text style={[styles.description,{ marginTop: 20, marginBottom: 20}]}>
                {des}
            </Text>
            <Image source={poster} style={[styles.image]}/>

        </View>
    )
}

const AllBoats=()=>{
    return(
        <ScrollView>
            <Boats title="Sea Ray 500 Sundancer" des="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="sailboat" poster={require('../img/sea_ray.jpg')}/>
            <Boats title="Four Winns Horizon 180" des="A sporty look and refined details truly set the Horizon 180 above all others." icon_name="sailboat" poster={require('../img/four_winns.jpg')}/>
            <Boats title="Flipper 640 ST" des="A modern take on the classic, traditional hardtop and perfect for a family picnic." icon_name="sailboat" poster={require('../img/flipper.jpg')}/>
            <Boats title="Princess V48" des="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." icon_name="sailboat" poster={require('../img/princess.jpg')}/>
            <Boats title="Bayliner 175 Bowrider" des="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." icon_name="sailboat" poster={require('../img/bayliner.jpg')}/>
            <Boats title="Fairline Targa 47" des="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." icon_name="sailboat" poster={require('../img/fairline.jpg')}/>
        </ScrollView>
    )
}


export default AllBoats;

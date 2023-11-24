import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [selectedName, setSelectedName] = useState(null);
  const [memberDetails,setMemberDetails] = useState(false)

  const openMemberMenu = ()=>{
    setMemberDetails(!memberDetails)
  }

  
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

 

  const handleReset = () => {
    setCount(0);
    setSelectedName(null); // Reset the selectedName when resetting the counter
  };
  const handleNameClick = (item) => {
    if (selectedName && selectedName.name === item.name) {
      // If the clicked name is the same as the selected one, clear the selection
      setSelectedName(null);
    } else {
      // Otherwise, set the clicked name as the selected one
      setSelectedName(item);
    }
  };
  const data = [
    { name: 'Ammar', image: require('./assets/mine.jpeg'), description: 'Group Leader' },
    { name: 'Ahmad', image: require('./assets/ahmad.jpeg'), description: 'Member' },
    { name: 'Suleman', image: require('./assets/suleman.jpeg'), description: 'Member' },  
    { name: 'Hassan', image: require('./assets/hassan.jpeg'), description: 'Member' }, 
  ];

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Button title={item.name} onPress={() => handleNameClick(item)} />
    </View>
  );


  return (
    <>
    <ScrollView>  
      <View style={styles.container}>
      <View>
        <Text style={styles.appName}>Counter App</Text>
      </View>
      <View>    
        <Text style={styles.memberMenu} onPress={openMemberMenu} >Group Members 👇</Text>    
        
      </View>
      {
          memberDetails && (
            <>
            <View style={styles.randomDiv}>
        <View style={styles.memberList}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            horizontal={true}
          />
        </View>
      </View>
            </>
          )
        }
      
        <View  style={styles.counterArea}>
        <Text style={styles.addArea} onPress={handleAdd}>
          
        </Text>
        <Text style={styles.counterText} >{count}</Text>
        <Text style={styles.subArea} onPress={handleSubtract}>
          
          </Text>
        </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.customBtn} onPress={handleAdd} >+</Text>
        <Text style={styles.customBtn} onPress={handleSubtract} >-</Text>
      </View>
      <Button title="Reset" onPress={handleReset} />
    </View>
    {selectedName && (
      <>       
        <View style={styles.description}>
          <Image source={selectedName.image} style={styles.image} />
          <Text style={styles.descriptionText}>{selectedName.description}</Text>
        </View>
       
        </>
      )}
      
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  details:{
       color:'white',
       fontSize : 20

  },
  addArea:{
      width:'30%',
     
  },
  subArea:{
    width:'30%',
  
},
  counterArea:{
   
    width:'100%',
    flexDirection:'row'

  },
  memberMenu:{
     color:'black',
     height:50,
     width:200,
     borderWidth:2,
     textAlign:'center',    
     paddingTop:10,
     borderColor:'white',
     borderRadius:30,
     backgroundColor:'white',     
     textTransform:'capitalize'
  },

  customBtn:{
    color:'white',
    backgroundColor:'white',
    color:'black',
    width:60,
    height:60,
    borderRadius:60,
    fontSize:30,
    display:'flex',
    textAlign:'center',
  },
  descriptionText:{
    color:'white'
  },
  appName:{
      fontSize:50,   
      color:'white'   
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'black',   
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  image: {
    width: 190,
    height: 350,
  },
  randomDiv: {
    width: 384,
    height: 70,
  position:'fixed',
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    gap:6,
    backgroundColor:'black',
    height:838
  },
  counterText: {
    fontSize: 50,
    color: 'white',
    backgroundColor:'black',
    textAlign: 'center',
    padding: 30,
    width:'40%',
    
   
    
  },
  buttonContainer: {
   
    width: 387,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    gap: 70,
  },
});

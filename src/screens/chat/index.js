import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonComponent from '../../components/ButtonComponent';
import {TEXT_PARA_BOLD} from '../../constant/TextStyles';
import {PRIMARY_COLOR, MIRAGE} from './../../constant/Color';
import Message from './component/Message';
import FirestoreDB from './firebase/index'

export default function ChatScreen({navigation, route}) {

  const [chatMsg, setchatMsg] = useState([])
  const [roomId, setroomId] = useState(route.params.roomId)


  useEffect(() => {
    const messagesListener =FirestoreDB.groupChatMessageListener(
      roomId,
      snapListener,
    );
    // chatListRef.scrollToEnd();
    return () => messagesListener();
  }, []);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  const snapListener = (res) => {
    setchatMsg([...res.docs.reverse()]);
  };
  // useEffect(() => {
  //   FirestoreDB.getGroupChatMsg(roomId).
  //   then(e=>{ setchatMsg(e.docs)
  //     console.log("okk",e.docs)})
  //   .catch(e=>console.log('failed'))
  +

16  // }, [])

  const [inputMessage, setInputMessage] = useState('');


  const handleBack=()=>{
    navigation.pop()
  }

  const handleSendMsg = () => {
    const message =inputMessage;
    if (message === null || message == '' || message == undefined) {
      return null;
    } else {
      const data = {

        sentAt:  new Date().valueOf(),
        sender: {
          image: '',
          userId: 22,
          userName: "dev inikhiya",
          profileId:"devinikhiya",
          isAdmin:true
        },
        data: inputMessage,
        type: 'msg',
      };
      console.log(data);
      FirestoreDB.sendMsgToGroupChat(roomId, data)
        .then((res) => console.log('chala gy'))
        .catch((res) => console.log(res));
      // setreplying()
      // setmsgText();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
        <ButtonComponent
        hasIcon
        onPressAction={()=>handleBack()}
        bouncy
        hasText={false}
        styling={{
          height:30,
          width:30,
  
        }}
        iconCode="angle-left"
        iconSet={"FontAwesome"}
        iconSize={28}
        iconColor={"#FFF"}
        />
        
          <Text style={TEXT_PARA_BOLD}>My Chatroom</Text>
        </View>
        <FlatList
          style={{backgroundColor: '#000'}}
          inverted={true}
          showsHorizontalScrollIndicator={false}
          data={chatMsg}
          renderItem={({item}) => <Message item={item._data} />}
        />

        <View style={{paddingVertical: 10}}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Message"
              value={inputMessage}
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                handleSendMsg();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                handleSendMsg();
              }}>
              <FontAwesome name="send" type="material" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 15,
    backgroundColor: MIRAGE,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

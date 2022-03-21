
import firestore from '@react-native-firebase/firestore';
class FirestoreDB {
  constructor() {
    this.datafirestore = firestore();
    
  }

  // group chat handlers
  getGroupChatRoom = (id) =>
    this.datafirestore.collection('bgmiGroupChats').doc(`${id}`).get();


  getGroupChatMsg = (id) =>
    this.datafirestore
      .collection('bgmiGroupChats')
      .doc(`${id}`)
      .collection('messages')
      .orderBy('sentAt', 'asc')
      .get();

  sendMsgToGroupChat = (id, data) =>
    this.datafirestore
      .collection('bgmiGroupChats')
      .doc(`${id}`)
      .collection('messages')
      .add(data);

  groupChatMessageListener = (id, callBack) =>
    this.datafirestore
      .collection('bgmiGroupChats')
      .doc(`${id}`)
      .collection('messages')
      .orderBy('sentAt', 'asc')
      .limitToLast(15)
      .onSnapshot((querySnapshot) => callBack(querySnapshot));

  getGroupPreviousConversation = (id, startAt) =>
    this.datafirestore
      .collection('bgmiGroupChats')
      .doc(`${id}`)
      .collection('messages')
      .orderBy('sentAt', 'asc')
      .endBefore(startAt)
      .get();
}

export default new FirestoreDB();
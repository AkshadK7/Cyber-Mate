import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyD56GDYSwOTmLWYQmt-PmwPhlv5WyyTeyY",
    authDomain: "cybermate-app.firebaseapp.com",
    projectId: "cybermate-app",
    storageBucket: "cybermate-app.appspot.com",
    messagingSenderId: "549820436805",
    appId: "1:549820436805:web:2ff24d1cea60b1ee332e2c"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1><span class="glyphicon glyphicon-phone" style={{color: "yellow"}}></span>CyberMate</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className = "Signin">
      <h2 style={{color: "whitesmoke"}}>Welcome to CyberMate!</h2>
      {/* <p style={{paddingLeft: '7vw'}}>Sign in to Get Started!</p> */}
      <button className="sign-in" style={{color:'yellow', backgroundColor: 'black', fontSize: "20px"}} onClick={signInWithGoogle}>Sign in with Google</button>

      <footer> 
      <div className="copyright"  style={{color: "whitesmoke"}}>
            &#60; Made by{" "}
              <a 
                href="https://akshad.netlify.app"
                target="_blank"
                style={{color: "yellow"}}
              >
                Akshad
              </a>{" "}
              for a better web /&#62;
            </div>
       </footer>
    </div>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button style={{fontSize: "15px"}} className="sign-out" onClick={() => auth.signOut()}>Sign Out  <span class="glyphicon glyphicon-log-out"></span></button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say Something Nice" />

      <button style={{color: "yellow"}} type="submit" disabled={!formValue}><span style={{fontSize: "30px"}} class="glyphicon glyphicon-send"></span></button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;
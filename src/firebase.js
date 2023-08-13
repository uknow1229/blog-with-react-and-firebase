import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyATXtNzoewy71qSce4QUQcQRP3fMVDrbhw',
  authDomain: 'blog-7831e.firebaseapp.com',
  projectId: 'blog-7831e',
  storageBucket: 'blog-7831e.appspot.com',
  messagingSenderId: '342208502975',
  appId: '1:342208502975:web:309d70172eb07b899eba0a',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('auth', auth);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

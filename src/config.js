const config = {
  db: {
    firebaseConfig: {
      apiKey: process.env.REACT_APP_FB_API_KEY,
      authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FB_APP_ID
    }
  },
  unsplash: {
    apiKey: process.env.REACT_APP_UNSPLASH_API_KEY
  }
};

export default config;

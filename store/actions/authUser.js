import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const LOGOUT = "LOGOUT";
export const RETRIEVE_DATA = "RETRIEVE_DATA";

export const signup = (email, password) => {
  return async (dispatch) => {
    const data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgMhO8YGlkT9iXeRfQinqshwFtQJV9bE4",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    console.log(data);
    dispatch({
      type: SIGNUP,
      token: data.data.idToken,
      userId: data.data.localId,
    });
    saveData(data.data.idToken, data.data.localId);
  };
};

export const signin = (email, password) => {
  return async (dispatch) => {
    const data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgMhO8YGlkT9iXeRfQinqshwFtQJV9bE4",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    dispatch({
      type: SIGNIN,
      token: data.data.idToken,
      userId: data.data.localId,
    });
    saveData(data.data.idToken, data.data.localId);
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

const saveData = (token, userId) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
    })
  );
};

export const retrieveData = () => {
  return async (dispatch) => {
    try {
      const data = await AsyncStorage.getItem("userData");
      const myData = JSON.parse(data);
      console.log(myData);
      dispatch({
        type: RETRIEVE_DATA,
        token: myData.token,
        userId: myData.userId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

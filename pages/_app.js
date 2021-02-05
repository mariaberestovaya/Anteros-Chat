import "../styles/globals.css";
// import { useStore } from "../store";
import { Provider } from "react-redux";
import store from "./../redux/redux-store";

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

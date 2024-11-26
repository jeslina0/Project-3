import React from "react";
const Context = React.createContext({});
import Context from "./Context";
export default Context;
const withContext = WrappedComponent => {
    const WithHOC = props => {
      return (
        <Context.Consumer>
          {context => <WrappedComponent {...props} context={context} />}
        </Context.Consumer>
      );
    };
    return WithHOC;
  };
  export default withContext;
  import withContext from "../withContext";

const Cart = props => {
};
export default function Login() {
  return <>Login</>
}
export default function AddProduct() {
    return <>AddProduct</>
  }
  export default function Cart() 
    return <>Cart</>
  }
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

// import { BasicTypes } from "./typescript/BasicTypes";
// import { ObjectLiterals } from "./typescript/
// import { Counter } from "./components/Counter";
// import { BasicFunctions } from "./typescript/BasicFunctions";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5"> Vite + React</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        <LoginPage />
      </div>
    </AuthProvider>
  );
}

export default App;

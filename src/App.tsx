// import Navbar from "./components/navbar/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ReduxProvider from "./providers/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <div className="w-full max-w-screen-2xl m-auto px-3">
        <header>
          <h1 className="text-center font-semibold text-2xl">Task Manager</h1>
        </header>
        <main className="container max-w-5xl mx-auto">
          <TaskForm />
          <TaskList />
        </main>
      </div>
    </ReduxProvider>
  );
}

export default App;

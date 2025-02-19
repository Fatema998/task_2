import Income from "./Income";
import Expensive from "./Expensive";
import Balance from "./Balance";
import SubmissionForm from "./SubmissionForm";

const App = () => {
  return (
    <div className="app-container p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-teal-600">
        Finance Tracker
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <Balance />
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <Income />
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <Expensive />
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <SubmissionForm />
        </div>
      </div>
    </div>
  );
};

export default App;

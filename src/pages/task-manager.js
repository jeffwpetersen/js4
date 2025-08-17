import * as React from "react"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

// markup
const TaskManagerPage = () => {
  // No need for custom Tailwind config as we're using the project's configuration

  // State for tasks
  const [houseTasks, setHouseTasks] = useState([
    "Repair insulation under the house",
    "Move router and install plug"
  ]);
  const [ashWebsiteTasks, setAshWebsiteTasks] = useState([
    "Created detailed design system",
    "Make react page"
  ]);
  const [ashBusinessTasks, setAshBusinessTasks] = useState([
    "Get tax number",
    "Get checking account"
  ]);
  const [jobTasks, setJobTasks] = useState([
    "Rewrite resumes",
    "Apply for jobs"
  ]);
  const [juniperTasks, setJuniperTasks] = useState([
    "Update portfolio"
  ]);

  // State for input fields
  const [newHouseTask, setNewHouseTask] = useState("");
  const [newAshWebsiteTask, setNewAshWebsiteTask] = useState("");
  const [newAshBusinessTask, setNewAshBusinessTask] = useState("");
  const [newJobTask, setNewJobTask] = useState("");
  const [newJuniperTask, setNewJuniperTask] = useState("");

  // Handle form submissions
  const handleHouseSubmit = (e) => {
    e.preventDefault();
    if (newHouseTask.trim()) {
      setHouseTasks([...houseTasks, newHouseTask]);
      setNewHouseTask("");
    }
  };

  const handleAshWebsiteSubmit = (e) => {
    e.preventDefault();
    if (newAshWebsiteTask.trim()) {
      setAshWebsiteTasks([...ashWebsiteTasks, newAshWebsiteTask]);
      setNewAshWebsiteTask("");
    }
  };

  const handleAshBusinessSubmit = (e) => {
    e.preventDefault();
    if (newAshBusinessTask.trim()) {
      setAshBusinessTasks([...ashBusinessTasks, newAshBusinessTask]);
      setNewAshBusinessTask("");
    }
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    if (newJobTask.trim()) {
      setJobTasks([...jobTasks, newJobTask]);
      setNewJobTask("");
    }
  };

  const handleJuniperSubmit = (e) => {
    e.preventDefault();
    if (newJuniperTask.trim()) {
      setJuniperTasks([...juniperTasks, newJuniperTask]);
      setNewJuniperTask("");
    }
  };

  // Handle task deletion
  const deleteHouseTask = (index) => {
    const updatedTasks = [...houseTasks];
    updatedTasks.splice(index, 1);
    setHouseTasks(updatedTasks);
  };

  const deleteAshWebsiteTask = (index) => {
    const updatedTasks = [...ashWebsiteTasks];
    updatedTasks.splice(index, 1);
    setAshWebsiteTasks(updatedTasks);
  };

  const deleteAshBusinessTask = (index) => {
    const updatedTasks = [...ashBusinessTasks];
    updatedTasks.splice(index, 1);
    setAshBusinessTasks(updatedTasks);
  };

  const deleteJobTask = (index) => {
    const updatedTasks = [...jobTasks];
    updatedTasks.splice(index, 1);
    setJobTasks(updatedTasks);
  };

  const deleteJuniperTask = (index) => {
    const updatedTasks = [...juniperTasks];
    updatedTasks.splice(index, 1);
    setJuniperTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <html lang="en" />
        <title>Task Manager</title>
        <meta name="description" content="Personal task management system" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Helmet>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Task List</h1>
          <Link to="/" className="text-theme-color hover:text-theme-dark">Back to Home</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* HOUSE Section */}
        <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-theme-color px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">HOUSE</h2>
                </div>
                <div className="p-6">
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                            {houseTasks.map((task, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{task}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button 
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => deleteHouseTask(index)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Add Task Form for HOUSE */}
                    <form className="mt-4 flex" onSubmit={handleHouseSubmit}>
                        <input 
                            type="text" 
                            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-theme-color" 
                            placeholder="Add new HOUSE task..." 
                            value={newHouseTask}
                            onChange={(e) => setNewHouseTask(e.target.value)}
                        />
                        <button type="submit" className="bg-theme-color text-white px-4 py-2 rounded-r-lg hover:bg-theme-dark">Add</button>
                    </form>
                </div>
            </div>
        </section>

        {/* ASH AND HICKORY Section */}
        <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-theme-color px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">ASH AND HICKORY</h2>
                </div>
                <div className="p-6">
                    {/* WEBSITE Subsection */}
                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">WEBSITE</h3>
                        <table className="min-w-full divide-y divide-gray-200 mb-4">
                            <tbody className="bg-white divide-y divide-gray-200">
                                {ashWebsiteTasks.map((task, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{task}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button 
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => deleteAshWebsiteTask(index)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Add Task Form for WEBSITE */}
                        <form className="flex" onSubmit={handleAshWebsiteSubmit}>
                            <input 
                                type="text" 
                                className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-theme-color" 
                                placeholder="Add new WEBSITE task..." 
                                value={newAshWebsiteTask}
                                onChange={(e) => setNewAshWebsiteTask(e.target.value)}
                            />
                            <button type="submit" className="bg-theme-color text-white px-4 py-2 rounded-r-lg hover:bg-theme-dark">Add</button>
                        </form>
                    </div>

                    {/* BUSINESS TASKS Subsection */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">BUSINESS TASKS</h3>
                        <table className="min-w-full divide-y divide-gray-200 mb-4">
                            <tbody className="bg-white divide-y divide-gray-200">
                                {ashBusinessTasks.map((task, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{task}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button 
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => deleteAshBusinessTask(index)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Add Task Form for BUSINESS TASKS */}
                        <form className="flex" onSubmit={handleAshBusinessSubmit}>
                            <input 
                                type="text" 
                                className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-theme-color" 
                                placeholder="Add new BUSINESS TASKS task..." 
                                value={newAshBusinessTask}
                                onChange={(e) => setNewAshBusinessTask(e.target.value)}
                            />
                            <button type="submit" className="bg-theme-color text-white px-4 py-2 rounded-r-lg hover:bg-theme-dark">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* JOB Section */}
        <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-theme-color px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">JOB</h2>
                </div>
                <div className="p-6">
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                            {jobTasks.map((task, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{task}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button 
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => deleteJobTask(index)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Add Task Form for JOB */}
                    <form className="mt-4 flex" onSubmit={handleJobSubmit}>
                        <input 
                            type="text" 
                            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-theme-color" 
                            placeholder="Add new JOB task..." 
                            value={newJobTask}
                            onChange={(e) => setNewJobTask(e.target.value)}
                        />
                        <button type="submit" className="bg-theme-color text-white px-4 py-2 rounded-r-lg hover:bg-theme-dark">Add</button>
                    </form>
                </div>
            </div>
        </section>

        {/* JUNIPER STUDIO Section */}
        <section>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-theme-color px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">JUNIPER STUDIO</h2>
                </div>
                <div className="p-6">
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                            {juniperTasks.map((task, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{task}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button 
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => deleteJuniperTask(index)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Add Task Form for JUNIPER STUDIO */}
                    <form className="mt-4 flex" onSubmit={handleJuniperSubmit}>
                        <input 
                            type="text" 
                            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-theme-color" 
                            placeholder="Add new JUNIPER STUDIO task..." 
                            value={newJuniperTask}
                            onChange={(e) => setNewJuniperTask(e.target.value)}
                        />
                        <button type="submit" className="bg-theme-color text-white px-4 py-2 rounded-r-lg hover:bg-theme-dark">Add</button>
                    </form>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default TaskManagerPage;

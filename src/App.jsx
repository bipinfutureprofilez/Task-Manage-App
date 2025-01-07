import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import {
  Layout,
  Homepage,
  TaskManager,
  Error
} from './Pages/Index';
import TaskContextProvider from './Context/TasksContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Homepage />
        },
        {
          path: '/task-manager',
          element: <TaskManager />
        },
        {
          path: '*',
          element: <Error />
        }
      ]
    }
  ])
  return (
    <>
      <TaskContextProvider>
        <RouterProvider router={router} />
      </TaskContextProvider>
    </>
  )
}

export default App

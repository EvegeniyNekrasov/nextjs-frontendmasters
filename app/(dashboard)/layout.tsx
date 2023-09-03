import NewTodoFrom from '@/components/NewTodoForm';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>dashboard layout</h1>
      <div>
        <NewTodoFrom />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;

import TaskbarManager from '../../components/TaskbarManager';

const StaffManager = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TaskbarManager />
      <div style={{ marginLeft: '220px', padding: '24px', width: '100%' }}>
        <h1>Quản lý nhân sự</h1>
        <p>Đây là trang quản lý nhân sự.</p>
      </div>
    </div>
  );
};

export default StaffManager;

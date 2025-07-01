import TaskbarManager from '../../components/TaskbarManager';

const RevenueManager = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TaskbarManager />
      <div style={{ marginLeft: '220px', padding: '24px', width: '100%' }}>
        <h1>Quản lý doanh thu</h1>
        <p>Đây là trang quản lý doanh thu.</p>
      </div>
    </div>
  );
};

export default RevenueManager;

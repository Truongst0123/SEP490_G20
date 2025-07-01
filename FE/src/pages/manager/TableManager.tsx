import TaskbarManager from '../../components/TaskbarManager';

const TableManager = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TaskbarManager />
      <div style={{ marginLeft: '220px', padding: '24px', width: '100%' }}>
        <h1>Quản lý bàn</h1>
        <p>Đây là trang quản lý bàn.</p>
      </div>
    </div>
  );
};

export default TableManager;

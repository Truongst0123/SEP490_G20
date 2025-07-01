import TaskbarManager from '../../components/TaskbarManager';

const DishManager = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TaskbarManager />
      <div style={{ marginLeft: '220px', padding: '24px', width: '100%' }}>
        <h1>Quản lý món ăn</h1>
        <p>Đây là trang quản lý món ăn.</p>
      </div>
    </div>
  );
};

export default DishManager;

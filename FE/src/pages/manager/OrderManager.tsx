import TaskbarManager from '../../components/TaskbarManager';

const OrderManager = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TaskbarManager />
      <div style={{ marginLeft: '220px', padding: '24px', width: '100%' }}>
        <h1>Quản lý đơn hàng</h1>
        <p>Đây là trang quản lý đơn hàng.</p>
      </div>
    </div>
  );
};

export default OrderManager;

import TaskbarManager from '../../components/TaskbarManager';

const ReportManager = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TaskbarManager />
      <div style={{ marginLeft: '220px', padding: '24px', width: '100%' }}>
        <h1>Báo cáo</h1>
        <p>Đây là trang báo cáo.</p>
      </div>
    </div>
  );
};

export default ReportManager;

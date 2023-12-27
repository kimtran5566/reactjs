import React from 'react';

// Function component không sử dụng hook
function Clock(props) {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  // Khởi tạo state để lưu giữ thời gian
  const [currentTime, setCurrentTime] = React.useState(getCurrentTime());

  // Sử dụng setInterval để cập nhật thời gian mỗi giây
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Xóa interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array để đảm bảo useEffect chỉ chạy một lần sau khi mount

  return (
    <div>
      <h2>Thời gian hiện tại:</h2>
      <p>{currentTime}</p>
    </div>
  );
}

export default Clock;

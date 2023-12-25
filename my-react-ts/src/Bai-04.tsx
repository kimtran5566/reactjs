
  import React, { Component } from 'react';

  class BrowserInfo extends Component {
    constructor(props) {
      super(props);
  
      // Khởi tạo state
      this.state = {
        browserInfo: '',
      };
    }
  
    componentDidMount() {
      // Lấy thông tin user agent
      const userAgent = navigator.userAgent;
  
      // Kiểm tra xem trình duyệt là gì
      if (userAgent.indexOf('Chrome') !== -1) {
        this.setState({ browserInfo: 'Bạn đang sử dụng trình duyệt Chrome' });
      } else if (userAgent.indexOf('Firefox') !== -1) {
        this.setState({ browserInfo: 'Bạn đang sử dụng trình duyệt Firefox' });
      } else if (userAgent.indexOf('Safari') !== -1) {
        this.setState({ browserInfo: 'Bạn đang sử dụng trình duyệt Safari' });
      } else if (userAgent.indexOf('Edge') !== -1) {
        this.setState({ browserInfo: 'Bạn đang sử dụng trình duyệt Edge' });
      } else if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident') !== -1) {
        this.setState({ browserInfo: 'Bạn đang sử dụng trình duyệt Internet Explorer' });
      } else {
        this.setState({ browserInfo: 'Không thể xác định trình duyệt' });
      }
    }
  
    render() {
      return (
        <div>
          <p>{this.state.browserInfo}</p>
          {/* Hiển thị toàn bộ user agent để kiểm tra các thông tin khác */}
          <h4>User Agent: {navigator.userAgent}</h4>
        </div>
      );
    }
  }
  
  export default BrowserInfo;
  
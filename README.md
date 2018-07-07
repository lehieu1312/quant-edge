# quant-edge test
Mở terminal từ đường dẫn project chạy:

**npm install**
#
**npm start**
#
Sau đó, từ cửa sổ trình duyệt truy cập:
#
**localhost:3000**

Mô tả:

Ứng dụng khi lần đầu chạy, nó sẽ lấy dữ liệu từ tệp tin json có sẵn để hiển thị lên 2 tab Gainers và Losers, với Gainers là 20 bản ghi có value lớn nhất và Losers là 20 bản ghi có value nhỏ nhất.<br/>
Sau 5s, ứng dụng sẽ thay đổi Giá trong khoảng từ -5 -> +5 % so với giá hiện tại,và volume tăng trong khoảng từ 10 ->30. Sau đó ứng dụng sẽ tự tính lại top 20 Gainers và top 20 Losers để hiển thị cho người dùng.

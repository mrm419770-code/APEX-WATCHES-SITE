// مثال لاستخدامها عند ضغط زر الـ Submit في الفورم:
const result = login('admin@gmail.com', '000');

if (result.success) {
  // التوجيه حسب الدور (Role)
  if (result.user.role === 'admin') {
    window.location.href = 'admin-dashboard.html';
  } else {
    window.location.href = 'index.html';
  }
} else {
  alert(result.message); // إظهار الرسالة للمستخدم
}
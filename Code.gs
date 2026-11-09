/**
 * Toán Lớp 2 · máy chủ Google Apps Script
 * Web app chỉ có một trang, mọi phần tính toán chạy trên trình duyệt.
 */

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Toán Lớp 2 · Luyện tập')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** Nhúng nội dung một file .html vào trang (dùng <?!= include('Tên') ?>). */
function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}

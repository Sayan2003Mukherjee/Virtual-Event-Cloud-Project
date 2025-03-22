
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.email, data.phone]);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

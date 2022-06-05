const VITE_SUPABASE_URL = '<Insert Supabase URL>';
const VITE_SUPABASE_ANON_KEY = '<Insert Supabase Anon Key>';

const headers = [
  'name',
  'year',
  'email',
  'major',
  'description',
  'phone',
  'instagram',
  'linkedin',
  'interests',
  'expression',
];

function myFunction() {
  // clearEntireSpreadsheet();
  writeHeadersOnRow(3);
  const response = UrlFetchApp.fetch(`${VITE_SUPABASE_URL}/rest/v1/users_facebook_places?id=not.is.null`, {
    headers: {
      Apikey: VITE_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${VITE_SUPABASE_ANON_KEY}`,
    },
  });
  const data = JSON.parse(response.getContentText());
  Logger.log(data);

  // The following code is modified from https://stackoverflow.com/questions/17982546/google-script-json-into-google-sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  const rows = data.map((row) => {
    return headers.map((column) => (row.hasOwnProperty(column) ? row[column] : ''));
  });

  dataRange = sheet.getRange(4, 1, rows.length, rows[0].length);
  dataRange.setValues(rows);
}

function clearEntireSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  sheet.clear();
}

function writeHeadersOnRow(row) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  sheet.getRange(row, 1, 1, headers.length).setValues([headers]);
}

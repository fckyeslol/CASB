/**
 * CASB — Google Apps Script para guardar inscripciones en Google Sheets
 *
 * 1) Crea un Google Sheet (puede llamarse "CASB").
 * 2) Copia el ID del archivo desde la URL:
 *    https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit
 * 3) En script.google.com → Nuevo proyecto → pega este código.
 * 4) En el editor: Proyecto → Ajustes del proyecto → Propiedades del script → Añadir:
 *      SPREADSHEET_ID = (tu ID)
 *      FORM_SECRET   = (misma clave larga que pondrás en .env como VITE_GOOGLE_APPS_SCRIPT_SECRET)
 * 5) Guarda. Despliega: Implementar → Nueva implementación → Tipo "Aplicación web":
 *      - Ejecutar como: Yo
 *      - Quién tiene acceso: Cualquier usuario
 * 6) Copia la URL que termina en /exec y ponla en VITE_GOOGLE_APPS_SCRIPT_URL
 *
 * La pestaña se llamará "CASB". Si no existe, el script la crea.
 * Primera fila: encabezados (Fecha, Equipo, Colegio, ...).
 */

function doGet() {
  return ContentService.createTextOutput('CASB: aplicación web activa.');
}

function doPost(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var expectedSecret = props.getProperty('FORM_SECRET');
    var spreadsheetId = props.getProperty('SPREADSHEET_ID');

    var p = e.parameter;
    if (!expectedSecret || p.secret !== expectedSecret) {
      return HtmlService.createHtmlOutput('<html><body>Forbidden</body></html>');
    }
    if (!spreadsheetId) {
      return HtmlService.createHtmlOutput('<html><body>Falta SPREADSHEET_ID en propiedades del script</body></html>');
    }

    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName('CASB');
    if (!sheet) {
      sheet = ss.insertSheet('CASB');
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Fecha',
        'Equipo',
        'Colegio',
        'Líder',
        'Email',
        'Teléfono',
        'Miembros',
      ]);
    }

    var tz = ss.getSpreadsheetTimeZone() || 'America/Bogota';
    var fecha = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      fecha,
      p.teamName || '',
      p.school || '',
      p.leader || '',
      p.email || '',
      p.phone || '',
      p.members || '',
    ]);

    return HtmlService.createHtmlOutput('<html><body>OK</body></html>');
  } catch (err) {
    return HtmlService.createHtmlOutput(
      '<html><body>Error: ' + String(err) + '</body></html>',
    );
  }
}

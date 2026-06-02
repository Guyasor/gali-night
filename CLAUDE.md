# Gali Night — אתר אירוע סוף שנה אורט אורנית

## תיאור הפרויקט
אתר לאירוע סוף שנה של צוות המורות של **אורט אורנית** — "סוגרים שנה ומתחילים את הקיץ!".
האירוע מתקיים ב-22-23.6 במלון וורט לגון נתניה.

## קבצים
- `index.html` — כל האתר בקובץ HTML יחיד standalone (כולל לוגו ORT כ-base64)
- `ort-logo.jpeg` — לוגו ORT אורנית (מוטמע גם בתוך ה-HTML)
- `serve.ps1` — שרת PowerShell מקומי על פורט 8091

## אירוח
- **GitHub Pages:** https://guyasor.github.io/gali-night/
- **Repository:** https://github.com/Guyasor/gali-night
- **Branch:** main
- **Deploy:** כל `git push` לـ main → האתר מתעדכן תוך ~1 דקה

## דפים באתר
1. **לו"ז** — לוח זמנים של האירוע (22.6 + 23.6), סטטיסטיקות דינמיות
2. **חלוקת חדרים** — 17 זוגות + יחידים, לחיצה על שם מציגה טלפון
3. **הסעות** — חלוקה לאוטובוס/עצמאי/לא ידוע, drag&drop במצב אדמין
4. **תמונות** — גלריה עם העלאה, כיתוב, מחיקה, הורדה, שיתוף
5. **צ'אט** — צ'אט בזמן אמת בין המשתתפים

## מצב אדמין
- כפתור 🔐 בתחתית הדף
- **סיסמה:** `gali2026`
- מאפשר: עריכת טקסטים (contenteditable), עריכת/הוספת/מחיקת חדרים, עריכת/הוספת/מחיקת הסעות + drag&drop

## מקורות נתונים

### Google Sheets (חדרים + הסעות + טלפונים)
- **URL:** https://docs.google.com/spreadsheets/d/1hx8K_1OMbTKZU86UQHLxAIMA3JHMld0lq6rLO-X8Z4M
- **CSV endpoint:** `/export?format=csv&gid=0`
- **Fallback:** `api.allorigins.win` proxy לתיקון CORS במובייל
- **עמודות:** A=שם מלא, B=השתייכות, C=שותף לחדר, D=הסעה/עצמאי, E=טלפון

### Firebase (תמונות + צ'אט)
- **פרויקט:** `gali-night-df79f`
- **Console:** https://console.firebase.google.com → פרויקט gali-night
- **Storage:** תמונות בתיקיית `photos/`
- **Firestore collections:** `photos` (גלריה), `messages` (צ'אט)
- **SDK:** Firebase Compat v10.12.0 מ-CDN

### Firebase Config
```js
const firebaseConfig = {
  apiKey: "AIzaSyAQB9lmAQke04tMte_SekKJrOuXa5yrq0E",
  authDomain: "gali-night-df79f.firebaseapp.com",
  projectId: "gali-night-df79f",
  storageBucket: "gali-night-df79f.firebasestorage.app",
  messagingSenderId: "581346187316",
  appId: "1:581346187316:web:7d73541d5d8266fb0e1261"
};
```

## localStorage Keys
| Key | תוכן |
|---|---|
| `galiRooms` | מערך חדרים (type + people[]) |
| `galiTransport` | מערך הסעות (name + type) |
| `galiPhones` | מיפוי שם → טלפון |
| `galiEdits` | עריכות טקסט אדמין (contenteditable) |
| `galiChatName` | שם המשתמש בצ'אט |

## עדכון האתר
```powershell
cd "C:\Users\Guya\OneDrive - CityShob\Projects\Gali\Night Gali"
git add index.html
git commit -m "תאור השינוי"
git push
```

## קישורי Waze
- **נקודת יציאה** (קריית החינוך אורנית): https://waze.com/ul/hsv8ysrf3j
- **מלון וורט לגון נתניה**: https://waze.com/ul/hsv8zbburq

## עיצוב
- **צבעים:** ורוד `#c84b7a`, טורקיז `#2a7a6a`, רקע `#fff8f5`
- **פונט:** Heebo (Google Fonts)
- **ערכת אייקונים:** emoji בלבד
- **RTL עברית** מלא
- **Responsive** — מותאם מובייל

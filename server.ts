import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json());

// مسار الحوار الخلفي
app.get('/api/dialogue', (req, res) => {
  res.json({
    engineer: "أهلاً بك يا شيخ أبو قاسم، تم تجهيز وتعديل برمجيات فراطة الزيتون اليونانية الجديدة بأعلى كفاءة لتسريع العمل وتوفير الطاقة.",
    sheikh: "بارك الله فيكم يا بني، هذا ما كنا ننتظره لتسهيل موسم قطاف الزيتون وتخفيف الجهد الإجمالي للعمال إلكترونياً."
  });
});

// مسار فحص الحالة
app.get('/status', (req, res) => {
  res.json({ status: "online", project: "Olive Harvester", version: "1.2.0_optimized" });
});

// الصفحة الرئيسية المرئية (تصميم حمرا إلكترونيكس)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>حمرا إلكترونيكس - فراطة الزيتون</title>
        <style>
            body { background-color: #0c110a; color: #ffffff; font-family: sans-serif; text-align: center; padding: 20px; margin: 0; }
            .header { background-color: #172412; padding: 15px; border-radius: 10px; border: 1px solid #3c592b; margin-bottom: 30px; }
            .badge { background-color: #1e3d14; color: #8ee35d; padding: 8px 15px; border-radius: 20px; display: inline-block; font-size: 14px; margin-bottom: 20px; font-weight: bold; }
            h1 { color: #ffffff; font-size: 26px; line-height: 1.5; margin: 15px 0; }
            .highlight { color: #8ee35d; }
            p { color: #b3cbb4; font-size: 16px; line-height: 1.6; padding: 0 10px; }
            .orange-text { color: #fca311; font-weight: bold; }
            .buttons-container { display: flex; flex-direction: column; gap: 12px; margin-top: 30px; padding: 0 10px; }
            .btn { padding: 14px; border-radius: 25px; font-size: 16px; font-weight: bold; text-decoration: none; display: block; border: none; cursor: pointer; }
            .btn-green { background-color: #3b7a24; color: #ffffff; }
            .btn-gold { background-color: #5c4d11; color: #fca311; border: 1px solid #fca311; }
            .btn-whatsapp { background-color: #1b4d22; color: #8ee35d; border: 1px solid #3b7a24; }
        </style>
    </head>
    <body>
        <div class="header">
            <h2 style="color:#8ee35d; margin:0; font-size:18px;">حمرا إلكترونيكس للتيار العام</h2>
            <small style="color:#ffffff;">ANGELIS est. 1970 🇬🇷 فراطة الزيتون اليونانية إنجليس</small>
        </div>

        <div class="badge">🟢 موسم الزيتون بلّش... جاهزون لموسم الزيتون</div>

        <h3 style="color:#fca311; margin:0;">حمرا إلكترونيكس للتجارة العامة تعلن عن:</h3>
        <h1>وصول فراطة الزيتون الأصلية اليونانية الحديثة من <span class="highlight">إنجليس</span></h1>

        <p>الفراطة <span class="highlight">متعددة السرعات</span>، بتساعدك توفّر الجهد والوقت... وتخفّف العمال. وتعتبر من أحدث فراطات الزيتون المتوفرة بالبلاد؛ قوة جبارة، خفة استثنائية، وإنتاجية تصل لـ <span class="orange-text">250 كغ/ساعة</span> مع <span class="highlight">أضرار صفر</span> أثناء القطاف!</p>

        <div class="buttons-container">
            <button class="btn btn-green">◀ المعاينة</button>
            <button class="btn btn-gold">📥 سحب الفيديو</button>
            <button class="btn btn-whatsapp">💬 واتساب</button>
        </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

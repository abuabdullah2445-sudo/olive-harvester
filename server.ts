import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json());

// مسار البيانات للحوار المختصر الصحيح للشيخ أبو قاسم
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

// الواجهة التفاعلية الجذابة والصحيحة بالكامل
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>حمرا إلكترونيكس - فراطة الزيتون اليونانية</title>
        <style>
            :root {
                --bg-color: #0b0f19;
                --card-bg: #111827;
                --primary: #10b981;
                --primary-hover: #059669;
                --accent: #f59e0b;
                --text-main: #f9fafb;
                --text-muted: #9ca3af;
                --border: #1f2937;
            }
            body { 
                background-color: var(--bg-color); 
                color: var(--text-main); 
                font-family: 'Segoe UI', Roboto, sans-serif; 
                margin: 0; 
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 100vh;
            }
            .container { width: 100%; max-width: 480px; padding: 24px; box-sizing: border-box; }
            .navbar {
                background: linear-gradient(135deg, #064e3b 0%, #111827 100%);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                margin-bottom: 24px;
            }
            .logo-title { color: var(--primary); font-size: 22px; font-weight: 800; margin: 0; }
            .logo-sub { color: var(--text-main); font-size: 13px; display: block; margin-top: 4px; opacity: 0.9; }
            .badge-pulse {
                background: rgba(16, 185, 129, 0.1);
                color: var(--primary);
                border: 1px solid rgba(16, 185, 129, 0.2);
                padding: 8px 16px;
                border-radius: 9999px;
                font-size: 13px;
                font-weight: 600;
                display: inline-block;
                margin-bottom: 24px;
            }
            .announcement-title { color: var(--accent); font-size: 15px; font-weight: 700; margin-bottom: 8px; }
            .main-heading { font-size: 28px; font-weight: 900; line-height: 1.3; margin: 0 0 16px 0; }
            .main-heading span { color: var(--primary); }
            .description { color: var(--text-muted); font-size: 15px; line-height: 1.7; margin-bottom: 32px; text-align: justify; }
            .highlight-orange { color: var(--accent); font-weight: 700; }
            .btn-group { display: flex; flex-direction: column; gap: 14px; }
            .btn {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 16px;
                border-radius: 14px;
                font-size: 16px;
                font-weight: 700;
                border: none;
                cursor: pointer;
                width: 100%;
                box-sizing: border-box;
            }
            .btn-primary { background-color: var(--primary); color: #fff; }
            .btn-outline { background-color: transparent; color: var(--accent); border: 2px solid var(--accent); }
            .btn-whatsapp { background-color: #128c7e; color: #fff; }
            .interactive-panel {
                background-color: var(--card-bg);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 20px;
                margin-top: 24px;
                display: none;
                text-align: right;
            }
            .chat-msg { margin-bottom: 12px; font-size: 14px; line-height: 1.5; }
            .chat-msg strong { color: var(--primary); display: block; margin-bottom: 2px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="navbar">
                <div class="logo-title">حمرا إلكترونيكس</div>
                <span class="logo-sub">فراطة الزيتون اليونانية الأصلية الحديثة من إنجليس</span>
            </div>

            <div style="text-align: center;">
                <div class="badge-pulse">🟢 موسم الزيتون بلّش... جاهزون للموسم</div>
            </div>

            <div class="announcement-title">حمرا إلكترونيكس للتجارة العامة تعلن عن:</div>
            <h1 class="main-heading">وصول فراطة الزيتون اليونانية من <span>إنجليس</span></h1>

            <p class="description">
                الفراطة <span style="color: var(--primary);">متعددة السرعات</span>، بتساعدك توفّر الجهد والوقت... وتخفّف العمال. قوة جبارة، خفة استثنائية، وإنتاجية تصل لـ <span class="highlight-orange">250 كغ/ساعة</span> مع <span>أضرار صفر</span> أثناء القطاف!
            </p>

            <div class="btn-group">
                <button class="btn btn-primary" onclick="toggleDialogue()">◀ عرض حوار الشيخ أبو قاسم</button>
                <button class="btn btn-outline" onclick="triggerDownload()">📥 سحب فيديو المعاينة</button>
                <button class="btn btn-whatsapp" onclick="openContactModal()">💬 تواصل معنا عبر واتساب</button>
            </div>

            <div id="interactivePanel" class="interactive-panel">
                <div class="chat-msg">
                    <strong>المهندس:</strong> أهلاً بك يا شيخ أبو قاسم، تم تجهيز وتعديل برمجيات فراطة الزيتون اليونانية الجديدة بأعلى كفاءة لتسريع العمل وتوفير الطاقة.
                </div>
                <div class="chat-msg" style="margin-bottom: 0;">
                    <strong>الشيخ أبو قاسم:</strong> بارك الله فيكم يا بني، هذا ما كنا ننتظره لتسهيل موسم قطاف الزيتون وتخفيف الجهد الإجمالي للعمال إلكترونياً.
                </div>
            </div>
        </div>

        <script>
            function toggleDialogue() {
                var panel = document.getElementById("interactivePanel");
                panel.style.display = (panel.style.display === "block") ? "none" : "block";
            }
            function triggerDownload() {
                alert("📥 جاري تهيئة السيرفر لسحب مقطع فيديو المعاينة المخصص للفراطة اليونانية...");
            }
            function openContactModal() {
                var phone = prompt("الرجاء إدخال رقم هاتفك أو رقم الواتساب الخاص بك ليقوم مهندس حمرا إلكترونيكس بالتواصل معك فوراً:");
                if(phone) {
                    alert("✅ شكرًا لك! تم تسجيل رقمك: " + phone + " بنجاح.");
                }
            }
        </script>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json());

// مسار الحوار المختصر لـ الشيخ أبو قاسم ومواصفات فراطة الزيتون اليونانية لـ حمرا إلكترونيكس
app.get('/api/dialogue', (req, res) => {
  res.json({
    engineer: "أهلاً بك يا شيخ أبو قاسم، تم تجهيز وتعديل برمجيات فراطة الزيتون اليونانية الجديدة بأعلى كفاءة لتسريع العمل وتوفير الطاقة.",
    sheikh: "بارك الله فيكم يا بني، هذا ما كنا ننتظره لتسهيل موسم قطاف الزيتون وتخفيف الجهد الإجمالي للعمال إلكترونياً."
  });
});

// مسار فحص حالة خادم حمرا إلكترونيكس النظيف بعد تقليص الحجم
app.get('/status', (req, res) => {
  res.json({ status: "online", project: "Olive Harvester", version: "1.2.0_optimized" });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


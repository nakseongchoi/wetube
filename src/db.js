import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose 옛날 버전이라 위와 같은 조치 취해주는 거고 최신 버전은 안그럼
// mongoose 통해서 mongoDB 연결 됐는지 확인하는 코드

const db = mongoose.connection;

db.on("error", (err) => console.log("❌ DB 연결 실패:", err));
db.once("open", () => console.log("✅ DB 연결 성공!"));

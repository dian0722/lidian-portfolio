# 李典个人作品集网站

## 启动方式

```bash
cd lidian-portfolio
npm install
npm run dev
```

## 技术栈

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- lucide-react（图标）
- motion（动画）

## 项目结构

```
src/
├── components/
│   ├── Hero.tsx              # Hero 首屏（视频背景 + 个人信息）
│   ├── Navbar.tsx            # 导航栏（桌面 + 移动端汉堡菜单）
│   ├── HeroBadge.tsx         # Hero 区标签徽章
│   ├── BottomLeftCard.tsx    # Hero 区左下角数据卡片
│   ├── BottomRightCorner.tsx # Hero 区右下角简历下载入口
│   ├── Experience.tsx        # 工作经验（时间轴 + 展开卡片）
│   ├── Competition.tsx       # 竞赛经历
│   ├── Portfolio.tsx         # 作品集（卡片网格）
│   ├── About.tsx             # 关于我（教育 + 技能 + 证书）
│   ├── Contact.tsx           # 联系方式 + 简历下载
│   └── ScrollToTop.tsx       # 返回顶部按钮
├── App.tsx                   # 主应用
├── main.tsx                  # 入口
└── index.css                 # 全局样式
```
